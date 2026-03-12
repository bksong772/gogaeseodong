"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const QUICK_QUESTIONS = [
  "어떤 방이 있나요?",
  "서동부엌 예약 방법은?",
  "서동영화 이용 방법은?",
  "위치가 어디인가요?",
];

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "안녕하세요, 고개서동입니다 🌿\n서동여관, 서동부엌, 서동영화에 대해 무엇이든 물어보세요.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100);
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;
    const userMessage: Message = { role: "user", content: text };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);
    setMessages([...newMessages, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      if (!res.ok) throw new Error("API 오류");
      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      if (!reader) throw new Error("스트림 없음");
      let fullText = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        for (const line of chunk.split("\n")) {
          if (line.startsWith("data: ") && line.slice(6) !== "[DONE]") {
            try {
              const parsed = JSON.parse(line.slice(6));
              if (parsed.text) {
                fullText += parsed.text;
                setMessages((prev) => {
                  const updated = [...prev];
                  updated[updated.length - 1] = { role: "assistant", content: fullText };
                  return updated;
                });
              }
            } catch { /* 무시 */ }
          }
        }
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: "죄송합니다. 오류가 발생했습니다. 카카오톡 '고개서동'으로 문의해주세요.",
        };
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* 채팅창 */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 z-50 flex flex-col animate-fade-up"
          style={{
            width: "min(380px, calc(100vw - 32px))",
            maxHeight: "560px",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 16px 48px rgba(44, 24, 16, 0.2), 0 4px 16px rgba(44, 24, 16, 0.12)",
            border: "1px solid rgba(196, 168, 130, 0.4)",
            backgroundColor: "#FAF5ED",
          }}
        >
          {/* 헤더 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              borderBottom: "1px solid rgba(196, 168, 130, 0.35)",
              backgroundColor: "#F0E8D5",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "#B5632A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Sparkles size={15} style={{ color: "#FAF5ED" }} />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#2C1810",
                    lineHeight: 1.2,
                  }}
                >
                  고개서동 안내
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      backgroundColor: "#4CAF50",
                      display: "inline-block",
                    }}
                  />
                  <span style={{ fontSize: "11px", color: "#9B7B6A" }}>온라인</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "6px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#E5D9C3";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
              }}
            >
              <X size={18} style={{ color: "#9B7B6A" }} />
            </button>
          </div>

          {/* 메시지 목록 */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              maxHeight: "320px",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                  gap: "8px",
                  alignItems: "flex-end",
                }}
              >
                {msg.role === "assistant" && (
                  <div
                    style={{
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      backgroundColor: "#B5632A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Sparkles size={12} style={{ color: "#FAF5ED" }} />
                  </div>
                )}
                <div
                  style={{
                    maxWidth: "78%",
                    padding: "10px 14px",
                    fontSize: "13px",
                    lineHeight: 1.65,
                    whiteSpace: "pre-wrap",
                    fontFamily: "'Noto Serif KR', serif",
                    borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                    ...(msg.role === "user"
                      ? {
                          backgroundColor: "#B5632A",
                          color: "#FAF5ED",
                          boxShadow: "0 2px 8px rgba(181, 99, 42, 0.25)",
                        }
                      : {
                          backgroundColor: "#F0E8D5",
                          color: "#2C1810",
                          border: "1px solid rgba(196, 168, 130, 0.4)",
                        }),
                  }}
                >
                  {msg.content || (isLoading && msg.role === "assistant" && i === messages.length - 1 ? (
                    <span style={{ color: "#B5632A", letterSpacing: "0.2em" }}>···</span>
                  ) : null)}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* 빠른 질문 */}
          {messages.length === 1 && (
            <div
              style={{
                padding: "10px 14px",
                borderTop: "1px solid rgba(196, 168, 130, 0.3)",
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
              }}
            >
              {QUICK_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  style={{
                    fontSize: "11px",
                    border: "1px solid rgba(196, 168, 130, 0.6)",
                    padding: "5px 12px",
                    borderRadius: "9999px",
                    background: "transparent",
                    color: "#6B4C3B",
                    cursor: "pointer",
                    fontFamily: "'Noto Serif KR', serif",
                    transition: "all 0.18s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#B5632A";
                    (e.currentTarget as HTMLButtonElement).style.color = "#B5632A";
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(181, 99, 42, 0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(196, 168, 130, 0.6)";
                    (e.currentTarget as HTMLButtonElement).style.color = "#6B4C3B";
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                  }}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* 입력창 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderTop: "1px solid rgba(196, 168, 130, 0.35)",
              padding: "4px 4px 4px 16px",
              gap: "8px",
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage(input);
                }
              }}
              placeholder="무엇이든 물어보세요..."
              disabled={isLoading}
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                padding: "10px 0",
                fontSize: "13px",
                color: "#2C1810",
                fontFamily: "'Noto Serif KR', serif",
                outline: "none",
              }}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={isLoading || !input.trim()}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                border: "none",
                background: isLoading || !input.trim() ? "rgba(196, 168, 130, 0.3)" : "#B5632A",
                color: "#FAF5ED",
                cursor: isLoading || !input.trim() ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s",
                flexShrink: 0,
              }}
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}

      {/* 플로팅 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-primary"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 50,
          borderRadius: "9999px",
          padding: "14px 22px",
          boxShadow: "0 8px 32px rgba(181, 99, 42, 0.38)",
          fontSize: "13px",
          letterSpacing: "0.04em",
        }}
      >
        <MessageCircle size={16} />
        <span>{isOpen ? "닫기" : "서동에 대해 물어보기"}</span>
      </button>
    </>
  );
}
