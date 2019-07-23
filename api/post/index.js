const { parse } = require('url')

module.exports = (req, res) => {
  res.send({ challenge: req.body.challenge })
}
