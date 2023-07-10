const mongoose = require("mongoose");

const AboutMeSchema = new mongoose.Schema({
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
  HighlightsFA: {
    type: Array,
    uniqueItems: true,
  },
  HighlightsEn: {
    type: Array,
    uniqueItems: true,
  },
  HighlightsDE: {
    type: Array,
    uniqueItems: true,
  },
  image: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("AboutMe", AboutMeSchema);
