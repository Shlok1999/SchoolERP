// This is the main backend file of the School Management Project
// Mostly CRUD based work by using mongo db as the database

const expresss = require('express')
const app = expresss()

let port = process.env.PORT || 4040

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})

