const mongoose=require('mongoose');
const itemSchema=mongoose.Schema({
    id:{
        type:Number
    },
    
    name:{
        type:String
    },
    
    price :{
        type:String
    },
   
    rating:{
        type:Number
    },
    imageurl:{
        type:String
    }
});
const Item=module.exports=mongoose.model('Item',itemSchema)