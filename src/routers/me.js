const express = require('express')
const router = express.Router()

const meController = require('../controllers/MeController')

router.get('/stored/course', meController.storedCourse)

module.exports = router