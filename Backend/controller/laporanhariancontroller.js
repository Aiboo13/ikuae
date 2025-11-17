const oracledb = require('oracledb');
const { getConnection } = require("../Db/db");

// ambil laporan harian - ambil dari RESERVASI karena LAPORAN_HARIAN mungkin view atau tidak ada
async function getLaporanHarian(req, res) {
  let connection;
  try {
    connection = await getConnection();
    const { tanggal } = req.params; // ekspektasi: 'YYYY-MM-DD'

    // jika tidak ada tanggal, fallback ke hari ini
    if (!tanggal) {
      const result = await connection.execute(
        `SELECT r.ID_TAMU, r.ID_KAMAR, r.TANGGAL_CHECKIN, r.TOTAL_HARGA
         FROM RESERVASI r
         WHERE TRUNC(r.TANGGAL_CHECKIN) = TRUNC(SYSDATE)
         AND r.STATUS_RESERVASI IN ('Dipesan', 'Checkin')`,
        {},
        { outFormat: oracledb.OUT_FORMAT_OBJECT }
      );
      return res.json(result.rows);
    }

    // gunakan bind agar query aman dan konsisten
    const result = await connection.execute(
      `SELECT r.ID_TAMU, r.ID_KAMAR, r.TANGGAL_CHECKIN, r.TOTAL_HARGA
       FROM RESERVASI r
       WHERE TRUNC(r.TANGGAL_CHECKIN) = TRUNC(TO_DATE(:tanggal,'YYYY-MM-DD'))
       AND r.STATUS_RESERVASI IN ('Dipesan', 'Checkin')`,
      [tanggal],
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );

    res.json(result.rows);
  } catch (err) {
    console.error("getLaporanHarian:", err);
    res.status(500).json({ 
      error: "Error retrieving laporan harian",
      message: err.message 
    });
  } finally {
    if (connection) {
      try { await connection.close(); } catch (e) { console.error(e); }
    }
  }
}

module.exports = { getLaporanHarian };