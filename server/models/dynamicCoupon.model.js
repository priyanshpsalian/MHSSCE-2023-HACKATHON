const mongoose = require("mongoose");
const combinedSchema = mongoose.Schema({
  redemption: {
    type: "String",
  },
  promobudget: {
    type: "String",
  },
  minPurchase: {
    type: "Number",
  },
  maxDiscount: {
    type: "Number",
  },
  minMargin: {
    type: "Number",
  },
  porductType: {
    type: "String",
  },
  returningCustomer: {
    type: "Boolean",
  },
  newCustomer: {
    type: "Boolean",
  },
  preventCartAbandonment: {
    type: "Boolean",
  },
});
const Cart = (module.exports = mongoose.model("dynamicCoupon", combinedSchema));
