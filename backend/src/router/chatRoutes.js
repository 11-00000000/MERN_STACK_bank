const express = require("express");
const { sendMessage } = require("../controller/chatController");

const router = express.Router();

router.post("/send", sendMessage);

module.exports = router;