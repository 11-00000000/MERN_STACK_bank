const express = require("express");
const router = express.Router();
const AccountController = require("../../controller/AccountController");
const AuthMiddleware = require("../../middleware/AuthMiddleware")

router.get("/my-accounts", AuthMiddleware, AccountController.getUserAccounts);
router.post("/create", AuthMiddleware, AccountController.createAccount);

module.exports = router;
