const express = require("express");
const router = express.Router();
const {getReservasi} = require("../controller/reservasicontroller");

router.get("/reservasi", getReservasi);
module.exports = router;