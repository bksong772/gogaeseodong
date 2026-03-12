import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "고개서동 | 부산 서동의 낡은 공간들",
  description:
    "부산 금정구 서동. 동네 곳곳의 비어있던 공간들을 하나씩 되살리는 프로젝트. 서동여관, 서동부엌, 서동영화.",
};

const spaces = [
  {
    no: "一",
    href: "/stay",
    ko: "서동여관",
    en: "Seodong Stay",
    desc: "취향의방 · 그림의방 · 필사의방",
    sub: "할머니 집 같은 부산의 하룻밤",
    tag: "숙박",
    cta: "Airbnb 예약",
  },
  {
    no: "二",
    href: "/kitchen",
    ko: "서동부엌",
    en: "Seodong Kitchen",
    desc: "노을이 예쁜 동네의 공유주방",
    sub: "요리하고, 먹고, 어울리는 시간",
    tag: "공유주방",
    cta: "스페이스클라우드 예약",
  },
  {
    no: "三",
    href: "/movie",
    ko: "서동영화",
    en: "Seodong Movie",
    desc: "오래된 공간에서 보는 프라이빗 영화",
    sub: "빔프로젝터 · OTT · 완전 암전",
    tag: "영화감상실",
    cta: "스페이스클라우드 예약",
  },
];

const stats = [
  { label: "운영 중인 공간", value: "3",     unit: "개",     note: "여관 · 부엌 · 영화" },
  { label: "건물 건축 연도", value: "1990",   unit: "년대",   note: "30년이 넘은 건물" },
  { label: "에어비앤비 리뷰", value: "4.8",   unit: "★",      note: "방문객 평균 평점" },
];

const manifesto = [
  "낡은 것을 부끄러워하지 않는다",
  "동네 사람들과 함께 만든다",
  "상업성보다 쓰임을 먼저 생각한다",
  "서동을 알리되, 서동답게 한다",
];

