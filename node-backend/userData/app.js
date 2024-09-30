console.log("Full stack webdev here we go");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./models');
const config = require('./config/config');
const routes = require('./routes');
const connectDb = require('./models/mongoDb')

const app = express();

// Middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Routes
app.use('/user', routes);

// Database connection and server start
const PORT = process.env.PORT || 7000;

sequelize.authenticate()
  .then(() => {
    console.log('Database connected');
    return sequelize.sync(); // This will create tables if they don't exist
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('myerror:', err));