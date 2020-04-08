'use strict'

const axios = require('axios')

const baseURL = 'https://private-afe609-testefront.apiary-mock.com'

const getDados = async (req, res, next) => {
  const path = req.query.path || 'anual-result'

  await axios.get(`${baseURL}/${path}`)
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
  getDados
}