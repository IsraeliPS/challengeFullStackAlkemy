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
            payload:token,
        })

    }catch(error){
        console.log(error)
        res.status(401).json({
            success:false,
            message:"Log in Failed",
            error:error.message
        })
        // res.status(401).json({
        //     success:false,
        //     message:error.message
        // })
    }


})

module.exports = router
