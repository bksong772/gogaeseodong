import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "서동여관 | 부산 독채 감성 숙박",
  description:
    "부산 금정구 서동의 낡은 여관. 취향의방(가족), 그림의방(커플), 필사의방(커플). 에어비앤비로 예약 가능.",
  keywords: [
    "서동여관", "부산 독채", "부산 감성숙박", "부산 에어비앤비",
    "금정구 숙박", "취향의방", "그림의방", "필사의방",
    "부산 가족여행", "부산 커플여행",
  ],
};

const rooms = [
  {
    no: "一",
    name: "취향의방",
    en: "Room of Taste",
    tag: "가족 추천",
    desc: "서동여관의 시작. 90년대 고택의 한 층 독채. 거실과 침실, 각기 다른 취향으로 채워진 공간. 가족이 함께 머물기에 딱입니다.",
    features: ["독채 1층", "침실 + 거실", "최대 4인", "에어컨·난방"],
    airbnb: "https://www.airbnb.co.kr/rooms/997241625179311794",
    note: "★ 4.65 · 리뷰 26개",
  },
  {
    no: "二",
    name: "그림의방",
    en: "Room of Painting",
    tag: "커플 추천",
    desc: "벽에 걸린 그림들, 오래된 프레임들. 미술 전공자가 고른 작품들이 가득한 방. 연인과 함께 머물기 좋은 조용한 공간입니다.",
    features: ["독채", "더블침대", "최대 2인", "에어컨·난방"],
    airbnb: "https://www.airbnb.co.kr/rooms/699514631888252996",
    note: "커플에게 추천",
  },
  {
    no: "三",
    name: "필사의방",
    en: "Room of Writing",
    tag: "커플 추천",
    desc: "글을 쓰고 싶은 사람들을 위한 방. 조용한 책상, 편지지, 오래된 책장. 느린 하루를 위한 공간입니다.",
    features: ["독채", "더블침대", "최대 2인", "에어컨·난방"],
    airbnb: "https://www.airbnb.co.kr/rooms/746091488451213213",
    note: "커플에게 추천",
  },
];

