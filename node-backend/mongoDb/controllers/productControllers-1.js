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
    },

    async getProductId(req,res){
        try{
            const product = await Product.findById(req.params.id);
            res.status(200).json({product})

            if(!product){res.status(200).json({message:'no product'})}

        }catch(error){
            res.status(400).json({message:`this is the error: ${error}`})
        }
    },
    async getProductByName(req, res) {
        try {
            // Perform a case-insensitive search for products whose names contain the search string
            const products = await Product.find({
                productName: { $regex: req.params.name, $options: 'i' }
            });

            if (products.length === 0) {
                return res.status(404).json({ message: "No products found" });
            }

            res.status(200).json({ products });
        } catch (error) {
            res.status(400).json({ message: `This is the error: ${error}` });
        }
    },


}

module.exports = CRUD