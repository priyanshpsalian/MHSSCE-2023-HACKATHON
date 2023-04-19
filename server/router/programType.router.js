const express = require("express");

const router = express.Router();
const Cart = require("../models/program_type.model");

router.post("/", (req, res) => {
    console.log(req.body);
  let newCart = new Cart({
    // id: req.body.id,
    // name: req.body.name,
    // price: req.body.price,
    // imageurl: req.body.imageurl,
    programName: req.body.promotionName,
    couponType: req.body.promotionType,
    onProductType: req.body.onProductType,
    targetAudience:req.body.targetAudience,
    couponLength:req.body.couponLength,
    couponCodeType:req.body.couponCodeType,
    couponCode:req.body.couponCode,
    validity: req.body.expiryDate,
    minPurchase: req.body.minPurchase,
    maxDiscount: req.body.maxDiscount,
    usage: req.body.usage,
    reward: req.body.reward,
  });
  newCart.save((err, result) => {
    if (err) console.log(err);
    else res.status(200).send(result);
  });
});
router.post("/dy", (req, res) => {
  console.log(req.body);
  let newCart = new Cart({
    // id: req.body.id,
    // name: req.body.name,
    // price: req.body.price,
    // imageurl: req.body.imageurl,
    programName: req.body.promotionName,
    couponType: req.body.promotionType,
    onProductType: req.body.category,
    targetAudience: req.body.discountType,
    couponLength: req.body.redemptions,
    couponCodeType: req.body.couponCodeType,
    couponCode: req.body.couponCode,
    validity: req.body.date,
    minPurchase: req.body.minPurchase,
    maxDiscount: req.body.maxDiscount,
    usage: req.body.usage,
    reward: req.body.discount,
  });
  newCart.save((err, result) => {
    if (err) console.log(err);
    else res.status(200).send(result);
  });
});
router.delete("/:id", (req, res) => {
  Cart.findByIdAndDelete({ _id: req.params.id }, (err, result) => {
    if (err) res.status(404).send(err);
    else res.status(200).send(result);
  });
});
router.get("/", (req, res) => {
  Cart.find((err, result) => {
    if (err) res.status(404).send(err);
    else res.status(200).send(result);
  });
});
router.put("/updateProgram/:id", async (req, res) => {
  try {
    // console.log("K");
    let programId = req.params.id;
    const {
      programName,
      programType,
      validity,
      limit,
      conditionalRules,
      rewards,
    } = req.body;
    // console.log("L");
    const update = await Cart.findByIdAndUpdate(programId, {
      programName,
      programType,
      validity,
      limit,
      conditionalRules,
      rewards,
    });
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
