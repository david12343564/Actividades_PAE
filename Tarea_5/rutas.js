function running(req, res) {
  res.status(200).send("API works")
}

module.exports = function (app) {

  app.get('/', running)

  app.get('*', function (req, res) {
    res.status(404).send("Pagina no encontrada")
  })
}