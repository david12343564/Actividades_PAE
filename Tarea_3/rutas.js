const path = require('path')
const express = require('express')
const auth = require('./src/middlewares').auth

function cargarHome(req, res) {
  console.log('api works')
  res.sendFile(path.join(__dirname, 'src', 'views', 'presentacion.html'))
}

module.exports = function (app) {

  app.get('/', auth, cargarHome)

  app.get('*', function (req, res) {
    res.status(404).sendFile(path.join(__dirname, 'src', 'views', 'not_found.html'))
  })
}