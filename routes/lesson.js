const express = require('express');
const router = express.Router();
const Lesson = require('../models/Lesson.js');

router.get('/', async (req, res, next) => {
    try {
        const LessonFound = await Lesson.find();
        res.json(LessonFound);
    } catch (err) {
        return next(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const LessonFound = await Lesson.findById(req.params.id);
        res.json(LessonFound);
    } catch (err) {
        return next(err);
    }
})

router.get('/lessonbyquotid/:quotid', async (req, res) => {
    try {
        const LessonFound = await Lesson.find({ quotation: req.params.quotid });
        res.json(LessonFound);
    } catch (err) {
        return next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const Lessonsaved = await Lesson.create(req.body);
        res.json(Lessonsaved);
    } catch (err) {
        return next(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const Lessonsaved = await Lesson.findByIdAndUpdate(req.params.id, req.body);
        res.json(Lessonsaved);
    } catch (err) {
        return next(err);
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const Lessondeleted = await Lesson.findByIdAndDelete(req.params.id);
        res.json(Lessondeleted);
    } catch (err) {
        return next(err);
    }
})

module.exports = router;