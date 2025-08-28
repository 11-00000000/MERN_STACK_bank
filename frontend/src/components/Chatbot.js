// src/components/Chatbot.js
import { useState } from "react";
import axiosClient from "../utils/axiosClient";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message instantly
    setMessages([...messages, { role: "user", text: input }]);

    try {
      const res = await axiosClient.post("/chatbot/ask", { query: input });
      const reply = res.data.reply;

      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "⚠️ Something went wrong. Try again." },
      ]);
    }

    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 shadow-lg rounded-xl border bg-white">
      <div className="bg-blue-600 text-white p-3 rounded-t-xl font-bold">
        💬 Banking Chatbot
      </div>

      <div className="h-72 overflow-y-auto p-3 text-sm">
        {messages.map((m, i) => (
          <div key={i} className={`mb-2 ${m.role === "user" ? "text-right" : "text-left"}`}>
            <span
              className={`inline-block px-3 py-2 rounded-lg ${
                m.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
              }`}
            >
              {m.text}
            </span>
          </div>
        ))}
      </div>

      <div className="flex p-2 border-t">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 border rounded-l-lg px-2 py-1 focus:outline-none"
          placeholder="Ask me something..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-3 rounded-r-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
