const express = require("express");
const cors = require("cors");
const port = 3300;
const app = express();

app.use(cors());
app.use(express.json());

const loginEndpoint = require("./routes/login");
const pegawaiEndpoint = require("./routes/pegawai");
const pelangganEndpoint = require("./routes/pelanggan");

app.use("/", loginEndpoint);
app.use("/pegawai", pegawaiEndpoint);
app.use("/pelanggan", pelangganEndpoint);

app.listen(port, () => console.log(`running server on port : ${port}`));
