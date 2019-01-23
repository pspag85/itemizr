const path = require('path')
const express = require('express')
const volleyball = require('volleyball')
const app = express()
module.exports = app
const PORT = 5000

app.use(volleyball)

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(PORT, () => console.log(`Listening on port ${PORT} http://localhost:${PORT}/`))

app.use(express.static('../public'))

app.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    res.status(404).end()
  } else {
    next()
  }
})

app.get('*', (req, res, next) => {
  res.sendFile('C:/Users/pat/Desktop/Spring 2019/CartWizard/public/index.html')
})

app.use((err, req, res, next) => {
  console.error(err, typeof next)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})
