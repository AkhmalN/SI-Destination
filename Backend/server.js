const express = require('express')
const mysql = require('mysql')
const cors = require('cors')


const app = express()
app.use(cors())


const db = mysql.createConnection({
   host : "localhost",
   user : "root",
   password : "",
   database : "tourism_destination"
})

app.get('/', (re, res)=> {
   return res.json('From server side!')
})


app.get('/destination', (req, res)=>{
   const query_sql = "SELECT * FROM destination_table"
   db.query(query_sql, (err, data)=>{
      if(err){ 
         return res.json(err)
      }
      return res.json(data)
   })
})


app.listen(8081, ()=>{
   console.log('ready to listening')
})