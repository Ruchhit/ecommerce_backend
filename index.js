import express from "express";
const server = express();
 import { connectToMongo } from "./Database/database.config.js"; 
 import { router } from "./routes/product.route.js";

 server.use(express.json())
 
 connectToMongo()
 .then(()=>{server.listen(8080,()=>{
    console.log("server created")
})})
.catch(()=>{console.log("Failed to connect to Mongo")})

 server.use("/products",router)
