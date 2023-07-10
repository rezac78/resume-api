const mongoose = require("mongoose");

const ProgrammingSkillsSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  ProgrammingSkillsTitle: {
    type: Array,
    uniqueItems: true,
  },
  ProgrammingSkillsNumber: {
    type: Array,
    uniqueItems: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("ProgrammingSkills", ProgrammingSkillsSchema);
