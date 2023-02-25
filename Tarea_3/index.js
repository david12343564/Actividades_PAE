const path = require('path')
const express = require('express')
const routes = require('./rutas')
const htmlRoutes = require('./src/rutas')

const app = express()
const port = 3000

app.use('*/assets', express.static(path.join(__dirname, 'assets')))
app.use('', htmlRoutes)
routes(app)



app.listen(port, function () {
  console.log('app is running in port:' + port)
});