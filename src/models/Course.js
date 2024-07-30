const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater')
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema

const CourseSchema = new Schema({
    name: { type: String, maxLenght: 255 },
    description: { type: String, maxLenght: 600 },
    image: { type: String, maxLenght: 255 },
    videoId: { type: String },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true
})

mongoose.plugin(slug)
CourseSchema.plugin(mongooseDelete, {
    deleleAt: true,
    overrideMethods: 'all',
})

module.exports = mongoose.model('Course', CourseSchema)