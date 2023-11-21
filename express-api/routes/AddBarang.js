const express = require("express");
const router = express.Router();
const db = require("../config/database");

router.get("/", async (req, res) => {
  try {
    const data = await new Promise((resolve, reject) => {
      db.query("SELECT * FROM barang", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    res.status(200).json({
      data: data,
      message: "success get all data",
    });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

router.post("/", async (req, res) => {
  try {
    const { kodebarang, namabarang } = req.body;

    if (namabarang == null || kodebarang == null) {
      return res.status(400).json({
        message: "namabarang cannot be null or undefined",
      });
    }

    const data = await new Promise((resolve, reject) => {
      const sqlQuery =
        "INSERT INTO barang (kodebarang, namabarang) VALUES (?, ?)";
      const values = [kodebarang, namabarang];

      db.query(sqlQuery, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    res.status(201).json({
      data: data,
      message: "success post data",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "internal server error",
    });
  }
});

router.delete("/:barangid", async (req, res) => {
  const { barangid } = req.params;

  try {
    const data = await new Promise((resolve, reject) => {
      const sqlQuery = "DELETE FROM barang WHERE barangID = ? ";
      const values = [barangid];

      db.query(sqlQuery, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    if (data.affectedRows === 0) {
      return res.sendStatus(400);
    }

    return res.status(200).json({
      data: data,
      message: "success delete data",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
    });
  }
});

module.exports = router;
