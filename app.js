require('dotenv').config()
var express = require('express')
var { env } = process
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var mongoose = require('mongoose')
mongoose.connect(env.MONGODB_URL, {
  useNewUrlParser: true,
})
var swaggerUi = require('swagger-ui-express')
var swaggerDoc = require('./swagger.json')

var routes = require('./routes')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', routes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

module.exports = app
