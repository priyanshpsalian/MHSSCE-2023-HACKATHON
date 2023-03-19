const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');
const User=require('../models/user.model')

router.get('/',(req,res)=>{
    res.send('from api route');
})

router.post('/register',(req,res)=>{
    let userData=req.body;
    let user =new User(userData)
    user.save((error,registeredUser)=>{
        if(error){
            console.log(error);
        }else{
            let payload={subject:registeredUser._id}
            let token=jwt.sign(payload,'secretkey')
            res.status(200).send({token})
        }
    });
    
})

router.post('/login',(req,res)=>{
    let userData=req.body;
  User.findOne({email:userData.email},(error,user)=>{
      if(error){
          console.log(error);
      }else{
          if(!user){
              res.status(401).send('Invalid email');
          }else{
              if(user.password!==userData.password){
                  res.status(401).send('Invalid password');
              }else{
                let payload={subject:user._id}
                let token=jwt.sign(payload,'secretkey')
                res.status(200).send({token})
                
              }
          }
      }
  })
    
})

module.exports=router