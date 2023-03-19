const mongoose = require("mongoose");
const programTypeSchema = mongoose.Schema({
  // programName: {
  //   type: String,
  // },
  // programType: {
  //   type: String,
  // },
  // validity: {
  //   type: String,
  // },
  // limit: {
  //   type: String,
  // },
  // conditionalRules: {
  //   type: Array,
  //   items: {
  //     type: String,
  //   },
  // },
  // rewards: {
  //   type: String,
  // },
  programName: {
    type: String,
  },
  couponType: {
    type: String,
  },
  onProductType: {
    type: String,
  },
  targetAudience: {
    type: String,
  },
  couponLength: {
    type: String,
  },
  couponCodeType: {
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
    default: 78,
  },
  validity: {
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
  "ProgramType",
  programTypeSchema
));
