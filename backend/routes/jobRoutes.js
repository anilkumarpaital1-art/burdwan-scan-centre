const express = require("express");
const router = express.Router();

const Job = require("../models/Job");
const authMiddleware = require("../middleware/authMiddleware");

/* =========================
   GET ALL JOBS
========================= */
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().sort({
      createdAt: -1,
    });

    res.json(jobs);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/* =========================
   GET SINGLE JOB
========================= */
router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(
      req.params.id
    );

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    res.json(job);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/* =========================
   CREATE JOB
========================= */
router.post("/", authMiddleware, async (req, res) => {
  try {
    const job = new Job(req.body);

    const savedJob =
      await job.save();

    res.status(201).json(savedJob);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

/* =========================
   UPDATE JOB
========================= */
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const updatedJob =
      await Job.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!updatedJob) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    res.json(updatedJob);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

/* =========================
   DELETE JOB
========================= */
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const deletedJob =
      await Job.findByIdAndDelete(
        req.params.id
      );

    if (!deletedJob) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    res.json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/* =========================
   TOGGLE STATUS
========================= */
router.patch("/:id/status", authMiddleware, async (req, res) => {
  try {
    const job =
      await Job.findById(
        req.params.id
      );

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    job.status =
      job.status === "active"
        ? "inactive"
        : "active";

    await job.save();

    res.json(job);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;