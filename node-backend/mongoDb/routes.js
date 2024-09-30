const express = require('express')
const router = express.Router()
const productController = require('./controllers/productControllers');
const registerController = require('./controllers/registerControllers')

router.post('/profile', registerController.handleNewUser)

router.get('/product', productController.getProducts)
router.post('/product',productController.createProduct)

router.get(('/first'),(req,res) => {
    res.send('hello mongo')

}
)

module.exports = router