export default function HomePage() {
  return (
    <div className="pt-16">

      {/* ── 히어로 (풀스크린 영상 + 센터 카피) ─────────────── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">

        {/* 배경 영상 */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* 오버레이 */}
        <div
          className="absolute inset-0"
          style={{
            zIndex: 1,
            background:
              "linear-gradient(to bottom, rgba(20,12,8,0.1) 0%, rgba(20,12,8,0.3) 35%, rgba(20,12,8,0.72) 70%, rgba(20,12,8,0.92) 100%)",
          }}
        />

        {/* 카피 — 좌하단 정렬 */}
        <div
          className="relative px-6 sm:px-12 pb-20 sm:pb-28"
          style={{ zIndex: 2, maxWidth: "1152px", margin: "0 auto", width: "100%" }}
        >
          <p
            className="section-label mb-6"
            style={{ color: "rgba(240, 213, 184, 0.7)" }}
          >
            BUSAN · GEUMJEONG · SEODONG
          </p>

          <h1
            className="leading-[1.0] mb-7"
            style={{
              fontFamily: "Pretendard, sans-serif",
              fontSize: "clamp(52px, 9vw, 110px)",
              fontWeight: 800,
              color: "#FAF5ED",
              letterSpacing: "-0.01em",
            }}
          >
            아직 모르는
            <br />
            <span style={{ color: "#D4884E" }}>부산</span>이
            <br />
            있습니다
          </h1>

          <p
            className="text-sm sm:text-base leading-relaxed mb-10"
            style={{
              color: "rgba(250, 245, 237, 0.65)",
              maxWidth: "420px",
            }}
          >
            부산 금정구 서동. 동네 곳곳의 비어있던 공간들을<br />
            하나씩 되살리고 있습니다.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/stay" className="btn-primary">
              서동 구경하기 <ArrowRight size={16} />
            </Link>
            <Link
              href="/story"
              className="btn-secondary"
              style={{
                borderColor: "rgba(250, 245, 237, 0.35)",
                color: "#FAF5ED",
              }}
            >
              우리 이야기
            </Link>
          </div>
        </div>

        {/* 스크롤 화살표 */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{ zIndex: 2, animation: "bounce 2s infinite" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5v14M5 12l7 7 7-7"
              stroke="rgba(250,245,237,0.4)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* ── 통계 스트립 ───────────────────────────────────── */}
      <section style={{ backgroundColor: "#2C1810" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {stats.map((s) => (
              <div key={s.label} className="py-10 px-6 text-center">
                <p
                  className="mb-1"
                  style={{
                    fontFamily: "Pretendard, sans-serif",
                    fontSize: "clamp(28px, 4vw, 44px)",
                    fontWeight: 800,
                    color: "#FAF5ED",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                  <span style={{ fontSize: "0.5em", marginLeft: "2px", color: "#D4884E" }}>
                    {s.unit}
                  </span>
                </p>
                <p className="text-xs mb-1" style={{ color: "rgba(250,245,237,0.5)" }}>
                  {s.label}
                </p>
                <p className="text-xs" style={{ color: "rgba(250,245,237,0.3)" }}>
                  {s.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 공간 목록 ─────────────────────────────────────── */}
      <section
        className="py-28"
        style={{ borderBottom: "1px solid rgba(196, 168, 130, 0.3)" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex items-center gap-5 mb-16">
            <span className="section-label">OUR SPACES</span>
            <div
              className="flex-1 h-px"
              style={{
                background: "linear-gradient(to right, rgba(196,168,130,0.5), transparent)",
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {spaces.map((space) => (
              <Link
                key={space.no}
                href={space.href}
                className="card card-hover block group"
                style={{ textDecoration: "none" }}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-7">
                    <span className="tag">{space.tag}</span>
                    <span
                      style={{
                        fontFamily: "Pretendard, sans-serif",
                        fontSize: "24px",
                        color: "rgba(196, 168, 130, 0.4)",
                        fontWeight: 700,
                      }}
                    >
                      {space.no}
                    </span>
                  </div>
                  <h2
                    className="mb-1"
                    style={{
                      fontFamily: "Pretendard, sans-serif",
                      fontSize: "clamp(20px, 2.5vw, 26px)",
                      fontWeight: 700,
                      color: "#2C1810",
                    }}
                  >
                    {space.ko}
                  </h2>
                  <p
                    className="text-sm mb-5"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: "italic",
                      color: "#9B7B6A",
                    }}
                  >
                    {space.en}
                  </p>
                  <p className="text-sm mb-2" style={{ color: "#6B4C3B" }}>{space.desc}</p>
                  <p className="text-xs mb-10" style={{ color: "#9B7B6A" }}>{space.sub}</p>
                  <div className="flex items-center gap-2 text-sm" style={{ color: "#B5632A" }}>
                    <span>{space.cta}</span>
                    <ArrowRight
                      size={14}
                      style={{ transition: "transform 0.25s ease" }}
                      className="group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 브랜드 스토리 ─────────────────────────────────── */}
      <section
        className="py-28"
        style={{ borderBottom: "1px solid rgba(196, 168, 130, 0.3)" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <div className="card p-10 sm:p-12">
              <p className="section-label mb-7">WHY SEODONG</p>
              <h2
                className="leading-snug mb-7"
                style={{
                  fontFamily: "Pretendard, sans-serif",
                  fontSize: "clamp(26px, 4vw, 36px)",
                  fontWeight: 700,
                  color: "#2C1810",
                }}
              >
                서동은<br />어떤 동네인가요
              </h2>
              <div className="flex flex-col gap-4 text-sm leading-relaxed" style={{ color: "#6B4C3B" }}>
                <p>
                  부산 금정구 서동. 오래된 주택과 비어있는 공간들이 많은 동네입니다.
                </p>
                <p>
                  어떤 사람에게는 낡고 불편한 동네처럼 보일 수 있습니다.
                  고개서동은 그 낡음을 오히려 가능성으로 봤습니다.
                </p>
                <p style={{ color: "#2C1810", fontWeight: 600 }}>
                  버려진 공간을 하나씩 되살려,<br />
                  동네 안에 작은 공간들을 만들고 있습니다.
                </p>
              </div>
            </div>

            <div className="card p-10 sm:p-12" style={{ backgroundColor: "#F0E8D5" }}>
              <p className="section-label mb-7">MANIFESTO</p>
              <div className="flex flex-col gap-5">
                {manifesto.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 pb-5"
                    style={{
                      borderBottom:
                        i < manifesto.length - 1 ? "1px dashed rgba(196, 168, 130, 0.45)" : "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontStyle: "italic",
                        fontSize: "11px",
                        color: "#B5632A",
                        marginTop: "3px",
                        flexShrink: 0,
                        letterSpacing: "0.1em",
                      }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      style={{
                        fontFamily: "Pretendard, sans-serif",
                        fontSize: "15px",
                        color: "#2C1810",
                        lineHeight: 1.7,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/story" className="btn-secondary">
                  우리 이야기 더 보기 <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-32">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 text-center">
          <p className="section-label mb-10">FIND US</p>
          <h2
            className="mb-5"
            style={{
              fontFamily: "Pretendard, sans-serif",
              fontSize: "clamp(28px, 5vw, 52px)",
              fontWeight: 700,
              color: "#2C1810",
            }}
          >
            서동에서 만납시다
          </h2>
          <p className="text-sm mb-2" style={{ color: "#6B4C3B" }}>
            부산 금정구 서동로91번길 7
          </p>
          <p className="text-sm mb-14" style={{ color: "#9B7B6A" }}>
            카카오톡: 고개서동
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/stay" className="btn-primary">
              서동여관 예약하기 <ArrowRight size={16} />
            </Link>
            <Link href="/kitchen" className="btn-secondary">
              서동부엌 예약하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
