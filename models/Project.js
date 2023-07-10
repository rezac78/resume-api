const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  ProjectTitleEn: {
    type: String,
  },
  ProjectTitleDe: {
    type: String,
  },
  ProjectTitleFa: {
    type: String,
  },
  ProjectsTochnologiesEn: {
    type: String,
  },
  ProjectsTochnologiesDe: {
    type: String,
  },
  ProjectsTochnologiesFa: {
    type: String,
  },
  ProjectsSummeryEn: {
    type: String,
  },
  ProjectsSummeryDe: {
    type: String,
  },
  ProjectsSummeryFa: {
    type: String,
  },
  ProjectsDataEn: {
    type: String,
  },
  ProjectsDataDe: {
    type: String,
  },
  ProjectsDataFa: {
    type: String,
  },
  ProjectsLink: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
