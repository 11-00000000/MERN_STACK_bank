const express = require("express");
const router = express.Router();
const { askGemini } = require("../service/ai");
const AccountModel = require("../models/Account.model");
const TransactionModel = require("../models/Transactions.model");
const AuthMiddleware = require("../middleware/AuthMiddleware");

// Helper: very simple intent matching
function detectIntent(query) {
  query = query.toLowerCase();
  if (query.includes("balance")) return "CHECK_BALANCE";
  if (query.includes("last transaction")) return "LAST_TRANSACTIONS";
  return "FAQ";
}

router.post("/ask", AuthMiddleware, async (req, res) => {
  try {
    const { query } = req.body;
    const intent = detectIntent(query);

    if (intent === "CHECK_BALANCE") {
      const account = await AccountModel.findOne({ userId: req.user._id });
      return res.json({ reply: `Your current balance is ₹${account.amount}.` });
    }

    if (intent === "LAST_TRANSACTIONS") {
      const txns = await TransactionModel.find({ userId: req.user._id })
        .sort({ createdAt: -1 })
        .limit(3);

      const list = txns.map(t => `${t.type}: ₹${t.amount} on ${t.createdAt.toDateString()}`).join("\n");
      return res.json({ reply: `Here are your last transactions:\n${list}` });
    }

    // Fallback → Gemini AI
    const reply = await askGemini(`Banking chatbot:\nUser: ${query}\nBot:`);
    res.json({ reply });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
