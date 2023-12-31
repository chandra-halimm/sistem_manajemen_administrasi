const express = require("express");
const cors = require("cors");
const port = 3300;
const app = express();

app.use(cors());
app.use(express.json());

const loginEndpoint = require("./routes/login");
const pegawaiEndpoint = require("./routes/pegawai");
const pelangganEndpoint = require("./routes/pelanggan");
const transaksi = require("./routes/transaksi");
const addBarangg = require("./routes/AddBarang");
const supplier = require("./routes/supplier");

app.use("/", loginEndpoint);
app.use("/pegawai", pegawaiEndpoint);
app.use("/pelanggan", pelangganEndpoint);
app.use("/transaksi", transaksi);
app.use("/barang", addBarangg);
app.use("/supplier", supplier);

app.listen(port, () => console.log(`running server on port : ${port}`));
