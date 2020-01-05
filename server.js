const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {Client} = require('pg')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const client = new Client ({
    user : "postgres",
    password : 5432,
    host : "localhost",
    port : 5432,
    database : "shop_list"
})

client.connect()
.then(() => console.log("connected successfuly"))
.then(() => client.query(`select * from items`))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())






const PORT = 1912
app.listen(PORT, function () {
    console.log(`server running on ${PORT}`)
})