const express = require('express')
const path = require('path')
const app = express()
const exphbs  = require('express-handlebars')
const port = 3000
const hostname = '127.0.0.1'

app.use(express.static('public'))

app.use('/test',(req,res,next) => {
    console.log("sdasdas");
    next();
})
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req,res) => {
    res.render('site/index')
})


app.get('/login', (req,res) => {
    res.render('site/login')
})

app.get('/signup', (req,res) => {
    res.render('site/signup')
})

app.get('/addexam', (req,res) => {
    res.render('site/addexam')
})

app.get('/exampage', (req,res) => {
    res.render('site/exampage')
})

app.listen(port, hostname , () => {
    console.log(`sserver running http://${hostname}:${port}/`);
})

