const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const Admin = require("../models/Admin");
const authMiddleware = require("../middleware/authMiddleware");
const profileUpload = require("../middleware/profileUpload");
const sendEmail = require("../services/sendEmail");

const router = express.Router();

/* =========================
   GET ADMIN PROFILE
========================= */

router.get(
  "/profile",
  authMiddleware,
  async (req, res) => {
    try {

      const admin = await Admin.findById(
  req.admin.id
).select(
  "-password -resetPasswordToken -resetPasswordExpires"
);

      if (!admin) {
        return res.status(404).json({
          success: false,
          message: "Admin not found",
        });
      }

      res.status(200).json({
        success: true,
        admin,
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
   UPDATE ADMIN PROFILE
========================= */

router.put(
  "/profile",
  authMiddleware,
  async (req, res) => {
    try {

      const {
        name,
        email,
        phone,
      } = req.body;

      const admin = await Admin.findById(
        req.admin.id
      );

      if (!admin) {
        return res.status(404).json({
          success: false,
          message: "Admin not found",
        });
      }

      // Check email uniqueness
if (email && email !== admin.email) {

  const existingEmail = await Admin.findOne({
    email,
  });

  if (existingEmail) {
    return res.status(400).json({
      success: false,
      message: "Email already exists",
    });
  }
}

// Check phone uniqueness
if (phone && phone !== admin.phone) {

  const existingPhone = await Admin.findOne({
    phone,
  });

  if (existingPhone) {
    return res.status(400).json({
      success: false,
      message: "Phone number already exists",
    });
  }
}

admin.name = name || admin.name;
admin.email = email || admin.email;
admin.phone = phone || admin.phone;

await admin.save();

      res.status(200).json({
        success: true,
        message: "Profile updated successfully",
        admin,
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
   CHANGE PASSWORD
========================= */

router.put(
  "/change-password",
  authMiddleware,
  async (req, res) => {
    try {

      const {
        currentPassword,
        newPassword,
      } = req.body;

      if (!currentPassword || !newPassword) {
        return res.status(400).json({
          success: false,
          message: "All fields are required",
        });
      }

      const admin = await Admin.findById(
        req.admin.id
      );

      if (!admin) {
        return res.status(404).json({
          success: false,
          message: "Admin not found",
        });
      }

      const isMatch = await bcrypt.compare(
        currentPassword,
        admin.password
      );

      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message: "Current password is incorrect",
        });
      }

      const hashedPassword =
        await bcrypt.hash(newPassword, 10);

      admin.password = hashedPassword;

      await admin.save();

      res.status(200).json({
        success: true,
        message: "Password updated successfully",
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
   UPLOAD PROFILE PHOTO
========================= */

router.post(
  "/upload-photo",
  authMiddleware,
  profileUpload.single("photo"),
  async (req, res) => {
    try {

      const admin = await Admin.findById(
        req.admin.id
      );

      if (!admin) {
        return res.status(404).json({
          success: false,
          message: "Admin not found",
        });
      }

      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "No image uploaded",
        });
      }

      admin.profileImage = req.file.path;

      await admin.save();

      res.status(200).json({
        success: true,
        message: "Profile photo uploaded successfully",
        profileImage: admin.profileImage,
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

router.delete(
  "/remove-photo",
  authMiddleware,
  async (req, res) => {
    try {

      const admin =
        await Admin.findById(
          req.admin.id
        );

      admin.profileImage = "";

      await admin.save();

      res.status(200).json({
        success: true,
        message:
          "Profile photo removed",
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  }
);

/* =========================
   FORGOT PASSWORD
========================= */

router.post(
  "/forgot-password",
  async (req, res) => {
    try {

      const { email } = req.body;

      if (!email) {
        return res.status(400).json({
          success: false,
          message: "Email is required",
        });
      }

      const admin = await Admin.findOne({
        email: email.toLowerCase(),
      });

      if (!admin) {
        return res.status(404).json({
          success: false,
          message: "No account found",
        });
      }

      const resetToken =
        crypto.randomBytes(32).toString("hex");

      const hashedToken =
        crypto
          .createHash("sha256")
          .update(resetToken)
          .digest("hex");

      admin.resetPasswordToken =
        hashedToken;

      admin.resetPasswordExpires =
        Date.now() + 15 * 60 * 1000;

      await admin.save();

      const resetUrl =
        `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

      await sendEmail({
        email: admin.email,

        subject: "Password Reset",

        html: `
          <h2>Burdwan Scan Centre</h2>

          <p>
            Click the button below to reset your password.
          </p>

          <a href="${resetUrl}">
            Reset Password
          </a>

          <p>
            This link expires in 15 minutes.
          </p>
        `,
      });

      res.status(200).json({
        success: true,
        message:
          "Password reset link sent successfully",
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

router.put(
  "/reset-password/:token",
  async (req, res) => {
    try {

      const { password } = req.body;

      if (!password) {
        return res.status(400).json({
          success: false,
          message: "Password is required",
        });
      }

      const hashedToken =
        crypto
          .createHash("sha256")
          .update(req.params.token)
          .digest("hex");

      const admin =
        await Admin.findOne({
          resetPasswordToken: hashedToken,

          resetPasswordExpires: {
            $gt: Date.now(),
          },
        });

      if (!admin) {
        return res.status(400).json({
          success: false,
          message:
            "Reset link expired or invalid",
        });
      }

      const hashedPassword =
        await bcrypt.hash(password, 10);

      admin.password =
        hashedPassword;

      admin.resetPasswordToken =
        null;

      admin.resetPasswordExpires =
        null;

      admin.tokenVersion += 1;

      await admin.save();

      res.status(200).json({
        success: true,
        message:
          "Password reset successfully",
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
   ADMIN LOGIN
========================= */

router.post("/login", async (req, res) => {
  try {

    const {
      email,
      phone,
      password
    } = req.body;

    const admin = await Admin.findOne({
      email: email.toLowerCase(),
      phone
    });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      admin.password
    );

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    admin.lastLogin = new Date();
    await admin.save();

    const token = jwt.sign(
      {
        id: admin._id,
        email: admin.email,
        tokenVersion: admin.tokenVersion,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      success: true,
      token,
      admin: {
  id: admin._id,
  name: admin.name,
  email: admin.email,
  role: admin.role,
  profileImage: admin.profileImage,
},
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