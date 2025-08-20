const AccountService = require("../service/AccountService");
const AccountModel = require("../models/Account.model");
class AccountController {
    // AccountController.js
static createAccount = async (req, res, next) => {
  try {
    const accountNumber = "ACC" + Date.now(); // simple generator
    const newAccount = await AccountModel.create({
      user: req.user._id,
      accountNumber,
      balance: 0
    });

    res.status(201).json({
      msg: "Account created successfully",
      account: newAccount
    });
  } catch (error) {
    next(error);
  }
};

    static getUserAccounts = async (req, res, next) => {
        try {
            const accounts = await AccountService.getUserAccounts(req.user);
            res.status(200).json(accounts);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = AccountController
