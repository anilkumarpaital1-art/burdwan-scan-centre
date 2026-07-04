require("dns").setDefaultResultOrder("ipv4first");
require("dotenv").config();

const serviceRoutes = require("./routes/serviceRoutes");

const adminRoutes = require("./routes/adminRoutes");

const dashboardRoutes = require("./routes/dashboardRoutes");

const packageRoutes = require("./routes/packageRoutes");

const jobRoutes = require("./routes/jobRoutes");

const noticeRoutes = require("./routes/noticeRoutes");

const expertRoutes = require("./routes/expertRoutes");

const visitorRoutes = require("./routes/visitorRoutes");

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const connectDB = require("./config/db");

const app = express();
app.set("trust proxy", 1);

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,

  message: {
    success: false,
    message:
      "Too many login attempts. Try again after 15 minutes.",
  },

  standardHeaders: true,
  legacyHeaders: false,
});

/* =========================
   DATABASE CONNECTION
========================= */
connectDB();

/* =========================
   MIDDLEWARE
========================= */
app.use(helmet());

const allowedOrigins = process.env.FRONTEND_URLS.split(",");

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (Postman, server-to-server, etc.)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json());

app.use(
  "/api/admin/login",
  loginLimiter
);

app.use(
  "/api/admin",
  adminRoutes
);
app.use("/api/services", serviceRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/experts", expertRoutes);
app.use("/api/visitors", visitorRoutes);

app.use(
  "/api/health",
  require("./routes/healthRoutes")
);

app.use(
  "/api/notices",
  noticeRoutes
);

/* =========================
   TEST ROUTE
========================= */
app.get("/", (req, res) => {
  res.send("🚀 Backend Running Successfully");
});

/* =========================
   PORT
========================= */
const PORT = process.env.PORT || 5000;

/* =========================
   SERVER START
========================= */
app.listen(PORT, () => {
  console.log("\n====================================");
  console.log("🚀 Burdwan Scan Centre Backend");
  console.log(
    `🌐 Server Running On : ${
      process.env.RENDER_EXTERNAL_URL || `http://localhost:${PORT}`
    }`
  );
  console.log(`📡 API Status        : ACTIVE`);
  console.log(
    `⚡ Environment       : ${process.env.NODE_ENV || "DEVELOPMENT"}`
  );
  console.log("====================================");
});