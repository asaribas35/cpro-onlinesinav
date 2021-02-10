const mongoose = require('mongoose')

const ExamSchema = new mongoose.Schema({
    
    dersAdi: { type: String, require:true},
    tarih: { type: Date, require:true},
    saat: { type: String, require:true},
    sure: { type: String, require:true},
    date: {type:Date, default: Date.now}

})

module.exports = mongoose.model('Exam', ExamSchema)