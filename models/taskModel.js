const mongoose = require("mongoose");

const taskListSchema = new mongoose.Schema({
    list: [{

        title: { type: String },
        type: { type: String },
        task: [],
        completed: {
            type: Boolean,
            default: false
        }
    }],

    taskTitle: { type: String },

    pin: { type: Number },

}, { timestamps: true });

module.exports = mongoose.model('TaskList', taskListSchema);