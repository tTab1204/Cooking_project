const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { Event } = require("../models/Event");
const multer = require("multer");

// ---------------- multer----------------------//
let storage = multer.diskStorage({
  // destination: 어디에 파일을 저장할 지
  destination: (req, file, cb) => {
    // destination: uploads폴더가 된다. uploads 폴더에 사진 저장.
    cb(null, "uploads/");
  },
  // 파일 이름
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  // 파일 형식은 png 또는 jpg 등, 즉 사진만 가능
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".png" || ext !== ".jpg") {
      return cb(res.status(400).end("only png, jpg is allowed"), false);
    }
    cb(null, true);
  },
});

// 여기서 single이 아니라 다른걸 쓰면 여러개를 동시에 올릴 수 있다는데..
// 나중에 해보자(5/7-금)
const upload = multer({ storage: storage }).single("file");

router.post("/uploadImage", auth, (req, res) => {
  // 노드서버에 파일을 저장하기 위한 dependency를 설치한다.(multer)
  // npm install multer --save

  //upload 변수를 불러온다.
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }

    return res.json({
      success: true,
      // 클라이언트(프론트)에 image, fileName 정보를 보내준다.
      image: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

router.post("/upload-event", auth, (req, res) => {
  const event = new Event(req.body);

  event.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({ success: true, doc });
  });
});

module.exports = router;
