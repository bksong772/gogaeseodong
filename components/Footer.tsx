import Link from "next/link";
import { MapPin, MessageCircle, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(196, 168, 130, 0.35)",
        backgroundColor: "#F0E8D5",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12 sm:py-20">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          style={{
            borderBottom: "1px solid rgba(196, 168, 130, 0.35)",
            paddingBottom: "40px",
            marginBottom: "28px",
          }}
        >
          {/* 브랜드 */}
          <div>
            <p
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: "22px",
                fontWeight: 800,
                color: "#2C1810",
                letterSpacing: "0.1em",
              }}
            >
              고개서동
            </p>
            <p
              className="mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "12px",
                color: "#9B7B6A",
                letterSpacing: "0.12em",
              }}
            >
              Gogae · Seodong
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#6B4C3B" }}>
              부산 금정구 서동의 낡고 오래된 공간들.<br />
              버려진 것들에서 쓰임을 찾습니다.
            </p>
          </div>

          {/* 공간들 */}
          <div>
            <p className="section-label mb-5">OUR SPACES</p>
            {/* 모바일: 2열 그리드 / 데스크탑: 세로 목록 */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-y-3 gap-x-4">
              {[
                { href: "/stay",    label: "서동여관" },
                { href: "/kitchen", label: "서동부엌" },
                { href: "/movie",   label: "서동영화" },
                { href: "/story",   label: "우리이야기" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="footer-link flex items-center gap-2 text-sm"
                  style={{ fontFamily: "'Noto Serif KR', serif" }}
                >
                  <span style={{ color: "#C4A882" }}>—</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* 연락처 */}
          <div>
            <p className="section-label mb-5">CONTACT</p>
            {/* 모바일: 가로 3열 / 데스크탑: 세로 목록 */}
            <div className="grid grid-cols-3 md:grid-cols-1 gap-4 md:gap-5">
              <div className="flex flex-col md:flex-row items-start gap-2 md:gap-3">
                <MapPin size={15} style={{ color: "#B5632A", marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <p className="text-xs mb-0.5" style={{ color: "#9B7B6A" }}>주소</p>
                  <p className="text-xs md:text-sm leading-snug" style={{ color: "#2C1810" }}>
                    부산 금정구<br className="md:hidden" /> 서동로91번길 7
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start gap-2 md:gap-3">
                <MessageCircle size={15} style={{ color: "#B5632A", marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <p className="text-xs mb-0.5" style={{ color: "#9B7B6A" }}>카카오톡</p>
                  <a
                    href="http://pf.kakao.com/_VCxnsb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs md:text-sm"
                    style={{ color: "#2C1810", textDecoration: "none" }}
                  >
                    고개서동
                  </a>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start gap-2 md:gap-3">
                <Instagram size={15} style={{ color: "#B5632A", marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <p className="text-xs mb-0.5" style={{ color: "#9B7B6A" }}>인스타그램</p>
                  <a
                    href="https://instagram.com/gogae.seodong"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs md:text-sm"
                    style={{ color: "#B5632A", textDecoration: "none" }}
                  >
                    @gogae.seodong
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs" style={{ color: "#9B7B6A" }}>© 2024 고개서동</span>
          <span
            className="text-xs"
            style={{ color: "#9B7B6A", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
          >
            Busan, Korea
          </span>
        </div>
      </div>
    </footer>
  );
}
