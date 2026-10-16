# Roteiro da Apresentação e Demo ao Vivo (10 a 15 Minutos)

> **Formato da Apresentação:** Dividida em 2 partes obrigatórias  
> **Parte 1 (5–7 min):** Apresentação Técnica do Remix (Apoiada no Artigo e na Ficha de RPG)  
> **Parte 2 (5–8 min):** Demonstração ao Vivo do Chatbot com a Turma e Explicação do Código-Fonte

---

## 1. Cronograma Sugerido da Apresentação (Total: 12 a 14 min)

```
[00:00 - 02:00] ──> Introdução: O problema das SPAs e o nascimento do Remix
[02:00 - 05:00] ──> Arquitetura Técnica & Ficha de RPG (Atributos e Pilares)
[05:00 - 07:00] ──> Casos de Sucesso (Shopify, Docker) e Curiosidades
[07:00 - 11:00] ──> DEMO AO VIVO: Chatbot projetado na tela + Desculpas da Turma!
[11:00 - 13:30] ──> Explicação do Código: action(), SSR, Auto-scroll e Segurança
[13:30 - 15:00] ──> Conclusão e Abertura para Perguntas do Professor
```

---

## 2. Roteiro Passo a Passo

### Parte 1: Apresentação Teórica (Suporte: Ficha de RPG e Slides)
- **Minuto 0 a 2: O Gancho Inicial (O Caos das SPAs)**
  - *"Boa noite professor e turma! Hoje vamos falar sobre o Remix, o framework que decidiu peitar a complexidade desnecessária do JavaScript moderno e voltar aos padrões da Web."*
  - Explicar brevemente o problema das telas brancas, dezenas de `useEffect` em cascata e spinners infinitos das SPAs tradicionais.
- **Minuto 2 a 5: A Ficha de RPG do Remix**
  - Projetar a Ficha Técnica de RPG na tela!
  - Destacar os atributos técnicos:
    - **DES (9.5/10):** Renderização direta no servidor com carregamento paralelo.
    - **EST (8.0/10):** Separação elegante entre `loader` (leitura) e `action` (escrita).
    - **Afinidade com Capivaras e Caturritas (10/10):** Explicar com bom humor a tranquilidade do framework diante das brigas de mercado.
- **Minuto 5 a 7: Por que grandes empresas usam o Remix?**
  - Mencionar que a **Shopify** comprou o framework para rodar lojas globais e a **Docker** refez a interface do Docker Desktop com ele.

---

### Parte 2: Demonstração Prática ao Vivo (Seu Momento Principal como Autor do Código)
- **Minuto 7 a 9: Interação Direta com a Turma**
  - Projetar o Chatbot na tela do projetor da sala com o design premium em tema escuro.
  - Anunciar: *"Para colocar o Remix à prova, desenvolvemos a aplicação prática exigida: o Chatbot de Autoajuda Sincera e Agressiva. Quem aqui na sala tem uma desculpa real para confessar agora?"*
  - Coletar 2 ou 3 desculpas da plateia (ex: alguém que não estudou para a prova, quem gastou dinheiro em delivery, quem procrastinou na cama).
  - Digitar no input e submeter: mostrar o indicador animado de loading (*"Afiando a bronca..."*) e ler a resposta ácida e hilária da IA em voz alta!
  - Clicar também em um dos botões de "Desculpas Rápidas" para demonstrar a agilidade de resposta.

- **Minuto 9 a 12: A Explicação Técnica das Escolhas (O Ponto Alto da Avaliação)**
  - O autor do código-fonte (você) assume a fala técnica e explica para o professor:
    1. **Consumo de API via POST com `async/await`:** Explicar que a chamada não é feita no navegador; o formulário envia para a função `action()` do Remix no servidor, que consome a IA de forma assíncrona.
    2. **Segurança de Credenciais:** Destacar que chaves de API nunca ficam expostas no client-side graças ao modelo fullstack do Remix.
    3. **DOM Dinâmico e Auto-Scroll:** Mostrar como cada balão é adicionado reativamente e como o scroll acompanha suavemente a conversa até o final.
    4. **Controle de Loading:** Mostrar como o hook `useFetcher()` fornece o estado `submitting` nativamente sem precisar de `useState(isLoading)` manual.
    5. **Tratamento de Exceções e Resiliência Online:** Explicar o tratamento seguro de erros com try/catch no backend do Remix e exibição clara de status e erros caso a API ou credencial apresentem inconsistências.

---

## 3. Guia Rápido de Respostas para Perguntas da Banca / Professor

**P: "Por que vocês escolheram fazer a chamada da IA no `action` do Remix em vez de usar um `fetch` direto no `onClick` do botão no React?"**  
*R:* *"Porque no Remix, a função `action` roda exclusivamente no servidor Node.js. Se fizéssemos no cliente, teríamos que expor nossa chave secreta da API no bundle JavaScript do navegador, o que é uma falha grave de segurança. Além disso, o `action` do Remix já gerencia o estado de envio e revalidação automaticamente."*

**P: "Qual a diferença entre o Remix e o Next.js?"**  
*R:* *"Enquanto o Next.js apostou em Server Components mais complexos e cache rígido, o Remix priorizou os Web Standards nativos da plataforma (Request, Response, FormData), rotas aninhadas verdadeiras e o modelo clássico de formulários HTML com Progressive Enhancement."*

**P: "Como funciona o auto-scroll quando chega uma nova resposta da IA?"**  
*R:* *"Utilizamos uma referência de DOM (`useRef`) ancorada no rodapé da lista de mensagens combinada com um `useEffect` que detecta alterações na lista e chama `scrollIntoView({ behavior: 'smooth' })`."*
