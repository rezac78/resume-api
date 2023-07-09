const Mongoose = require("mongoose");
const User = require("../models/Profile");
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
      image: base64.slice(11, -2),
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
