const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = require('./routes/index');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', (req, res, next) => {
  req.user = {
    _id: '60ec3488cbfd96361c425053',
  };

  next();
});

app.use('/', router);

app.use('/', (req, res, next) => {
  res.status(404).send({ message: 'ресурс не найден' });

  next();
});



app.listen(PORT, () => {});
