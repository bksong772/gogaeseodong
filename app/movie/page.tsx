import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Clock, Car, Timer, MonitorPlay } from "lucide-react";

export const metadata: Metadata = {
  title: "서동영화 | 부산 OTT룸 · 영화감상실",
  description:
    "부산 금정구 서동의 프라이빗 영화감상실. 빔프로젝터, OTT, 암전. 사진사, 동아리, 커플에게 추천. 스페이스클라우드 예약.",
  keywords: ["서동영화", "부산 OTT룸", "부산 영화감상실", "부산 빔프로젝터", "부산 사진스튜디오", "부산 데이트"],
};

const spaceInfo = [
  { icon: Users,       label: "수용인원", value: "최대 8인" },
  { icon: Clock,       label: "운영시간", value: "10:00 — 22:00" },
  { icon: Timer,       label: "최소예약", value: "2시간" },
  { icon: Car,         label: "주차",    value: "건물 앞 가능" },
];

const equipment = [
  "빔프로젝터 (100인치급)",
  "넷플릭스 · 왓챠 · 유튜브",
  "완전 암전 가능",
  "빈백 · 소파 좌석",
  "블루투스 스피커",
];

const users = [
  { tag: "연인",    desc: "기념일 이벤트, 프라이빗 상영회" },
  { tag: "친구들",  desc: "함께 보고 싶은 영화 한 편" },
  { tag: "소모임",  desc: "영화 토론, 프리젠테이션" },
  { tag: "사진사",  desc: "오래된 공간의 필름 감성 촬영" },
];

export default function MoviePage() {
  return (
    <div className="pt-16">

      {/* ── 헤더 ────────────────────────────────────────── */}
      <section
        className="py-24 sm:py-32"
        style={{ borderBottom: "1px solid rgba(196, 168, 130, 0.3)" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <p className="section-label mb-6">03 · SCREENING ROOM</p>
          <h1
            className="leading-[1.05] mb-6"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: "clamp(44px, 8vw, 80px)",
              fontWeight: 300,
              color: "#2C1810",
            }}
          >
            우리만의 상영관,
            <br />
            서동 옥탑방
            <span
              style={{
                display: "block",
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "clamp(18px, 3vw, 28px)",
                fontWeight: 400,
                color: "#9B7B6A",
                marginTop: "10px",
              }}
            >
              Seodong Movie
            </span>
          </h1>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "#6B4C3B", maxWidth: "480px" }}
          >
            오래된 공간에서 보는 영화는 더 영화답습니다.<br />
            빔프로젝터, OTT, 완전 암전.
          </p>
        </div>
      </section>

      {/* ── 공간 정보 ────────────────────────────────────── */}
      <section
        className="py-24"
        style={{ borderBottom: "1px solid rgba(196, 168, 130, 0.3)" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* 이미지 플레이스홀더 */}
            <div
              className="card min-h-[360px] flex items-center justify-center"
              style={{ backgroundColor: "#E5D9C3" }}
            >
              <div className="text-center">
                <p
                  style={{
                    fontSize: "11px",
                    color: "#C4A882",
                    fontFamily: "'Playfair Display', serif",
                    letterSpacing: "0.25em",
                    marginBottom: "6px",
                  }}
                >
                  PHOTO
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#C4A882",
                    fontFamily: "'Noto Serif KR', serif",
                  }}
                >
                  서동영화
                </p>
              </div>
            </div>

            {/* 공간 정보 */}
            <div className="card p-8 sm:p-10">
              <p className="section-label mb-8">SPACE INFO</p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {spaceInfo.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="p-4 rounded-xl"
                    style={{
                      backgroundColor: "#F0E8D5",
                      border: "1px solid rgba(196, 168, 130, 0.4)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        marginBottom: "6px",
                      }}
                    >
                      <Icon size={13} style={{ color: "#B5632A" }} />
                      <p className="text-xs" style={{ color: "#9B7B6A" }}>{label}</p>
                    </div>
                    <p
                      className="text-sm font-medium"
                      style={{
                        color: "#2C1810",
                        fontFamily: "'Noto Serif KR', serif",
                      }}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* 장비 목록 */}
              <p className="section-label mb-5">EQUIPMENT</p>
              <div className="flex flex-col gap-3 mb-10">
                {equipment.map((eq) => (
                  <div
                    key={eq}
                    style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <MonitorPlay size={13} style={{ color: "#B5632A", flexShrink: 0 }} />
                    <span className="text-sm" style={{ color: "#6B4C3B" }}>{eq}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-start gap-3">
                <a
                  href="https://www.spacecloud.kr/space/40932"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  스페이스클라우드 예약 <ArrowRight size={15} />
                </a>
                <p className="text-xs" style={{ color: "#9B7B6A" }}>
                  네이버 예약도 가능합니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO COMES HERE ───────────────────────────────── */}
      <section
        className="py-24"
        style={{ borderBottom: "1px solid rgba(196, 168, 130, 0.3)" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <p className="section-label mb-12">WHO COMES HERE</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {users.map((u) => (
              <div key={u.tag} className="card p-6">
                <p
                  className="mb-3"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#B5632A",
                  }}
                >
                  {u.tag}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "#6B4C3B" }}>
                  {u.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 사진사 특별 안내 ──────────────────────────────── */}
      <section
        className="py-24"
        style={{ borderBottom: "1px solid rgba(196, 168, 130, 0.3)" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div
            className="card p-10 sm:p-12"
            style={{
              borderColor: "rgba(181, 99, 42, 0.4)",
              backgroundColor: "#FDF8F3",
            }}
          >
            <p className="section-label mb-5">FOR PHOTOGRAPHERS</p>
            <h2
              className="mb-5"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                color: "#2C1810",
              }}
            >
              사진가분들께
            </h2>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "#6B4C3B", maxWidth: "480px" }}
            >
              서동영화의 오래된 벽, 바래진 바닥, 독특한 조명.
              필름 감성의 포트폴리오를 찍기에 완벽한 공간입니다.
              개인 촬영, 동아리 작업, 모델 촬영 모두 가능합니다.
            </p>
            <a
              href="https://www.spacecloud.kr/space/40932"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              촬영 목적으로 예약하기 <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ── 다른 공간 ────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <p className="section-label mb-10">함께 이용하면 좋은 공간</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { href: "/stay",    ko: "서동여관", en: "Accommodation", sub: "영화 보고 서동에서 하룻밤" },
              { href: "/kitchen", ko: "서동부엌", en: "Shared Kitchen", sub: "영화 전/후 요리 파티" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card card-hover block group p-8"
                style={{ textDecoration: "none" }}
              >
                <p className="section-label mb-4">{item.en}</p>
                <div className="flex items-center justify-between">
                  <p
                    style={{
                      fontFamily: "'Noto Serif KR', serif",
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#2C1810",
                    }}
                  >
                    {item.ko}
                  </p>
                  <ArrowRight
                    size={18}
                    style={{ color: "#B5632A", transition: "transform 0.25s ease" }}
                    className="group-hover:translate-x-1"
                  />
                </div>
                <p className="text-xs mt-3" style={{ color: "#9B7B6A" }}>{item.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
