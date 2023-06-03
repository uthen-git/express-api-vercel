const express = require('express');
const router = express.Router();
const Expense = require('../models/expenses.js');

router.get('/', async (req, res, next) => {
    try {
        const ExpenseFound = await Expense.find();
        res.json(ExpenseFound);
    } catch (err) {
        return next(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const ExpenseFound = await Expense.findById(req.params.id);
        res.json(ExpenseFound);
    } catch (err) {
        return next(err);
    }
})

router.post('/', async (req, res, next) => {
    try {
        const Expensesaved = await Expense.create(req.body);
        res.json(Expensesaved);
    } catch (err) {
        return next(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const Expensesaved = await Expense.findByIdAndUpdate(req.params.id, req.body);
        res.json(Expensesaved);
    } catch (err) {
        return next(err);
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const Expensedeleted = await Expense.findByIdAndDelete(req.params.id);
        res.json(Expensedeleted);
    } catch (err) {
        return next(err);
    }
})

router.get('/expenseandproject', async (req, res, next) => {
    try {
        const ExpenseFound = await Expense.find().populate('Project');
        res.json(ExpenseFound);
    } catch (err) {
        return next(err);
    }
})

module.exports = router;