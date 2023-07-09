const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  summaryEn: {
    type: String,
  },
  summaryDE: {
    type: String,
  },
  summaryFA: {
    type: String,
  },
  image: {
    type: String,
  },
  FileFa:{
    type: String,
  },
  FileEn:{
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Profile", ProfileSchema);
