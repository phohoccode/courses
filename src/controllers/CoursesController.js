const Course = require('../models/Course')

class CoursesController {
    async show(req, res) {
        try {
            const course =
                await Course.findOne({
                    slug: req.params.slug
                }).lean()
            res.render('course/show', { course })
        } catch (error) {
            console.log(error);
        }
    }

    create(req, res) {
        res.render('course/create')
    }

    async stored(req, res) {
        try {
            const formData = { ...req.body }
            formData.image =
                `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`
            const course = new Course(formData)
            await course.save()
            res.redirect('/me/stored/course')
        } catch (error) {
            console.log(error)
        }
    }

    async edit(req, res) {
        try {
            const course = await Course.findById({
                _id: req.params.id
            }).lean()
            res.render('course/edit', { course })
        } catch (error) {
            console.log(error)
        }
    }

    async update(req, res) {
        try {
            const formData = { ...req.body }
            formData.image =
                `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`
            await Course.updateOne({
                _id: req.params.id
            }, formData)
            res.redirect('/me/stored/course')
        } catch (error) {
            console.log(error)
        }
    }

    async delete(req, res) {
        try {
            await Course.deleteOne({ _id: req.params.id })
            res.redirect('back')
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = new CoursesController