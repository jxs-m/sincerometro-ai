import { useState } from "react";

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  apiKey: string;
  onSaveKey: (key: string) => void;
}

export function ApiKeyModal({
  isOpen,
  onClose,
  apiKey,
  onSaveKey,
}: ApiKeyModalProps) {
  const [tempKey, setTempKey] = useState(apiKey);

  if (!isOpen) return null;

  const handleSave = () => {
    onSaveKey(tempKey.trim());
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>⚙️ Configuração Google AI Studio</h2>
          <button
            type="button"
            className="btn-icon"
            onClick={onClose}
            style={{ padding: "4px 8px" }}
          >
            ✕
          </button>
        </div>

        <div className="modal-body">
          <p>
            Conecte sua chave de API gratuita do <strong>Google AI Studio (Gemini)</strong> para conversar diretamente com o Sincerômetro online.
          </p>

          <div>
            <label
              htmlFor="gemini-key"
              style={{
                display: "block",
                marginBottom: "6px",
                fontSize: "0.8rem",
                color: "var(--text-muted)",
              }}
            >
              Chave da API Gemini (GEMINI_API_KEY):
            </label>
            <input
              id="gemini-key"
              type="password"
              className="modal-input"
              placeholder="Cole sua chave AIzaSy... aqui"
              value={tempKey}
              onChange={(e) => setTempKey(e.target.value)}
            />
          </div>

          <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
            💡 Dica: Obtenha sua chave gratuitamente em{" "}
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent-cyan)" }}
            >
              aistudio.google.com
            </a>
            . Se preferir, pode também fixar a chave no arquivo <code>.env</code> do servidor.
          </p>
        </div>

        <div className="modal-actions">
          <button type="button" className="btn-icon" onClick={onClose}>
            Cancelar
          </button>
          <button type="button" className="btn-submit" onClick={handleSave}>
            Salvar e Conectar
          </button>
        </div>
      </div>
    </div>
  );
}
