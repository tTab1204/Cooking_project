const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const { Kitchen } = require('../models/Kitchen');
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

// ---------------- local code----------------------//
// let storage = multer.diskStorage({
//   // destination: 어디에 파일을 저장할 지
//   destination: (req, file, cb) => {
//     // destination: uploads폴더가 된다. uploads 폴더에 사진 저장.
//     cb(null, 'uploads/');
//   },
//   // 파일 이름
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}_${file.originalname}`);
//   },
//   // 파일 형식은 png 또는 jpg 등, 즉 사진만 가능
//   fileFilter: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     if (ext !== '.png' || ext !== '.jpg') {
//       return cb(res.status(400).end('only png, jpg is allowed'), false);
//     }
//     cb(null, true);
//   },
// });

// const upload = multer({ storage: storage }).single('file');

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: 'cooking-aws-s3',
    key(req, file, cb) {
      cb(null, `original/${Date.now()}_${path.basename(file.originalname)}`);
      // original이란 폴더를 만들고 그 곳에 넣는 것
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});

router.post('/upload-image', auth, (req, res) => {
  //upload 변수를 불러온다.

  upload(req, res, err => {
    if (err) {
      return res.json({ success: false, err });
    }

    return res.json({
      success: true,
      image: res.req.file.location,
      fileName: res.req.file.filename,
    });
  });
});

// ------------------- upload-kitchen ---------------------- //
router.post('/upload-kitchen', auth, (req, res) => {
  const kitchen = new Kitchen(req.body);

  kitchen.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({ success: true, doc });
  });
});

router.get('/show-kitchens', (req, res) => {
  Kitchen.find()
    .populate('writer')
    .exec((err, kitchens) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, kitchens });
    });
});

// --------------- get Kitchen's Detail ----------------//
router.get('/kitchens_by_id', (req, res) => {
  let type = req.query.type;
  let kitchenId = req.query.id;

  Kitchen.find({ _id: kitchenId })
    .populate('writer')
    .exec((err, kitchen) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, kitchen });
    });
});

module.exports = router;
