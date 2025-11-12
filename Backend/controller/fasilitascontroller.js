const { getConnection } = require("../Db/db");

// Ambil semua tamu
async function getAllfasilitas(req, res) {
  let connection;
  try {
    connection = await getConnection();
    const result = await connection.execute(`SELECT * FROM FASILITAS`);
    const cols = result.metaData.map(c => c.name);
    const rows = result.rows.map(r => {
      const obj = {};
      cols.forEach((c, i) => (obj[c] = r[i]));
      return obj;
    });
    res.json(rows);
  } catch (err) {
    console.error("getAllfasilitas:", err);
    res.status(500).send("Error retrieving fasilitas");
  } finally {
    if (connection) {
      try { await connection.close(); } catch (e) { console.error(e); }
    }
  }
}

module.exports = { getAllfasilitas };