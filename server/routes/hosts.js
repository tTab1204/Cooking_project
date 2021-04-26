const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { Host } = require("../models/Host");
const multer = require("multer");

// ----------------------- multer --------------------------//
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

const upload = multer({ storage: storage }).single("file");

router.post("/uploadImage", auth, (req, res) => {
  // 노드서버에 파일을 저장하기 위한 dependency를 설치한다.(multer)

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

// ------------------- Become a Host ---------------------- //
router.post("/become-a-host", (req, res) => {
  const host = new Host(req.body);

  host.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({ success: true, doc });
  });
});

// ------------------- Show Hosts ---------------------- //
router.get("/showHosts", (req, res) => {
  Host.find()
    .populate("writer")
    .exec((err, hosts) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, hosts });
    });
});

// --------------- get Host's Detail ----------------//
router.get("/hosts_by_id", (req, res) => {
  let type = req.query.type;
  let hostId = req.query.id;

  Host.find({ _id: hostId })
    .populate("writer")
    .exec((err, host) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, host });
    });
});

module.exports = router;
