import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Clock, Car, Timer, MonitorPlay, MessageCircle, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "서동영화 | 부산 프라이빗 영화감상실",
  description:
    "부산 금정구 서동, 골목 안 2층의 프라이빗 영화감상실. 빔프로젝터, OTT 개인계정, 완전 암전. 커플·소모임·사진촬영. 카카오 직예약.",
  keywords: ["서동영화", "부산 OTT룸", "부산 영화감상실", "부산 빔프로젝터", "부산 사진스튜디오", "부산 프라이빗 상영관", "부산 데이트"],
};

const KAKAO_URL = "https://pf.kakao.com/_VCxnsb";

const spaceInfo = [
  { icon: Users,  label: "수용인원", value: "최대 8인" },
  { icon: Clock,  label: "운영시간", value: "10:00 — 22:00" },
  { icon: Timer,  label: "최소예약", value: "3시간" },
  { icon: Car,    label: "주차",    value: "건물 앞 가능" },
];

const equipment = [
  "빔프로젝터 · 노트북",
  "3인 소파 · 흔들의자",
  "완전 암전 가능",
  "스튜디오 조명 · 거울",
  "냉난방기",
  "와인잔 · 오프너",
  "전자레인지 · 냄비",
];

const useCases = [
  {
    tag: "연인",
    title: "기념일 이벤트",
    desc: "좋아하는 영화, 둘만의 공간. 꽃다발 들고 와도 됩니다.",
  },
  {
    tag: "친구들",
    title: "영화 관람",
    desc: "넷플릭스, 왓챠, 디즈니+. 보고 싶었던 그 영화.",
  },
  {
    tag: "중계",
    title: "스포츠 중계",
    desc: "큰 화면으로 경기 보고 싶을 때. 간식 챙겨오세요.",
  },
  {
    tag: "사진사",
    title: "감성 촬영",
    desc: "오래된 벽, 스튜디오 조명, 거울. 필름 감성 포트폴리오.",
  },
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
            골목 안에 숨겨진
            <br />
            우리만의 상영관
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
            className="text-sm leading-relaxed mb-4"
            style={{ color: "#6B4C3B", maxWidth: "480px" }}
          >
            부산 금정구 서동, 골목 안 2층.<br />
            빔프로젝터, 완전 암전, OTT 개인계정 연결.<br />
            오래된 공간에서 보는 영화는 더 영화답습니다.
          </p>
          <p className="text-xs mb-6" style={{ color: "#9B7B6A" }}>
            카카오채널 직예약 시 더 저렴하게 이용하실 수 있습니다
          </p>
          <a
            href={KAKAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <MessageCircle size={15} />
            카카오로 예약 문의하기
          </a>
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
              className="card min-h-[400px] flex items-center justify-center"
              style={{ backgroundColor: "#E5D9C3" }}
            >
              <div className="text-center px-8">
                <p
                  style={{
                    fontSize: "11px",
                    color: "#C4A882",
                    fontFamily: "'Playfair Display', serif",
                    letterSpacing: "0.25em",
                    marginBottom: "16px",
                  }}
                >
                  SEODONG MOVIE
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#9B7B6A",
                    fontFamily: "'Noto Serif KR', serif",
                    lineHeight: 2,
                  }}
                >
                  골목 안 2층,<br />
                  스크린 하나,<br />
                  우리만의 상영관
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
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                      <Icon size={13} style={{ color: "#B5632A" }} />
                      <p className="text-xs" style={{ color: "#9B7B6A" }}>{label}</p>
                    </div>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "#2C1810", fontFamily: "'Noto Serif KR', serif" }}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* 장비 목록 */}
              <p className="section-label mb-5">WHAT'S INCLUDED</p>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-3">
                {equipment.map((eq) => (
                  <div key={eq} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <MonitorPlay size={12} style={{ color: "#B5632A", flexShrink: 0 }} />
                    <span className="text-xs" style={{ color: "#6B4C3B" }}>{eq}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs mb-8" style={{ color: "#9B7B6A", fontStyle: "italic" }}>
                ※ 넷플릭스 · 왓챠 · 디즈니+ 개인계정 연결 가능
              </p>

              {/* 요금 */}
              <div
                className="rounded-xl p-5 mb-8"
                style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.4)" }}
              >
                <p className="text-xs mb-2" style={{ color: "#9B7B6A", letterSpacing: "0.1em" }}>PRICING</p>
                <p className="text-sm" style={{ color: "#6B4C3B" }}>
                  요금은 날짜·인원에 따라 달라집니다.<br />
                  카카오 채널로 문의하시면 최신 요금 안내드립니다.
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col items-start gap-3">
                <a
                  href={KAKAO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <MessageCircle size={15} />
                  카카오로 예약하기 (직예약 할인)
                </a>
                <a
                  href="https://www.spacecloud.kr/space/40932"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs inline-flex items-center gap-1"
                  style={{ color: "#9B7B6A", textDecoration: "underline", textUnderlineOffset: "3px" }}
                >
                  스페이스클라우드 예약 <ArrowRight size={11} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 이용 용도 ────────────────────────────────────── */}
      <section
        className="py-24"
        style={{ borderBottom: "1px solid rgba(196, 168, 130, 0.3)" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <p className="section-label mb-4">WHO COMES HERE</p>
          <p
            className="mb-12"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 300,
              color: "#2C1810",
            }}
          >
            어떤 이유로든, 환영합니다
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((u) => (
              <div key={u.tag} className="card p-7">
                <span className="tag mb-4 inline-block">{u.tag}</span>
                <p
                  className="mb-3"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#2C1810",
                  }}
                >
                  {u.title}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "#6B4C3B" }}>
                  {u.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 사진가 특별 안내 ──────────────────────────────── */}
      <section
        className="py-24"
        style={{ borderBottom: "1px solid rgba(196, 168, 130, 0.3)" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div
            className="card p-10 sm:p-12"
            style={{ borderColor: "rgba(181, 99, 42, 0.4)", backgroundColor: "#FDF8F3" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="section-label mb-5">FOR PHOTOGRAPHERS</p>
                <h2
                  className="mb-5"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: "clamp(22px, 3vw, 32px)",
                    fontWeight: 400,
                    color: "#2C1810",
                  }}
                >
                  사진가분들,<br />
                  이 공간 한번 와보세요
                </h2>
                <p
                  className="text-sm leading-relaxed mb-8"
                  style={{ color: "#6B4C3B" }}
                >
                  바래진 벽, 오래된 바닥, 독특한 조명.<br />
                  스튜디오 조명과 거울까지 갖춰진 공간입니다.<br />
                  개인 촬영, 동아리 작업, 모델 촬영 모두 환영합니다.
                </p>
                <a
                  href={KAKAO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <MessageCircle size={15} />
                  촬영 목적으로 문의하기
                </a>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  "스튜디오 조명 비치",
                  "전신 거울 비치",
                  "오래된 벽·바닥의 필름 감성",
                  "개인 · 팀 · 모델 촬영 모두 가능",
                  "시간 단위 예약 (최소 2시간)",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Camera size={13} style={{ color: "#B5632A", flexShrink: 0 }} />
                    <span className="text-sm" style={{ color: "#6B4C3B" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
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
