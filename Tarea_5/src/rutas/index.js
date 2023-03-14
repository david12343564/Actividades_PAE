const router = require('express').Router()
const rutasTarea = require('./tareas')

router.use('/tareas', rutasTarea)

module.exports = router