export default function StayPage() {
  return (
    <div className="pt-16">

      {/* ── 헤더 ────────────────────────────────────────── */}
      <section
        className="py-24 sm:py-32"
        style={{ borderBottom: "1px solid rgba(196, 168, 130, 0.3)" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <p className="section-label mb-6">01 · ACCOMMODATION</p>
          <h1
            className="leading-[1.05] mb-6"
            style={{
              fontFamily: "Gowun Batang, serif",
              fontSize: "clamp(44px, 8vw, 80px)",
              fontWeight: 800,
              color: "#2C1810",
            }}
          >
            할머니 집 같은
            <br />
            부산의 하룻밤
            <span
              style={{
                display: "block",
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "clamp(16px, 2.5vw, 24px)",
                fontWeight: 400,
                color: "#9B7B6A",
                marginTop: "12px",
              }}
            >
              Seodong Stay
            </span>
          </h1>
          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: "#6B4C3B", maxWidth: "480px" }}
          >
            90년대 서동의 낡은 여관. 세 개의 방, 각기 다른 이야기.<br />
            깔끔하진 않지만, 따뜻합니다.
          </p>
          <p className="text-xs" style={{ color: "#9B7B6A" }}>
            ※ 모든 예약은 Airbnb를 통해 진행됩니다.
          </p>
        </div>
      </section>

      {/* ── 방 목록 ─────────────────────────────────────── */}
      <section
        className="py-24"
        style={{ borderBottom: "1px solid rgba(196, 168, 130, 0.3)" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col gap-6">
            {rooms.map((room) => (
              <div key={room.no} className="card overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* 정보 */}
                  <div className="p-8 sm:p-10">
                    <div className="flex items-center gap-3 mb-5">
                      <span
                        style={{
                          fontFamily: "Gowun Batang, serif",
                          fontSize: "20px",
                          color: "rgba(196, 168, 130, 0.6)",
                          fontWeight: 700,
                        }}
                      >
                        {room.no}
                      </span>
                      <span className="tag">{room.tag}</span>
                    </div>
                    <h2
                      className="mb-1"
                      style={{
                        fontFamily: "Gowun Batang, serif",
                        fontSize: "clamp(22px, 3vw, 32px)",
                        fontWeight: 700,
                        color: "#2C1810",
                      }}
                    >
                      {room.name}
                    </h2>
                    <p
                      className="mb-5"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontStyle: "italic",
                        fontSize: "14px",
                        color: "#9B7B6A",
                      }}
                    >
                      {room.en}
                    </p>
                    <p
                      className="text-sm leading-relaxed mb-7"
                      style={{ color: "#6B4C3B" }}
                    >
                      {room.desc}
                    </p>

                    {/* 특징 배지 */}
                    <div className="flex flex-wrap gap-2 mb-7">
                      {room.features.map((f) => (
                        <span
                          key={f}
                          style={{
                            fontSize: "12px",
                            color: "#6B4C3B",
                            border: "1px solid rgba(196, 168, 130, 0.5)",
                            padding: "5px 14px",
                            borderRadius: "9999px",
                            backgroundColor: "#F0E8D5",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <Check size={11} style={{ color: "#B5632A" }} />
                          {f}
                        </span>
                      ))}
                    </div>

                    <p
                      className="text-xs mb-7"
                      style={{ color: "#9B7B6A", fontStyle: "italic" }}
                    >
                      {room.note}
                    </p>
                    <a
                      href={room.airbnb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Airbnb에서 예약하기 <ArrowRight size={15} />
                    </a>
                  </div>

                  {/* 이미지 플레이스홀더 */}
                  <div
                    className="min-h-[280px] lg:min-h-[360px] flex items-center justify-center"
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
                          fontFamily: "Gowun Batang, serif",
                        }}
                      >
                        {room.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 이용 안내 ────────────────────────────────────── */}
      <section
        className="py-24"
        style={{ borderBottom: "1px solid rgba(196, 168, 130, 0.3)" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* HOW TO BOOK */}
            <div className="card p-8 sm:p-10">
              <p className="section-label mb-8">HOW TO BOOK</p>
              <div className="flex flex-col gap-5">
                {[
                  "위의 방을 선택하세요",
                  "Airbnb 예약하기 버튼을 누르세요",
                  "날짜와 인원을 선택하세요",
                  "예약 완료 후 카카오톡으로 안내드립니다",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontStyle: "italic",
                        fontSize: "11px",
                        color: "#B5632A",
                        flexShrink: 0,
                        marginTop: "2px",
                        letterSpacing: "0.1em",
                      }}
                    >
                      0{i + 1}
                    </span>
                    <span className="text-sm" style={{ color: "#6B4C3B" }}>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* NOTICE */}
            <div className="card p-8 sm:p-10" style={{ backgroundColor: "#F0E8D5" }}>
              <p className="section-label mb-8">NOTICE</p>
              <div className="flex flex-col gap-4">
                {[
                  "체크인 15:00 / 체크아웃 11:00",
                  "반려동물 동반 불가",
                  "취사 불가 (서동부엌 별도 이용 가능)",
                  "주차 없음 (도보 5분 공영주차장)",
                  "문의: 카카오톡 '고개서동'",
                ].map((n, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span style={{ color: "#B5632A", flexShrink: 0 }}>—</span>
                    <span className="text-sm" style={{ color: "#6B4C3B" }}>{n}</span>
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
          <p className="section-label mb-10">서동에서 더 즐기기</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { href: "/kitchen", ko: "서동부엌", en: "Shared Kitchen", sub: "직접 요리하고 싶다면" },
              { href: "/movie",   ko: "서동영화", en: "Screening Room",  sub: "영화 한 편 보고 싶다면" },
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
                      fontFamily: "Gowun Batang, serif",
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#2C1810",
                    }}
                  >
                    {item.ko}
                  </p>
                  <ArrowRight
                    size={18}
                    style={{
                      color: "#B5632A",
                      transition: "transform 0.25s ease",
                    }}
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
