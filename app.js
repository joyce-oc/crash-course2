const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
//express app
const app = express();
// connect to mongodb
const dbURI = 'mongodb+srv://joyce:<time4tea@1>@nodetutorial.0ud0a.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true,useUnifiedTopology: true });
_then((result) => app.listen(3000))
.catch((err) => console.log(err));


//register view engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(3000);
app.use(morgan('dev'));
app.get('/' , (req,res) => {
    res.render('index');
});