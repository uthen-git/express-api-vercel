const mongoose = require('mongoose'); 

const QuotationSchema = new mongoose.Schema({
    quotation_code: String,
    quotation_date: Date,
    customer_name: String,
    customer_address: String,
    sum:Number,
    discount:Number,
    vat:Number,
    total:Number,
    deposit:Number,
    lesson1percent:Number,
    lesson2percent:Number,
    lesson3percent:Number,
    lesson1price:Number,
    lesson2price:Number,
    lesson3price:Number,
    image:String,
    quotation_detail:String,
    update_at:{ type: Date,default:Date.now }
}, { strictPopulate: false })

module.exports = mongoose.model('Quotation',QuotationSchema)


