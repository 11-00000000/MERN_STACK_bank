const express = require("express")
const AmountValidation = require("../../validations/AmountValidation")
const ValidationMiddleware = require("../../middleware/ValidationMiddleware")
const AuthMiddleware = require("../../middleware/AuthMiddleware")
const AmountController = require("../../controller/AmountController")
const router = express.Router()

router.use(AuthMiddleware)

router.post('/add-money',AmountValidation.addMoney,ValidationMiddleware,AmountController.addMoney)

router.post('/add-account',AmountValidation.addAccount,ValidationMiddleware,AmountController.addNewAccount)

router.post('/payment/:txn_id',AmountController.verifyPayment)
router.get('/transactions',AmountController.getAllTransactions)
module.exports = router