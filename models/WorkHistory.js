const mongoose = require("mongoose");

const WorkHistorySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  WorkHistoryTitleEn: {
    type: String,
  },
  WorkHistoryTitleDe: {
    type: String,
  },
  WorkHistoryTitleFa: {
    type: String,
  },
  WorkHistoryLocationEn: {
    type: String,
  },
  WorkHistoryLocationDe: {
    type: String,
  },
  WorkHistoryLocationFa: {
    type: String,
  },
  WorkHistoryPositionEn: {
    type: String,
  },
  WorkHistoryPositionDe: {
    type: String,
  },
  WorkHistoryPositionFa: {
    type: String,
  },
  WorkHistoryDataEn: {
    type: String,
  },
  WorkHistoryDataDe: {
    type: String,
  },
  WorkHistoryDataFa: {
    type: String,
  },
  WorkHistoryLink: {
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

module.exports = mongoose.model("WorkHistory", WorkHistorySchema);
