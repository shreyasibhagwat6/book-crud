const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const cors = require('cors')
const bookRoute = require('./routes/Book')

app.use(cors())

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(bodyParser.json())

app.use('/book', bookRoute);

app.listen(5000, () => {
    console.log("Server listening on port 5000")
})