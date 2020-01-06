const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./server/queries')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, Content-Length, X-Requested-With"
    )
    next();
})

app.use("/", db);


const PORT = 1912
app.listen(PORT, function () {
    console.log(`server running on ${PORT}`)
})