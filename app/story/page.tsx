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

            {/* 동네 */}
            <p>
              어릴 적 살았던 동네입니다.
            </p>
            <p>
              6·25 때 영주동에 자리가 없어서 올라온 사람들이 서동에 정착했어요.
              신발공장이 생겼고, 소형공장들이 들어섰습니다. 사람들이 살았죠.
              그러다 공장들이 문을 닫았습니다. 사람들이 떠났어요.
              재개발은 중학교 때부터 된다고 했는데, 아직도 안 됐습니다.
              지금은 아무도 안 찾는 동네가 됐어요. 고양이와 할머니들만 남았습니다.
            </p>
            <p style={{ color: "#2C1810", fontWeight: 500 }}>
              그런데 이 동네, 부산의 90년대가 그대로 남아있어요.
            </p>

            {/* 건물 */}
            <p>
              지금 고개서동 건물들은 원래 사람들이 살던 곳이에요.
              각자의 시간이 쌓인 공간들입니다.
            </p>

            {/* 주인장 */}
            <p>
              온천장역에서 집까지 오르막 20분. 버스를 타면 서동고개에서 다들 내려요.
              종점도 아닌데 다 내립니다.
              솔직히 그때부터 이 동네에 사는 게 좀 부끄러웠어요.
            </p>

            <p>
              할아버지가 계단에서 굴러 피를 흘리셨습니다. 그다음엔 뇌경색이 오셨어요.
              엘베 없는 집에서 간호하기가 무리였습니다. 그래서 떠났어요. 별 드라마 없이.
            </p>

            {/* 공백 — 떠남과 돌아옴 사이 */}
            <p style={{ color: "#9B7B6A" }}>
              떠나고 나선 그래도 20년 넘게 살았던 동네가 생각이 나곤 하더라고요.
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
                그래도 돌아왔습니다.
              </p>
              <p>
                아무리 고쳐도 시간의 흔적은 지울 수 없습니다.
                지우려고도 하지 않았어요.
                그냥 이 공간들을 한 번 더 써보고 싶었어요.
              </p>
              <p style={{ color: "#9B7B6A", marginTop: "12px" }}>
                사라지기 전에 누군가 한 번은 와봤으면 해서요.
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
