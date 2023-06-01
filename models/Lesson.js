const mongoose = require('mongoose'); 

const Lesson_detailSchema = new mongoose.Schema({
    detail:String,
    quantity:Number,
    price_per_unit:Number,
    sum_price:Number,
    quotation:{type: mongoose.Schema.Types.ObjectId,ref:'Quotation'},
    update_at:{ type: Date,default:Date.now }
}, { strictPopulate: false })

module.exports = mongoose.model('Lesson',Lesson_detailSchema)
