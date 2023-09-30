const express = require("express");
const cors = require("cors");
const port = 3300;
const app = express();

app.use(cors());
app.use(express.json());

const loginEndpoint = require("./routes/login");

app.use("/", loginEndpoint);

app.listen(port, () => console.log(`running server on port : ${port}`));
