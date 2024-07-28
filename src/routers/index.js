const siteRouter = require('./site')
const courseRouter = require('./course')

function route(app) {
    app.use('/', siteRouter)
    app.use('/course', courseRouter)
}

module.exports = route