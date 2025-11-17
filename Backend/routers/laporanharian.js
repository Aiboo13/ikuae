const express = require("express");
const router = express.Router();
const { getLaporanHarian } = require("../controller/laporanhariancontroller");

// Route untuk laporan hari ini (tanpa parameter)
router.get("/laporanharian", getLaporanHarian);

// Route untuk laporan tanggal tertentu (dengan parameter)
router.get("/laporanharian/:tanggal", getLaporanHarian);

module.exports = router;