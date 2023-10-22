const express = require("express");
const router = express.Router();
const db = require("../config/database");

router.get("/", (req, res) => {
  const sqlQuery = "SELECT * FROM pelanggan";

  db.query(sqlQuery, (err, result) => {
    if (err) {
      throw err;
    }
    return res.status(200).json({
      data: result,
      message: "success get all data",
    });
  });
});

module.exports = router;

router.post("/", (req, res) => {
  const { namapelanggan, alamat, nomortelepon, email } = req.body;
  const values = [namapelanggan, alamat, nomortelepon, email];
  const sqlQuery =
    "INSERT INTO pelanggan (namapelanggan, alamat, nomortelepon, email) VALUES (?,?,?,?)";

  db.query(sqlQuery, values, (err, result) => {
    if (err) {
      return res.status(400).json({
        message: "Error inserting data",
        error: err,
      });
    } else {
      return res.status(201).json({
        data: result,
        message: "Data inserted successfully",
      });
    }
  });
});
