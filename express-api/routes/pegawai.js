const express = require("express");
const router = express.Router();
const db = require("../config/database");

router.get("/", (req, res) => {
  db.query("SELECT * FROM pegawai", (err, result) => {
    if (err) {
      res.status(500).json({
        message: "internal server error",
      });
    } else {
      res.status(200).json({
        data: result,
        message: "success get all data",
      });
    }
  });
});

router.post("/", (req, res) => {
  const {
    namaLengkap,
    email,
    tanggalLahir,
    nomorTelpon,
    gaji,
    tanggalMasuk,
    jabatan,
  } = req.body;

  try {
    db.query(
      "INSERT INTO pegawai (namalengkap, email, tanggallahir, nomortelpon, gaji, tanggalmasuk, jabatan) VALUES (?,?,?,?,?,?,?)",
      [
        namaLengkap,
        email,
        tanggalLahir,
        nomorTelpon,
        gaji,
        tanggalMasuk,
        jabatan,
      ],
      (err, result) => {
        if (err) {
          return res.status(400).json({
            message: "error input data",
            error: err.message,
          });
        } else {
          return res.status(201).json({
            data: result,
            message: "success add data",
          });
        }
      }
    );
  } catch (err) {
    return res.status(500).json({
      message: "internal server error",
      error: err.message,
    });
  }
});

router.delete("/:pegawaiID", (req, res) => {
  const { pegawaiID } = req.params;

  try {
    db.query(
      `DELETE FROM pegawai WHERE pegawaiID = ${pegawaiID}`,
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

router.put("/", (req, res) => {
  const { pegawaiID } = req.params;
  const {
    namaLengkap,
    email,
    tanggalLahir,
    nomorTelpon,
    gaji,
    tanggalMasuk,
    jabatan,
  } = req.body;

  db.query(
    `UPDATE pegawai SET namalengkap = ${namaLengkap}, email = ${email}, tanggallahir = ${tanggalLahir}, nomortelpon = ${nomorTelpon}, gaji = ${gaji}, tanggalmasuk = ${tanggalMasuk}, jabatan = ${jabatan} `,
    (err, result) => {
      if (err) {
        throw err;
      }
      return res.status(201).json({
        data: result,
        message: "data berhasil diubah",
      });
    }
  );
});

module.exports = router;
