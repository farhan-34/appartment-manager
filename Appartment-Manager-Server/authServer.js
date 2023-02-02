const express = require('express')
const app = express()
const auth = require('./router/authentication')


app.use(express.json()) 

app.use('/', auth)

app.listen(5001)

