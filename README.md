# ⚡ Sincerômetro AI

> **Chatbot de Autoajuda Sincera & Agressiva** desenvolvido com **Remix Framework (SSR)** e integrado à **Google Gemini API** (`@google/generative-ai`).

Projeto desenvolvido para o trabalho prático sobre frameworks modernos (*"Do Vanilla ao Modernismo: Frameworks – Tentando melhorar o JavaScript"*).

---

## 🚀 Tecnologias Utilizadas

- **Framework:** [Remix](https://remix.run/) (`@remix-run/node`, `@remix-run/react`) + Vite
- **IA / LLM:** Google Gemini via `@google/generative-ai`
- **Renderização:** Server-Side Rendering (SSR) com Actions e Loaders
- **Estilização:** CSS nativo modularizado através de Design Tokens (`tokens.css` e `chat.css`)
- **Mascote:** Daniel (vestido a caráter como o mascote oficial do Sincerômetro)

---

## 📁 Estrutura do Projeto

```text
├── app/
│   ├── components/       # Componentes React (ChatHeader, MessageBubble, TypingIndicator, ApiKeyModal)
│   ├── routes/           # Rotas Remix (_index.tsx com action SSR)
│   ├── services/         # Integração com Google Gemini (gemini.server.ts)
│   ├── styles/           # Design tokens e folhas de estilo CSS
│   └── root.tsx          # Layout raiz, meta tags e links de fontes
├── docs/                 # Documentação técnica, investigações e roteiro da equipe
├── public/               # Ativos estáticos e imagem do mascote
├── package.json
└── vite.config.ts
```

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- Node.js >= 20.0.0
- npm ou yarn

### 1. Clonar o repositório
```bash
git clone git@github.com:jxs-m/sincerometro-ai.git
cd sincerometro-ai
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Configurar variáveis de ambiente
Crie um arquivo `.env` baseado no `.env.example`:
```bash
cp .env.example .env
```
Adicione sua chave de API do Google AI Studio:
```env
GEMINI_API_KEY=sua_chave_aqui
```
*(Você também pode configurar a chave dinamicamente diretamente pela interface gráfica no botão "⚙️ Chave API").*

### 4. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
Acesse `http://localhost:5173` no seu navegador.

---

## 📜 Scripts Disponíveis

- `npm run dev`: Inicia o servidor Vite para desenvolvimento com HMR.
- `npm run build`: Gera o build otimizado para produção.
- `npm run start`: Inicia o servidor em modo de produção.
- `npm run typecheck`: Valida a tipagem TypeScript em todo o projeto.

---

## 👥 Equipe & Entregáveis

Consulte a pasta [`docs/`](./docs) para os relatórios detalhados:
- **`00_INDICE_E_GUIA_DA_EQUIPE.md`**: Guia geral da equipe.
- **`01_INVESTIGACAO_TECNICA_REMIX.md`**: Análise aprofundada de arquitetura e SSR.
- **`02_FICHA_TECNICA_RPG_REMIX.md`**: Ficha técnica de atributos no estilo RPG.
- **`03_PLANO_ARQUITETURA_CHATBOT.md`**: Arquitetura do chatbot e fluxo de dados.
- **`04_ROTEIRO_APRESENTACAO_E_DEMO.md`**: Roteiro para apresentação oral e demonstração.
