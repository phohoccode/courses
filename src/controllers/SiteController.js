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
}

module.exports = new SiteController