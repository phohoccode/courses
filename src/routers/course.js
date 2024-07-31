const express = require('express')
const router = express.Router()

const courseController = require('../controllers/CoursesController')

router.get('/create', courseController.create)
router.get('/createVideo', courseController.createVideo)
router.post('/stored', courseController.stored)
router.post('/storedVideo', courseController.storedVideo)
router.get('/:id/edit', courseController.edit)
router.put('/:id', courseController.update)
router.patch('/:id/restore', courseController.restore)
router.delete('/:id', courseController.delete)
router.delete('/:id/force', courseController.forceDelete)
router.post('/handle-form-actions', courseController.handleFormActions)
router.get('/:slug', courseController.show)

module.exports = router
