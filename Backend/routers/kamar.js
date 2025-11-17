const express = require("express");
const router = express.Router();
const {getAllKamar} = require("../controller/kamarcontroller");

router.get("/kamar", (req, res) => {
  getAllKamar(res);
});

module.exports = router;