const express = require("express");
const router = express.Router();
const {getSumLaporanHarian} = require("../controller/sumlaporanhariancontroller");

// panggil handler dengan signature (req, res)
router.get("/sumlaporanharian", getSumLaporanHarian);
router.get("/sumlaporanharian/:tanggal", getSumLaporanHarian);
module.exports = router;