import User from '../models/users.js'
import bcrypt from 'bcrypt'


//CREATE USER
export const createUser = async(req,res)=>{
    
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync( req.body.password, salt);
        const newUser = new User({
            ...req.body,
            password: hash
        })
        await newUser.save();
        res.status(200).send("New User Created!")

    }catch(error){
        res.status(400).send(error)
    }
}
//EDIT USER
export const updateUser = async (req,res)=>{
    try{

        const updatedUser = await User.findByIdAndUpdate(
            { _id:req.params.id},
            {$set: req.body})
        if(req.body.password){
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync( req.body.password, salt);
            const updatedUserPass = await User.findByIdAndUpdate(
                { _id:req.params.id},
                {$set: {password:hash}})
        }
        res.status(200).send("USER UPDATED")
    }catch(error){
        res.status(400).send(error.message)
    }
}
//DELETE USER
export const deleteUser = async (req,res)=>{
    try{
        const deletedUser = await User.findByIdAndDelete({ _id : req.params.id })
        res.status(200).send("USER DELETED")
    }catch(error){
        res.status(400).send(error)
    }
}
//VIEW SPECIFIC USER
export const getUser = async (req,res)=>{
    try{
        const renderedUser = await User.findOne({ _id : req.params.id})
        res.status(200).send(renderedUser)
    }catch(error){
        res.status(400).send(error)
        
    }
}
//VIEW ALL USERS
export const getAllUsers = async (req,res)=>{
    try{
        const allUsers = await User.find()
        res.status(200).send(allUsers)
    }catch(error){
        res.status(400).send(error)
    }
}