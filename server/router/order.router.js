
const express=require('express');

const router=express.Router();
const Order=require('../models/order.model')

router.post('/',(req,res)=>{
    let newOrder=new Order({
        
        ordername:req.body.ordername,
        ordernumber:req.body.ordernumber,
        price:req.body.price,
        placeofdelivery:req.body.placeofdelivery,
        placeofsupply:req.body.placeofsupply

      
      
       
    })
    newOrder.save((err,result)=>{
        if(err) console.log(err);
        else res.status(200).send(result)
    })
})
router.get('/',(req,res)=>{
    
    Order.find((err,result)=>{
        if(err)
         res.status(404).send(err);
         else
         res.status(200).send(result)
    })
})
router.delete('/:id',(req,res)=>{
            
    Order.findByIdAndDelete({_id:req.params.id},(err,result)=>{
        if(err)
         res.status(404).send(err);
         else
         res.status(200).send(result)
    })
    
})
module.exports=router;