const express = require("express");

const router = express.Router();
const Cart = require("../models/userSpecific.model");
const nodemailer = require("nodemailer");
const mailer = "newbiesthealgorithmic@gmail.com";
const code = "UserCoupon12";
router.post("/", async(req, res) => {
  // console.log(req.body,"LLLL");
  let newCart = new Cart({
    programName: req.body.programName,
    couponType: req.body.couponType,
    couponLength: req.body.couponLength, 
    couponCode: req.body.couponCode,
    validity: req.body.validity,
    minPurchase: req.body.minPurchase,
    maxDiscount: req.body.maxDiscount,
    porductType: req.body.porductType,
    usage: req.body.usage,
    reward: req.body.reward,
    expiryDate: req.body.expiryDate,
  });
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "newbiesthealgorithmic@gmail.com",
      pass: "mdvktiuqpuawvojl",
    },
  });

  // send mail with defined transport object
  let code="zkdrinsd"
  let info = await transporter.sendMail({
    from: `"Coupon Studio 👻" <priyanshpsalian@gmail.com>`, // sender address
    to: `priyanshpsalian@gmail.com, ${req.body.programName}`, // list of receivers
    subject: "Coupon Recieved ✔", // Subject line
    text: `Your Coupon is ${code}`, // plain text body
    html: `<b>Your Coupon is ${code}</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
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
      couponType,
      couponLength,
      couponCode,
      validity,
      minPurchase,
      maxDiscount,
      porductType,
      usage,
      reward,
      expiryDate,
    } = req.body;
    // console.log("L");
    const update = await Cart.findByIdAndUpdate(programId, {
      programName,
      couponType,
      validity,
      minPurchase,
      maxDiscount,
      porductType,
      usage,
      reward,
      expiryDate,
      couponLength,
      couponCode,
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
