import express from "express";
const server = express();
 import { connectToMongo } from "./Database/database.config.js"; 
 import { router as productRouter}  from "./routes/product.route.js";
import {router as categoryRouter} from "./routes/category.route.js"; 
import {router as brandRouter} from "./routes/brand.route.js";
import { userRouter } from "./routes/user.route.js";
import { authRouter } from "./routes/auth.route.js";
import { cartRouter } from "./routes/cart.route.js";
 
server.use(express.json())
 
 connectToMongo()
 .then(()=>{server.listen(8080,()=>{
    console.log("server created")
})})
.catch(()=>{console.log("Failed to connect to Mongo")})

 server.use("/products",productRouter)
 server.use("/categories",categoryRouter)
 server.use("/brands",brandRouter)
 server.use("/users",userRouter)
 server.use("/auth",authRouter)
 server.use("/cart",cartRouter)
