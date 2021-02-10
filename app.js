const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const exphbs  = require('express-handlebars')
const port = 3000
const hostname = '127.0.0.1'



mongoose.connect('mongodb://127.0.0.1/cpro_data', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});


app.use(express.static('public'))


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())



const main = require('./routes/main')

app.use('/',main)


app.listen(port, hostname , () => {
    console.log(`server running http://${hostname}:${port}/`);
})

