const axios = require('axios')
const newsKey = '755b483e5e294ef0a32178fefd96e0b3'



module.exports = function (app) {
  app.get('/', function (req, res) {
    console.log("API works")
    res.render('home')
  })

  app.get('/search', function (req, res) {
    var url = 'https://newsapi.org/v2/everything?'
    news = []

    url += `q=${req.query.input}&apiKey=${newsKey}`
    axios.get(url).then(function (result) {
      news = result.data.articles
      res.render('search', {
        news: news,
      })
    }).catch(function (err) {
      console.log(err)
    })
  })

  app.get('*', function (req, res) {
    res.status(404).send("Pagina no encontrada")
  })
}