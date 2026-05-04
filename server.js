const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const passport = require('passport')
const session = require('express-session')
const connectDB = require('./config/db')

// Load config
dotenv.config({ path: './config/config.env' })

// Passport config
require('./config/passport')(passport)

const PORT = process.env.PORT || 3000
const app = express()

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

connectDB()

// Handlebars
app.engine(
    'hbs',
    engine({
        extname: 'hbs',
        defaultLayout: 'main',
        layoutsDir: './views/layouts',
    })
)
app.set('view engine', 'hbs')

// Sessions middleware *** Must be above Passport middleware ***
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
}))

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use('/', require('./routes/index'))


app.listen(
    PORT,
    '0.0.0.0',
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)










// const terpeneData = {
//     'unknown': {
//         id: 0,
//         'aroma': 'unknown',
//         'effects': 'unknown',
//     },
//     'myrcene': {
//         id: 1,
//         'aroma': 'Earthy, Musky, Cloves',
//         'effects': ['Relaxing', 'Sedating'],
//     },
//     'limonene': {
//         id: 2,
//         'aroma': 'Citrus, Lemon, Orange',
//         'effects': ['Mood Elevation', 'Stress Relief'],
//     },
//     'caryophyllene': {
//         id: 3,
//         'aroma': 'Peppery, Spicy, Wood',
//         'effects': ['Anti-inflammatory', 'Anxiety Relief'],
//     },
//     'linalool': {
//         id: 4,
//         'aroma': 'Floral, Lavender',
//         'effects': ['Calming', 'Sleep Aid'],
//     },
//     'pinene': {
//         id: 5,
//         'aroma': 'Pine, Sharp, Sweet',
//         'effects': ['Alertness', 'Memory Retention'],
//     },
// }



