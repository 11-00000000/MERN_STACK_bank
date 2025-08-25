const axios = require("axios");
const Chat = require("../models/Chat");

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;

    // Save user message
    const userMsg = await Chat.create({ role: "user", message });

    // Call Gemini API
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{ role: "user", parts: [{ text: message }] }],
      }
    );

    const botMessage =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't process that.";

    // Save AI response
    const aiMsg = await Chat.create({ role: "ai", message: botMessage });

    res.json({ user: userMsg, ai: aiMsg });
  } catch (error) {
    console.error("Gemini API Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to get Gemini response" });
  }
};

module.exports = { sendMessage };