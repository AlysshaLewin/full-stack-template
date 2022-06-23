const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const PORT = 8000

let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'sample_mflix',
    collection

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log(`Connected to Database`)
        db = client.db(dbName)
        collection = db.collection('movies')
    })

//PORT = 8000
app.listen(process.env.PORT || PORT, () => {  //if 8000 isn't available for Heroku, PORT, () lets Heroku decide where to go.
    console.log(`Server is running on port = ${PORT}`)
})