const express = require('express')
const path = require('path')
const rutas = require('./rutas')
const app = express()
const port = 3000
const {
  engine
} = require('express-handlebars')

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use('*/assets', express.static(path.join(__dirname, 'assets')))

rutas(app)

app.listen(port, function () {
  console.log('app is running in port:' + port)
});