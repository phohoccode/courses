const express = require('express')
const router = express.Router()

const courseController = require('../controllers/CoursesController')

router.get('/create', courseController.create)
router.post('/stored', courseController.stored)
router.get('/:id/edit', courseController.edit)
router.put('/:id', courseController.update)
router.delete('/:id', courseController.delete)
router.get('/:slug', courseController.show)

module.exports = router
