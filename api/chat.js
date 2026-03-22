/**
 * Vercel Serverless Function   POST /api/chat
 * Body: { message: string }
 * Response: { reply: string }
 * Tries Groq first; on failure or empty, uses shared rule-based fallback.
 */

import { generatePortfolioReply } from "../src/lib/portfolioChatbot.js";

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "llama-3.1-8b-instant";

const SYSTEM_PROMPT = `You are a friendly, professional portfolio assistant for Vatsal Chandrani.

Facts you may use: full stack developer with 5+ years experience; React is a primary strength; ASP.NET Core, C#, REST APIs, SQL Server / PostgreSQL; enterprise work (public safety, HR/performance management, timesheet systems, document commerce); side project: WhatsApp auto-reply automation; Python for data science / ML learning; currently Senior Software Engineer at TatvaSoft (Ahmedabad); previously Version System (Rajkot). India-based.

Style: natural, conversational, warm but professional. You may use 🙂 sparingly. Not robotic, not overly formal, not jokey.
For questions that are not mainly about his career: answer briefly and humanly first, then add one soft line such as: "By the way, this site is mainly about Vatsal's portfolio—happy to chat about his skills, projects, or experience if you'd like."
Keep answers concise (roughly under 120 words unless the user clearly needs detail). Do not invent employers, dates, or credentials beyond what is listed above.`;

async function readJsonBody(req) {
  if (req.body && typeof req.body === "object" && !Buffer.isBuffer(req.body)) {
    return req.body;
  }
  if (typeof req.body === "string" && req.body.length) {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  const raw = await new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
  const text = raw.toString("utf8");
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    return {};
  }
}

async function fetchGroqReply(message) {
  const key = process.env.GROQ_API_KEY;
  if (!key || typeof key !== "string" || !key.trim()) {
    return null;
  }

  const res = await fetch(GROQ_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key.trim()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message },
      ],
      temperature: 0.55,
      max_tokens: 280,
    }),
  });

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  const text = data?.choices?.[0]?.message?.content?.trim();
  return text || null;
}

export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body;
  try {
    body = await readJsonBody(req);
  } catch {
    return res.status(400).json({ error: "Invalid body" });
  }

  const message = typeof body?.message === "string" ? body.message : "";
  if (!message.trim()) {
    return res.status(400).json({ error: "message required" });
  }

  let reply = null;
  try {
    reply = await fetchGroqReply(message);
  } catch {
    reply = null;
  }

  if (!reply) {
    try {
      reply = generatePortfolioReply(message);
    } catch {
      reply =
        "Something went wrong on our side—please try again in a moment.";
    }
  }

  return res.status(200).json({ reply });
}
