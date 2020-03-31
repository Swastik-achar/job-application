const Application = require("../models/application");

module.exports.register = async (req, res) => {
  try {
    const body = req.body;
    const application = await Application.create(body);
    res.status(200).json(application);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports.update = async (req, res) => {
  const id = req.params.id,
    body = req.body;
  try {
    const application = await Application.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true
    });
    res.status(200).json(application);
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports.list = async (req, res) => {
  try {
    const applications = await Application.find();
    res.status(200).json(applications);
  } catch (err) {
    res.status(400).json(err);
  }
};
