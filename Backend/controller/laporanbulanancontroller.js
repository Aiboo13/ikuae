const {getConnection} = require("../Db/db");
async function getLaporanBulanan(req, res) {
  let connection;
  try {
    connection = await getConnection();
    const result = await connection.execute(`SELECT * FROM LAPORANBULANAN`);
    const cols = result.metaData.map(c => c.name);
    const rows = result.rows.map(r => {
      const obj = {};
      cols.forEach((c, i) => (obj[c] = r[i]));
      return obj;
    }
    );
    res.json(rows);
  } catch (err) {
    console.error("getLaporanBulanan:", err);
    res.status(500).send("Error retrieving laporan bulanan data");
  } finally {
    if (connection) {
      try { await connection.close(); } catch (e) { console.error(e); }
    }
  }
}

module.exports = { getLaporanBulanan };