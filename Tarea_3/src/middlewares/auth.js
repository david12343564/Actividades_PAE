const path = require('path')

function middleware(req, res, next) {
  console.log('pase por aqui')

  if (req.query.password === '12343564') {
    req.user = 'David'
    next()
  } else {
    res.status(401).sendFile(path.join(__dirname, '..', 'views', 'auth_fail.html'))
  }
}


module.exports = middleware