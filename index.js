import express from "express";
const server = express();
 import { connectToMongo } from "./Database/database.config.js";
import { createProduct } from "./controllers/product.controller.js";

 connectToMongo()
 .then(()=>{server.listen(8080,()=>{
    console.log("server created")
})})
.catch(()=>{console.log("Failed to connect to Mongo")})


server.use(express.json());
server.get("/", (req, res) => {
    res.send("jdjdj");})
    
server.post("/products", createProduct)
 
