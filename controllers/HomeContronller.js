const { products } = require("../untils/products")


exports.getHomePage = (req, res) => {
    const viewsData = {
        products,
        pageTitle: 'Home Page - Products List',
    }

    res.render('homepage', viewsData)
}