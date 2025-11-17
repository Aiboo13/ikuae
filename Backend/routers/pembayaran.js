const express = require("express");
const router = express.Router();
const {getPembayaran} = require("../controller/pembayarancontroller");
// router.post("/pembayaran", pembayaranController.prosesPembayaran);
router.get("/pembayaran", getPembayaran);

module.exports = router;