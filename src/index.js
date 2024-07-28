const express = require('express')
const { engine } = require('express-handlebars');
const path = require('path')
const route = require('./routers')
const database = require('./config/database')

const app = express()
const port = 3000

database.connect()

// express handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

route(app)

app.listen(
    port, () => 
        console.log(`http://localhost:${port}`))