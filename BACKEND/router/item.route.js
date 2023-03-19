const express=require('express');
const router=express.Router();
const Item=require('../models/item.model');


//retriving data from database

router.get('/items',(req,res,next)=>{
    Item.find(function(err,mesg){
        if(err){
            res.json(err );
        }
        else{
            res.json(mesg);
        }
    })
   
});
//Inserting the data
router.post('/item',(req,res,next)=>{
    let newItem= new Item({
        id:req.body.id,
        name: req.body.name,
        price:req.body.price,
        rating:req.body.rating,
        imageurl: req.body.imageurl  
    })
    newItem.save((err,newItem)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json("item added sucessfully");
        }
    })
})
//delete the data
router.delete('/:id',(req,res,next)=>{

    Item.findByIdAndDelete({ _id: req.params.id }, (err, result) => {
        if (err)
            res.status(404).send(err);
        else
            res.status(200).send(result)
    })
})






module.exports=router;