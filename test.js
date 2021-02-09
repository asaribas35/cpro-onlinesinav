const mongoose = require('mongoose')

const Post = require('./models/posts')

mongoose.connect('mongodb://127.0.0.1/cpro_test_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

Post.find({
    dersAdi: 'Algo'
},(error,post) => {
    console.log(error, post);
})



/* Post.create({
    dersAdi: 'Algo' ,
    tarih : '2021-02-10' ,
    saat : '19:00',
    sure: '60'
}, (error, post) => {
    console.log(error,post);
}) */