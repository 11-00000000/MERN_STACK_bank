require("dotenv").config()

const Razorpay = require("razorpay")

const razorpay = new Razorpay({
    key_id:process.env.RAZOR_KEY_ID,
    key_secret:process.env.RAZOR_KEY_SECRET,

})
//module.exports = instance;
//exports.NewRazorpay = razorpay;

// Razorpay.js
module.exports = { NewRazorpay: razorpay };
