'use strict'

const axios = require('axios')

const getAnualResult = (req, res, next) => {
  axios.get('https://private-afe609-testefront.apiary-mock.com/anual-result')
  .then(response => {
    if(response.status != 200)
      return {}

    return response.data
  })
  .catch(error => {
    return {error: error.message}
  })

  next({})
}

module.exports = {
  getAnualResult
}