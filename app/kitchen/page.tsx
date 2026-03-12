import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Clock, MapPin, Timer } from "lucide-react";

export const metadata: Metadata = {
  title: "서동부엌 | 부산 공유주방",
  description:
    "부산 금정구 서동의 프라이빗 공유주방. 노을이 예쁜 동네에서 요리를. 커플, 친구들과 함께. 스페이스클라우드 예약.",
  keywords: ["서동부엌", "부산 공유주방", "금정구 공유주방", "부산 요리", "프라이빗 주방", "부산 데이트", "서동"],
};

const spaceInfo = [
  { icon: MapPin,  label: "위치",   value: "서동로91번길 7, 1층" },
  { icon: Users,   label: "수용인원", value: "최대 10인" },
  { icon: Clock,   label: "운영시간", value: "09:00 — 22:00" },
  { icon: Timer,   label: "최소예약", value: "2시간" },
];

const users = [
  { tag: "커플",  desc: "기념일 요리, 집밥 데이트" },
  { tag: "친구들", desc: "파티, 바베큐, 소셜다이닝" },
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
              fontFamily: "'Nanum Myeongjo', Georgia, serif",
              fontSize: "clamp(44px, 8vw, 80px)",
              fontWeight: 800,
              color: "#2C1810",
            }}
          >
            서동부엌
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
            className="text-sm leading-relaxed mb-3"
            style={{ color: "#6B4C3B", maxWidth: "480px" }}
          >
            노을이 예쁜 동네, 서동에서의 프라이빗 공유주방.<br />
            요리하고, 먹고, 어울리는 시간.
          </p>
          <p
            className="text-sm font-bold"
            style={{ color: "#B5632A", fontFamily: "'Nanum Myeongjo', serif" }}
          >
            ★ 5.0 — 리뷰 31개
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
                    fontFamily: "'Nanum Myeongjo', serif",
                  }}
                >
                  서동부엌
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
                        fontFamily: "'Nanum Myeongjo', serif",
                      }}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start gap-3">
                <a
                  href="https://www.spacecloud.kr/space/37505"
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
              <div
                key={u.tag}
                className="card p-6 text-center"
              >
                <p
                  className="mb-3"
                  style={{
                    fontFamily: "'Nanum Myeongjo', serif",
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
                      fontFamily: "'Nanum Myeongjo', serif",
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
