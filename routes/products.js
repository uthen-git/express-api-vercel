const express = require('express');
const router = express.Router();
const Product = require('../models/Product.js');

router.get('/', async (req, res, next) => {
    try {
        const ProductFound = await Product.find();
        res.json(ProductFound);
    } catch (err) {
        return next(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const ProductFound = await Product.findById(req.params.id);
        res.json(ProductFound);
    } catch (err) {
        return next(err);
    }
})

router.post('/', async (req, res, next) => {
    try {
        const productsaved = await Product.create(req.body);
        res.json(productsaved);
    } catch (err) {
        return next(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const productsaved = await Product.findByIdAndUpdate(req.params.id, req.body);
        res.json(productsaved);
    } catch (err) {
        return next(err);
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const productdeleted = await Product.findByIdAndDelete(req.params.id);
        res.json(productdeleted);
    } catch (err) {
        return next(err);
    }
})

module.exports = router;