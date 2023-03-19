const mongoose = require("mongoose");
const combinedSchema = mongoose.Schema({
  url: {
    type: String,
  },
  amt: {
    type: String,
    // required: true,
  },
  emailId: {
    type: String,
    // required: true,
  },
  couponCode: {
    type: String,
    // required: true,
  },
  couponCodeType: {
    type: String,
    // required: true,
  },
  couponLength: {
    type: String,
    // required: true,
  },
});
const Cart = (module.exports = mongoose.model("GiftCard", combinedSchema));
