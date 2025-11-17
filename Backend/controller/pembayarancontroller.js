  const { getConnection } = require("../Db/db");

async function getPembayaran(req, res) {
  let connection;
  try {
    connection = await getConnection();
    const result = await connection.execute(`SELECT * FROM PEMBAYARAN`);
    const cols = (result.metaData || []).map(c => c.name);
    const rows = (result.rows || []).map(r => {
      const obj = {};
      cols.forEach((c, i) => (obj[c] = r[i]));
      return obj;
    });
    res.json(rows);
  } catch (err) {
    console.error("getPembayaran:", err);
    res.status(500).send("Error retrieving pembayaran data");
  } finally {
    if (connection) {
      try { await connection.close(); } catch (e) { console.error(e); }
    }
  }
}

// Placeholder implementasi POST — ganti sesuai skema tabel/requirement
async function prosesPembayaran(req, res) {
  // contoh: terima body, validasi, insert ke tabel PEMBAYARAN
  // untuk sementara kembalikan 501 agar server tidak crash
  res.status(501).send("prosesPembayaran belum diimplementasikan");
}

module.exports = { getPembayaran, prosesPembayaran };