import { useState } from "react";

export interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
  source?: "google-gemini-ai";
}

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.sender === "user";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`message-row ${isUser ? "user-row" : "ai-row"}`}>
      <div className={`msg-avatar ${isUser ? "user-avatar" : "ai-avatar"}`}>
        {isUser ? (
          "EU"
        ) : (
          <img src="/mascot.jpg" alt="Sincerômetro" />
        )}
      </div>

      <div className="bubble-card">
        <div className="bubble-meta">
          <span className="author">
            {isUser ? "Sua Desculpa" : "⚡ Sincerômetro"}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>{message.timestamp}</span>
            <button
              type="button"
              onClick={handleCopy}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "var(--text-muted)",
                fontSize: "0.75rem",
              }}
              title="Copiar texto"
            >
              {copied ? "✓ Copiado" : "📋"}
            </button>
          </div>
        </div>

        <div className="bubble-text">{message.text}</div>

        {!isUser && message.source === "google-gemini-ai" && (
          <div
            style={{
              marginTop: "8px",
              fontSize: "0.7rem",
              color: "var(--text-muted)",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            ✨ Gerado via Google Gemini API
          </div>
        )}
      </div>
    </div>
  );
}
