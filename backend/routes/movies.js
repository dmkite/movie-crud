const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/movies')

router.get('/', ctrl.getAllMovies)

module.exports = router