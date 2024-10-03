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

            if(!product){return res.status(200).json({message:'no product'})}

        }catch(error){
            res.status(400).json({message:`this is the error: ${error}`})
        }
    },
    async getProductByName(req,res){

        try{
        const product = await Product.find(
            {productName:{$regex:req.params.name,$options:'i'}}
        )

        if (product.length === 0){
            return res.status(400).json({message:"enter a value"})
        }

        res.status(200).json(product)
        }catch(error){
            res.status(400).json({message:`this is the error: ${error}`})
        }
    },
    async updateProductByName(req,res){
        try{
            if(!req.body){ return res.status(404).json({message:"enter a value"}) }

            const product = await Product.findOneAndUpdate({
               productName:{$regex:req.params.name,$options:"i"} 
            },req.body,
            {new:true,
             runValidators:true}
            )
            res.status(200).json(product)
        
        }catch(error){
            res.status(400).json({message:error})
        }
    },
    async deleteproductByName(req,res){
        try{
            const product = await Product.findOneAndDelete({
                productName:{$regex:req.params.name, $options:"i"}
            })

            if(!product){ return res.status(404).json('no user') }

            res.status(200).json({message:"product has been deleted", product})
        }catch(error){
            res.status(400).json({message:error})
        }
    }


}

module.exports = CRUD