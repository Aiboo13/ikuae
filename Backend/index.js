// index.js
const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const cors = require("cors");

app.use(cors()); // harus sebelum routes
app.use(express.json());
const tamuRouter = require("./routers/tamu");
const tamuApiRouter = require("./api/tamuapi");
const reservasiApiRouter = require("./api/reservasiapi");
const fasilitasRouter =  require ("./routers/fasilitas");
const kamarRouter = require("./routers/kamar");
const laporanbulananRouter = require("./routers/laporanbulanan");
const pembayaranRouter = require("./routers/pembayaran");
const petugasRouter = require("./routers/petugas");
const reservasiRouter = require("./routers/reservasi");
const laporanharianRouter = require("./routers/laporanharian");
const sumlaporanharianRouter = require("./routers/sumlaporanharian");



app.use("/api", reservasiRouter);
app.use("/api", reservasiApiRouter);
app.use("/api", petugasRouter);
app.use("/api", pembayaranRouter);
app.use("/api", laporanbulananRouter);
app.use("/api", kamarRouter);
app.use("/api", fasilitasRouter);
app.use("/api", tamuRouter);
app.use("/api", tamuApiRouter);
app.use("/api", laporanharianRouter);
app.use("/api", sumlaporanharianRouter);

// endpoint root

// jalankan seeder Oracle
// require("./Db/seed");

app.get("/", (req, res) => {
  res.send("Server hotel aktif dan database sudah di-seed.");
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
