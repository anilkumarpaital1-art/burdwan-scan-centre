const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = require("../config/db");

const Service = require("../models/Service");

const serviceCategories = require("./servicesData");

connectDB();

const importData = async () => {

  try {

    // DELETE OLD SERVICES

    await Service.deleteMany();

    const allServices = [];

    serviceCategories.forEach((categoryData) => {

      categoryData.services.forEach((service) => {

        allServices.push({

          title: service.title,

          slug: service.title
            .toLowerCase()
            .replace(/\s+/g, "-"),

          shortTitle: service.shortTitle,

          category: categoryData.category,

          shortDescription: service.short,

          fullDescription: service.description,

          image: service.image,

          benefits: service.benefits || [],

          uses: service.uses || [],

          preparation: service.preparation || [],

          gallery: service.gallery || [],

          price: "",

          featured: false,

          active: true,

        });

      });

    });

    await Service.insertMany(allServices);

    console.log("✅ Services Imported Successfully");

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit(1);

  }

};

importData();