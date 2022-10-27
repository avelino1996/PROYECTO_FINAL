const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let publicationSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
    maxlength: 2000,
  },
  distance: {
    type: String,
  },
  createBy: {
    type: String,
  },
  createAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  photo: {
    type: String,
  },
});

module.exports = mongoose.model("Publication", publicationSchema);
