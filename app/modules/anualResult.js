'use strict'

const axios = require('axios')

const getAnualResult = async (req, res, next) => {
  await axios.get('https://private-afe609-testefront.apiary-mock.com/anual-result')
  .then(response => {
    if(response.status != 200)
      return {error: 'Sistema indisponível, tente mais tarde.'}

    return response.data
  }).then(data => {
    res.json(data)
  })
  .catch(error => {
    return {error: error.message}
  })

  next({})
}

module.exports = {
  getAnualResult
}