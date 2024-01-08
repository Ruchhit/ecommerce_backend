import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

const connectToMongo = async()=>{
  try {
    const con = await mongoose.connect(`${process.env.MONGO_URI}`)
    console.log("connected to mongooo!!")
  } catch (error) {
    console.error(error)
  }
}
export {connectToMongo}