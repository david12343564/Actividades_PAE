const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const swaggerConfig = require('./swagger.config')
const rutas = require('./rutas')
const routes = require('./src/rutas')

const app = express()
const mongoUrl = process.env.MONGO_URL

const port = process.env.PORT || 3000

const swaggerDocs = swaggerJsDoc(swaggerConfig)
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('', routes)
rutas(app)

mongoose.connect(mongoUrl).then(() => {
  console.log('Se conecto correctamente a la base de datos');
  app.listen(port, function () {
    console.log('App is running in port: ' + port)
  })
}).catch(err => {
  console.log('No se pudo conectar a la base de datos: ', err)
})