const express=require('express');
const bodyparser = require('body-parser')
const mongoose=require('mongoose');
const cors=require('cors');
//const config=require('config');
const app=express();
const user=require('./router/user');
app.use(bodyparser.json());

app.use('/user',user)
app.get('/',function(req,res){
    res.send('Hello from the server');
});
const corsOpts = {
  origin: "*",

  methods: ["GET", "POST", "PUT", "DELETE"],

  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOpts));
//Router connection
const itemRouter=require('./router/item.route');
const orderRouter=require('./router/order.router');
const companyRouter = require("./router/company.router");
const ProductTypeRouter = require("./router/programType.router");
const dynamicCouponRouter=require("./router/dynamicCoupon.router")
const UserSpecificRouter = require("./router/userSpecific.router");
const GiftCardRouter = require("./router/giftCard.router");
const MerchantRouter = require("./router/api.router");
mongoose
  .connect("mongodb://localhost:27017/SmartHire", {
    // .connect("mongodb+srv://hemloworld:1234@cluster0.rcn3htc.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log(`connection to mongo db is successfull`);
  })
  .catch((e) => {
    console.log(`no connection`, e);
  });
app.use(cors());


app.use(express.json());
app.use('/sree',itemRouter);
// app.use('/api',orderRouter);
app.use("/productType", ProductTypeRouter);
app.use("/company", companyRouter);
app.use("/dynamicCoupon", dynamicCouponRouter);
app.use("/UserSpecific", UserSpecificRouter);
app.use("/GiftCard", GiftCardRouter);
app.use("/api", MerchantRouter);
//For port connection
const port=process.env.PORT||3001
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
