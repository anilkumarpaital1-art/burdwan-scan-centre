const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },

    shortTitle: {
      type: String,
      default: "",
    },

    // NEW FIELD
    department: {
      type: String,
      required: true,
      default: "Diagnostic Department",
    },

    category: {
      type: String,
      required: true,
      default: "General",
    },

    shortDescription: {
      type: String,
      required: true,
    },

    fullDescription: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },

    image: {
      type: String,
      required: true,
    },

    benefits: {
      type: [String],
      default: [],
    },

    uses: {
      type: [String],
      default: [],
    },

    preparation: {
      type: [String],
      default: [],
    },

    gallery: {
      type: [String],
      default: [],
    },

    price: {
      type: String,
      default: "",
    },

    featured: {
      type: Boolean,
      default: false,
    },

    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Service", serviceSchema);