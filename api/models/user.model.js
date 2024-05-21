
import { timeStamp } from "console";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:1024
    }
    
},{timestamps:true})

const User =mongoose.model('User',userSchema);
export default User;