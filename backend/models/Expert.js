const mongoose = require("mongoose");

const expertSchema = new mongoose.Schema(
{
  serialNo: {
    type: Number,
    default: 0
  },

  regNo: {
    type: String,
    default: ""
  },

  name: {
    type: String,
    default: ""
  },

  designation: {
    type: String,
    default: ""
  },

  qualification: {
    type: String,
    default: ""
  },

  experience: {
    type: Number,
    default: 0
  },

  photo: {
    type: String,
    default: ""
  }
},
{
  timestamps: true
}
);

module.exports =
mongoose.model(
  "Expert",
  expertSchema
);