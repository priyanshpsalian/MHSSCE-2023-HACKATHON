const express = require("express");

const router = express.Router();
const Cart = require("../models/api.model");
const UserSpecific = require("../models/userSpecific.model");
const ProgramType = require("../models/program_type.model");
const GiftCard = require("../models/giftCard.model");
const RecommedData={
    "couponCode" : "GET100",
    "product" : "Realme Watch SE Screen Gaurd",
    "category" : "Electronics",
    "discount" : "500"
}

router.post("/post/:id", (req, res) => {
  let newCart = new Cart({
    userId: req.body.CustomerId,
    type: req.body.type,
    // companyUniqueId: req.body.companyUniqueId,
    // balance: req.body.balance,
    data: req.body.data,
  });
  newCart.save((err, result) => {
    if (err) console.log(err);
    else res.status(200).send(RecommedData);
  });
});
router.delete("/:id", (req, res) => {
  Cart.findByIdAndDelete({ _id: req.params.id }, (err, result) => {
    if (err) res.status(404).send(err);
    else res.status(200).send(result);
  });
});
router.get("/:id/:code",async (req, res) => {
  const id = req.params.id;
  const code = req.params.code;
  console.log(id);
  console.log(code);
  //   Cart.find((err, result) => {
  //     if (err) res.status(404).send(err);
  //     else res.status(200).send(result);
  //   });
  var found = false;
  var data;
  const myObj = new Object();
  
  await UserSpecific.find({ couponCode: code }, function (err, docs) {
    if (err) {
      console.log(err);
    } else if (docs[0]) {
      //   console.log("First function call : ", docs);

      found = true;
      data = docs[0];
      console.log(found);
      res.send(data);
      //   console.log(data);
    } else {
      console.log("not found");
    }
  });
  await ProgramType.find({ couponCode: code }, function (err, docs) {
    if (err) {
      console.log(err);
    } else if (docs[0]) {
      //   console.log("First function call : ", docs);
      found = true;
      data = docs[0];
      console.log(found);
      res.send(data);
      //   console.log(data);
    } else {
      console.log("not found");
    }
  });
  await GiftCard.find({ couponCode: code }, function (err, docs) {
    if (err) {
      console.log(err);
    } else if (docs[0]) {
      //   console.log("First function call : ", docs);
      found = true;
      data = docs[0];
      console.log(found);
      res.send(data);
      //   console.log(data);
    } else {
      console.log("not found");
    }
  });
  if(!found){
    console.log(found);
    res.send("not found")
  }
  else{
    console.log("Found");
  }
});
module.exports = router;
