import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "고개서동 | 부산 서동의 낡은 공간들",
  description:
    "부산 금정구 서동. 동네 곳곳의 비어있던 공간들을 하나씩 되살리는 프로젝트. 서동여관, 서동부엌, 서동영화.",
};

const KAKAO_URL = "https://pf.kakao.com/_VCxnsb";

const spaces = [
  {
    no: "一",
    href: "/stay",
    ko: "서동여관",
    en: "Seodong Stay",
    desc: "취향의방 · 그림의방 · 필사의방",
    sub: "할머니 집 같은 부산의 하룻밤",
    tag: "숙박",
  },
  {
    no: "二",
    href: "/kitchen",
    ko: "서동부엌",
    en: "Seodong Kitchen",
    desc: "노을이 예쁜 동네의 공유주방",
    sub: "노을 지는 서동에서 차려먹는 밥 한 끼",
    tag: "공유주방",
  },
  {
    no: "三",
    href: "/movie",
    ko: "서동영화",
    en: "Seodong Movie",
    desc: "오래된 공간에서 보는 프라이빗 영화",
    sub: "옥탑방 빔프로젝터, 우리만의 상영관",
    tag: "영화감상실",
  },
];

const stats = [
  { label: "운영 중인 공간", value: "5",   unit: "개",  note: "여관 3개 방 · 부엌 · 영화" },
  { label: "서동여관 평점",  value: "4.7", unit: "★",   note: "에어비앤비 방문객 평균" },
  { label: "서동부엌 평점",  value: "5.0", unit: "★",   note: "스페이스클라우드 리뷰 31개" },
];

const manifesto = [
  "낡은 것을 부끄러워하지 않는다",
  "동네 사람들과 함께 만든다",
  "상업성보다 쓰임을 먼저 생각한다",
  "서동을 알리되, 서동답게 한다",
];

/* ── 게스트 후기 ─────────────────────────── */
/* 실제 후기로 업데이트해 주세요 (에어비앤비 / 네이버블로그 등) */
const reviews = [
  {
    text: "처음 사진 봤을 때 낡아 보여서 살짝 걱정했는데, 막상 오니까 완전 제 취향이었어요. 주인장분이 카페랑 맛집 리스트도 보내주셔서 여행이 훨씬 풍성해졌어요.",
    space: "취향의방",
    platform: "에어비앤비",
    date: "2025.02",
    stars: 5,
  },
  {
    text: "노을 지는 거 보면서 요리하는 게 이렇게 좋을 줄 몰랐어요. 공간도 깔끔하고 필요한 도구가 다 있었어요. 꼭 다시 오고 싶은 곳이에요.",
    space: "서동부엌",
    platform: "스페이스클라우드",
    date: "2025.01",
    stars: 5,
  },
  {
    text: "부산 여행 여러 번 했는데 이런 경험은 처음이에요. 관광지 말고 진짜 부산 동네에 있는 기분. 주인장분이 너무 친절하셔서 감동이었어요.",
    space: "그림의방",
    platform: "에어비앤비",
    date: "2025.03",
    stars: 5,
  },
];

/* ── 주인장 추천 동네 스팟 ─────────────────── */
const localSpots = [
  {
    category: "고기",
    name: "송부장연탄갈비",
    desc: "주인장이 16년째 다니는 서동 대표 고기집. 양념갈비가 유튜버 선정 부산 1등. 국물김치도 일품.",
    distance: "도보 10분",
  },
  {
    category: "국밥·분식",
    name: "명동손칼국수",
    desc: "초등학교 3학년 때부터 25년째 가는 집. 칼국수와 선지국밥. 서동 고개 바로 옆.",
    distance: "도보 5분",
  },
  {
    category: "시장",
    name: "서동미로시장",
    desc: "동네 사람들이 일상으로 다니는 골목 시장. 맛나분식의 계란만두와 시장 감성이 살아있어요.",
    distance: "도보 5분",
  },
];

