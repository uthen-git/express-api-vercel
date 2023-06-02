const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    project_name: String,
    project_start_date: Date,
    project_value: Number,
    project_status: String,
    update_at:{ type: Date,default:Date.now }
})

module.exports = mongoose.model('Project',ProjectSchema)
