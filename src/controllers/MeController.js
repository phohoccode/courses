const Course = require('../models/Course')

class MeController {
    async storedCourse(req, res) {
        const [courses, countCourseDeleted] = await Promise.all([
            Course.find({}).lean(),
            Course.countDocumentsWithDeleted({ deleted: true })
        ])
        res.render('me/storedCourse', { 
            courses, 
            countCourseDeleted
        })
    }

    async trashCourse(req, res) {
        try {
            const courses =
                await Course.findWithDeleted({ deleted: true }).lean()
            res.render('me/trashCourse', { courses })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new MeController