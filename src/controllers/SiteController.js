const Course = require('../models/Course')

class SiteController {
    async home(req, res) {
        try {
            const courses =
                await Course.find({}).lean()
            res.render('home', { courses })
        } catch (error) {
            console.log(error);
        }
    }

    async search(req, res) {
        try {
            const course =
                await Course.findOne({
                    name: req.query.query
                }).lean()
            res.render('search', { course })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new SiteController