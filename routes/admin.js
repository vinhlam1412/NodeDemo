const express = require('express');
const path = require('path');
//const { route } = require('./home');
const rootDir = require('../untils/path')
const productsData = require('../untils/products')

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'User.html'))
})


router.get('/add', (req, res) => {
    const viewsData = {
        pageTitle: 'Add Product'
    }
    res.render('AddProduct', viewsData)
})
router.post('/add', (req, res) => {
    const product = {
        title: req.body.title,
    };
    productsData.addProduct(product)
    res.redirect('/');
})
module.exports = router;