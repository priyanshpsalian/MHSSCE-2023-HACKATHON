const express = require("express");

const router = express.Router();
const Cart = require("../models/dynamicCoupon.model");
router.post("/", (req, res) => {
  console.log(req.body);
  let newOrder = new Cart({
    redemption: req.body.redemption,
    promobudget: req.body.promobudget,
    minPurchase: req.body.minPurchase,
    maxDiscount: req.body.maxDiscount,
    minMargin: req.body.minMargin,
    porductType: req.body.porductType,
    returningCustomer: req.body.returningCustomer,
    newCustomer: req.body.newCustomer,
    preventCartAbandonment: req.body.preventCartAbandonment,
  });
  newOrder.save((err, result) => {
    if (err) console.log(err);
    else res.status(200).send(result);
  });
});
router.get("/", (req, res) => {
  Cart.find((err, result) => {
    if (err) res.status(404).send(err);
    else res.status(200).send(result);
  });
});
router.delete("/:id", (req, res) => {
  Cart.findByIdAndDelete({ _id: req.params.id }, (err, result) => {
    if (err) res.status(404).send(err);
    else res.status(200).send(result);
  });
});
router.put("/updateGift/:id", async (req, res) => {
  try {
    // console.log(req.body);
    // console.log("K");
    let programId = req.params.id;

    // const url = req.body.productURL;
    // const amt = req.body.maxAmount;
    // const emailId = req.body.receiverEmail;
    // console.log("L");
    const update = await Cart.findByIdAndUpdate(programId, req.body);
    res.status(201).send(update);
  } catch (e) {
    console.log(e);
  }
});
router.get("/get/:id", (req, res) => {
  let programId = req.params.id;
  Cart.findOne({ _id: programId }, (error, user) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send({ user });
    }
  });
});
module.exports = router;
