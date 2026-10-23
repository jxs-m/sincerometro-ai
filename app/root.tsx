import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

import tokensStyles from "~/styles/tokens.css?url";
import chatStyles from "~/styles/chat.css?url";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap",
  },
  { rel: "stylesheet", href: tokensStyles },
  { rel: "stylesheet", href: chatStyles },
  { rel: "icon", href: "/mascot.jpg", type: "image/jpeg" },
];

export const meta: MetaFunction = () => [
  { title: "Sincerômetro AI | Chatbot de Autoajuda Sincera & Agressiva (Remix)" },
  {
    name: "description",
    content:
      "Aplicação prática desenvolvida em Remix Framework com SSR, consumindo a API da Google AI Studio (Gemini) com estilo CSS moderno em tokens.",
  },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();

  let errorMessage = "Ocorreu um erro inesperado na aplicação.";
  let errorStatus = 500;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <html lang="pt-BR">
      <head>
        <title>Erro - Sincerômetro Remix</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <div className="modal-card">
            <h1 style={{ color: "var(--accent-rose)", marginBottom: "12px" }}>
              ⚠️ Erro no Sistema ({errorStatus})
            </h1>
            <p style={{ color: "var(--text-secondary)", marginBottom: "20px" }}>
              {errorMessage}
            </p>
            <a href="/" className="btn-submit" style={{ display: "inline-block", textDecoration: "none" }}>
              Recarregar Aplicação
            </a>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
