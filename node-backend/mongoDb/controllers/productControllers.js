const Product = require('../models/productModel')

const CRUD ={
    async createProduct(req,res){
        try{
            const product = new Product(req.body);
            await product.save();
            res.status(201).json(product);
        }
        catch(error){
            res.status(400).json({ error: error.message });
        }
    },

    async getProducts(req,res){
        try{
            const products =  await Product.find();
            res.status(201).json(products);
        }
        catch(error){
            res.status(400).json({ error: error.message }); 
        }
    }

}

module.exports = CRUD