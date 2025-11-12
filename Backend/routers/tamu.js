const express = require("express");  
const router = express.Router();
const { getAllTamu } = require("../controller/tamucontroller");

router.get("/tamu", getAllTamu);

module.exports = router;