const Course = require('../models/Course')

class CoursesController {
    async show(req, res) {
        try {
            const course =
                await Course.findOne({
                    slug: req.params.slug
                }).lean()
            console.log(course)
            res.render('course/show', { course })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new CoursesController