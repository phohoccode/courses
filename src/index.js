const express = require('express')
const { engine } = require('express-handlebars');
const methodOverride = require('method-override')
const path = require('path')

const route = require('./routers')
const database = require('./config/database')

const app = express()
const port = 3000

database.connect()

// phân tích cú pháp dữ liệu từ form
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//
app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, 'public')))


// express handlebars
app.engine('hbs', engine({
    extname: '.hbs',
    helpers: require('./helpers')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app)

app.listen(
    port, () => 
        console.log(`http://localhost:${port}`))