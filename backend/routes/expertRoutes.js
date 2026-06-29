const upload = require("../middleware/upload");
const express = require("express");
const router = express.Router();

const Expert = require("../models/Expert");
const authMiddleware = require("../middleware/authMiddleware");

/* =========================
   GET ALL EXPERTS
========================= */

router.get("/", async (req, res) => {
  try {
    const experts = await Expert.find().sort({
      serialNo: 1,
    });

    res.json(experts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/* =========================
   ADD EXPERT
========================= */

router.post(
  "/",
  authMiddleware,
  upload.single("photo"),
  async (req, res) => {
  try {

  const expert = new Expert({
    ...req.body,
    photo: req.file?.path || ""
  });

  const savedExpert =
    await expert.save();

  res.status(201).json(savedExpert);

} catch (error) {

  res.status(400).json({
    message: error.message
  });

}
});

/* =========================
   UPDATE EXPERT
========================= */

router.put(
  "/:id",
  authMiddleware,
  upload.single("photo"),
  async (req, res) => {
  try {

    const expert = await Expert.findById(
      req.params.id
    );

    if (!expert) {
      return res.status(404).json({
        message: "Expert not found"
      });
    }

    const oldSerial = expert.serialNo;

    const newSerial =
  req.body.serialNo !== ""
    ? Number(req.body.serialNo)
    : oldSerial;

    if (oldSerial !== newSerial) {

      if (newSerial < oldSerial) {

        await Expert.updateMany(
          {
            serialNo: {
              $gte: newSerial,
              $lt: oldSerial
            }
          },
          {
            $inc: { serialNo: 1 }
          }
        );

      } else {

        await Expert.updateMany(
          {
            serialNo: {
              $gt: oldSerial,
              $lte: newSerial
            }
          },
          {
            $inc: { serialNo: -1 }
          }
        );

      }
    }

    

const updateData = {
  serialNo:
    req.body.serialNo !== ""
      ? Number(req.body.serialNo)
      : expert.serialNo,

  regNo:
    req.body.regNo ?? "",

  name:
    req.body.name ?? "",

  designation:
    req.body.designation ?? "",

  qualification:
    req.body.qualification ?? "",

  eexperience: isNaN(
    Number(req.body.experience)
    )
    ? 0
    : Number(req.body.experience)
};

if (req.file) {
  updateData.photo =
    req.file.path;
}

    const updatedExpert =
      await Expert.findByIdAndUpdate(
        req.params.id,
        updateData,
        {
          returnDocument: "after"
        }
      );

    res.json(updatedExpert);

  } catch (error) {

    res.status(400).json({
      message: error.message
    });

  }
});



/* =========================
   DELETE EXPERT
========================= */

router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Expert.findByIdAndDelete(req.params.id);

    res.json({
      message: "Expert deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = router;