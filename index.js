// const express = require('express')
import express from 'express'
const app = express()
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
import cors from 'cors'
import { studentsRoutes } from './routes/students.js'
import { mentorRoutes } from './routes/mentor.js'

dotenv.config()

//third party middleware
app.use(cors())

// inbuild middleware
app.use(express.json())

// const MONGO_URL = "mongodb://localhost";

const MONGO_URL = process.env.MONGO_URL

async function createConnection() {
  const client = new MongoClient(MONGO_URL)
  await client.connect()
  console.log('Mongo is connected ✌️😊')
  return client
}
export const client = await createConnection()

const port = process.env.PORT

app.get('/', function (req, res) {
  res.send('Hello World ')
})

app.use('/students', studentsRoutes)
app.use('/mentors', mentorRoutes)

app.listen(port, () => {
  console.log(`server started at ${port}`)
})
