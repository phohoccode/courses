const Course = require('../models/Course')

class MeController {
    async storedCourse(req, res) {
        const course = await Course.find({}).lean()
        res.render('me/storedCourse', { course })
    }
}

module.exports = new MeController