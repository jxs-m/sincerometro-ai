
interface ChatHeaderProps {
  onOpenSettings: () => void;
  onClearChat: () => void;
  isApiConfigured: boolean;
  messageCount: number;
}

export function ChatHeader({
  onOpenSettings,
  onClearChat,
  isApiConfigured,
  messageCount,
}: ChatHeaderProps) {
  return (
    <header className="chat-header">
      <div className="header-brand">
        <div className="avatar-wrapper">
          <img
            src="/mascot.jpg"
            alt="Mascote Sincerômetro"
            className="avatar-img"
          />
          <span className="avatar-status-dot" title="Sincerômetro Ativo" />
        </div>
        <div className="header-text">
          <h1>
            Sincerômetro AI
            <span className="badge badge-remix">Remix SSR</span>
          </h1>
          <p className="header-tagline">
            Autoajuda sincera, broncas diretas e choque de realidade imediato
          </p>
        </div>
      </div>
      <div className="header-actions">
        <span
          className={`badge badge-api ${!isApiConfigured ? "unconfigured" : ""}`}
          title={
            isApiConfigured
              ? "Conectado à Google AI Studio (Online)"
              : "Chave de API não configurada. Clique para configurar."
          }
          onClick={!isApiConfigured ? onOpenSettings : undefined}
          style={!isApiConfigured ? { cursor: "pointer" } : undefined}
        >
          {isApiConfigured ? "● Gemini AI Ativo" : "○ Chave Ausente"}
        </span>

        {messageCount > 0 && (
          <button
            type="button"
            className="btn-icon"
            onClick={onClearChat}
            title="Limpar histórico da conversa"
          >
            🗑️ Limpar
          </button>
        )}

        <button
          type="button"
          className="btn-icon"
          onClick={onOpenSettings}
          title="Configurações da Chave de API"
        >
          ⚙️ Chave API
        </button>
      </div>
    </header>
  );
}
