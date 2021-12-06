const { User } = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

let auth = (req, res, next) => {
  let token = req.cookies.w_auth;

  try {
    req.decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = req.decoded.userId;

    User.findOne({ _id: userId }, (err, user) => {
      if (err) return res.json({ success: false, err });
      if (!user) return res.json({ isAuth: false, error: true });

      req.user = user;
      return next();
    });
  } catch (error) {
    if (error.name === 'TokenExpireError') {
      return res.status(419).json({
        code: 419,
        message: '토큰이 만료되었습니다.',
      });
    }

    return res.status(401).json({
      code: 401,
      message: '유효하지 않은 토큰입니다.',
    });
  }
};

module.exports = { auth };
