const express = require("express")
const router  = express.Router()
const { Pool } = require('pg')

const pool = new Pool ({
    user : "postgres",
    password : 5432,
    host : "localhost",
    port : 5432,
    database : "shop_list"
})


router.get(`/items`, function(req, res) {
    pool.query("SELECT * FROM items ORDER BY id ASC", (err, results) =>{
        if(err){
            throw err
        }
        res.status(200).json(results.rows)
        // res.send(results.rows)
        
    })
  });
  


  module.exports = router;