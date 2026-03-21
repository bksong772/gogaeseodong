import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Clock, MapPin, Timer, MessageCircle, UtensilsCrossed } from "lucide-react";

export const metadata: Metadata = {
  title: "서동부엌 | 부산 공유주방",
  description:
    "부산 금정구 서동의 프라이빗 공유주방. 골목 안 우리끼리 차리는 밥상. 커플, 친구들과 함께. 카카오·스페이스클라우드 예약.",
  keywords: ["서동부엌", "부산 공유주방", "금정구 공유주방", "부산 요리", "프라이빗 주방", "부산 데이트", "서동"],
};

const KAKAO_URL = "https://pf.kakao.com/_VCxnsb";

const spaceInfo = [
  { icon: MapPin,  label: "위치",   value: "서동로91번길 7, 1층" },
  { icon: Users,   label: "수용인원", value: "최대 8인" },
  { icon: Clock,   label: "운영시간", value: "24시간" },
  { icon: Timer,   label: "최소예약", value: "3시간" },
];

const equipment = [
  "인덕션 · 부탄버너",
  "전자레인지 · 전기포트",
  "후라이팬 · 냄비 · 칼 · 도마",
  "집게 · 가위 · 국자 · 주걱 · 뒤집개",
  "감자칼 · 채반 · 스파츌러 · 조리용 젓가락",
  "와인잔 · 오프너 · 각종 그릇 · 수저",
];

const users = [
  { tag: "커플",  desc: "기념일 요리, 집밥 데이트" },
  { tag: "친구들", desc: "파티, 소셜다이닝, 함께 요리" },
  { tag: "클래스", desc: "베이킹 클래스, 쿠킹 모임" },
  { tag: "촬영",  desc: "푸드 스타일링, SNS 콘텐츠" },
];

export default function KitchenPage() {
  return (
    <div className="pt-16">

      {/* ── 헤더 ────────────────────────────────────────── */}
      <section
        className="py-24 sm:py-32"
        style={{ borderBottom: "1px solid rgba(196, 168, 130, 0.3)" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <p className="section-label mb-6">02 · SHARED KITCHEN</p>
          <h1
            className="leading-[1.05] mb-6"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              fontSize: "clamp(44px, 8vw, 80px)",
              fontWeight: 300,
              color: "#2C1810",
            }}
          >
            서동 골목 안,
            <br />
            우리끼리 차리는 밥상
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
              Seodong Kitchen
            </span>
          </h1>
          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: "#6B4C3B", maxWidth: "480px" }}
          >
            부산 금정구 서동의 프라이빗 공유주방.<br />
            요리하고, 먹고, 어울리는 시간.
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <p
              className="text-sm font-bold"
              style={{ color: "#B5632A", fontFamily: "'Noto Serif KR', serif" }}
            >
              ★ 5.0 — 스페이스클라우드 리뷰 31개
            </p>
            <span style={{ color: "rgba(196, 168, 130, 0.5)" }}>|</span>
            <p className="text-xs" style={{ color: "#9B7B6A" }}>네이버 리뷰도 좋아요</p>
          </div>
          <div
            className="rounded-xl p-4 mb-5"
            style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.4)", maxWidth: "480px" }}
          >
            <div className="flex flex-col gap-2">
              {[
                "24시간 운영 — 무인 공간입니다",
                "새벽 시간대는 동네 주민을 위해 정숙 부탁드립니다",
              ].map((n) => (
                <div key={n} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <span style={{ color: "#B5632A", flexShrink: 0, fontSize: "12px" }}>—</span>
                  <span className="text-xs" style={{ color: "#6B4C3B" }}>{n}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs mb-4" style={{ color: "#9B7B6A" }}>
            카카오채널로 예약 시 더 저렴하게 이용하실 수 있습니다
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
              className="card min-h-[360px] flex items-center justify-center"
              style={{ backgroundColor: "#E5D9C3" }}
            >
              <div className="text-center px-8">
                <p
                  style={{
                    fontSize: "11px",
                    color: "#C4A882",
                    fontFamily: "'Playfair Display', serif",
                    letterSpacing: "0.25em",
                    marginBottom: "12px",
                  }}
                >
                  SEODONG KITCHEN
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#9B7B6A",
                    fontFamily: "'Noto Serif KR', serif",
                    lineHeight: 1.8,
                  }}
                >
                  오래된 골목 안,<br />
                  혼자서도 여럿이서도<br />
                  요리가 되는 주방
                </p>
              </div>
            </div>

            {/* 공간 정보 */}
            <div className="card p-8 sm:p-10">
              <p className="section-label mb-8">SPACE INFO</p>
              <div className="grid grid-cols-2 gap-3 mb-10">
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

              {/* 요금 안내 */}
              <div
                className="rounded-xl p-5 mb-8"
                style={{
                  backgroundColor: "#F0E8D5",
                  border: "1px solid rgba(196, 168, 130, 0.4)",
                }}
              >
                <p className="text-xs mb-2" style={{ color: "#9B7B6A", letterSpacing: "0.1em" }}>PRICING</p>
                <p className="text-sm" style={{ color: "#6B4C3B" }}>
                  요금은 날짜·인원·베이킹 여부에 따라 달라집니다.<br />
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
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.spacecloud.kr/space/37505"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs inline-flex items-center gap-1"
                    style={{ color: "#9B7B6A", textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    스페이스클라우드 예약 <ArrowRight size={11} />
                  </a>
                  <span style={{ color: "rgba(196, 168, 130, 0.5)", fontSize: "10px" }}>|</span>
                  <span className="text-xs" style={{ color: "#9B7B6A" }}>
                    네이버 예약도 가능합니다
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 비치 물품 ────────────────────────────────────── */}
      <section
        className="py-24"
        style={{ borderBottom: "1px solid rgba(196, 168, 130, 0.3)" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <p className="section-label mb-12">WHAT'S INCLUDED</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {equipment.map((eq) => (
              <div
                key={eq}
                className="card p-5"
                style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}
              >
                <UtensilsCrossed size={14} style={{ color: "#B5632A", flexShrink: 0, marginTop: "2px" }} />
                <span className="text-sm" style={{ color: "#6B4C3B" }}>{eq}</span>
              </div>
            ))}
          </div>
          <p className="text-xs mt-6" style={{ color: "#9B7B6A" }}>
            ※ 베이킹 도구(오븐·핸드믹서 등)는 별도 요금이 적용됩니다. 카카오로 문의해 주세요.
          </p>
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
              <div
                key={u.tag}
                className="card p-6 text-center"
              >
                <p
                  className="mb-3"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: "18px",
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

      {/* ── 다른 공간 ────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <p className="section-label mb-10">함께 이용하면 좋은 공간</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { href: "/stay",  ko: "서동여관", en: "Accommodation", sub: "부엌 사용 후 여관에서 하룻밤" },
              { href: "/movie", ko: "서동영화", en: "Screening Room", sub: "식사 후 영화 한 편" },
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
