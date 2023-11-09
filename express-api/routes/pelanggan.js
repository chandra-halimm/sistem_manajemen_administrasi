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

router.delete("/:pelangganID", (req, res) => {
  const { pelangganID } = req.params;

  try {
    db.query(
      `DELETE FROM pelanggan WHERE pelangganID = ${pelangganID}`,
      (err, result) => {
        if (err) {
          return res.status(400).json({
            message: "Error deleting data",
          });
        } else {
          return res.status(200).json({
            data: result,
            message: "Data deleted successfully",
          });
        }
      }
    );
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = router;
