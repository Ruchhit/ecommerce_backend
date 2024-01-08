import { Product } from "../models/product.model.js";

export const createProduct = async(req,res)=>{
    const product =  new Product(req.body);
    // product.discountPrice = Math.round(product.price * (1 - product.discountPercentage/100));
    try{
        const doc = await product.save();
        res.status(201).json(doc);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}