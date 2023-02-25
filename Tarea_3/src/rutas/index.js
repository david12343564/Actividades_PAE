const router = require('express').Router()
const {
  auth
} = require('./../middlewares');

const rutaToby = require('./toby')
const rutaEstudio = require('./estudios')
const rutaAnime = require('./animes')

router.use('', auth);
router.use('/toby', rutaToby);
router.use('/estudios', rutaEstudio);
router.use('/animes', rutaAnime);

module.exports = router