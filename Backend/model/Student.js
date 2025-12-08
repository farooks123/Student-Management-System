const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true
    },
},

{
    timestamps:true,
});

module.exports = mongoose.model("Student", studentSchema);
