const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const { Event } = require('../models/Event');
const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'ap-northease-2',
});

// ---------------- multer----------------------//
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
  // 노드서버에 파일을 저장하기 위한 dependency를 설치한다.(multer)
  // npm install multer --save

  //upload 변수를 불러온다.
  upload(req, res, err => {
    if (err) {
      return res.json({ success: false, err });
    }

    console.log('업로드한 이미지 :', res.req.file.path);

    return res.json({
      success: true,
      // 클라이언트(프론트)에 image, fileName 정보를 보내준다.
      image: res.req.file.location,
      fileName: res.req.file.filename,
    });
  });
});

router.post('/upload-event', auth, (req, res) => {
  const event = new Event(req.body);

  event.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({ success: true, doc });
  });
});

router.post('/show-events', auth, (req, res) => {
  let term = req.body.searchTerm;
  let search_date = req.body.date;

  if (term) {
    Event.find({ name: { $regex: term, $options: 'i' } })
      .populate('host')
      .exec((err, events) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({ success: true, events });
      });
  } else if (search_date) {
    Event.find({ date: search_date })
      .populate('host')
      .exec((err, events) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({ success: true, events });
      });
  } else {
    Event.find()
      .populate('host')
      .exec((err, events) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({ success: true, events });
      });
  }
});

router.get('/events_by_id', auth, (req, res) => {
  let type = req.query.type;
  let eventIds = req.query.id;
  if (type === 'array') {
    let ids = req.query.id.split(',');
    eventIds = ids.map(item => {
      return item;
    });
  }

  Event.find({ _id: { $in: eventIds } })
    .populate('host')
    .exec((err, event) => {
      if (err) return res.status(400).send(err);
      res.status(200).send(event);
    });
});

router.post('/show-host-events', auth, (req, res) => {
  Event.find({ host: { $in: req.body.host } })
    .populate('host')
    .exec((err, events) => {
      if (err) res.status(400).send(err);
      res.status(200).json({ success: true, events });
    });
});

module.exports = router;
