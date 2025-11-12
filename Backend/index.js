// index.js
const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const cors = require("cors");

app.use(cors());
app.use(express.json());
const tamuRouter = require("./routers/tamu");
const fasilitasRouter =  require ("./routers/fasilitas");
const kamarRouter = require("./routers/kamar");
const laporanbulananRouter = require("./routers/laporanbulanan");
const pembayaranRouter = require("./routers/pembayaran");
const petugasRouter = require("./routers/petugas");
const reservasiRouter = require("./routers/reservasi");

app.use("/api", reservasiRouter);
app.use("/api", petugasRouter);
app.use("/api", pembayaranRouter);
app.use("/api", laporanbulananRouter);
app.use("/api", kamarRouter);
app.use("/api", fasilitasRouter);
app.use("/api", tamuRouter);

// jalankan seeder Oracle
// require("./Db/seed");

app.get("/", (req, res) => {
  res.send("Server hotel aktif dan database sudah di-seed.");
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
