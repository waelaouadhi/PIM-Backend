const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");

const app = express();
require('dotenv').config();

const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.mongo)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

app.use('/auth', authRoute);
app.use('/user', userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
