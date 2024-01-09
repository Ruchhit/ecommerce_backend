import { User } from "../models/user.model.js";

export const createUser = async(req,res)=>{
    const user = new User(req.body);
    try{
        const doc = await user.save();
        res.status(200).json(doc);
    }catch(err){
        res.status(500).json(err);
}
}