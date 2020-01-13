const path = require('path')
const express = require('express')
const session = require('express-session')
const {secret} = require('../secrets')
const volleyball = require('volleyball')
const app = express()
const PORT = process.env.PORT || 5000
const {db} = require('./db')
const bodyParser = require('body-parser')
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware'); //webpack hot reloading middleware
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);

app.use(require("webpack-hot-middleware")(compiler, {
  'log': false,
  'path': '/__webpack_hmr',
  'heartbeat': 10 * 1000
}));

app.use(middleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(volleyball)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: false
}))

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/api', require('./api'))

app.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    res.status(404).end()
  } else {
    next()
  }
})

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

app.use((err, req, res, next) => {
  console.error(err, typeof next)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

const init = (async () => {
  try {
    await db.sync({force: true})
    db.authenticate().then(() => console.log('Connected to the Database'))
    app.listen(PORT, () => console.log(`Server Listening on http://localhost:${PORT}`))
  } catch(err) {
    console.log('Error Syncing to Database')
    console.error(err)
  }
})()

module.exports = app