const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    dersAdi: { type: String, required:true},
    soruText: { type: String, required:false},
    sikA: { type: String, required:false},
    sikB: { type: String, required:false},
    sikC: { type: String, required:false},
    sikD: { type: String, required:false},


})

module.exports = mongoose.model('Question', questionSchema)