const express = require("express");
const router = express.Router();

const Notice = require("../models/Notice");
const authMiddleware = require("../middleware/authMiddleware");

/* =========================
   GET ALL NOTICES
========================= */
router.get("/", async (req, res) => {
  try {
    const notices = await Notice.find().sort({
      date: -1,
    });

    res.json(notices);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/* =========================
   GET SINGLE NOTICE
========================= */
router.get("/:id", async (req, res) => {
  try {
    const notice = await Notice.findById(
      req.params.id
    );

    if (!notice) {
      return res.status(404).json({
        message: "Notice not found",
      });
    }

    res.json(notice);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/* =========================
   CREATE NOTICE
========================= */
router.post("/", authMiddleware, async (req, res) => {
  try {
    const notice = new Notice(
      req.body
    );

    const savedNotice =
      await notice.save();

    res.status(201).json(
      savedNotice
    );
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

/* =========================
   UPDATE NOTICE
========================= */
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const updatedNotice =
      await Notice.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!updatedNotice) {
      return res.status(404).json({
        message: "Notice not found",
      });
    }

    res.json(updatedNotice);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

/* =========================
   DELETE NOTICE
========================= */
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const deletedNotice =
      await Notice.findByIdAndDelete(
        req.params.id
      );

    if (!deletedNotice) {
      return res.status(404).json({
        message: "Notice not found",
      });
    }

    res.json({
      success: true,
      message:
        "Notice deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;