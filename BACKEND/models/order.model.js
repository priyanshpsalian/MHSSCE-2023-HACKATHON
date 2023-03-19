const mongoose=require('mongoose');
const orderSchema=mongoose.Schema({
  
    ordername:{
        type:String
        
    },
  
    ordernumber:{
        type:Number
        
    },
  
    placeofsupply:{
        type:String
    },
    placeofdelivery:{
        type:String
    },
    price:{
        type:Number
    }
   
})
const Order=module.exports=mongoose.model('Order',orderSchema)