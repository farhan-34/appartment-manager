const express = require('express')
const app = express()
const auth = require('./router/authentication')
const cors = require('cors')

app.use(express.json());

const corsOpts = {
    origin: ['http://localhost:3000', '*'],

    methods: [
        'GET',
        'POST',
    ],

    allowedHeaders: [
        'Content-Type',
        'X-Requested-With',
        'Authorization',
        'Origin'
    ],
};

app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next()
});

app.use('/', auth)

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

app.listen(5001)

