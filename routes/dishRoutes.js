const express = require('express')
const { Dish } = require('../models/all-models')
const { getAll, getById, create, update, drop } = require('../services/crud')

let router = express.Router()

router.get('/', getAll(Dish))
router.get('/:id', getById(Dish))
router.post('/add', create(Dish))
router.patch('/:id/update', update(Dish))
router.delete('/:id/delete', drop(Dish))

module.exports = router
