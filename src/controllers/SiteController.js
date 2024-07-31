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
        const { query } = req.query
        try {
            const courses = await Course.find({
                // $or tìm kiếm theo nhiều tiêu chí
                $or: [
                    { name: new RegExp(query, 'i') },
                ]
            }).lean()
            res.render('search', { courses, query })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new SiteController