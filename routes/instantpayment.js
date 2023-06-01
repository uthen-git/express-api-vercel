const express = require('express');
const router = express.Router();
const Instantpayment = require('../models/Instantpayment.js');

router.get('/', async (req, res, next) => {
    try {
        const InstantpaymentFound = await Instantpayment.find();
        res.json(InstantpaymentFound);
    } catch (err) {
        return next(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const InstantpaymentFound = await Instantpayment.findById(req.params.id);
        res.json(InstantpaymentFound);
    } catch (err) {
        return next(err);
    }
})

router.get('/instbyquotid/:quotid', async (req, res) => {
    try {
        const InstantpaymentFound = await Instantpayment.find({ quotation: req.params.quotid });
        res.json(InstantpaymentFound);
    } catch (err) {
        return next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const Instantpaymentsaved = await Instantpayment.create(req.body);
        res.json(Instantpaymentsaved);
    } catch (err) {
        return next(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const Instantpaymentsaved = await Instantpayment.findByIdAndUpdate(req.params.id, req.body);
        res.json(Instantpaymentsaved);
    } catch (err) {
        return next(err);
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const Instantpaymentdeleted = await Instantpayment.findByIdAndDelete(req.params.id);
        res.json(Instantpaymentdeleted);
    } catch (err) {
        return next(err);
    }
})

module.exports = router;