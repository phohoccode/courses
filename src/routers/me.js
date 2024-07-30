const express = require('express')
const router = express.Router()

const meController = require('../controllers/MeController')

router.get('/stored/course', meController.storedCourse)
router.get('/trash/course', meController.trashCourse)

module.exports = router