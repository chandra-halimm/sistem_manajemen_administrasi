const express = require("express");
const router = express.Router();
const db = require("../config/database");

router.get("/", async (req, res) => {
  try {
    const SqlQuery = "SELECT * FROM supplier";
    const data = await new Promise((resolve, reject) => {
      db.query(SqlQuery, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    return res.status(200).json({
      data: data,
      message: "success get all data",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "internal server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { namasupplier, alamat, email, nohp } = req.body;

    const SqlQuery =
      "INSERT INTO supplier (namasupplier, alamat, email, nohp) VALUE (?,?,?,?)";
    const values = [namasupplier, alamat, email, nohp];
    const data = await new Promise((resolve, reject) => {
      db.query(SqlQuery, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    return res.status(201).json({
      data: data,
      message: "success get all data",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "internal server error",
    });
  }
});

module.exports = router;
