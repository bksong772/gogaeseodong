"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";

const navItems = [
  { href: "/story",   label: "우리이야기" },
  { href: "/stay",    label: "서동여관" },
  { href: "/kitchen", label: "서동부엌" },
  { href: "/movie",   label: "서동영화" },
  { href: "/guide",   label: "가이드" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-navbar">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">

          {/* 로고 */}
          <Link href="/" className="flex items-center gap-3" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "#2C1810",
                letterSpacing: "0.15em",
              }}
            >
              고개서동
            </span>
            <span
              className="hidden sm:block text-xs tracking-widest"
              style={{
                color: "#9B7B6A",
                fontStyle: "italic",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Gogae Seodong
            </span>
          </Link>

          {/* 데스크탑 메뉴 */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-full text-sm transition-all duration-200"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                    backgroundColor: isActive ? "#B5632A" : "transparent",
                    color: isActive ? "#FAF5ED" : "#6B4C3B",
                    fontWeight: isActive ? 700 : 400,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#F0E8D5";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#2C1810";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#6B4C3B";
                    }
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* 모바일 햄버거 */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-xl transition-all duration-200"
            style={{ background: "transparent", border: "none", cursor: "pointer" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F0E8D5";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
            }}
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            {menuOpen
              ? <X size={22} style={{ color: "#6B4C3B" }} />
              : <Menu size={22} style={{ color: "#6B4C3B" }} />
            }
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div
          className="md:hidden animate-slide-down"
          style={{
            borderTop: "1px solid rgba(196, 168, 130, 0.35)",
            backgroundColor: "rgba(250, 245, 237, 0.97)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
          }}
        >
          {navItems.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-6 py-4 transition-colors"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: "16px",
                  color: isActive ? "#B5632A" : "#2C1810",
                  textDecoration: "none",
                  backgroundColor: isActive ? "rgba(181, 99, 42, 0.07)" : "transparent",
                  borderBottom: i < navItems.length - 1 ? "1px solid rgba(196, 168, 130, 0.2)" : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: "italic",
                      fontSize: "11px",
                      color: "#C4A882",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item.label}</span>
                </div>
                <ChevronRight size={16} style={{ color: "#C4A882" }} />
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
