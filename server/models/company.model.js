const mongoose=require('mongoose');
const companySchema = mongoose.Schema({
  companyName: {
    type: String,
  },
  companySite: {
    type: String,
  },
  companyUniqueId: {
    type: String,
  },
  balance: {
    type: Number,
  },
});
const Cart = (module.exports = mongoose.model("Company", companySchema));