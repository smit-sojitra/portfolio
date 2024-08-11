const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        require: true,
    },
    lastName: {
        type: String,
        // required: true,
        trim: true,
    },
    email: {
        type: String,
        // required: true,
        trim: true,
    },
    contactNumber: {
        type: Number,
        trim: true,
    },
    description: {
        type: String,
        // required: true,
        trim: true,
    }
});

module.exports = mongoose.model("User", userSchema);
