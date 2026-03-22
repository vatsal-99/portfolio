import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { fetchChatReply } from "@/lib/chatApi";
import { generatePortfolioReply, RATE_LIMIT } from "@/lib/portfolioChatbot";

const INTRO =
  "Hello. I can help you with information about Vatsal's experience, skills, and projects. Feel free to ask.";

export function PortfolioChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const listRef = useRef(null);
  const rateRef = useRef({ minute: -1, count: 0 });
  const introRef = useRef(false);

  const scrollBottom = () => {
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: "smooth",
      });
    });
  };

  useEffect(() => {
    if (open && !introRef.current) {
      introRef.current = true;
      setMessages([{ role: "bot", text: INTRO }]);
    }
  }, [open]);

  useEffect(() => {
    scrollBottom();
  }, [messages, typing]);

  const checkRateLimit = () => {
    const m = new Date().getMinutes();
    if (rateRef.current.minute !== m) {
      rateRef.current.minute = m;
      rateRef.current.count = 0;
    }
    if (rateRef.current.count >= 8) return false;
    rateRef.current.count += 1;
    return true;
  };

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text) return;

    if (!checkRateLimit()) {
      setMessages((prev) => [
        ...prev,
        { role: "user", text },
        { role: "bot", text: RATE_LIMIT },
      ]);
      setInput("");
      return;
    }

    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setTyping(true);

    try {
      const remote = await fetchChatReply(text);
      const reply = remote ?? generatePortfolioReply(text);
      setTyping(false);
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    } catch {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: generatePortfolioReply(text) },
      ]);
    }
  }, [input]);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full",
          "border-2 border-background bg-primary text-primary-foreground shadow-xl",
          "ring-2 ring-primary/30 ring-offset-2 ring-offset-background",
          "hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        )}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        {open ? (
          <X className="h-6 w-6" strokeWidth={2.25} />
        ) : (
          <MessageCircle className="h-7 w-7" strokeWidth={2} />
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            className={cn(
              "fixed bottom-24 right-5 z-50 flex h-[min(72vh,520px)] max-h-[min(72vh,520px)]",
              "w-[min(100vw-1.25rem,380px)] max-w-[calc(100vw-1.25rem)] flex-col overflow-hidden rounded-2xl",
              "border border-border bg-card shadow-2xl",
            )}
          >
            <div className="flex shrink-0 items-center gap-2 border-b border-border bg-muted/50 px-3 py-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Bot className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1 text-left">
                <p className="truncate text-sm font-semibold text-foreground">
                  Profile assistant
                </p>
                <p className="text-[10px] text-muted-foreground">
                  AI-powered assistant
                </p>
              </div>
            </div>

            <div
              ref={listRef}
              className="min-h-0 min-w-0 flex-1 space-y-3 overflow-y-auto overflow-x-hidden px-3 py-3 text-left"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex",
                    m.role === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[92%] rounded-2xl px-3 py-2 text-sm leading-relaxed",
                      m.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-muted text-foreground rounded-bl-md",
                    )}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md bg-muted px-3 py-2 text-sm text-muted-foreground">
                    <span className="inline-flex gap-1">
                      <span className="animate-pulse">●</span>
                      <span className="animate-pulse delay-75">●</span>
                      <span className="animate-pulse delay-150">●</span>
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex shrink-0 gap-2 border-t border-border p-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask about experience, skills, or projects…"
                className="min-h-[44px] min-w-0 flex-1 rounded-xl border border-input bg-background px-3 py-2 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                aria-label="Message"
              />
              <button
                type="button"
                onClick={send}
                className="flex h-11 min-w-[44px] shrink-0 items-center justify-center rounded-xl bg-primary px-3 text-primary-foreground hover:opacity-90"
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
