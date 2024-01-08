import { Product } from "../models/product.model.js";

export const createProduct = async(req,res)=>{
    const product =  new Product(req.body);
    product.discountPrice = Math.round(product.price * (1 - product.discountPercentage/100));
    try{
        const doc = await product.save();
        res.status(201).json(doc);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

export const fetchAllProducts = async (req, res) => {
    // filter = {"category":["smartphone","laptops"]}
    // sort = {_sort:"price",_order="desc"}
    // pagination = {_page:1,_limit=10}
   
    let query = Product.find({});
    let totalProductsQuery = Product.find({});
  
    console.log(req.query.category);
  
    if (req.query.category) {
      query = query.find( {category: req.query.category });
      totalProductsQuery = totalProductsQuery.find({ category: req.query.category});
    }
    if (req.query.brand) {
        query = query.find( {brands: req.query.brands });
        totalProductsQuery = totalProductsQuery.find({ brands : req.query.brands});
    }
    if (req.query._sort && req.query._order) {
      query = query.sort({ [req.query._sort]: req.query._order });
    }
  
    const totalDocs = await totalProductsQuery.count().exec();
    console.log({ totalDocs });
  
    if (req.query._page && req.query._limit) {
      const pageSize = req.query._limit;
      const page = req.query._page;
      query = query.skip(pageSize * (page - 1)).limit(pageSize);
    }
  
    try {
      const docs = await query.exec();
      res.set('X-Total-Count', totalDocs);
      res.status(200).json(docs);
    } catch (err) {
      res.status(400).json(err);
    }
  };