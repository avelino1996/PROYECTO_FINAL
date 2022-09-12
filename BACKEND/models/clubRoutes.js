const mongoose = require('mongoose');

let Schema = mongoose.Schema;


let routSchema = new Schema(
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
        dayAt:{
            type: String,
            require: [true, "Day is required"]
        },
        routeNumber: {
            type: String,
            require: true
          },
        photo:{
            data: Buffer,
            contentType: String
        }
    }
);

module.exports = mongoose.model("Routs", routSchema);