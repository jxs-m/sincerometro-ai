import { useState, useEffect, useRef } from "react";
import { json, type ActionFunctionArgs } from "@remix-run/node";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { generateSincereRoast, type ChatResponse } from "~/services/gemini.server";
import { ChatHeader } from "~/components/ChatHeader";
import { MessageBubble, type Message } from "~/components/MessageBubble";
import { TypingIndicator } from "~/components/TypingIndicator";
import { ApiKeyModal } from "~/components/ApiKeyModal";

export async function loader() {
  const hasServerKey = Boolean(
    process.env.GEMINI_API_KEY &&
    process.env.GEMINI_API_KEY !== "sua_chave_do_google_ai_studio_aqui" &&
    process.env.GEMINI_API_KEY.trim().length > 5
  );

  return json({
    hasServerKey,
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const userMessage = formData.get("message")?.toString()?.trim();
  const clientApiKey = formData.get("clientApiKey")?.toString()?.trim();

  if (!userMessage) {
    return json(
      { success: false, error: "A desculpa não pode estar vazia. Fale o que aconteceu!" },
      { status: 400 }
    );
  }

  try {
    const result: ChatResponse = await generateSincereRoast(userMessage, clientApiKey);

    return json({
      success: true,
      reply: result.reply,
      source: result.source,
      timestamp: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
  } catch (error: any) {
    return json(
      {
        success: false,
        error: error?.message || "Ocorreu um erro no processamento da IA.",
      },
      { status: 500 }
    );
  }
}

export default function ChatIndex() {
  const { hasServerKey } = useLoaderData<typeof loader>();
  const fetcher = useFetcher<any>();

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "ai",
      text: "Olá! Eu sou o Sincerômetro, seu assistente de choque de realidade. Qual é a desculpa esfarrapada de hoje? Digite aí embaixo para receber sua dose de sinceridade.",
      timestamp: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const [inputVal, setInputVal] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customKey, setCustomKey] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("GEMINI_CLIENT_KEY");
    if (saved) setCustomKey(saved);
  }, []);

  const handleSaveKey = (newKey: string) => {
    setCustomKey(newKey);
    if (newKey) {
      localStorage.setItem("GEMINI_CLIENT_KEY", newKey);
    } else {
      localStorage.removeItem("GEMINI_CLIENT_KEY");
    }
  };

  const isSubmitting = fetcher.state === "submitting" || fetcher.state === "loading";

  useEffect(() => {
    if (fetcher.data && fetcher.data.success) {
      const replyMsg: Message = {
        id: "ai-" + Date.now(),
        sender: "ai",
        text: fetcher.data.reply,
        timestamp: fetcher.data.timestamp,
        source: fetcher.data.source,
      };
      setMessages((prev) => [...prev, replyMsg]);
    } else if (fetcher.data && !fetcher.data.success && fetcher.data.error) {
      const errorMsg: Message = {
        id: "error-" + Date.now(),
        sender: "ai",
        text: "⚠️ " + fetcher.data.error,
        timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    }
  }, [fetcher.data]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isSubmitting]);

  const handleSendMessage = () => {
    const text = inputVal.trim();
    if (!text || isSubmitting) return;

    const userMsg: Message = {
      id: "user-" + Date.now(),
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");

    const formData = new FormData();
    formData.append("message", text);
    if (customKey) {
      formData.append("clientApiKey", customKey);
    }

    fetcher.submit(formData, { method: "post" });

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: "welcome-reset",
        sender: "ai",
        text: "Histórico limpo. Pronto para ouvir mais desculpas e distribuir mais broncas sinceras!",
        timestamp: new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  };

  const isConfigured = hasServerKey || Boolean(customKey && customKey.length > 5);

  return (
    <div className="app-layout">
      <ChatHeader
        onOpenSettings={() => setIsModalOpen(true)}
        onClearChat={handleClearChat}
        isApiConfigured={isConfigured}
        messageCount={messages.length}
      />

      <main className="messages-container" aria-live="polite">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        {isSubmitting && <TypingIndicator />}

        <div ref={messagesEndRef} />
      </main>

      <footer className="input-area-card">
        <form
          className="chat-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
        >
          <input
            ref={inputRef}
            type="text"
            className="input-field"
            placeholder="Digite sua desculpa real (ex: 'Tô com preguiça de estudar...')"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            disabled={isSubmitting}
            autoFocus
          />
          <button
            type="submit"
            className="btn-submit"
            disabled={isSubmitting || !inputVal.trim()}
          >
            {isSubmitting ? "Afiando..." : "Enviar ⚡"}
          </button>
        </form>
      </footer>

      <ApiKeyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        apiKey={customKey}
        onSaveKey={handleSaveKey}
      />
    </div>
  );
}
