const Course = require('../models/Course')

class CoursesController {
    async show(req, res) {
        try {
            const courses = await Course.findOne({
                slug: req.params.slug
            }).lean()
            res.render('course/show', { courses })
        } catch (error) {
            console.log(error);
        }
    }

    async create(req, res) {
        try {
            const courses = await Course.find({}).lean()
            res.render('course/create', { courses })
        } catch (error) {
            console.log(error)
        }
    }

    async createVideo(req, res) {
        try {
            const courses = await Course.find({}).lean()
            res.render('course/createVideo', { courses })
        } catch (error) {
            console.log(error)
        }
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

    async storedVideo(req, res) {
        try {
            const { title, videoId, courseId } = req.body
            const videoData = {
                videoId,
                title,
                image: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
            }

            await Course.updateOne(
                { _id: courseId },
                { $push: { videos: videoData } }
            )

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
            await Course.delete({ _id: req.params.id })
            res.redirect('back')
        } catch (error) {
            console.log(error)
        }
    }

    async restore(req, res) {
        try {
            await Course.restore({ _id: req.params.id })
            res.redirect('back')
        } catch (error) {
            console.log(error)
        }
    }

    async forceDelete(req, res) {
        try {
            await Course.deleteOne({ _id: req.params.id })
            res.redirect('back')
        } catch (error) {
            console.log(error)
        }
    }

    async handleFormActions(req, res) {
        try {
            switch (req.body.action) {
                case 'delete': {
                    await Course.delete({
                        _id: {
                            $in: req.body.courseIds
                        }
                    })
                    res.redirect('back')
                    break
                }

                case 'restore': {
                    await Course.restore({
                        _id: {
                            $in: req.body.courseIds
                        }
                    })
                    res.redirect('back')
                    break
                }

                case 'forceDelete': {
                    await Course.deleteMany({
                        _id: {
                            $in: req.body.courseIds
                        }
                    })
                    res.redirect('back')
                    break
                }

                default: console.log('Action isValid!')
            }
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = new CoursesController