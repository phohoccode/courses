const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/blog_dev')
        console.log('Connect succeessfully!')
    } catch (error) {
        console.log('Connect failure!', error)
    }
}

module.exports = { connect }