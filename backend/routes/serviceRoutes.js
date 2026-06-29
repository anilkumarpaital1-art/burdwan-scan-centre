const express = require("express");
const router = express.Router();

const Service = require("../models/Service");
const upload = require("../middleware/upload");
const slugify = require("slugify");

const {
  generateServiceContent,
} = require("../services/geminiService");

const authMiddleware = require("../middleware/authMiddleware");

/* =========================
   GET ALL SERVICES
========================= */
router.get("/", async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: services.length,
      data: services,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
});

/* =========================
   GET SINGLE SERVICE
========================= */
router.get("/:id", async (req, res) => {
  try {

    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service Not Found",
      });
    }

    res.status(200).json({
      success: true,
      data: service,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
});

/* =========================
   ADD SERVICE
========================= */
router.post(
  "/", authMiddleware, 
  upload.single("image"),
  async (req, res) => {
    try {

     let aiData = {
  benefits: [
    "Professional Service",
    "Accurate Results",
    "Expert Team",
    "Reliable Reports",
  ],
  uses: [
    "Health Assessment",
    "Medical Evaluation",
    "Diagnostic Support",
  ],
};

try {
  aiData = await generateServiceContent(
    req.body.title,
    req.body.category,
    req.body.fullDescription
  );
} catch (error) {
  console.log("Gemini unavailable");
}

const slug = slugify(
  req.body.title,
  {
    lower: true,
    strict: true,
  }
);

const service = await Service.create({
  title: req.body.title,

  slug,

  shortTitle:
    aiData.shortTitle || "",

  department: req.body.department,
  category: req.body.category,
  shortDescription: req.body.shortDescription,
  fullDescription: req.body.fullDescription,

  status: req.body.status || "active",

  image: req.file
    ? req.file.path
    : "",

  benefits: aiData.benefits || [],

  uses: aiData.uses || [],
});

      res.status(201).json({
        success: true,
        message: "Service Added Successfully",
        data: service,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });

    }
  }
);

/* =========================
   UPDATE SERVICE
========================= */
router.put(
  "/:id", authMiddleware, 
  upload.single("image"),
  async (req, res) => {
    try {

      const updateData = {
        title: req.body.title,
        department: req.body.department,
        category: req.body.category,
        shortDescription:
          req.body.shortDescription,
        fullDescription:
          req.body.fullDescription,
        benefits: req.body.benefits,
        uses: req.body.uses,

        status: req.body.status,
      };

      // Update image only if new image uploaded
      if (req.file) {
        updateData.image = req.file.path;
      }

      const service =
        await Service.findByIdAndUpdate(
          req.params.id,
          updateData,
          {
            new: true,
            runValidators: true,
          }
        );

      if (!service) {
        return res.status(404).json({
          success: false,
          message: "Service Not Found",
        });
      }

      res.status(200).json({
        success: true,
        message:
          "Service Updated Successfully",
        data: service,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        message: "Server Error",
      });

    }
  }
);

/* =========================
   DELETE SERVICE
========================= */
router.delete("/:id", authMiddleware, async (req, res) => {
  try {

    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service Not Found",
      });
    }

    await Service.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Service Deleted Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
});

module.exports = router;