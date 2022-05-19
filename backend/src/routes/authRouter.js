const express = require("express")
const router = express.Router()

const user= require('../usecases/user')

router.post("/",async(req,res,next)=>{
    const {email,password} = req.body
    try{
        const token = await user.logIn(email,password)
        res.status(200).json({
            success:true,
            message:"Log in Succesful",
            token:token,
        })
    }catch(error){
        res.status(401).json({
            success:false,
            message: "Autentication Failed, Password or User name invalid"

        })
        next(error)
    }


})

module.exports = router