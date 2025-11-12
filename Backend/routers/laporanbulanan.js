const express = require("express");
const router = express.Router();
const { getLaporanBulanan } = require("../controller/laporanbulanancontroller");

// panggil handler dengan signature (req, res)
router.get("/laporanbulanan", getLaporanBulanan);

module.exports = router;