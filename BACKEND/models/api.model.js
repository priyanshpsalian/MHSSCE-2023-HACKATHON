const mongoose = require("mongoose");
const companySchema = mongoose.Schema({
  userId: {
    type: String,
  },
  type: {
    type: String,
  },
  companyUniqueId: {
    type: String,
  },
  balance: {
    type: String,
  },
  data: {
    type: Array,
  },
});
const Cart = (module.exports = mongoose.model("Api", companySchema));
