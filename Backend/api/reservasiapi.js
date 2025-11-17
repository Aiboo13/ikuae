const express = require('express');
const router = express.Router();
const oracledb = require('oracledb');
const {getConnection} = require('../Db/db');

// POST endpoint untuk membuat reservasi lengkap (reservasi + pembayaran)
router.post('/reservasi', async (req, res) => {
  let connection;
  try {
    connection = await getConnection();
    
    const { 
      id_kamar, 
      id_tamu, 
      tanggal_checkin, 
      tanggal_checkout, 
      total_harga, 
      metode_pembayaran 
    } = req.body;

    // Validasi input
    if (!id_kamar || !id_tamu || !tanggal_checkin || !tanggal_checkout || !total_harga || !metode_pembayaran) {
      return res.status(400).json({ 
        success: false, 
        message: 'Semua field wajib diisi' 
      });
    }

    // 1. Buat pembayaran terlebih dahulu
    const pembayaranResult = await connection.execute(
      `INSERT INTO PEMBAYARAN (ID_PEMBAYARAN, ID_RESERVASI, METODE_PEMBAYARAN, JUMLAH_BAYAR, TANGGAL_PEMBAYARAN, STATUS_PEMBAYARAN)
       VALUES (
         NVL((SELECT MAX(ID_PEMBAYARAN) FROM PEMBAYARAN), 0) + 1,
         NULL,
         :metode,
         :jumlah,
         SYSTIMESTAMP,
         'Lunas'
       )
       RETURNING ID_PEMBAYARAN INTO :id_pembayaran`,
      {
        metode: metode_pembayaran,
        jumlah: total_harga,
        id_pembayaran: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER }
      }
    );

    const idPembayaran = pembayaranResult.outBinds.id_pembayaran[0];

    // 2. Buat reservasi dengan id_pembayaran yang sudah dibuat
    const reservasiResult = await connection.execute(
      `INSERT INTO RESERVASI (ID_RESERVASI, ID_PEMBAYARAN, ID_KAMAR, ID_PETUGAS, ID_TAMU, TANGGAL_PESAN, TANGGAL_CHECKIN, TANGGAL_CHECKOUT, TOTAL_HARGA, STATUS_RESERVASI)
       VALUES (
         NVL((SELECT MAX(ID_RESERVASI) FROM RESERVASI), 0) + 1,
         :id_pembayaran,
         :id_kamar,
         NULL,
         :id_tamu,
         SYSTIMESTAMP,
         TO_TIMESTAMP(:checkin, 'YYYY-MM-DD"T"HH24:MI:SS.FF3"Z"'),
         TO_TIMESTAMP(:checkout, 'YYYY-MM-DD"T"HH24:MI:SS.FF3"Z"'),
         :total,
         'Dipesan'
       )
       RETURNING ID_RESERVASI INTO :id_reservasi`,
      {
        id_pembayaran: idPembayaran,
        id_kamar: id_kamar,
        id_tamu: id_tamu,
        checkin: tanggal_checkin,
        checkout: tanggal_checkout,
        total: total_harga,
        id_reservasi: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER }
      }
    );

    const idReservasi = reservasiResult.outBinds.id_reservasi[0];

    // 3. Update ID_RESERVASI di tabel PEMBAYARAN
    await connection.execute(
      `UPDATE PEMBAYARAN SET ID_RESERVASI = :id_reservasi WHERE ID_PEMBAYARAN = :id_pembayaran`,
      {
        id_reservasi: idReservasi,
        id_pembayaran: idPembayaran
      }
    );

    // 4. Update status kamar menjadi 'Terisi'
    await connection.execute(
      `UPDATE KAMAR SET STATUS = 'Terisi' WHERE ID_KAMAR = :id_kamar`,
      { id_kamar: id_kamar }
    );

    // Commit semua transaksi
    await connection.commit();

    res.status(201).json({ 
      success: true,
      message: 'Reservasi berhasil dibuat',
      data: {
        id_reservasi: idReservasi,
        id_pembayaran: idPembayaran
      }
    });

  } catch (err) {
    console.error("Error creating reservasi:", err);
    if (connection) {
      try {
        await connection.rollback();
      } catch (rollbackErr) {
        console.error("Rollback error:", rollbackErr);
      }
    }
    res.status(500).json({ 
      success: false,
      message: 'Gagal membuat reservasi',
      error: err.message 
    });
  } finally {
    if (connection) {
      try { 
        await connection.close(); 
      } catch (e) { 
        console.error("Error closing connection:", e); 
      }
    }
  }
});

module.exports = router;