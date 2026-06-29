require("dotenv").config();

const bcrypt = require("bcryptjs");

const connectDB = require("../config/db");
const Admin = require("../models/Admin");

const createAdmin = async () => {
  try {

    await connectDB();

    const existingAdmin = await Admin.findOne();

    if (existingAdmin) {
      console.log("Admin Already Exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash(
      process.env.ADMIN_PASSWORD,
      12
    );

    await Admin.create({
      name: process.env.ADMIN_NAME,
      email: process.env.ADMIN_EMAIL,
      phone: process.env.ADMIN_PHONE,
      password: hashedPassword,
    });

    console.log("Admin Created Successfully");

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }
};

createAdmin();