import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "우리이야기 | 고개서동 브랜드 스토리",
  description:
    "부산 금정구 서동의 빈 공간을 채우는 고개서동 프로젝트 이야기. 도시재생, 로컬 커뮤니티, 오래된 것의 가치.",
};

const timeline = [
  { year: "2023", event: "서동여관 오픈", desc: "버려진 여관을 취향의방, 그림의방, 필사의방으로" },
  { year: "2023", event: "서동부엌 오픈", desc: "1층 빈 공간을 공유주방으로. 노을이 예쁜 자리" },
  { year: "2024", event: "서동영화 오픈", desc: "오래된 방 하나를 프라이빗 영화감상실로" },
  { year: "2024", event: "부산일보 소개", desc: "서동의 도시재생 프로젝트로 언론에 소개됨" },
];

const manifesto = [
  {
    num: "01",
    title: "낡은 것을 자랑합니다",
    desc: "오래된 건물, 바래진 벽지, 삐걱거리는 마루. 그게 서동의 진짜 모습입니다.",
  },
  {
    num: "02",
    title: "동네 사람들과 함께합니다",
    desc: "외부에서 들어와 바꾸는 게 아니라, 기존 주민들과 호흡하며 만들어갑니다.",
  },
  {
    num: "03",
    title: "쓰임을 먼저 생각합니다",
    desc: "돈이 되는 것보다, 누군가에게 필요한 공간을 먼저 고민합니다.",
  },
  {
    num: "04",
    title: "서동답게 합니다",
    desc: "유행을 따르지 않습니다. 서동의 결과 속도에 맞게 천천히 갑니다.",
  },
];

export default function StoryPage() {
  return (
    <div className="pt-16">

      {/* ── 헤더 ────────────────────────────────────────── */}
      <section
        className="py-24 sm:py-32"
        style={{ borderBottom: "1px solid rgba(196, 168, 130, 0.3)" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <p className="section-label mb-6">OUR STORY</p>
          <h1
            className="leading-[1.05]"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: "clamp(44px, 8vw, 80px)",
              fontWeight: 300,
              color: "#2C1810",
            }}
          >
            우리<span style={{ color: "#B5632A" }}>이야기</span>
          </h1>
        </div>
      </section>

      {/* ── 메인 선언문 ──────────────────────────────────── */}
      <section
        className="py-28"
        style={{ borderBottom: "1px solid rgba(196, 168, 130, 0.3)" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div style={{ maxWidth: "720px" }}>
            <p
              className="leading-tight mb-10"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: "clamp(22px, 4vw, 36px)",
                fontWeight: 700,
                color: "#2C1810",
              }}
            >
              &ldquo;서동의 낡고 버려진 공간들이<br />
              <span style={{ color: "#B5632A" }}>우리의 시작점</span>이었습니다.&rdquo;
            </p>
            <div
              className="flex flex-col gap-5 text-sm leading-relaxed"
              style={{
                borderLeft: "3px solid rgba(181, 99, 42, 0.5)",
                paddingLeft: "28px",
                color: "#6B4C3B",
              }}
            >
              <p>
                부산 금정구 서동. 한때는 사람들이 많이 살던 동네입니다.
                하지만 이제는 젊은이들이 떠나고, 빈 건물들이 늘어나고 있습니다.
              </p>
              <p>
                우리는 그 빈 공간들을 보면서 생각했습니다.
                &ldquo;부술 게 아니라, 열면 어떨까?&rdquo;
              </p>
              <p>
                오래된 여관을 숙소로, 빈 방을 영화관으로,
                낡은 부엌을 공유주방으로. 있는 것들로 시작했습니다.
              </p>
              <p style={{ color: "#2C1810", fontWeight: 600 }}>
                낡음은 부끄러운 게 아닙니다.
                그게 서동의 결이고, 우리의 정체성입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 타임라인 ─────────────────────────────────────── */}
      <section
        className="py-24"
        style={{ borderBottom: "1px solid rgba(196, 168, 130, 0.3)" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <p className="section-label mb-12">TIMELINE</p>
          <div className="card overflow-hidden">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="timeline-row flex items-start gap-8 p-7 sm:p-8"
                style={{
                  borderBottom:
                    i < timeline.length - 1
                      ? "1px solid rgba(196, 168, 130, 0.3)"
                      : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontSize: "14px",
                    color: "#B5632A",
                    flexShrink: 0,
                    marginTop: "2px",
                    minWidth: "40px",
                  }}
                >
                  {item.year}
                </span>
                <div>
                  <p
                    className="mb-1"
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontWeight: 700,
                      fontSize: "16px",
                      color: "#2C1810",
                    }}
                  >
                    {item.event}
                  </p>
                  <p className="text-sm" style={{ color: "#9B7B6A" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 매니페스토 ────────────────────────────────────── */}
      <section
        className="py-24"
        style={{ borderBottom: "1px solid rgba(196, 168, 130, 0.3)" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <p className="section-label mb-12">MANIFESTO</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {manifesto.map((item, i) => (
              <div
                key={item.num}
                className="card p-8 sm:p-10"
                style={{ backgroundColor: i % 2 === 1 ? "#F0E8D5" : "#FAF5ED" }}
              >
                <p
                  className="mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontSize: "12px",
                    color: "#B5632A",
                    letterSpacing: "0.1em",
                  }}
                >
                  {item.num}
                </p>
                <p
                  className="mb-4"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontWeight: 700,
                    fontSize: "17px",
                    color: "#2C1810",
                  }}
                >
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6B4C3B" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-32">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 text-center">
          <h2
            className="mb-5"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: "clamp(24px, 4vw, 44px)",
              fontWeight: 700,
              color: "#2C1810",
            }}
          >
            서동에 와보세요
          </h2>
          <p className="text-sm mb-14" style={{ color: "#6B4C3B" }}>
            글로만 읽으면 반도 모릅니다.<br />
            직접 와서 낡은 골목을, 따뜻한 이웃을 느껴보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/stay" className="btn-primary">
              서동여관 예약 <ArrowRight size={16} />
            </Link>
            <Link href="/kitchen" className="btn-secondary">
              서동부엌 예약
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
