const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const port = 3000
const rootDir = require('./untils/path')

app.set('view engine', 'ejs');
app.set('views ', 'views');

const adminRoutes = require('./routes/admin')
const homeRoutes = require('./routes/home')

app.set('view engine', 'ejs');
app.set('views', 'views')

//static files
app.use(express.static(path.join(rootDir, 'public')))
app.use('/css', express.static(path.join(rootDir, 'node_modules', 'bootstrap', 'dist', 'css')))
app.use(bodyParser.urlencoded({ extended: false }))

//routes
app.use('/products', adminRoutes)
app.use(homeRoutes)
app.use((req, res) => {
    const viewsData = {
        pageTitle: 'Page not found',
    }
    res.status(404).render('404', viewsData)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