export default function HomePage() {
  return (
    <div className="pt-16">

      {/* ── 히어로 (풀스크린 영상 + 센터 카피) ─────────────────── */}
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
              fontFamily: "'Noto Serif KR', serif",
              fontSize: "clamp(52px, 9vw, 110px)",
              fontWeight: 400,
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
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: "clamp(28px, 4vw, 44px)",
                    fontWeight: 300,
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

      {/* ── 서동 동네 이야기 ─────────────────────────────── */}
      <section
        className="py-28"
        style={{ backgroundColor: "#1E0F08" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* 왼쪽: 동네 소개 */}
            <div>
              <p
                className="section-label mb-6"
                style={{ color: "rgba(212,136,78,0.8)" }}
              >
                SEODONG NEIGHBORHOOD
              </p>
              <h2
                className="mb-8"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: "clamp(30px, 5vw, 52px)",
                  fontWeight: 400,
                  color: "#FAF5ED",
                  lineHeight: 1.2,
                }}
              >
                부산 토박이도<br />잘 모르는 동네
              </h2>
              <div
                className="flex flex-col gap-4 text-sm leading-relaxed"
                style={{ color: "rgba(250,245,237,0.6)", maxWidth: "440px" }}
              >
                <p>
                  서동은 부산 금정구의 조용한 산동네입니다.
                  금정산 자락 아래, 60–70년대 골목 풍경이 그대로 남아있어요.
                </p>
                <p>
                  유명 관광지는 없습니다.
                  대신 노을이 예쁘고, 이웃이 정겹고,
                  한 번 오면 다시 오고 싶어지는 동네입니다.
                </p>
                <p style={{ color: "rgba(250,245,237,0.85)", fontWeight: 500 }}>
                  고개서동은 그 낡음을 가능성으로 봤습니다.
                </p>
              </div>
              {/* 키워드 태그 */}
              <div className="flex flex-wrap gap-2 mt-8">
                {["조용한 골목", "금정산 자락", "노을 명소", "60년대 정취", "부산의 진짜 동네"].map((kw) => (
                  <span
                    key={kw}
                    style={{
                      fontSize: "11px",
                      color: "rgba(212,136,78,0.9)",
                      border: "1px solid rgba(212,136,78,0.3)",
                      padding: "5px 14px",
                      borderRadius: "9999px",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* 오른쪽: 주인장 추천 스팟 */}
            <div>
              <p
                className="section-label mb-3"
                style={{ color: "rgba(212,136,78,0.8)" }}
              >
                LOCAL PICKS
              </p>
              <p
                className="text-xs mb-8"
                style={{ color: "rgba(250,245,237,0.35)", letterSpacing: "0.02em" }}
              >
                주인장이 직접 추천하는 서동 주변 스팟.
                예약 완료 후 개인 메시지로 안내해 드립니다.
              </p>

              <div className="flex flex-col">
                {localSpots.map((spot, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "16px",
                      padding: "20px 0",
                      borderBottom:
                        i < localSpots.length - 1
                          ? "1px solid rgba(250,245,237,0.07)"
                          : "none",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "10px",
                        color: "#D4884E",
                        border: "1px solid rgba(212,136,78,0.35)",
                        padding: "3px 9px",
                        borderRadius: "4px",
                        flexShrink: 0,
                        height: "fit-content",
                        marginTop: "2px",
                        letterSpacing: "0.05em",
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      {spot.category}
                    </span>
                    <div>
                      <p
                        style={{
                          fontFamily: "'Noto Serif KR', serif",
                          fontSize: "16px",
                          color: "#FAF5ED",
                          fontWeight: 500,
                          marginBottom: "5px",
                        }}
                      >
                        {spot.name}
                      </p>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "rgba(250,245,237,0.5)",
                          lineHeight: 1.7,
                        }}
                      >
                        {spot.desc}
                      </p>
                      <p
                        style={{
                          fontSize: "11px",
                          color: "rgba(212,136,78,0.6)",
                          marginTop: "6px",
                        }}
                      >
                        {spot.distance}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 큐레이션 강조 */}
              <div
                className="mt-8 p-5"
                style={{
                  borderRadius: "12px",
                  border: "1px solid rgba(212,136,78,0.2)",
                  backgroundColor: "rgba(212,136,78,0.05)",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(250,245,237,0.7)",
                    lineHeight: 1.8,
                  }}
                >
                  <span style={{ color: "#D4884E", fontWeight: 600 }}>주인장 직접 응대 —</span>{" "}
                  체크인 안내부터 동네 맛집·카페 정보까지,
                  예약 후 개인 메시지로 꼼꼼히 챙겨드립니다.
                </p>
              </div>
            </div>
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
              <div key={space.no} className="card flex flex-col">
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-7">
                    <span className="tag">{space.tag}</span>
                    <span
                      style={{
                        fontFamily: "'Noto Serif KR', serif",
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
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: "clamp(20px, 2.5vw, 26px)",
                      fontWeight: 400,
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
                  <p className="text-xs mb-8" style={{ color: "#9B7B6A" }}>{space.sub}</p>

                  {/* 버튼 영역 */}
                  <div className="mt-auto flex flex-col gap-2">
                    <a
                      href={KAKAO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-center text-sm"
                      style={{ justifyContent: "center" }}
                    >
                      카카오로 예약하기
                    </a>
                    <Link
                      href={space.href}
                      className="flex items-center justify-center gap-1 text-sm py-2"
                      style={{ color: "#9B7B6A", textDecoration: "none" }}
                    >
                      공간 자세히 보기 <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 게스트 후기 ───────────────────────────────────── */}
      <section
        className="py-28"
        style={{ borderBottom: "1px solid rgba(196, 168, 130, 0.3)" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex items-center gap-5 mb-16">
            <span className="section-label">GUEST REVIEWS</span>
            <div
              className="flex-1 h-px"
              style={{
                background: "linear-gradient(to right, rgba(196,168,130,0.5), transparent)",
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="card p-7"
                style={{ backgroundColor: i === 1 ? "#F0E8D5" : "#FAF5ED" }}
              >
                {/* 별점 */}
                <div style={{ display: "flex", gap: "2px", marginBottom: "16px" }}>
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <span key={j} style={{ color: "#B5632A", fontSize: "13px" }}>★</span>
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: "14px",
                    lineHeight: 1.9,
                    color: "#2C1810",
                    marginBottom: "20px",
                  }}
                >
                  &ldquo;{r.text}&rdquo;
                </p>
                <div
                  style={{
                    borderTop: "1px solid rgba(196,168,130,0.4)",
                    paddingTop: "16px",
                  }}
                >
                  <p style={{ fontSize: "13px", color: "#6B4C3B", fontWeight: 600 }}>
                    {r.space}
                  </p>
                  <p style={{ fontSize: "11px", color: "#9B7B6A", marginTop: "3px" }}>
                    {r.platform} · {r.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 플랫폼 평점 요약 + 링크 */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 rounded-2xl"
            style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196,168,130,0.4)" }}
          >
            <div className="flex flex-wrap gap-6">
              <div className="text-center">
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#B5632A",
                  }}
                >
                  ★ 4.7
                </p>
                <p className="text-xs mt-1" style={{ color: "#9B7B6A" }}>
                  에어비앤비 평균
                </p>
              </div>
              <div
                style={{
                  width: "1px",
                  height: "40px",
                  backgroundColor: "rgba(196,168,130,0.5)",
                  alignSelf: "center",
                }}
              />
              <div className="text-center">
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#B5632A",
                  }}
                >
                  ★ 5.0
                </p>
                <p className="text-xs mt-1" style={{ color: "#9B7B6A" }}>
                  스페이스클라우드 리뷰 31개
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.airbnb.co.kr/rooms/997241625179311794"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: "13px" }}
              >
                에어비앤비 후기 보기
              </a>
              <a
                href="https://www.spacecloud.kr/space/37505"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: "13px" }}
              >
                스페이스클라우드 후기
              </a>
            </div>
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
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: "clamp(26px, 4vw, 36px)",
                  fontWeight: 300,
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
                        fontFamily: "'Noto Serif KR', serif",
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
              fontFamily: "'Noto Serif KR', serif",
              fontSize: "clamp(28px, 5vw, 52px)",
              fontWeight: 300,
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
