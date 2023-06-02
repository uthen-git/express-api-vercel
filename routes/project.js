const express = require('express');
const router = express.Router();
const Project = require('../models/Project.js');

router.get('/', async (req, res, next) => {
    try {
        const ProjectFound = await Project.find();
        res.json(ProjectFound);
    } catch (err) {
        return next(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const ProjectFound = await Project.findById(req.params.id);
        res.json(ProjectFound);
    } catch (err) {
        return next(err);
    }
})

router.post('/', async (req, res, next) => {
    try {
        const Projectsaved = await Project.create(req.body);
        res.json(Projectsaved);
    } catch (err) {
        return next(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const Projectsaved = await Project.findByIdAndUpdate(req.params.id, req.body);
        res.json(Projectsaved);
    } catch (err) {
        return next(err);
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const Projectdeleted = await Project.findByIdAndDelete(req.params.id);
        res.json(Projectdeleted);
    } catch (err) {
        return next(err);
    }
})

module.exports = router;