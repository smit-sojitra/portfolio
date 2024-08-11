const express = require("express");
const { submitForm } = require("../controllers/contactController");
const router = express.Router();

router.post('/send',submitForm);

module.exports = router