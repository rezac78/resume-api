const mongoose = require("mongoose");

const EducationSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  EducationTitleEn: {
    type: String,
  },
  EducationTitleDe: {
    type: String,
  },
  EducationTitleFa: {
    type: String,
  },
  EducationStadyEn: {
    type: String,
  },
  EducationStadyDe: {
    type: String,
  },
  EducationStadyFa: {
    type: String,
  },
  EducationLocationEn: {
    type: String,
  },
  EducationLocationDe: {
    type: String,
  },
  EducationLocationFa: {
    type: String,
  },
  EducationDataEn: {
    type: String,
  },
  EducationDataDe: {
    type: String,
  },
  EducationDataFa: {
    type: String,
  },
  image: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Education", EducationSchema);
