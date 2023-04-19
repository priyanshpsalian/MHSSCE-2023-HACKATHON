const express = require("express");

const router = express.Router();
const Order = require("../models/giftCard.model");
const nodemailer = require("nodemailer");
const mailer = "newbiesthealgorithmic@gmail.com";
const code = "Gift100";
router.post("/",async (req, res) => {
  console.log(req.body);
  let newOrder = new Order({
    url: req.body.productURL,
    amt: req.body.maxAmount,
    emailId: req.body.receiverEmail,
    couponCode: req.body.couponCode,
    couponCodeType: req.body.couponCodeType,
    couponLength: req.body.couponLength,
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
    to: `priyanshpsalian@gmail.com, ${req.body.receiverEmail}`, // list of receivers
    subject: "Coupon Recieved ✔", // Subject line
    text: `Your Coupon is ${code}`, // plain text body
    html: `<b>Your Coupon is ${code}</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  newOrder.save((err, result) => {
    if (err) console.log(err);
    else res.status(200).send(result);
  });
});
router.get("/", (req, res) => {
  Order.find((err, result) => {
    if (err) res.status(404).send(err);
    else res.status(200).send(result);
  });
});
router.delete("/:id", (req, res) => {
  Order.findByIdAndDelete({ _id: req.params.id }, (err, result) => {
    if (err) res.status(404).send(err);
    else res.status(200).send(result);
  });
});
router.put("/updateGift/:id", async (req, res) => {
  try {
    console.log(req.body);
    let programId = req.params.id;
    
    const url=req.body.productURL;
    const amt= req.body.maxAmount;
    const emailId= req.body.receiverEmail;
    const couponCode = req.body.couponCode;
    const couponCodeType = req.body.couponCodeType;
    const couponLength = req.body.couponLength;
    
    // console.log("L");
    const update = await Order.findByIdAndUpdate(programId, {
      url,
      amt,
      emailId,
      couponCode,
      couponCodeType,
      couponLength,
    });
    res.status(201).send(update);
  } catch (e) {
    console.log(e);
  }
});
router.get("/get/:id", (req, res) => {
  let programId = req.params.id;
  Order.findOne({ _id: programId }, (error, user) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send({ user });
    }
  });
});
module.exports = router;
