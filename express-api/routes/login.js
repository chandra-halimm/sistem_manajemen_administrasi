const express = require("express");
const router = express.Router();
const db = require("../config/database");
const bcrypt = require("bcrypt");
const {
  registerValidation,
  loginValidation,
} = require("../middleware/auth-validation");
const e = require("express");

router.get("/login", (req, res) => {
  db.query("SELECT * FROM login ", (err, result) => {
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

router.post("/login", loginValidation, (req, res) => {
  const { email } = req.body;
  db.query(
    `SELECT * FROM login WHERE email =  ${db.escape(email)}`,
    (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({
          message: "internal server error",
        });
      }
      if (result.length) {
        return res.statu(400).json({
          message: "user not found",
        });
      }
    }
  );
});

router.post("/regitser", registerValidation, async (req, res) => {
  const { nip, nama, email, password } = req.body;

  try {
    db.query(
      `SELECT * FROM login WHERE LOWER(email) = LOWER(${db.escape(email)})`,
      async (err, result) => {
        if (err) {
          return res.status(500).json({
            message: "Internal server error",
          });
        }

        if (result.length) {
          return res.status(409).json({
            message: "Akun ini sudah ada",
          });
        } else {
          try {
            const hashedPassword = await bcrypt.hash(password, 10);

            db.query(
              "INSERT INTO login (nip, nama, email, password) VALUES (?, ?, ?, ?)",
              [nip, nama, email, hashedPassword],
              (err, result) => {
                if (err) {
                  return res.status(500).json({
                    message: "Internal server error",
                  });
                } else {
                  return res.status(200).json({
                    data: result,
                    message: "Adding data success",
                  });
                }
              }
            );
          } catch (hashError) {
            return res.status(500).json({
              message: "Internal server error",
            });
          }
        }
      }
    );
  } catch (err) {
    throw err;
  }
});

router.put("/login/:id", (req, res) => {
  const { nip, nama, email, password } = req.body;
  const { id } = req.params;
  const sqlQuery = `UPDATE login SET nip = ?, nama = ?, email = ?, password = ? WHERE id = ?`;

  db.query(sqlQuery, [nip, nama, email, password, id], (err, result) => {
    if (err) {
      console.error("Error updating data:", err);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
    return res.status(200).json({
      data: result,
      message: "Updating data success",
    });
  });
});

router.delete("/login/:id", (req, res) => {
  const { id } = req.params;
  const sqlQuery = "DELETE FROM login WHERE id = ?";

  db.query(sqlQuery, [id], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "internal server error",
      });
    }
    if (result.affectedRows === 0) {
      return res.status(400).json({
        message: "data not found",
      });
    }

    return res.status(200).json({
      message: "data deleted success",
    });
  });
});

module.exports = router;
