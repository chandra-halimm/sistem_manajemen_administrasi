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
  const { namabarang, jumlah, harga } = req.body;

  try {
    const sqlQuery =
      "INSERT INTO beli (namabarang, jumlah, harga) VALUES (?,?,?)";
    const values = [namabarang, jumlah, harga];

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

// penjualan

router.get("/penjualan", async (req, res) => {
  try {
    const sqlQuery =
      "SELECT penjualan.penjualanID, penjualan.namapelanggan, penjualan.namabarang, penjualan.jumlah, penjualan.harga, barang.namabarang AS namabarang, pelanggan.namapelanggan AS namapelanggan FROM penjualan INNER JOIN barang ON penjualan.barangID = barang.barangID INNER JOIN pelanggan ON penjualan.pelangganID = pelanggan.pelangganID";

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
  const { namabarang, jumlah, harga } = req.body;

  try {
    const sqlQuery =
      "INSERT INTO beli (namabarang, jumlah, harga) VALUES (?,?,?)";
    const values = [namabarang, jumlah, harga];

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

module.exports = router;
