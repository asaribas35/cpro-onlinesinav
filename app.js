const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const hostname = '127.0.0.1'

app.use(express.static('public'))

app.use('/test',(req,res,next) => {
    console.log("sdasdas");
    next();
})

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./site/index.html'))
})


app.listen(port, hostname , () => {
    console.log(`sserver running http://${hostname}:${port}/`);
})

