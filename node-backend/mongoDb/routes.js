const express = require('express')
const router = express.Router()
const productController = require('./controllers/productControllers');
const registerController = require('./controllers/registerControllers')
const authController = require('./controllers/authController')
const jwtVerification = require('./middleware/verifyJWT')
const logoutController = require('./controllers/logoutController')

router.post('/profile', registerController.handleNewUser)
router.post('/login',authController.handleLogin)
router.post('/logout', logoutController.logout )

// router.get('/product', jwtVerification ,productController.getProducts)
// router.post('/product',productController.createProduct)

router.route('/product') 
    .get(productController.getProducts)
    .post(productController.createProduct)

router.route('/product/:id')
    .get(productController.getProductId)

router.route('/product/name/:name')
    .get(productController.getProductByName)
    .post(productController.updateProductByName)
    .delete(productController.deleteproductByName)


router.get(('/first'),(req,res) => {
    res.send('hello mongo')

}
)

module.exports = router

/* 
 "_id": "66f82650e8dbaf20fb15f937"
  "_id": "66f83102c059d781a2ffc925"
*/