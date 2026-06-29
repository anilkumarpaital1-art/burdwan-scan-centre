const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const mongoConnected =
      mongoose.connection.readyState === 1;

    res.json({
      success: true,

      database: mongoConnected,

      backend: true,

      timestamp: Date.now(),
    });
  } catch (err) {
    res.status(500).json({
      success: false,
    });
  }
});

module.exports = router;