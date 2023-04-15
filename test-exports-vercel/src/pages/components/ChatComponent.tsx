// components/ChatComponent.tsx
import React, { useState } from "react";

interface ChatHistoryEntry {
  question: string;
  answer: string;
}

const ChatComponent: React.FC = () => {
  const [question, setQuestion] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<ChatHistoryEntry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question, chat_history: chatHistory }),
    });

    const data = await response.json();
    setChatHistory([...chatHistory, { question, answer: data.answer }]);
    setQuestion("");
    setIsLoading(false);
  };

  return (
    <div>
      <h1>Chat with AI</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question..."
        />
        <button type="submit" disabled={isLoading}>
          Send
        </button>
      </form>
      <div>
        {chatHistory.map((entry, index) => (
          <div key={index}>
            <p>
              <strong>Question:</strong> {entry.question}
            </p>
            <p>
              <strong>Answer:</strong> {entry.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatComponent;
