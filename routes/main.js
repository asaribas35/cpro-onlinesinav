const express =require('express')
const Exam = require('../models/Exam')
const Question = require('../models/Question')
const router = express.Router()




router.get('/', (req,res) => {
    Exam.find({}).then(exams => {
        res.render('site/index', {
            exams:exams.map(item => item.toJSON())
        })
    })
})

router.get('/exampage/:id', (req,res) => {
    Exam.findById(req.params.id).lean().then(exam => {
        res.render('site/exampage', {exam:exam})
    })
})
router.get('/addexam/addquestion/:id', (req,res) => {
    Exam.findById(req.params.id).lean().then(exam => {
        res.render('site/addquestion', {exam:exam})
    })
    Question.dersId=req.params.id
})


router.get('/login', (req,res) => {
    res.render('site/login')
})

router.get('/signup', (req,res) => {
    res.render('site/signup')
})



router.get('/exampage', (req,res) => {
    console.log(req.url);
    res.render('site/exampage')
})

router.get('/addexam', (req,res) => {
    res.render('site/addexam')
})
router.post('/questions/test', (req,res) => {
    
    Question.create(req.body)
    
    res.redirect('/')
})


router.post('/exams/test', (req,res) => {
    Exam.create(req.body)
    
    res.redirect('/')
})



module.exports = router