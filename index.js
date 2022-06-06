// This is the main backend file of the School Management Project
// Mostly CRUD based work by using mongo db as the database

const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config()

const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Hello') 
})



app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})