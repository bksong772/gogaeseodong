import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "서동여관 | 부산 독채 감성 숙박",
  description:
    "부산 금정구 서동의 낡은 여관. 취향의방(가족), 그림의방(커플), 필사의방(커플). 카카오채널 직예약 가능. 에어비앤비보다 저렴하게.",
  keywords: [
    "서동여관", "부산 독채 숙박", "부산 감성 숙박", "부산 에어비앤비",
    "금정구 숙박", "취향의방", "그림의방", "필사의방",
    "부산 가족여행", "부산 커플여행", "부산 독채 펜션",
    "부산 감성 숙소", "서동 숙박", "금정구 독채",
  ],
};

const KAKAO_URL = "https://pf.kakao.com/_VCxnsb";

const rooms = [
  {
    no: "一",
    name: "필사의방",
    en: "Room of Writing",
    tag: "커플 추천",
    addr: "서동로91번길 7, 3층",
    desc: "TV도 없고, 영상 매체도 없습니다. 책상, 안락의자, 스탠드 조명, 블루투스 스피커. 아무것도 하지 않아도 되는 하루, 오랫동안 미뤄둔 글을 쓰고 싶은 분들을 위한 방입니다.",
    features: ["독채 3층", "최대 3인", "TV 없음", "안락의자·책상"],
    highlight: "책상·스탠드 조명 · 안락의자 · 블루투스 스피커",
    airbnb: "https://www.airbnb.co.kr/rooms/746091488451213213",
    note: "조용한 하룻밤을 원한다면",
    image: "/images/stay/필사의방.JPG",
  },
  {
    no: "二",
    name: "그림의방",
    en: "Room of Painting",
    tag: "커플 추천",
    addr: "서동로91번길 7, 4층",
    desc: "드래곤볼·귀멸의칼날 전집, LP 턴테이블, 그림북과 색연필, 데코용 아크릴 물감. 4층 독채에서 영화도 보고, 그림도 그리고, 음악도 듣는 방입니다.",
    features: ["독채 4층", "최대 4인", "빔프로젝터", "LP 턴테이블", "그림북·색연필"],
    highlight: "드래곤볼·귀멸의칼날 · LP 턴테이블 · 그림북·색연필",
    airbnb: "https://www.airbnb.co.kr/rooms/699514631888252996",
    note: "커플에게 추천",
    image: "/images/stay/그림의방.JPG",
  },
  {
    no: "三",
    name: "취향의방",
    en: "Room of Taste",
    tag: "가족 추천",
    addr: "옥봉로13번길 26, 2층",
    desc: "서동여관의 시작. 90년대 고택 한 층 독채. 거실과 침실이 분리되어 가족이 함께 머물기에 딱입니다. 원피스 97권 전권, 빔프로젝터, 빈백소파가 기다리고 있어요.",
    features: ["독채 2층", "최대 4인", "빔프로젝터", "원피스 97권", "빈백소파"],
    highlight: "원피스 97권 전권 · 빔프로젝터 · 에피하임 빈백소파",
    airbnb: "https://www.airbnb.co.kr/rooms/997241625179311794",
    note: "★ 4.65 · 에어비앤비 리뷰 26개",
    image: "/images/stay/취향의방.jpg",
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
              fontFamily: "'Noto Serif KR', serif",
              fontSize: "clamp(44px, 8vw, 80px)",
              fontWeight: 300,
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
          <p className="text-xs mb-6" style={{ color: "#9B7B6A" }}>
            ※ 카카오채널로 문의 후 계좌이체로 예약이 확정됩니다. 에어비앤비보다 저렴하게 이용하실 수 있습니다.
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
                          fontFamily: "'Noto Serif KR', serif",
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
                        fontFamily: "'Noto Serif KR', serif",
                        fontSize: "clamp(22px, 3vw, 32px)",
                        fontWeight: 400,
                        color: "#2C1810",
                      }}
                    >
                      {room.name}
                    </h2>
                    <p
                      className="mb-1"
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
                      className="text-xs mb-5"
                      style={{ color: "#C4A882" }}
                    >
                      {room.addr}
                    </p>
                    <p
                      className="text-sm leading-relaxed mb-5"
                      style={{ color: "#6B4C3B" }}
                    >
                      {room.desc}
                    </p>
                    {/* 하이라이트 */}
                    <div
                      className="rounded-xl px-4 py-3 mb-6"
                      style={{
                        backgroundColor: "#F0E8D5",
                        border: "1px solid rgba(196, 168, 130, 0.4)",
                      }}
                    >
                      <p className="text-xs mb-1" style={{ color: "#9B7B6A", letterSpacing: "0.1em" }}>HIGHLIGHT</p>
                      <p className="text-sm" style={{ color: "#B5632A", fontFamily: "'Noto Serif KR', serif" }}>
                        {room.highlight}
                      </p>
                    </div>

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
                      className="text-xs mb-6"
                      style={{ color: "#9B7B6A", fontStyle: "italic" }}
                    >
                      {room.note}
                    </p>
                    {/* CTA — 카카오 PRIMARY + 에어비앤비·메뉴얼 보조 */}
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
                        href={room.airbnb}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs inline-flex items-center gap-1"
                        style={{ color: "#9B7B6A", textDecoration: "underline", textUnderlineOffset: "3px" }}
                      >
                        에어비앤비로 예약 <ArrowRight size={11} />
                      </a>
                    </div>
                  </div>

                  {/* 이미지 */}
                  <div
                    className="min-h-[280px] lg:min-h-[360px] relative overflow-hidden"
                  >
                    <img
                      src={room.image}
                      alt={room.name}
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
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
                  "카카오채널 '고개서동'으로 문의하세요",
                  "원하는 날짜와 인원을 알려주세요",
                  "계좌이체로 예약이 확정됩니다 (에어비앤비보다 저렴해요)",
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
                  "가스렌지로 간단한 조리 가능 (대형 취사 불가)",
                  "주차: 취향의방 건물 내 1대 가능 / 그림·필사의방 서동제2공영주차장 (도보 5분)",
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
