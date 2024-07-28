const express = require('express')
const router = express.Router()

const courseController = require('../controllers/CoursesController')

router.get('/:slug', courseController.show)

module.exports = router
