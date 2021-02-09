const express =require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.render('site/index')
})


router.get('/login', (req,res) => {
    res.render('site/login')
})

router.get('/signup', (req,res) => {
    res.render('site/signup')
})

router.get('/addexam', (req,res) => {
    res.render('site/addexam')
})

router.get('/exampage', (req,res) => {
    res.render('site/exampage')
})

module.exports = router