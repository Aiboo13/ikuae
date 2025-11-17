const oracledb = require('oracledb');
const { getConnection } = require("../Db/db");

// ambil laporan harian
async function getLaporanHarian(req, res) {
  let connection;
  try {
    connection = await getConnection();
    const { tanggal } = req.params; // ekspektasi: 'YYYY-MM-DD'

    // jika tidak ada tanggal, fallback ke hari ini
    if (!tanggal) {
      const result = await connection.execute(
        `SELECT ID_TAMU, ID_KAMAR, TANGGAL_CHECKIN, TOTAL_HARGA
         FROM LAPORAN_HARIAN
         WHERE TRUNC(TANGGAL_CHECKIN) = TRUNC(SYSDATE)`,
        {},
        { outFormat: oracledb.OUT_FORMAT_OBJECT }
      );
      return res.json(result.rows);
    }

    // gunakan bind agar query aman dan konsisten
    const result = await connection.execute(
      `SELECT ID_TAMU, ID_KAMAR, TANGGAL_CHECKIN, TOTAL_HARGA
       FROM LAPORAN_HARIAN
       WHERE TRUNC(TANGGAL_CHECKIN) = TRUNC(TO_DATE(:tanggal,'YYYY-MM-DD'))`,
      [tanggal],
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );

    res.json(result.rows);
  } catch (err) {
    console.error("getLaporanHarian:", err);
    res.status(500).send("Error retrieving laporan harian");
  } finally {
    if (connection) {
      try { await connection.close(); } catch (e) { console.error(e); }
    }
  }
}

module.exports = { getLaporanHarian };