const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../untils/path')
const productsData = require('..//untils/products')
router.get('/', (req, res) => {
    const viewsData = {
        products: productsData.products,
        pageTitle: 'Home Page - Products List',
    }

    res.render('homepage', viewsData)
})

module.exports = router;