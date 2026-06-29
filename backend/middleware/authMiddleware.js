const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const authMiddleware = async (
  req,
  res,
  next
) => {
  try {

    const authHeader =
      req.headers.authorization;

    if (
      !authHeader ||
      !authHeader.startsWith("Bearer ")
    ) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const token =
      authHeader.split(" ")[1];

    const decoded =
      jwt.verify(
        token,
        process.env.JWT_SECRET
      );

    const admin =
      await Admin.findById(
        decoded.id
      );

    if (
      !admin ||
      admin.tokenVersion !==
      decoded.tokenVersion
    ) {
      return res.status(401).json({
        success: false,
        message: "Session expired",
      });
    }

    req.admin = decoded;

    next();

  } catch (error) {

    console.log(
      "JWT ERROR:",
      error.message
    );

    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });

  }
};

module.exports = authMiddleware;