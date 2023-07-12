const Mongoose = require("mongoose");
const User = require("../models/Profile");
const AboutMe = require("../models/AboutMe");
const Education = require("../models/Education");
const WorkHistory = require("../models/WorkHistory");
const ProgrammingSkills = require("../models/ProgrammingSkills");
const Project = require("../models/Project");
// handle get all user
exports.ShowProfile = (req, res) => {
  try {
    User.find().then((result) => {
      res.status(200).json({ User: result });
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "error" });
  }
};

// create userLogin => Post /api/signup/
exports.createProfile = async (req, res) => {
  const base64 = req.body.img;
  const FileFa = req.body.FileFa;
  const FileEn = req.body.FileEn;

  try {
    const user = new User({
      _id: new Mongoose.Types.ObjectId(),
      image: base64,
      summaryEn: req.body.summaryEn,
      summaryDE: req.body.summaryDE,
      summaryFA: req.body.summaryFA,
      FileFa: FileFa.slice(11, -2),
      FileEn: FileEn.slice(11, -2),
    });
    await user.save();
    return res.status(200).json({ success: "true" });
  } catch (error) {
    res.send({ Status: "error" });
  }
};

exports.EDITProfile = async (req, res) => {
  const base64 = req.body.img;
  const FileFa = req.body.FileFa;
  const FileEn = req.body.FileEn;
  User.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        image: base64,
        summaryEn: req.body.summaryEn,
        summaryDE: req.body.summaryDE,
        summaryFA: req.body.summaryFA,
        FileFa: FileFa,
        FileEn: FileEn,
      },
    }
  )
    .then((result) => {
      res.status(200).json({ updated_product: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.ShowAboutMe = (req, res) => {
  try {
    AboutMe.find().then((result) => {
      res.status(200).json({ AboutMe: result });
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "error" });
  }
};

exports.createAboutMe = async (req, res) => {
  const base64 = req.body.img;
  try {
    const user = new AboutMe({
      _id: new Mongoose.Types.ObjectId(),
      image: base64,
      HighlightsEn: req.body.HighlightsEn,
      HighlightsDE: req.body.HighlightsDE,
      HighlightsFA: req.body.HighlightsFA,
      summaryEn: req.body.summaryEn,
      summaryDE: req.body.summaryDE,
      summaryFA: req.body.summaryFA,
    });
    await user.save();
    return res.status(200).json({ success: "true" });
  } catch (error) {
    res.send({ Status: "error" });
  }
};

exports.EDITAboutMe = async (req, res) => {
  const base64 = req.body.img;
  User.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        image: base64,
        HighlightsEn: req.body.HighlightsEn,
        HighlightsDE: req.body.HighlightsDE,
        HighlightsFA: req.body.HighlightsFA,
        summaryEn: req.body.summaryEn,
        summaryDE: req.body.summaryDE,
        summaryFA: req.body.summaryFA,
      },
    }
  )
    .then((result) => {
      res.status(200).json({ updated_product: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.ShowEducation = (req, res) => {
  try {
    Education.find().then((result) => {
      res.status(200).json({ Education: result });
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "error" });
  }
};

exports.ShowOneEducation = (req, res) => {
  const id = req.params.id;
  try {
    Education.findById(id).then((result) => {
      res.status(200).json({ Education: result });
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "error" });
  }
};

exports.createEducation = async (req, res) => {
  const base64 = req.body.img;
  try {
    const user = new Education({
      _id: new Mongoose.Types.ObjectId(),
      EducationTitleEn: req.body.EducationTitleEn,
      EducationTitleDe: req.body.EducationTitleDe,
      EducationTitleFa: req.body.EducationTitleFa,
      EducationStadyEn: req.body.EducationStadyEn,
      EducationStadyDe: req.body.EducationStadyDe,
      EducationStadyFa: req.body.EducationStadyFa,
      EducationLocationEn: req.body.EducationLocationEn,
      EducationLocationDe: req.body.EducationLocationDe,
      EducationLocationFa: req.body.EducationLocationFa,
      EducationDataEn: req.body.EducationDataEn,
      EducationDataDe: req.body.EducationDataDe,
      EducationDataFa: req.body.EducationDataFa,
      image: base64,
    });
    await user.save();
    return res.status(200).json({ success: "true" });
  } catch (error) {
    res.send({ Status: "error" });
  }
};

exports.EDITEducation = async (req, res) => {
  const base64 = req.body.img;
  Education.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        EducationTitleEn: req.body.EducationTitleEn,
        EducationTitleDe: req.body.EducationTitleDe,
        EducationTitleFa: req.body.EducationTitleFa,
        EducationStadyEn: req.body.EducationStadyEn,
        EducationStadyDe: req.body.EducationStadyDe,
        EducationStadyFa: req.body.EducationStadyFa,
        EducationLocationEn: req.body.EducationLocationEn,
        EducationLocationDe: req.body.EducationLocationDe,
        EducationLocationFa: req.body.EducationLocationFa,
        EducationDataEn: req.body.EducationDataEn,
        EducationDataDe: req.body.EducationDataDe,
        EducationDataFa: req.body.EducationDataFa,
        image: base64,
      },
    }
  )
    .then((result) => {
      res.status(200).json({ updated_product: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.DeletedEducation = (req, res) => {
  const id = req.params.id;
  try {
    Education.deleteOne({ _id: id }).then((result) => {
      res.status(200).json("deletedsucssFull");
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "error" });
  }
};

exports.ShowWorkHistory = (req, res) => {
  try {
    WorkHistory.find().then((result) => {
      res.status(200).json({ WorkHistory: result });
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "error" });
  }
};

exports.ShowOneWorkHistory = (req, res) => {
  const id = req.params.id;
  try {
    WorkHistory.findById(id).then((result) => {
      res.status(200).json({ WorkHistory: result });
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "error" });
  }
};

exports.createWorkHistory = async (req, res) => {
  const base64 = req.body.img;
  try {
    const user = new WorkHistory({
      _id: new Mongoose.Types.ObjectId(),
      WorkHistoryTitleEn: req.body.WorkHistoryTitleEn,
      WorkHistoryTitleDe: req.body.WorkHistoryTitleDe,
      WorkHistoryTitleFa: req.body.WorkHistoryTitleFa,
      WorkHistoryLocationEn: req.body.WorkHistoryLocationEn,
      WorkHistoryLocationDe: req.body.WorkHistoryLocationDe,
      WorkHistoryLocationFa: req.body.WorkHistoryLocationFa,
      WorkHistoryPositionEn: req.body.WorkHistoryPositionEn,
      WorkHistoryPositionDe: req.body.WorkHistoryPositionDe,
      WorkHistoryPositionFa: req.body.WorkHistoryPositionFa,
      WorkHistoryDataEn: req.body.WorkHistoryDataEn,
      WorkHistoryDataDe: req.body.WorkHistoryDataDe,
      WorkHistoryDataFa: req.body.WorkHistoryDataFa,
      WorkHistoryLink: req.body.WorkHistoryLink,
      image: base64,
    });
    await user.save();
    return res.status(200).json({ success: "true" });
  } catch (error) {
    res.send({ Status: "error" });
  }
};

exports.EDITWorkHistory = async (req, res) => {
  const base64 = req.body.img;
  WorkHistory.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        WorkHistoryTitleEn: req.body.WorkHistoryTitleEn,
        WorkHistoryTitleDe: req.body.WorkHistoryTitleDe,
        WorkHistoryTitleFa: req.body.WorkHistoryTitleFa,
        WorkHistoryLocationEn: req.body.WorkHistoryLocationEn,
        WorkHistoryLocationDe: req.body.WorkHistoryLocationDe,
        WorkHistoryLocationFa: req.body.WorkHistoryLocationFa,
        WorkHistoryPositionEn: req.body.WorkHistoryPositionEn,
        WorkHistoryPositionDe: req.body.WorkHistoryPositionDe,
        WorkHistoryPositionFa: req.body.WorkHistoryPositionFa,
        WorkHistoryDataEn: req.body.WorkHistoryDataEn,
        WorkHistoryDataDe: req.body.WorkHistoryDataDe,
        WorkHistoryDataFa: req.body.WorkHistoryDataFa,
        WorkHistoryLink: req.body.WorkHistoryLink,
        image: base64,
      },
    }
  )
    .then((result) => {
      res.status(200).json({ updated_product: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.DeletedWorkHistory = (req, res) => {
  const id = req.params.id;
  try {
    WorkHistory.deleteOne({ _id: id }).then((result) => {
      res.status(200).json("deletedsucssFull");
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "error" });
  }
};

exports.ShowProgrammingSkills = (req, res) => {
  try {
    ProgrammingSkills.find().then((result) => {
      res.status(200).json({ ProgrammingSkills: result });
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "error" });
  }
};

exports.ShowOneProgrammingSkills = (req, res) => {
  const id = req.params.id;
  try {
    ProgrammingSkills.findById(id).then((result) => {
      res.status(200).json({ ProgrammingSkills: result });
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "error" });
  }
};

exports.createProgrammingSkills = async (req, res) => {
  try {
    const user = new ProgrammingSkills({
      _id: new Mongoose.Types.ObjectId(),
      ProgrammingSkillsTitle: req.body.ProgrammingSkillsTitle,
      ProgrammingSkillsNumber: req.body.ProgrammingSkillsNumber,
    });
    await user.save();
    return res.status(200).json({ success: "true" });
  } catch (error) {
    res.send({ Status: "error" });
  }
};

exports.EDITProgrammingSkills = async (req, res) => {
  ProgrammingSkills.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        ProgrammingSkillsTitle: req.body.ProgrammingSkillsTitle,
        ProgrammingSkillsNumber: req.body.ProgrammingSkillsNumber,
      },
    }
  )
    .then((result) => {
      res.status(200).json({ updated_product: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.DeletedProgrammingSkills = (req, res) => {
  const id = req.params.id;
  try {
    ProgrammingSkills.deleteOne({ _id: id }).then((result) => {
      res.status(200).json("deletedsucssFull");
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "error" });
  }
};

exports.ShowProject = (req, res) => {
  try {
    Project.find().then((result) => {
      res.status(200).json({ Project: result });
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "error" });
  }
};

exports.ShowOneProject = (req, res) => {
  const id = req.params.id;
  try {
    Project.findById(id).then((result) => {
      res.status(200).json({ Project: result });
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "error" });
  }
};

exports.createProject = async (req, res) => {
  const base64 = req.body.img;
  try {
    const user = new Project({
      _id: new Mongoose.Types.ObjectId(),
      image: base64,
      ProjectTitleEn: req.body.ProjectTitleEn,
      ProjectTitleDe: req.body.ProjectTitleDe,
      ProjectTitleFa: req.body.ProjectTitleFa,
      ProjectsTochnologiesEn: req.body.ProjectsTochnologiesEn,
      ProjectsTochnologiesDe: req.body.ProjectsTochnologiesDe,
      ProjectsTochnologiesFa: req.body.ProjectsTochnologiesFa,
      ProjectsSummeryEn: req.body.ProjectsSummeryEn,
      ProjectsSummeryDe: req.body.ProjectsSummeryDe,
      ProjectsSummeryFa: req.body.ProjectsSummeryFa,
      ProjectsDataEn: req.body.ProjectsDataEn,
      ProjectsDataDe: req.body.ProjectsDataDe,
      ProjectsDataFa: req.body.ProjectsDataFa,
      ProjectsLink: req.body.ProjectsLink,
    });
    await user.save();
    return res.status(200).json({ success: "true" });
  } catch (error) {
    res.send({ Status: "error" });
  }
};

exports.EDITProject = async (req, res) => {
  const base64 = req.body.img;
  Project.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        ProjectTitleEn: req.body.ProjectTitleEn,
        ProjectTitleDe: req.body.ProjectTitleDe,
        ProjectTitleFa: req.body.ProjectTitleFa,
        ProjectsTochnologiesEn: req.body.ProjectsTochnologiesEn,
        ProjectsTochnologiesDe: req.body.ProjectsTochnologiesDe,
        ProjectsTochnologiesFa: req.body.ProjectsTochnologiesFa,
        ProjectsSummeryEn: req.body.ProjectsSummeryEn,
        ProjectsSummeryDe: req.body.ProjectsSummeryDe,
        ProjectsSummeryFa: req.body.ProjectsSummeryFa,
        ProjectsDataEn: req.body.ProjectsDataEn,
        ProjectsDataDe: req.body.ProjectsDataDe,
        ProjectsDataFa: req.body.ProjectsDataFa,
        ProjectsLink: req.body.ProjectsLink,
        image: base64,
      },
    }
  )
    .then((result) => {
      res.status(200).json({ updated_product: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.DeletedProject = (req, res) => {
  const id = req.params.id;
  try {
    Project.deleteOne({ _id: id }).then((result) => {
      res.status(200).json("deletedsucssFull");
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "error" });
  }
};
