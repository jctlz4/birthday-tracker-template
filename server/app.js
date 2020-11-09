require('./db/config');

const express = require('express');
birthdayRouter = require('./routes/birthdays');
const app = express();

app.use(express.json());

app.use('/api/birthdays', birthdayRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500);
  res.json({
    message: err.message,
    error: err
  });
});

module.exports = app;
