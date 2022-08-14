const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const validRoles = {
    values: ["ADMIN", "USER"],
    message: "{VALUE} is not a valid role"
};

let userSchema = new Schema(
    {
        name:{
            type: String,
            require: [true, "Username is required"],
            unique: true
        },
        email: {
            type: String,
            unique: true,
            required: [true, "Email is required"]
        },
        password: {
            type: String,
            required: [true, "Password is required"]
        },
        role: {
            type: String,
            default: "USER",
            enum: validRoles
        },
        active: {
            type: Boolean,
            default: true
        }
    }
);

module.exports = mongoose.model("User", userSchema);