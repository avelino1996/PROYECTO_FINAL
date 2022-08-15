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
            maxlength: 20000
        },
         idPublication: {
            type: Schema.ObjectId,
            ref: "User",
            require: true
        },
        create: {
            type: Date,
            required: true,
            default: Date.now
        },
        /* photo:{
            data: Buffer,
            contentType: String
        } */
        photo: {
            type: String
        }
    }
);

module.exports = mongoose.model("Publication", publicationSchema);