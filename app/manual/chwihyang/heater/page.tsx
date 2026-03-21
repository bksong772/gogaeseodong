import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "취향의방 온풍기 사용법 | 고개서동",
  description: "서동여관 취향의방 전기 온풍기 상세 사용 방법 안내.",
};

export default function HeaterPage() {
  return (
    <div className="pt-16">
      <div className="max-w-2xl mx-auto px-6 sm:px-8 py-10 space-y-8">

        {/* 헤더 */}
        <div>
          <Link href="/manual/chwihyang"
            className="text-xs mb-4 inline-flex items-center gap-1"
            style={{ color: "#9B7B6A" }}>
            ← 취향의방 메뉴얼로 돌아가기
          </Link>
          <h1 style={{ fontFamily: "'Noto Serif KR', serif", fontSize: "22px", fontWeight: 700, color: "#2C1810", marginTop: "12px" }}>
            온풍기 사용법
          </h1>
          <p className="text-sm mt-2" style={{ color: "#9B7B6A" }}>
            취향의방은 오래된 고택이라 겨울에 공기가 차가울 수 있어요.<br />
            바닥 난방과 함께 온풍기를 이용하시면 훨씬 따뜻하게 지내실 수 있습니다.
          </p>
        </div>

        {/* 전체 사진 */}
        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
          <Image src="/manual/chwihyang/온풍기.jpg" alt="온풍기 전체" width={600} height={400} className="w-full object-cover" />
        </div>

        {/* 주의사항 배너 */}
        <div className="rounded-xl p-4" style={{ backgroundColor: "#FFF5F5", border: "1px solid rgba(180, 50, 50, 0.3)" }}>
          <p className="font-semibold text-sm mb-1" style={{ color: "#B52A2A" }}>⚠️ 과열 위험 — 반드시 타이머를 맞춰 이용해 주세요</p>
          <p className="text-xs" style={{ color: "#6B4C3B" }}>낮 2시간 / 밤 4시간 기준으로 타이머 설정 후 이용해 주세요.</p>
        </div>

        {/* 스텝 */}
        <div className="space-y-8">

          {/* STEP 1 */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: "#B5632A" }}>1</span>
              <p className="text-sm font-semibold" style={{ color: "#2C1810" }}>콘센트를 먼저 꽂습니다.</p>
            </div>
          </div>

          {/* STEP 2 */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: "#B5632A" }}>2</span>
              <p className="text-sm font-semibold" style={{ color: "#2C1810" }}>전원 버튼을 눌러주세요.</p>
            </div>
            <div className="rounded-xl overflow-hidden mb-2" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <Image src="/manual/chwihyang/heater/온풍기1.jpg" alt="전원 버튼" width={600} height={400} className="w-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <Image src="/manual/chwihyang/heater/온풍기2.jpg" alt="전원 버튼 상세" width={600} height={400} className="w-full object-cover" />
            </div>
          </div>

          {/* STEP 3 */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: "#B5632A" }}>3</span>
              <p className="text-sm font-semibold" style={{ color: "#2C1810" }}>왼쪽 버튼 — 온도 조절 (강 / 약)</p>
            </div>
            <div className="rounded-xl overflow-hidden mb-3" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <Image src="/manual/chwihyang/heater/온풍기3.jpg" alt="온도 조절 버튼" width={600} height={400} className="w-full object-cover" />
            </div>
            <div className="rounded-xl p-4 text-sm" style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.4)", color: "#2C1810" }}>
              <p>• <strong>강</strong> — 너무 추우실 때</p>
              <p className="mt-1">• <strong>약</strong> — 은은한 따뜻함을 원하실 때</p>
              <p className="mt-2 text-xs" style={{ color: "#9B7B6A" }}>시간이 지나면 서서히 따뜻한 바람이 나옵니다.</p>
            </div>
          </div>

          {/* STEP 4 */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: "#B5632A" }}>4</span>
              <p className="text-sm font-semibold" style={{ color: "#2C1810" }}>오른쪽 버튼 — 타이머 설정</p>
            </div>
            <div className="rounded-xl overflow-hidden mb-3" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <Image src="/manual/chwihyang/heater/온풍기4.jpg" alt="타이머 버튼" width={600} height={400} className="w-full object-cover" />
            </div>
            <div className="rounded-xl p-4" style={{ backgroundColor: "#FFF5F5", border: "1px solid rgba(180, 50, 50, 0.25)" }}>
              <p className="text-sm font-semibold mb-2" style={{ color: "#B52A2A" }}>⚠️ 반드시 타이머를 맞춰 주세요!</p>
              <p className="text-sm" style={{ color: "#6B4C3B" }}>• 낮에는 <strong>2시간</strong> 정도</p>
              <p className="text-sm mt-1" style={{ color: "#6B4C3B" }}>• 늦은 밤에는 <strong>4시간</strong> 정도</p>
            </div>
          </div>

          {/* STEP 5 */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: "#B5632A" }}>5</span>
              <p className="text-sm font-semibold" style={{ color: "#2C1810" }}>중간 위쪽 버튼 — 현재 온도 확인 (확인만 가능)</p>
            </div>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <Image src="/manual/chwihyang/heater/온풍기5.jpg" alt="온도 확인 버튼" width={600} height={400} className="w-full object-cover" />
            </div>
          </div>

          {/* STEP 6 */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: "#B5632A" }}>6</span>
              <p className="text-sm font-semibold" style={{ color: "#2C1810" }}>끄기 — 전원 버튼 또는 측면 버튼</p>
            </div>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <Image src="/manual/chwihyang/heater/온풍기6.jpg" alt="전원 끄기" width={600} height={400} className="w-full object-cover" />
            </div>
          </div>

          {/* STEP 7 */}
          <div className="rounded-xl p-4" style={{ backgroundColor: "#FFF5F5", border: "2px solid rgba(180, 50, 50, 0.3)" }}>
            <div className="flex items-center gap-3">
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: "#B52A2A" }}>7</span>
              <p className="text-sm font-semibold" style={{ color: "#B52A2A" }}>전원을 끄신 후, 반드시 콘센트도 뽑아 주세요!</p>
            </div>
          </div>

        </div>

        {/* 돌아가기 */}
        <div className="pt-4" style={{ borderTop: "1px solid rgba(196, 168, 130, 0.3)" }}>
          <Link href="/manual/chwihyang"
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: "#B5632A" }}>
            ← 취향의방 메뉴얼로 돌아가기
          </Link>
        </div>

      </div>
    </div>
  );
}
