import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "셀프 스튜디오 이용 메뉴얼 | 고개서동",
  description: "서동영화 셀프 스튜디오 삼각대 사용 방법 안내.",
};

const steps = [
  { num: 1, src: "/manual/movie/studio/삼각대1번.jpeg", alt: "삼각대 설치 1단계" },
  { num: 2, src: "/manual/movie/studio/삼각대2번.jpeg", alt: "삼각대 설치 2단계" },
  { num: 3, src: "/manual/movie/studio/삼각대3번.jpeg", alt: "삼각대 설치 3단계" },
  { num: 4, src: "/manual/movie/studio/삼각대4번.jpeg", alt: "삼각대 설치 4단계" },
];

export default function StudioManualPage() {
  return (
    <div className="pt-16">
      {/* ── 히어로 ─────────────────────────────────────── */}
      <div className="relative w-full flex items-center justify-center"
        style={{ height: "180px", backgroundColor: "#2C1810" }}>
        <div className="text-center">
          <p className="section-label mb-2" style={{ color: "rgba(250,245,237,0.6)" }}>
            SELF STUDIO · MANUAL
          </p>
          <h1 style={{ fontFamily: "'Noto Serif KR', serif", fontSize: "clamp(22px, 5vw, 34px)", fontWeight: 300, color: "#FAF5ED" }}>
            셀프 스튜디오 이용 안내
          </h1>
        </div>
      </div>
      <div style={{ borderBottom: "1px solid rgba(196, 168, 130, 0.3)" }} />

      {/* ── 본문 ─────────────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-6 sm:px-8 py-8">

        {/* 뒤로가기 */}
        <Link href="/manual/movie"
          className="flex items-center gap-1 text-sm mb-8"
          style={{ color: "#9B7B6A", textDecoration: "none" }}>
          <ChevronLeft size={15} />
          서동영화 메뉴얼로 돌아가기
        </Link>

        <p className="text-sm mb-8" style={{ color: "#6B4C3B" }}>
          삼각대 설치 순서에 따라 진행해주세요.
        </p>

        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.num}>
              <div className="flex items-center gap-3 mb-3">
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  backgroundColor: "#B5632A", display: "flex",
                  alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 700, color: "#FAF5ED" }}>
                    {step.num}
                  </span>
                </div>
                <p style={{ fontFamily: "'Noto Serif KR', serif", fontSize: "15px", fontWeight: 600, color: "#2C1810" }}>
                  {step.num}단계
                </p>
              </div>
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
                <Image
                  src={step.src}
                  alt={step.alt}
                  width={600}
                  height={800}
                  className="w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* 문의 */}
        <div className="mt-10 rounded-xl p-5" style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.4)" }}>
          <p className="text-sm" style={{ color: "#6B4C3B" }}>
            이용 중 궁금한 점이 있으시면{" "}
            <a href="http://pf.kakao.com/_VCxnsb" target="_blank" rel="noopener noreferrer"
              style={{ color: "#B5632A", fontWeight: 600 }}>카카오 채널 &lsquo;고개서동&rsquo;</a>
            {" "}으로 문의해주세요.
          </p>
        </div>

        {/* 푸터 */}
        <div className="text-center py-10" style={{ borderTop: "1px solid rgba(196, 168, 130, 0.3)", marginTop: "40px" }}>
          <p className="text-sm" style={{ color: "#9B7B6A", fontFamily: "'Noto Serif KR', serif" }}>
            편안하고 즐거운 시간 되세요 ♡
          </p>
          <p className="text-xs mt-2" style={{ color: "#C4A882" }}>고개서동</p>
        </div>

      </div>
    </div>
  );
}
