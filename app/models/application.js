const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;
const applicationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: function(value) {
        return validator.isEmail(value);
      },
      message: {
        notice: "Invalid email format"
      }
    }
  },
  phone: {
    type: String,
    required: true,
    maxlength: 10,
    minlength: 10
  },
  jobTitle: {
    type: String,
    enum: [
      "FULL Stack Developer",
      "MEAN Stack Developer",
      "Node.js Developer",
      "Front-End Developer",
      "null"
    ],
    default: "null",
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  skills: {
    type: String,
    required: true
  },
  status:{
      type:String,
      enum:["shortlisted", "rejected","applied"],
      default:"applied"
  }
});

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
