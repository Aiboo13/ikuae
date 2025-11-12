// index.js
const express = require("express");
const app = express();
const port = 3000;

// jalankan seeder Oracle
// require("./Db/seed");

app.get("/", (req, res) => {
  res.send("Server hotel aktif dan database sudah di-seed.");
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
