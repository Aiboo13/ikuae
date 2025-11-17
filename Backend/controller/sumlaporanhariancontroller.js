const oracledb = require('oracledb');
const { getConnection } = require("../Db/db");

// ambil total pendapatan harian dari RESERVASI
async function getSumLaporanHarian(req, res) {
  let connection; 
  try {
    connection = await getConnection();
    const { tanggal } = req.params;

    // jika tidak ada tanggal, fallback ke hari ini
    if (!tanggal) {
      const result = await connection.execute(
        `SELECT NVL(SUM(r.TOTAL_HARGA), 0) AS TOTAL_PENDAPATAN_HARIAN
         FROM RESERVASI r
         WHERE TRUNC(r.TANGGAL_CHECKIN) = TRUNC(SYSDATE)
         AND r.STATUS_RESERVASI IN ('Dipesan', 'Checkin')`,
        {},
        { outFormat: oracledb.OUT_FORMAT_OBJECT }
      );
      return res.json(result.rows[0] || { TOTAL_PENDAPATAN_HARIAN: 0 });
    }

    // gunakan bind parameter untuk tanggal tertentu
    const result = await connection.execute(
      `SELECT NVL(SUM(r.TOTAL_HARGA), 0) AS TOTAL_PENDAPATAN_HARIAN
       FROM RESERVASI r
       WHERE TRUNC(r.TANGGAL_CHECKIN) = TRUNC(TO_DATE(:tanggal, 'YYYY-MM-DD'))
       AND r.STATUS_RESERVASI IN ('Dipesan', 'Checkin')`,
      [tanggal],
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );
    
    res.json(result.rows[0] || { TOTAL_PENDAPATAN_HARIAN: 0 });
  } catch (err) {
    console.error("getSumLaporanHarian:", err);
    res.status(500).json({ 
      error: "Error retrieving total pendapatan harian",
      message: err.message 
    });
  } finally {
    if (connection) {
      try { await connection.close(); } catch (e) { console.error(e); }
    }
  }
}

module.exports = { getSumLaporanHarian };