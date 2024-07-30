const Course = require('../models/Course')

class MeController {
    async storedCourse(req, res) {
        const [course, countCourseDeleted] = await Promise.all([
            Course.find({}).lean(),
            Course.countDocumentsWithDeleted({ deleted: true })
        ])
        res.render('me/storedCourse', { course, countCourseDeleted })
    }

    async trashCourse(req, res) {
        try {
            const course =
                await Course.findWithDeleted({ deleted: true }).lean()
            res.render('me/trashCourse', { course })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new MeController