const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user_email: {
    type: String,
    trim: true,
  },
  user_name: {
    type: String,
    trim: true,
  },
  message: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Resume", resumeSchema);
