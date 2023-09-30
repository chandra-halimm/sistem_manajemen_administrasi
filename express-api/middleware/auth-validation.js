const { check } = require("express-validator");

exports.registerValidation = [
  check("nip", "nip harus diisi.").not().isEmpty(),
  check("nama", "Nama harus diisi.").not().isEmpty(),
  check("email", "Isi dengan email yang valid.")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  check("password", "Password harus diisi minimal 6 kata").isLength({ min: 6 }),
];

exports.loginValidation = [
  check("email", "Isi dengan email yang valid")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true }),
  check("Password harus diisi minimal 6 kata").isLength({ min: 6 }),
];
