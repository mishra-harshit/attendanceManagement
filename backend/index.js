require('dotenv').config()
const express = require('express')
const {appConfig} = require('./configs')
const routes = require('./routes')

const app = express()
const port = appConfig.port

app.use('/',routes)

app.listen(port,()=>console.log(`Server running on port ${port}`))