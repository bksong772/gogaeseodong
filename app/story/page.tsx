import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "우리이야기 | 고개서동",
  description: "아무도 안 찾는 동네, 서동. 부산의 90년대가 그대로 남아있는 곳. 버려진 공간을 다시 쓰임 있게 만들어가는 이야기.",
  keywords: [
    "고개서동 이야기", "서동 로컬 브랜드", "부산 로컬", "서동 주인장",
    "부산 감성 공간", "빈 공간 재생", "부산 금정구 서동",
  ],
};


const hostCares = [
  {
    icon: "✉",
    title: "체크인 전 안내",
    desc: "입실 전날, 주소·도어락·주차·주변 편의시설 등 필요한 정보를 모두 담아 개인 메시지로 보내드립니다.",
  },
  {
    icon: "☕",
    title: "동네 큐레이션",
    desc: "카페, 맛집, 산책로 — 직접 다녀보고 고른 서동 스팟을 예약 확정 후 알려드립니다.",
  },
  {
    icon: "◎",
    title: "공간 안내서",
    desc: "TV, 넷플릭스, 조리도구 등 공간 이용법을 사진과 함께 상세하게 안내해 드립니다.",
  },
  {
    icon: "❤",
    title: "언제든 연락",
    desc: "머무는 동안 불편한 점이 있으면 카카오톡으로 언제든 연락주세요. 빠르게 답합니다.",
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

      {/* ── 이야기 ───────────────────────────────────────── */}
      <section
        className="py-28"
        style={{ borderBottom: "1px solid rgba(196, 168, 130, 0.3)" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div
            className="space-y-8"
            style={{
              maxWidth: "600px",
              fontSize: "15px",
              lineHeight: "2",
              color: "#6B4C3B",
            }}
          >

            {/* 추억 */}
            <p>
              30여 년 전, 이 동네의 추억을 끄집어보면 이런 단어들이 떠오릅니다.
            </p>
            <p
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: "18px",
                fontWeight: 700,
                color: "#B5632A",
                letterSpacing: "0.05em",
              }}
            >
              옹기종기, 시끌벅쩍, 티격태격.
            </p>

            {/* 슈퍼 */}
            <p>
              엄마가 하던 농심가슈퍼는 이 동네의 모임공간이나 다름없었습니다.
              동네 할머니들의 노인정이었고, 동네 아줌마들의 대화창구였고,
              노가다꾼 아저씨들의 소주방 같은 곳이었죠.
            </p>

            {/* 싫었던 시절 */}
            <p style={{ color: "#2C1810", fontWeight: 500 }}>
              그때는 이 동네가 정말 싫었습니다. 하루라도 이 지긋지긋한 동네를 떠나고 싶었죠.
            </p>

            {/* 그리움 */}
            <p style={{ color: "#9B7B6A" }}>
              그런데 30년이 지난 지금,
              그 싫었던 순간들도 다시 볼 수 없다는 생각에 그리움으로 남더라구요.
            </p>

            {/* 현재 */}
            <p>
              이 동네는 여전히 그 자리에 있지만, 사람들은 하나둘 떠나더라구요.
              사람들의 발걸음을 돌리기 위해 많은 시도를 해왔지만,
              여전히 이 동네에는 관심이 필요합니다.
            </p>

            {/* 마무리 */}
            <div
              style={{
                borderLeft: "3px solid rgba(181, 99, 42, 0.4)",
                paddingLeft: "24px",
                marginTop: "16px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#2C1810",
                  marginBottom: "16px",
                }}
              >
                많은 사람들의 노력과 정성을 담은 동네로 이어졌으면 합니다.
              </p>
              <p style={{ color: "#9B7B6A" }}>
                오늘도 하루를 시작하며, 외롭지 않았던 서동을 추억해 봅니다.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 주인장이 직접 챙깁니다 ────────────────────────── */}
      <section
        className="py-28"
        style={{ backgroundColor: "#1E0F08" }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="mb-16" style={{ maxWidth: "640px" }}>
            <p
              className="section-label mb-6"
              style={{ color: "rgba(212,136,78,0.8)" }}
            >
              HOST CURATION
            </p>
            <h2
              className="mb-6"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: "clamp(26px, 4vw, 44px)",
                fontWeight: 400,
                color: "#FAF5ED",
                lineHeight: 1.25,
              }}
            >
              공간이 낡은 만큼<br />나머지를 채웁니다
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(250,245,237,0.55)", maxWidth: "480px" }}
            >
              깔끔하진 않지만, 불편하지 않도록. 그게 고개서동의 방식입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {hostCares.map((care, i) => (
              <div
                key={i}
                className="p-7"
                style={{
                  borderRadius: "16px",
                  border: "1px solid rgba(250,245,237,0.08)",
                  backgroundColor: i % 2 === 0
                    ? "rgba(250,245,237,0.04)"
                    : "rgba(212,136,78,0.06)",
                }}
              >
                <div style={{ fontSize: "22px", marginBottom: "14px", color: "#D4884E" }}>
                  {care.icon}
                </div>
                <p
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#FAF5ED",
                    marginBottom: "10px",
                  }}
                >
                  {care.title}
                </p>
                <p style={{ fontSize: "13px", color: "rgba(250,245,237,0.5)", lineHeight: 1.8 }}>
                  {care.desc}
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
          <p className="text-sm mb-4" style={{ color: "#9B7B6A" }}>
            이 동네는 걸어봐야 보입니다.<br />
            오르막을 올라봐야 왜 여기가 좋은지 알게 됩니다.
          </p>
          <p className="text-sm mb-14" style={{ color: "#6B4C3B", fontWeight: 500 }}>
            글로만 읽으면 반도 모릅니다.
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
