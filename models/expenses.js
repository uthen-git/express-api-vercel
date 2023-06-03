const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    expense_detail: String,
    expense_value: Number,
    expense_date: Date,
    expense_group: String,
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    update_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Expense', ExpenseSchema)
