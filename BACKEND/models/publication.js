const mongoose = require('mongoose');

let Schema = mongoose.Schema;


let publicationSchema = new Schema(
    {

        tittle:{
            type: String,
            require: [true, "Tittle is required"],
            unique: true
        },
        description: {
            type: String,
            unique: true,
            required: [true, "Description is required"],
            maxlength: 2000
        },
        distance:{
            type: String,
            require: [true, "Distance is required"]
        },
        createBy:{
            type: String,
            require: [true, "Name is required"]
        },
        createAt: {
            type: Date,
            required: true,
            default: Date.now
        },
        publicationNumber: {
            type: String,
            require: true
          },
        photo:{
            data: Buffer,
            contentType: String
        }
    }
);

module.exports = mongoose.model("Publication", publicationSchema);