const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        minlength: 6,
        maxlength: 10
    },
    email: {
        type: String,
        require: true,
        minlength: 4,
        maxlength: 50
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
    { timestamp: true }
);

module.exports = mongoose.model("User", userSchema);