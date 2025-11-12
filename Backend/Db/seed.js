const fs = require("fs");
const path = require("path");
const oracledb = require("oracledb");

async function seedFromSqlFile() {
    let connection;
    try {
        // Inisialisasi Oracle Client (sesuaikan libDir jika perlu)
        try {
            oracledb.initOracleClient({
                libDir: "C:\\oracle\\instantclient_21_13\\instantclient_23_9",
            });
        } catch (e) {
            // jika sudah di-initialize, abaikan
            if (!/already been initialized|DPI-1047|DPI-1077/i.test(e.message)) {
                console.error("Init Oracle Client error:", e.message);
            }
        }

        connection = await oracledb.getConnection({
            user: "hotel",
            password: "hotel",
            connectString: "localhost:1521/orcl",
        });

        console.log("Terhubung ke database Oracle.");

        // Baca file SQL
        const sqlPath = path.join(__dirname, "hotel.sql");
        const sqlRaw = fs.readFileSync(sqlPath, "utf8");

        // Hapus baris komentar (-- ...), REM, SET DEFINE
        const cleaned = sqlRaw
            .replace(/\r\n/g, "\n")
            .split("\n")
            .filter(
                (line) =>
                    !line.trim().startsWith("--") &&
                    !/^REM\b/i.test(line.trim()) &&
                    !/^SET\s+DEFINE\b/i.test(line.trim())
            )
            .join("\n");

        // Normalisasi literal to_timestamp yang format waktunya menggunakan titik/comma (contoh masalah)
        const normalizedSql = cleaned.replace(/to_timestamp\(\s*'([^']+)'\s*,\s*'([^']+)'\s*\)/gi, (match, dateStr) => {
            // ubah "DD-MM-YYYY HH.MM.SS,ffffff..." -> "DD-MM-YYYY HH:MM:SS.ffffff..."
            const converted = dateStr.replace(/^(\d{2}-\d{2}-\d{4})\s+(\d{2})\.(\d{2})\.(\d{2}),(\d+)$/, (_, d, hh, mi, ss, frac) => {
                return `${d} ${hh}:${mi}:${ss}.${frac}`;
            });
            const finalDate = converted === dateStr ? dateStr : converted;
            // gunakan format model yang konsisten (FF9 untuk sampai 9 digit fractional)
            const finalFmt = "DD-MM-RRRR HH24:MI:SS.FF9";
            return `to_timestamp('${finalDate}','${finalFmt}')`;
        });

        // Parse statements: dukung juga "/" sebagai terminator PL/SQL
        const statements = [];
        let buffer = "";
        for (const rawLine of normalizedSql.split("\n")) {
            const line = rawLine;
            if (line.trim() === "/") {
                if (buffer.trim()) {
                    statements.push(buffer.trim());
                    buffer = "";
                }
            } else {
                buffer += line + "\n";
            }
        }
        if (buffer.trim()) statements.push(buffer.trim());

        // Jika ada beberapa statement dipisah ';' pada satu block, split lagi
        const flatStatements = [];
        for (const s of statements) {
            const parts = s.split(";").map(p => p.trim()).filter(p => p.length > 0);
            for (const p of parts) flatStatements.push(p);
        }

        // Eksekusi setiap statement secara berurutan
        for (const stmt of flatStatements) {
            try {
                // Jika ini statement ADD PRIMARY KEY, cek dulu apakah table sudah punya PK -> skip jika ada
                const addPkMatch = stmt.match(/ALTER\s+TABLE\s+([^\s]+)\s+ADD\s+PRIMARY\s+KEY/i);
                if (addPkMatch) {
                    // ambil nama tabel (handle schema."TABLE" atau "SCHEMA"."TABLE")
                    const tablePart = addPkMatch[1].trim();
                    const parts = tablePart.split('.');
                    const rawTableName = parts[parts.length - 1].replace(/["']/g, '').toUpperCase();
                    const chk = await connection.execute(
                        `SELECT COUNT(*) AS CNT FROM USER_CONSTRAINTS WHERE TABLE_NAME = :t AND CONSTRAINT_TYPE = 'P'`,
                        [rawTableName],
                        { outFormat: oracledb.OUT_FORMAT_OBJECT }
                    );
                    const existingPk = (chk.rows && chk.rows[0] && (chk.rows[0].CNT || chk.rows[0].CNT === 0)) ? chk.rows[0].CNT : (chk.rows && chk.rows[0] && chk.rows[0][0]) || 0;
                    if (existingPk > 0) {
                        console.log(`Skip ADD PRIMARY KEY on ${rawTableName} — primary key already exists.`);
                        continue;
                    }
                }

                await connection.execute(stmt);
            } catch (e) {
                // Abaikan error yang aman untuk di-seed ulang:
                // ORA-00955 = object already exists, ORA-00001 = unique constraint violated,
                // ORA-02260 = table can have only one primary key, ORA-02437 = cannot validate - primary key violated
                const errNum = e && e.errorNum ? e.errorNum : null;
                const ignorable = [955, 1, 2260, 2437];
                if (ignorable.includes(errNum)) {
                    console.log(`Diabaikan (sudah ada / duplikat / PK exists / PK validate failed): ${errNum} - ${e.message.split("\n")[0]}`);
                    continue;
                }
                console.error("Gagal eksekusi statement:", e.message);
                console.error("Statement bermasalah:", stmt.slice(0, 300));
                throw e;
            }
        }

        await connection.commit();
        console.log("File SQL berhasil dieksekusi dan data di-commit.");
    } catch (err) {
        console.error("Gagal seed dari file SQL:", err.message || err);
    } finally {
        if (connection) {
            try {
                await connection.close();
                console.log("Koneksi ditutup.");
            } catch (err) {
                console.error("Gagal menutup koneksi:", err.message || err);
            }
        }
    }
}

seedFromSqlFile();
