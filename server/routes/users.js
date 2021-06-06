const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const { auth } = require("../middleware/auth");
const { Event } = require("../models/Event");

//=================================
//             User
//=================================

router.get("/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
    isHost: req.user.host === 0 ? false : true,
    cart: req.user.cart,
    history: req.user.history,
  });
});

router.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        loginSuccess: false,
        message: "Auth failed, email not found",
      });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "Wrong password" });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("w_authExp", user.tokenExp);
        res.cookie("w_auth", user.token).status(200).json({
          loginSuccess: true,
          userId: user._id,
        });
      });
    });
  });
});

router.get("/logout", auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { token: "", tokenExp: "" },
    (err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true,
      });
    }
  );
});

router.post("/add-to-cart", auth, (req, res) => {
  let duplicate = false;
  let itemQuantity = parseInt(req.body.quantity);

  // 상품 중복 확인
  User.findOne({ _id: req.user._id }, (err, userInfo) => {
    userInfo.cart.forEach((item) => {
      if (item.id === req.body.eventId) {
        duplicate = true;
      }
    });

    // 이벤트(상품)가 중복일 때 (같은 상품이 있을 때)
    if (duplicate) {
      User.findOneAndUpdate(
        { _id: req.user._id, "cart.id": req.body.eventId },
        { $inc: { "cart.$.quantity": itemQuantity } },
        { new: true },
        (err, userInfo) => {
          if (err) return res.status(400).json({ success: false, err });
          res.status(200).json({ success: true, cart: userInfo.cart });
          // console.log("중복일 때: ", userInfo.cart.quantity);
        }
      );

      // 이벤트(상품)가 중복이 아닐 때 (상품이 없을 때)
    } else {
      User.findOneAndUpdate(
        { _id: req.user._id },
        {
          $push: {
            cart: {
              id: req.body.eventId,
              quantity: itemQuantity,
              date: Date.now(),
            },
          },
        },
        { new: true },
        (err, userInfo) => {
          if (err) return res.status(400).json({ success: false, err });
          res.status(200).json({ success: true, cart: userInfo.cart });
          // console.log("중복이 아닐 때: ", userInfo.cart.quantity);
        }
      );
    }
  });
});

router.post("/remove-cart-item", auth, (req, res) => {
  let eventId = req.body.eventId;

  User.findOneAndUpdate(
    // auth에서 갖고온 userId
    { _id: req.user._id },
    { $pull: { cart: { id: eventId } } },
    { new: true },
    (err, userInfo) => {
      let cart = userInfo.cart;
      let newCart = cart.map((item) => {
        return item.id;
      });

      Event.find({ _id: { $in: newCart } })
        .populate("host")
        .exec((err, eventInfo) => {
          if (err) return res.status(400).json({ success: false, err });
          res.status(200).json({ success: true, eventInfo, cart });
        });
    }
  );
});

module.exports = router;
