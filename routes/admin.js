const express = require('express');
const path = require('path');
const { postAddProductPage, getAddProductPage } = require('../controllers/admin/ProductController');

const router = express.Router();


router.get('/add', getAddProductPage);

router.post('/add', postAddProductPage);

module.exports = router;