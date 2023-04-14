import express from 'express'
import User from '../models/users';
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

const router = express.Router();

//LOGIN
export const Login = async (req,res,next) =>{
    try{
        const user = User.findOne({ username : req.body.username});
        if(!user){
            res.status(400).send("User Not Found");
        }
        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT
          );
      
          const { password, isAdmin, ...otherDetails } = user._doc;
          res
            .cookie("access_token", token, {
              httpOnly: true,
            })
            .status(200)
            .json({ details: { ...otherDetails }, isAdmin });
    }catch(error){
        next(error);
    }
}

//REGISTER
export const Register = async(req,res,next)=>{
    
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            ...req.body,
            password: hash,
        })
        await newUser.save();
        res.status(200).send("New User Created!")

    }catch(error){
        next(error);
    }
}
