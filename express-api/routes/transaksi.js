const express = require("express");
const router = express.Router();
const db = require("../config/database");

router.get("/pembelian", async (req, res) => {
  try {
    const sqlQuery = "SELECT * FROM beli";

    const result = await new Promise((resolve, reject) => {
      db.query(sqlQuery, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });

    return res.status(200).json({
      message: "success get all data",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "internal server error",
    });
  }
});

router.post("/pembelian", async (req, res) => {
  const { namabarang, supplier, jumlah, harga } = req.body;

  try {
    const sqlQuery =
      "INSERT INTO beli (namabarang, jumlah, harga) VALUES (?,?,?,)";
    const values = [namabarang, supplier, jumlah, harga];

    const result = await new Promise((resolve, reject) => {
      db.query(sqlQuery, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    if (namabarang == null) {
      return res.status(400).json({
        message: "namabarang cannot be null or undefined",
      });
    }

    return res.status(200).json({
      data: result,
      message: "success insert data",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "internal server error",
    });
  }
});

router.get("/penjualan", async (req, res) => {
  try {
    const sqlQuery = "SELECT * FROM penjualan";
    const result = await new Promise((resolve, reject) => {
      db.query(sqlQuery, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });

    return res.status(200).json({
      message: "success get all data",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "internal server error",
    });
  }
});

router.post("/penjualan", async (req, res) => {
  const { namapelanggan, eksemplar, harga } = req.body;

  try {
    // Input validation
    if (!namapelanggan || eksemplar == null || harga == null) {
      return res.status(400).json({
        message: "Please provide all required fields",
      });
    }

    const sqlQuery =
      "INSERT INTO penjualan (namapelanggan, eksemplar, harga) VALUES (?,?,?)";
    const values = [namapelanggan, eksemplar, harga];

    const result = await new Promise((resolve, reject) => {
      db.query(sqlQuery, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    return res.status(200).json({
      data: result,
      message: "Success: Data inserted",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = router;
