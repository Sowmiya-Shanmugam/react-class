import React, { useState, useEffect, useRef } from "react";
import "./App.css";

  function ChatBot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hey! I’m Nova, your smart assistant. Ask me anything!" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // ✅ Knowledge base (Q&A system)
  const knowledgeBase = [
    {
      question: ["hey", "hi", "hello"],
      answer: [
        "🌟 Hey there! How are you doing?",
        "👋 Hi! Nice to see you here.",
        "Hello! Hope you’re having a great day!",
      ],
    },
    {
      question: ["your name", "ur name", "who are you"],
      answer: [
        "✨ I’m Nova, your AI-powered chatbot.",
        "🤖 People call me Nova, your friendly assistant.",
      ],
    },
    {
      question: ["features", "what can you do", "abilities"],
      answer: [
        "⚡ I can: \n- Answer questions\n- Crack jokes\n- Tell time & date\n- Explain React\n- Chat with you anytime!",
        "📋 My features include chatting, jokes, current date/time, and basic knowledge like React.",
      ],
    },
    {
      question: ["joke", "jokes", "funny"],
      answer: [
        "😂 Why did the developer go broke? Because he used up all his cache!",
        "🤣 Why don’t programmers like nature? Too many bugs.",
        "😆 I told my computer I needed a break, and it said 'No problem, I’ll go to sleep!'",
      ],
    },
    {
      question: ["react", "about react", "what is react"],
      answer: [
        "⚛️ React is a JavaScript library for building user interfaces, created by Facebook.",
        "📘 React helps you build fast, dynamic single-page applications.",
      ],
    },
    {
      question: ["date", "time", "current date", "current time"],
      answer: [
        `📅 Date: ${new Date().toLocaleDateString()} ⏰ Time: ${new Date().toLocaleTimeString()}`,
      ],
    },
    {
      question: ["bye", "goodbye", "see you"],
      answer: [
        "👋 Bye! Have a great day!",
        "✨ Goodbye! Take care.",
        "🙌 See you later, buddy!",
      ],
    },
    {
      question: ["thanks", "thank you", "ty"],
      answer: [
        "😊 Anytime! Glad I could help.",
        "👍 You’re welcome!",
        "🙌 Happy to assist you.",
      ],
    },
    {
      question: ["help", "support"],
      answer: [
        "🤖 You can ask me things like:\n- Tell me a joke\n- What’s the current date\n- Tell me about React\n- What are your features?",
      ],
    },
  ];

  // 🔹 Fallback replies
  const fallbackReplies = [
    "🤔 Hmm, I’m not sure. Try asking about my features, React, or the date!",
    "I didn’t catch that. Could you rephrase?",
    "I’m still learning… but I’d love to chat more!",
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    let reply = null;
    const lowered = input.toLowerCase();

    // 🔹 Search in knowledge base
    for (let item of knowledgeBase) {
      if (item.question.some((q) => lowered.includes(q))) {
        // pick random reply from available answers
        reply = item.answer[Math.floor(Math.random() * item.answer.length)];
        break;
      }
    }

    // If no match → random fallback
    if (!reply) {
      reply = fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
    }

    // Typing effect
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 1500);

    setInput("");
  };

  // 🔹 Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="main-container">
      <div className="full-sourse">
        <h2 className="flow-view">✨ Nova ChatBot</h2>

        <div className="gain">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`sound ${msg.sender === "user" ? "white-color" : "black-color"}`}
            >
              {msg.text}
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="sound black-color typing-indicator">
              <span></span><span></span><span></span>
            </div>
          )}

          <div ref={messagesEndRef}></div>
        </div> 
 
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="value"
            placeholder="Type your question..."
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend} className="girl">
            Send 🚀
          </button>
        </div>
      </div>
    </div>
  );
}
export default  ChatBot
