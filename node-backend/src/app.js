console.log("full stack webdev heer we g0")

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.listen(process.env.PORT || 7000, () =>{
    console.log('Server is on port 7000')
});

app.get('/first', function (request, response) {   
    response.send({
        message:"this is my express app"
    })
})

app.post('/register', (request, response) => {
    response.send({
        message:`this is the name ${request.body.name}, and password ${request.body.password}`
    })
})