import { useState, useEffect } from "react";

const LOADING_PHRASES = [
  "Identificando desculpa esfarrapada...",
  "Calculando o nível de drama desnecessário...",
  "Consultando o acervo de verdades duras...",
  "Afiando a bronca sem anestesia...",
  "Preparando o choque de realidade...",
];

export function TypingIndicator() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % LOADING_PHRASES.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="message-row ai-row">
      <div className="msg-avatar ai-avatar">
        <img src="/mascot.jpg" alt="Sincerômetro Pensando" />
      </div>
      <div className="typing-box">
        <div className="dots-loader">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
        <span className="typing-status-text">{LOADING_PHRASES[phraseIndex]}</span>
      </div>
    </div>
  );
}
