const express = require("express");
const router = express.Router();
const {getPetugas} = require("../controller/petugascontroller");

router.get("/petugas", getPetugas);

module.exports = router;