/**
 * Calls Vercel /api/chat in production; returns null on failure so the UI can use rule-based fallback.
 */

export async function fetchChatReply(message) {
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (data?.reply && typeof data.reply === "string" && data.reply.trim()) {
      return data.reply.trim();
    }
  } catch {
    /* offline, plain Vite dev without vercel dev, or network error */
  }
  return null;
}
