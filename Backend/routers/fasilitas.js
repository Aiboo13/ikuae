const express = require("express");
const router = express.Router();
const {getAllfasilitas} = require("../controller/fasilitascontroller");

router.get("/fasilitas", getAllfasilitas);

module.exports = router;