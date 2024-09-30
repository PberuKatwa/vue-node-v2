const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express()
const port = require('./config/config')
const routes = require('./routes')
const dbConnect = require('./models/dbConnect')

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


dbConnect().then(() => {
    // Start the server only if the DB connection is successful
    app.use('/user', routes);
    
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
}).catch((error) => {
    // Stop the app from starting if DB connection fails
    console.error('Failed to connect to MongoDB. Server not started.');
});


