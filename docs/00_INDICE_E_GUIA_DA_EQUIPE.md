# Índice e Guia da Equipe: Projeto Framework Remix

> **Tema Geral:** *Do Vanilla ao Modernismo: Frameworks – Tentando melhorar o Javascript*  
> **Framework Designado:** **Remix** (`@remix-run` / React Router v7 Framework Mode)  
> **Responsável pelo Código-Fonte:** Você (Organização, Arquitetura e Implementação Prática)  
> **Documento de Origem dos Requisitos:** `Frameworks_1.pdf`

---

## 1. Visão Geral dos 4 Entregáveis Obrigatórios

O trabalho prático é composto por 4 entregáveis integrados:

| Entregável | Descrição Principal | Documento de Apoio no Workspace |
| :--- | :--- | :--- |
| **1. Artigo Técnico (Máx. 2 Págs)** | Artigo aprofundado cobrindo os 4 pilares de arquitetura, história, curiosidades, casos reais e conclusão crítica (exatamente 2 páginas). | [`docs/ARTIGO_FINAL_REMIX_2_PAGINAS.md`](file:///home/rodnei/Área de trabalho/pppp/docs/ARTIGO_FINAL_REMIX_2_PAGINAS.md), [`docs/Remix_Artigo_Final_2_Paginas.docx`](file:///home/rodnei/Área de trabalho/pppp/docs/Remix_Artigo_Final_2_Paginas.docx) e [`docs/Remix_Artigo_Final_2_Paginas.pdf`](file:///home/rodnei/Área de trabalho/pppp/docs/Remix_Artigo_Final_2_Paginas.pdf) |
| **2. Ficha Técnica (RPG)** | Resumo executivo e infográfico em formato de ficha de atributos com notas de 1 a 10 (DES, APN, ECO, COM, EST, MNT e afinidade com capivaras/caturritas). | [`docs/02_FICHA_TECNICA_RPG_REMIX.md`](file:///home/rodnei/Área de trabalho/pppp/docs/02_FICHA_TECNICA_RPG_REMIX.md) |
| **3. Chatbot de Autoajuda Sincera / Agressiva** | Aplicação prática completa em Remix consumindo API de IA via POST com async/await, balões dinâmicos, auto-scroll, loading e tratamento de erro. | [`docs/03_PLANO_ARQUITETURA_CHATBOT.md`](file:///home/rodnei/Área de trabalho/pppp/docs/03_PLANO_ARQUITETURA_CHATBOT.md) |
| **4. Apresentação (10–15 min)** | Apresentação oral e demo ao vivo com projeção em tela testando desculpas da plateia e explicando o código fonte. | [`docs/04_ROTEIRO_APRESENTACAO_E_DEMO.md`](file:///home/rodnei/Área de trabalho/pppp/docs/04_ROTEIRO_APRESENTACAO_E_DEMO.md) |

---

## 2. Divisão de Responsabilidades no Grupo (Até 4 Integrantes)

Como você está responsável pela **implementação e código-fonte**, o material desta pasta serve tanto para blindar a sua arquitetura quanto para fornecer o conteúdo teórico pronto para os colegas que estiverem redigindo o artigo e desenhando o slide/ficha de RPG:

- **Você (Desenvolvedor Líder / Código-Fonte):**
  - Configuração do projeto Remix e ecossistema (Vite, TypeScript, Estilização).
  - Implementação da rota e backend de dados (`action` do Remix para chamada segura da IA via POST).
  - Interface do usuário do Chatbot (balões, auto-scroll, optimistic UI, tratamento de exceções).
  - Guia técnico da demonstração ao vivo para a banca/turma.
- **Colega 1 (Artigo Técnico):**
  - Já possui o artigo completo calibrado para **exatamente 2 páginas**: [`docs/Remix_Artigo_Final_2_Paginas.docx`](file:///home/rodnei/Área de trabalho/pppp/docs/Remix_Artigo_Final_2_Paginas.docx) e [`docs/Remix_Artigo_Final_2_Paginas.pdf`](file:///home/rodnei/Área de trabalho/pppp/docs/Remix_Artigo_Final_2_Paginas.pdf), com o plano e dados teóricos em [`docs/05_PLANO_DETALHADO_ARTIGO_REMIX.md`](file:///home/rodnei/Área de trabalho/pppp/docs/05_PLANO_DETALHADO_ARTIGO_REMIX.md).
- **Colega 2 (Ficha RPG & Design Visual):**
  - Utiliza [`docs/02_FICHA_TECNICA_RPG_REMIX.md`](file:///home/rodnei/Área de trabalho/pppp/docs/02_FICHA_TECNICA_RPG_REMIX.md) para montar a arte visual da ficha de personagem do Remix (Canva, Figma ou layout web).
- **Colega 3 (Apresentação & Roteiro de Testes):**
  - Organiza os slides e coordena o roteiro da demo ao vivo com a turma conforme [`docs/04_ROTEIRO_APRESENTACAO_E_DEMO.md`](file:///home/rodnei/Área de trabalho/pppp/docs/04_ROTEIRO_APRESENTACAO_E_DEMO.md).

---

## 3. Checklist dos Requisitos Técnicos do Código-Fonte

Conforme estipulado no PDF da disciplina:

- [ ] **Consumo de API de IA via POST:** Implementado com `async/await` no `action` do Remix (evitando vazamento de token no client-side).
- [ ] **Prompt Especializado:** IA configurada para responder desculpas humanas reais com broncas ácidas, diretas, curtas e cômicas.
- [ ] **Renderização Dinâmica no DOM:** Balões de conversa adicionados e atualizados reativamente.
- [ ] **Auto-scroll:** Rolagem automática suave para a mensagem mais recente após envio e recebimento.
- [ ] **Controle Visual de Loading:** Indicador visual de processamento ("pensando na bronca...") e botão desabilitado durante o envio.
- [ ] **Tratamento de Exceções:** Mensagem amigável de erro caso a API de IA caia ou o limite de requisições seja atingido.
- [ ] **Estilização Oficial:** Escolha obrigatória de uma das três abordagens:
  - *Opção A:* CSS Puro (Vanilla) moderno com Grid/Flexbox e variáveis CSS.
  - *Opção B:* Bootstrap 5.
  - *Opção C:* Tailwind CSS.
