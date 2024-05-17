import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

const signup= async (req,res)=>{
    const {username, email,password} =req.body;
    if (!username || !email || !password || username=== '' || email === '' || password ===''){
        return res.status(400).json({
            message:"Please fill all the fields"
        })
    }
    const hashpassword = bcryptjs.hashSync(password,10)

    const newUser = new  User({
        username,
        email,
        password : hashpassword,
    });

    try {
        await newUser.save();
        res.json("Signup successfull")
        
    } catch (error) {

        res.status(500).json({
            message:"Something went wrong"
        })
        
    }

    
}


export default signup