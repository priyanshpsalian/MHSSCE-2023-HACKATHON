const mongoose = require("mongoose");
const programTypeSchema = mongoose.Schema({
  programName: {
    type: String,
  },
  couponType: {
    type: String,
  },
  couponLength: {
    type: String,
  },
  couponCode: {
    type: String,
  },
  usage: {
    type: {
      type: String,
    },
    limit: {
      type: Number,
    },
  },
  minPurchase: {
    type: Number,
  },
  maxDiscount: {
    type: Number,
  },
  porductType: {
    type: String,
  },
  reward: {
    type: {
      type: String,
    },
    amount: {
      type: Number,
    },
  },
  used: {
    type: Number,
  },
  expiryDate: {
    year: {
      type: Number,
    },
    month: {
      type: Number,
    },
    day: {
      type: Number,
    },
  },
});
const Cart = (module.exports = mongoose.model(
  "UserSpecific",
  programTypeSchema
));
