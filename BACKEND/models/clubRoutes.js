const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let routSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
    unique: true,
    maxlength: 2000,
  },
  distance: {
    type: String,
  },
  dayAt: {
    type: String,
  },
  photo: {
    type: String,
  },
});

module.exports = mongoose.model("Route", routSchema);
