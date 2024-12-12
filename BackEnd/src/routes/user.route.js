const express = require("express");
const upload = require("../middlewares/multer.js");
const createUser = require("../controllers/user.controller.js");
const router = express.Router();

router.get("/create-user", upload.single("file"), createUser);

module.exports = router;
