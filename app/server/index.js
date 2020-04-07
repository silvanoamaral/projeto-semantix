'use strict'

const express    = require('express')
const path       = require('path')

const app = express()
const port = process.env.PORT || 5002

const { getAnualResult } = require('../modules/anualResult')

app.use('/api/anual-result', getAnualResult)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'))

  app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'dist','index.html'))
  })
}

app.listen(port, () => console.log(`Listening on port http://localhost:${port}`))