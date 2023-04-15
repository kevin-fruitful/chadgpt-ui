import React, { useState } from "react";
import { sendQuestion, ChatHistoryEntry } from "../api/ask-question"; // Import the sendQuestion function

const ChatComponent: React.FC = () => {
  const [question, setQuestion] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<ChatHistoryEntry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);

    try {
      const data = await sendQuestion(question, chatHistory); // Use the sendQuestion function
      setChatHistory([...chatHistory, { question, answer: data.answer }]);
    } catch (error) {
      console.error("Error while sending the question:", error);
    }

    setQuestion("");
    setIsLoading(false);
  };

  return (
    <div
      style={{
        fontFamily: "'Roboto', sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "2.5em", margin: "1em 0" }}>
        Ask questions about your codebase
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1em",
        }}
      >
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question..."
          style={{
            flexGrow: 1,
            borderRadius: "3px",
            border: "1px solid #ccc",
            padding: "0.5em",
            marginRight: "0.5em",
            fontSize: "1em",
          }}
        />
        <button
          type="submit"
          disabled={isLoading}
          style={{
            backgroundColor: "#2196f3",
            color: "white",
            border: "none",
            borderRadius: "3px",
            padding: "0.5em 1em",
            fontSize: "1em",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </form>
      <div>
        {chatHistory.map((entry, index) => {
          return (
            <div
              key={index}
              style={{ borderBottom: "1px solid #ccc", padding: "1em" }}
            >
              <p style={{ margin: "0.5em 0", fontWeight: "bold" }}>
                <strong>Question:</strong> {entry.question}
              </p>
              <p style={{ margin: "0.5em 0" }}>
                <strong>Answer:</strong> {entry.answer}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatComponent;
