const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let comentSchema = new Schema({
  name: {
    type: String,
    require: [true, "Name is required"],
    unique: true,
  },
  email: {
    type: String,
    require: [true, "Email is required"],
    unique: true,
  },
  surname: {
    type: String,
    require: [true, "Surname is required"],
    unique: true,
  },
  description: {
    type: String,
    unique: true,
    required: [true, "Description is required"],
    maxlength: 2000,
  },
});

module.exports = mongoose.model("Comment", comentSchema);
