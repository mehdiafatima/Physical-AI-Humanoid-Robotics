import React, { useState } from "react";
import styles from "./styles.module.css";

const ChatbotWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi 👋 Ask me anything about Physical AI & Robotics." }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages(prev => [
      ...prev,
      { role: "user", text: input },
      { role: "bot", text: "Good question! This will be powered by AI soon 🤖" }
    ]);
    setInput("");
  };

  return (
    <div className={styles.chatbotWrapper}>
      {open && (
        <div className={styles.chatWindow}>
          <div className={styles.header}>AI Assistant</div>

          <div className={styles.messages}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={msg.role === "user" ? styles.userMsg : styles.botMsg}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className={styles.inputArea}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about this book..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>➤</button>
          </div>
        </div>
      )}

      <button className={styles.fab} onClick={() => setOpen(!open)}>
        {open ? "✕" : "💬"}
      </button>
    </div>
  );
};

export default ChatbotWidget;
