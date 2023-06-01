const express = require('express');
const router = express.Router();
const Quotation = require('../models/Quotation.js');
const Lesson = require('../models/Lesson.js');
const multer = require('multer');
const path = require('path');

router.get('/', async (req, res, next) => {
    try {
        const QuotationFound = await Quotation.find();
        res.json(QuotationFound);
    } catch (err) {
        return next(err);
    }
})
router.get('/quotationsandlesson', async (req, res, next) => {
    try {
        const QuotationFound = await Quotation.find().populate('lessons');
        res.json(QuotationFound);
    } catch (err) {
        return next(err);
    }
})
router.get('/:id', async (req, res, next) => {
    try {
        const QuotationFound = await Quotation.findById(req.params.id);
        res.json(QuotationFound);
    } catch (err) {
        return next(err);
    }
})


router.post('/', async (req, res, next) => {
    try {
        const Quotationsaved = await Quotation.create(req.body);
        res.json(Quotationsaved);
    } catch (err) {
        return next(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const Quotationsaved = await Quotation.findByIdAndUpdate(req.params.id, req.body);
        res.json(Quotationsaved);
    } catch (err) {
        return next(err);
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const Quotationdeleted = await Quotation.findByIdAndDelete(req.params.id);
        res.json(Quotationdeleted);
    } catch (err) {
        return next(err);
    }
})

// ตั้งค่า Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // ตำแหน่งที่จะเก็บไฟล์อัปโหลด
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // กำหนดชื่อไฟล์ใหม่เป็นชื่อเดิม
    }
});
const upload = multer({ storage: storage });

// กำหนดเส้นทางสำหรับการอัปโหลดรูปภาพ
router.post('/upload', upload.single('file'), (req, res) => {
    
    // res.send('File uploaded successfully!');
    res.json({ message: 'File uploaded successfully!' });
});

// กำหนดเส้นทางสำหรับดาวน์โหลดรูปภาพ
router.get('/download/:filename', (req, res) => {
    
    const filename = req.params.filename;
    const file = path.join('uploads/', filename);
    res.download(file); // ดาวน์โหลดไฟล์
});

module.exports = router;