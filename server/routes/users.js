const express = require('express');
const router = express.Router();
const { User } = require('../models/User');
const { auth } = require('../middleware/auth');
const { Event } = require('../models/Event');
const moment = require('moment');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//=================================
//             User
//=================================

router.get('/auth', auth, (req, res) => {
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

router.post('/register', (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

router.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        loginSuccess: false,
        message: 'Auth failed, email not found',
      });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({ loginSuccess: false, message: 'Wrong password' });
      }

      const userId = user._id;
      const oneHour = moment().add(1, 'hour').valueOf();

      const token = jwt.sign(
        { exp: oneHour, userId: userId },
        process.env.JWT_SECRET,
      );

      res.cookie('w_auth', token).status(200).json({ loginSuccess: true });
    });
  });
});

router.get('/logout', auth, (req, res) => {
  return res.cookie('w_auth', '').status(200).json({ logoutSuccess: true });
});

router.post('/add-to-cart', auth, (req, res) => {
  let duplicate = false;
  let itemQuantity = parseInt(req.body.quantity);

  // 상품 중복 확인
  User.findOne({ _id: req.user._id }, (err, userInfo) => {
    userInfo.cart.forEach(item => {
      if (item.id === req.body.eventId) {
        duplicate = true;
      }
    });

    // 이벤트(상품)가 중복일 때 (같은 상품이 있을 때)
    if (duplicate) {
      User.findOneAndUpdate(
        { _id: req.user._id, 'cart.id': req.body.eventId },
        { $inc: { 'cart.$.quantity': itemQuantity } },
        { new: true },
        (err, userInfo) => {
          if (err) return res.status(400).json({ success: false, err });
          res.status(200).json({ success: true, cart: userInfo.cart });
        },
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
        },
      );
    }
  });
});

router.post('/remove-cart-item', auth, (req, res) => {
  let eventId = req.body.eventId;

  User.findOneAndUpdate(
    { _id: req.user._id },
    { $pull: { cart: { id: eventId } } },
    { new: true },
    (err, userInfo) => {
      let cart = userInfo.cart;
      let newCart = cart.map(item => {
        return item.id;
      });

      Event.find({ _id: { $in: newCart } })
        .populate('host')
        .exec((err, eventInfo) => {
          if (err) return res.status(400).json({ success: false, err });
          res.status(200).json({ success: true, eventInfo, cart });
        });
    },
  );
});

router.post('/payment-success', auth, (req, res) => {
  let history = [];

  let cartDetail = req.body.cartDetail;

  cartDetail.forEach(item => {
    history.push({
      id: item._id,
      dateOfBuy: Date.now(),
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    });
  });

  User.findOneAndUpdate(
    { _id: req.user._id },
    { $push: { history: history }, $set: { cart: [] } },
    { new: true },
    (err, user) => {
      if (err) return res.json({ success: false, err });
      res.status(200).json({ success: true, cart: user.cart, cartDetail: [] });
    },
  );
});

module.exports = router;
