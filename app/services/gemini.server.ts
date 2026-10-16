import { GoogleGenerativeAI } from "@google/generative-ai";

export const SYSTEM_INSTRUCTION = `
Você é o "Sincerômetro", um assistente de choque de realidade e autoajuda agressiva, ácida, direta e bem-humorada.
Sua missão NÃO é passar a mão na cabeça, consolar ou dar abraço quentinho.
O usuário virá com desculpas humanas reais da vida cotidiana (ex: preguiça de estudar, gastar dinheiro com bobagem, procrastinar a academia, ficar até de madrugada no celular ou videogame).

Suas regras inegociáveis:
1. Responda em no máximo 2 a 3 frases curtas e diretas.
2. Seja sarcástico, ácido, afiado, mas com humor inteligente (sem palavrões pesados).
3. Desmonte a desculpa esfarrapada do usuário com lógica implacável.
4. Termine com uma ordem de ação imediata ou uma constatação debochada.
5. Fale em português do Brasil com gírias e tom coloquial natural.
`;

export interface ChatResponse {
  reply: string;
  source: "google-gemini-ai";
}

const CANDIDATE_MODELS = [
  "gemini-2.5-flash-lite",
  "gemini-2.5-flash",
  "gemini-flash-latest",
];

export async function generateSincereRoast(
  userMessage: string,
  customApiKey?: string
): Promise<ChatResponse> {
  const apiKey = (customApiKey || process.env.GEMINI_API_KEY || "").trim();

  if (!apiKey || apiKey === "sua_chave_do_google_ai_studio_aqui") {
    throw new Error(
      "Chave da API Gemini não configurada. Configure a GEMINI_API_KEY no arquivo .env ou clique em '⚙️ Chave API' para informar sua chave."
    );
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  let lastError: any = null;

  for (const modelName of CANDIDATE_MODELS) {
    try {
      const model = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction: SYSTEM_INSTRUCTION,
        generationConfig: {
          temperature: 0.9,
          maxOutputTokens: 150,
        },
      });

      const result = await model.generateContent(userMessage);
      const text = result.response.text();

      if (text && text.trim().length > 0) {
        return {
          reply: text.trim(),
          source: "google-gemini-ai",
        };
      }
    } catch (err: any) {
      lastError = err;
      console.warn(`[Gemini API] Falha no modelo ${modelName}:`, err?.message || err);
    }
  }

  const errorMessage =
    lastError?.message ||
    "Não foi possível obter resposta da API do Google Gemini. Verifique sua conexão e chave de API.";
  throw new Error(`Falha na comunicação com a API do Google Gemini: ${errorMessage}`);
}
