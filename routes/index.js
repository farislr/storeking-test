const express = require('express')
const subRoutes = require('require-all')({
  dirname: __dirname,
  recursive: true,
})

let router = express.Router()

router.use('/dishes', subRoutes.dishRoutes)

module.exports = router
