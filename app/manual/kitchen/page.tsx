import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import {
  MapPin,
  Key,
  Lightbulb,
  Wind,
  Zap,
  Package,
  Utensils,
  Trash2,
  Wifi,
  Phone,
  Star,
  AlertCircle,
  ExternalLink,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "서동부엌 이용 메뉴얼 | 고개서동",
  description: "서동부엌 공유주방 이용 안내. 비밀번호 안내, 시설 사용법, 주차, 와이파이, 퇴실 방법.",
  openGraph: {
    title: "서동부엌 이용 메뉴얼",
    description: "서동부엌 공유주방 이용 안내",
    images: [{ url: "/manual/kitchen/서동부엌.png", width: 1200, height: 630, alt: "서동부엌" }],
  },
};

function Block({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div
          style={{
            width: 36, height: 36, borderRadius: "50%",
            backgroundColor: "#F0E8D5", display: "flex",
            alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}
        >
          <Icon size={16} style={{ color: "#B5632A" }} />
        </div>
        <h2 style={{ fontFamily: "'Noto Serif KR', serif", fontSize: "17px", fontWeight: 700, color: "#2C1810" }}>
          {title}
        </h2>
      </div>
      <div className="card p-5 sm:p-6">{children}</div>
    </div>
  );
}

export default function KitchenManualPage() {
  return (
    <div className="pt-16">
      {/* ── 히어로 ─────────────────────────────────────── */}
      <div className="relative w-full" style={{ height: "280px" }}>
        <Image src="/manual/kitchen/서동부엌.png" alt="서동부엌" fill className="object-cover" priority />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(44,24,16,0.05) 0%, rgba(44,24,16,0.72) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 pb-7 px-6 sm:px-8">
          <div className="max-w-2xl mx-auto">
            <p className="section-label mb-3" style={{ color: "rgba(250,245,237,0.75)" }}>
              02 · SHARED KITCHEN · MANUAL
            </p>
            <h1 style={{ fontFamily: "'Noto Serif KR', serif", fontSize: "clamp(26px, 6vw, 42px)", fontWeight: 300, color: "#FAF5ED", lineHeight: 1.15 }}>
              서동부엌 이용 메뉴얼
              <span style={{ display: "block", fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(13px, 2vw, 18px)", fontWeight: 400, color: "rgba(250,245,237,0.65)", marginTop: "5px" }}>
                Seodong Kitchen
              </span>
            </h1>
            <p className="text-sm mt-3" style={{ color: "rgba(250,245,237,0.75)" }}>
              편안한 이용을 위해 아래 내용을 확인해주세요.
            </p>
          </div>
        </div>
      </div>
      <div style={{ borderBottom: "1px solid rgba(196, 168, 130, 0.3)" }} />

      {/* ── 퇴실 배너 ──────────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-6 sm:px-8 pt-6">
        <a href="#checkout" className="flex items-center justify-between rounded-xl px-5 py-3"
          style={{ backgroundColor: "#FFF0E0", border: "1px solid rgba(181, 99, 42, 0.35)", textDecoration: "none" }}>
          <span className="text-sm font-semibold" style={{ color: "#B5632A" }}>퇴실 전 확인사항</span>
          <span className="text-xs" style={{ color: "#9B7B6A" }}>바로가기 ↓</span>
        </a>
      </div>

      {/* ── 본문 ────────────────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-6 sm:px-8 py-8 space-y-10">

        {/* 1. 비밀번호 */}
        <Block icon={Key} title="비밀번호 · 출입 방법">
          <div className="rounded-xl p-4 text-center mb-5"
            style={{ backgroundColor: "#FFF8F0", border: "1px solid rgba(181, 99, 42, 0.25)" }}>
            <p className="section-label" style={{ fontSize: "10px", marginBottom: "6px" }}>📌 비밀번호 안내</p>
            <p className="text-sm font-semibold" style={{ color: "#B5632A", fontFamily: "'Noto Serif KR', serif" }}>
              이용 시작 30분 전에 카카오 채널로 전달드려요
            </p>
            <p className="text-xs mt-2" style={{ color: "#9B7B6A" }}>
              못 받으셨으면{" "}
              <a href="http://pf.kakao.com/_VCxnsb" target="_blank" rel="noopener noreferrer" style={{ color: "#B5632A" }}>
                카카오 채널
              </a>
              {" "}또는{" "}
              <a href="tel:01035484572" style={{ color: "#B5632A" }}>010-3548-4572</a>
              {" "}로 연락 주세요
            </p>
          </div>
          <div className="text-sm" style={{ color: "#2C1810" }}>
            <p className="section-label" style={{ fontSize: "10px", marginBottom: "6px" }}>입장 방법</p>
            <p style={{ lineHeight: "1.8" }}>
              부산 금정구 서동로91번길 7, 1층<br />
              <span style={{ color: "#9B7B6A" }}>1층이 하얀 커튼으로 쳐진 집입니다.</span><br />
              1층 하얀 문의 빨간 도어락에 안내받은 비밀번호를 누른 후<br />
              금속레버를 아래로 내리면 문이 열립니다.
            </p>
            <div className="rounded-xl overflow-hidden mt-4" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <Image src="/manual/kitchen/입구문.JPG" alt="서동부엌 입구 문" width={600} height={400} className="w-full object-cover" />
            </div>
          </div>
        </Block>

        {/* 2. 와이파이 */}
        <Block icon={Wifi} title="와이파이">
          <div className="space-y-2">
            {[
              { id: "seodongwifi1", pw: "seodong12!@", best: true },
              { id: "seodongwifi3", pw: "seodong12!@", best: false },
              { id: "seodongwifi4", pw: "seodong12!@", best: false },
            ].map((wifi) => (
              <div key={wifi.id} className="rounded-xl p-3 flex items-center justify-between"
                style={{ backgroundColor: wifi.best ? "#FFF8F0" : "#F0E8D5", border: wifi.best ? "1px solid rgba(181, 99, 42, 0.5)" : "1px solid rgba(196, 168, 130, 0.4)" }}>
                <div>
                  <p className="text-xs" style={{ color: "#9B7B6A" }}>ID</p>
                  <p className="text-sm font-semibold" style={{ color: "#2C1810" }}>
                    {wifi.id}
                    {wifi.best && <span className="ml-2 text-xs font-normal" style={{ color: "#B5632A" }}>신호 강함 ★</span>}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs" style={{ color: "#9B7B6A" }}>PW</p>
                  <p className="text-sm font-semibold" style={{ color: "#2C1810" }}>{wifi.pw}</p>
                </div>
              </div>
            ))}
          </div>
        </Block>

        {/* 3. 찾아오는 길 */}
        <Block icon={MapPin} title="찾아오는 길">
          <div className="space-y-4 text-sm" style={{ color: "#2C1810" }}>
            <div>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "4px" }}>주소</p>
              <p>부산 금정구 서동로91번길 7, 1층</p>
              <p className="text-xs mt-1" style={{ color: "#9B7B6A" }}>1층이 하얀 커튼으로 쳐진 집입니다.</p>
            </div>
            <div style={{ borderTop: "1px solid rgba(196, 168, 130, 0.3)", paddingTop: "14px" }}>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "4px" }}>주차</p>
              <p>서동 제2공영주차장 주차 후 도보 약 150m</p>
            </div>
            <div style={{ borderTop: "1px solid rgba(196, 168, 130, 0.3)", paddingTop: "14px" }}>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "4px" }}>택시</p>
              <p>
                카카오택시 →{" "}
                <strong style={{ color: "#B5632A" }}>&lsquo;네네치킨 서동점&rsquo;</strong>
                {" "}으로 설정 후 내린 뒤,{" "}
                <strong>새한씽크 사잇길</strong>로 30m 정도 올라오시면 고개서동이 보입니다.
              </p>
              <p className="text-xs mt-1" style={{ color: "#9B7B6A" }}>네네치킨 바로 앞이 아니에요!</p>
            </div>
            <div style={{ borderTop: "1px solid rgba(196, 168, 130, 0.3)", paddingTop: "14px" }}>
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
                <Image src="/manual/kitchen/가는길.png" alt="서동부엌 가는 길 지도" width={600} height={400} className="w-full object-cover" />
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(196, 168, 130, 0.3)", paddingTop: "14px" }}>
              <a href="https://m.blog.naver.com/bksong77/222609333636" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm" style={{ color: "#B5632A" }}>
                <ExternalLink size={13} />
                골목길 즐기기 · 교통편 안내 블로그
              </a>
            </div>
          </div>
        </Block>

        {/* 4. 전등 */}
        <Block icon={Lightbulb} title="전등 스위치">
          <div className="space-y-2 text-sm" style={{ color: "#2C1810" }}>
            <p>입구 문 들어오셔서 <strong>오른쪽 벽면</strong>에 스위치가 있습니다.</p>
            <p className="font-semibold" style={{ color: "#B5632A" }}>퇴실 시 전체 소등 꼭 부탁드립니다.</p>
          </div>
        </Block>

        {/* 5. 냉난방기 */}
        <Block icon={Wind} title="냉난방기">
          <div className="space-y-2 text-sm" style={{ color: "#2C1810" }}>
            <p>냉난방기 측면 리모컨 또는 기기 버튼으로 직접 작동합니다.</p>
            <p className="font-semibold" style={{ color: "#B5632A" }}>퇴실 시 전원을 꺼주세요.</p>
          </div>
        </Block>

        {/* 6. 전열기기 */}
        <Block icon={Zap} title="전열기기 사용법">
          <div className="space-y-4">
            <p className="text-sm font-semibold" style={{ color: "#B5632A" }}>
              오븐·전자렌지·인덕션 사용 후 전원을 꺼주세요.
            </p>
            <div className="rounded-xl p-4" style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "10px" }}>오븐 사용 방법</p>
              <div className="space-y-2">
                <a href="https://youtu.be/TC9orz3WzxY" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm" style={{ color: "#B5632A" }}>
                  <ExternalLink size={13} />오븐 사용법 영상 1
                </a>
                <a href="https://youtu.be/G9Lox8uUbw0" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm" style={{ color: "#B5632A" }}>
                  <ExternalLink size={13} />오븐 사용법 영상 2
                </a>
              </div>
              <p className="text-xs mt-3" style={{ color: "#9B7B6A" }}>설명서도 공간에 비치되어 있습니다.</p>
            </div>
            <div className="rounded-xl p-4" style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "10px" }}>반죽기 사용 방법</p>
              <a href="https://youtu.be/poxqBy9y0mM" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm" style={{ color: "#B5632A" }}>
                <ExternalLink size={13} />반죽기 사용법 영상
              </a>
            </div>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <Image src="/manual/kitchen/인덕션.png" alt="인덕션 · 하이라이트" width={600} height={400} className="w-full object-cover" />
              <div className="p-4" style={{ backgroundColor: "#F0E8D5" }}>
                <p className="section-label" style={{ fontSize: "10px", marginBottom: "8px" }}>인덕션 · 하이라이트 안내</p>
                <div className="space-y-2 text-sm" style={{ color: "#2C1810" }}>
                  <p>좌측 2개 — <strong>인덕션</strong> (인덕션 전용 냄비 사용)</p>
                  <p>우측 큰 것 — <strong>하이라이트</strong> (일반 냄비 사용 가능)</p>
                  <p>각각 개별 온도 조절이 가능합니다.</p>
                  <p>하이라이트는 추가로 1개 더 비치되어 있으니 필요하시면 사용해주세요.</p>
                  <p className="mt-1" style={{ color: "#9B7B6A" }}>
                    인덕션이 작동하지 않으면 전용 냄비를 사용해주세요.<br />
                    일반 냄비는 인덕션에서 작동하지 않습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Block>

        {/* 7. 냉장고 */}
        <Block icon={Package} title="냉장고 이용">
          <div className="space-y-3 text-sm">
            <div className="rounded-xl p-4" style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <p className="font-semibold mb-1" style={{ color: "#2C1810" }}>좌측 냉장고 — 공용</p>
              <p style={{ color: "#6B4C3B" }}>
                당일 이용자 공용입니다. 편하게 사용하시고,<br />
                기부하실 재료가 있으면 비치해주세요 :)
              </p>
            </div>
            <div className="rounded-xl p-4" style={{ backgroundColor: "#FFF5F5", border: "1px solid rgba(180, 50, 50, 0.2)" }}>
              <p className="font-semibold mb-1" style={{ color: "#B52A2A" }}>우측 냉장고 — 정기이용자 전용</p>
              <p style={{ color: "#6B4C3B" }}>정기이용자 개인 물품이 보관되어 있으니 사용하지 않도록 해주세요.</p>
            </div>
          </div>
        </Block>

        {/* 8. 조리도구·비품 */}
        <Block icon={Utensils} title="조리도구 · 비품">
          <div className="space-y-2 text-sm" style={{ color: "#2C1810" }}>
            <p>칼·오븐·인덕션 등 위험한 도구는 항상 조심해서 사용해주세요.</p>
            <p>공용 비품은 다음 이용자를 위해 필요한 만큼만 사용해주세요.</p>
            <p style={{ color: "#9B7B6A" }}>표시된 개인 물품은 사용하지 않도록 부탁드립니다.</p>
          </div>
          <div className="rounded-xl p-4 mt-4" style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.4)" }}>
            <p className="section-label" style={{ fontSize: "10px", marginBottom: "8px" }}>블루투스 스피커 (마샬)</p>
            <div className="space-y-2 text-sm" style={{ color: "#2C1810" }}>
              <p>마샬 블루투스 스피커가 비치되어 있어요. 편하게 사용하세요!</p>
              <p style={{ color: "#9B7B6A" }}>
                블루투스가 연결되지 않으면 <strong style={{ color: "#2C1810" }}>source 버튼을 길게</strong> 눌러주세요.<br />
                빨간불이 깜빡이면 초기화 완료 — 그때 다시 블루투스를 연결하시면 됩니다.
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden mt-4" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
            <Image src="/manual/kitchen/각종 양념류.JPG" alt="기본 양념류" width={600} height={400} className="w-full object-cover" />
            <p className="text-xs text-center py-2" style={{ color: "#9B7B6A", backgroundColor: "#F0E8D5" }}>
              기본 양념류 (소금·설탕·후추·간장·식용유·참기름·식초 등)
            </p>
          </div>
        </Block>

        {/* 9. 쓰레기 */}
        <Block icon={Trash2} title="쓰레기 분리수거">
          <div className="space-y-3 text-sm" style={{ color: "#2C1810" }}>
            <p>🗑 <strong>일반쓰레기</strong> — 쓰레기통 안에 넣어주세요.</p>
            <p>🥬 <strong>음식물</strong> — 음식물 쓰레기통에 넣어주세요.</p>
            <p>♻️ <strong>재활용</strong> (플라스틱·캔·병) — <strong>바깥에</strong> 분리수거 부탁드립니다.</p>
            <p>📄 <strong>종이</strong> — <strong>바깥에</strong> 놔두시면 됩니다.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <Image src="/manual/kitchen/음식물쓰레기.png" alt="음식물 쓰레기통" width={300} height={200} className="w-full object-cover" />
              <p className="text-xs text-center py-2" style={{ color: "#9B7B6A", backgroundColor: "#F0E8D5" }}>음식물 쓰레기통</p>
            </div>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <Image src="/manual/kitchen/재활용.png" alt="재활용 분리수거" width={300} height={200} className="w-full object-cover" />
              <p className="text-xs text-center py-2" style={{ color: "#9B7B6A", backgroundColor: "#F0E8D5" }}>재활용 분리수거</p>
            </div>
          </div>
        </Block>

        {/* 10. 문의 */}
        <Block icon={Phone} title="문의사항">
          <div className="space-y-3 text-sm" style={{ color: "#2C1810" }}>
            <p>
              카카오톡 채널{" "}
              <a href="https://pf.kakao.com/_VCxnsb" target="_blank" rel="noopener noreferrer"
                style={{ color: "#B5632A", fontWeight: 600 }}>&lsquo;고개서동&rsquo;</a>
              {" "}으로 친구추가 후 문의해주세요.
            </p>
            <p>
              급한 문의:{" "}
              <a href="tel:01035484572" style={{ color: "#B5632A", fontWeight: 600 }}>010-3548-4572</a>
            </p>
            <p className="text-xs" style={{ color: "#9B7B6A" }}>응답이 느린 경우도 있으니 양해 부탁드립니다 🙏</p>
          </div>
        </Block>

        {/* 11. 퇴실 */}
        <div id="checkout">
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "#FFF0E0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <AlertCircle size={16} style={{ color: "#B5632A" }} />
            </div>
            <h2 style={{ fontFamily: "'Noto Serif KR', serif", fontSize: "17px", fontWeight: 700, color: "#2C1810" }}>
              퇴실 전 확인사항
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { num: "1", label: "인덕션", sub: "전원 OFF" },
              { num: "2", label: "화장실", sub: "2구 스위치 전부 OFF" },
              { num: "3", label: "에어컨", sub: "전원 OFF" },
              { num: "4", label: "입구 스위치", sub: "처음에 켰던 오른쪽 2구" },
            ].map((item) => (
              <div key={item.num} className="rounded-xl p-4 text-center"
                style={{ backgroundColor: "#FFF8F0", border: "1px solid rgba(181, 99, 42, 0.3)" }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: "#B5632A", display: "block" }}>
                  {item.num}
                </span>
                <p className="font-semibold text-sm mt-1" style={{ color: "#2C1810" }}>{item.label}</p>
                <p className="text-xs mt-1" style={{ color: "#9B7B6A" }}>{item.sub}</p>
              </div>
            ))}
            <div className="col-span-2 rounded-xl p-4 flex items-center gap-3"
              style={{ backgroundColor: "#FFF8F0", border: "1px solid rgba(181, 99, 42, 0.3)" }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: "#B5632A", flexShrink: 0 }}>5</span>
              <p className="text-sm" style={{ color: "#2C1810" }}>
                퇴실 후 <strong>공간 사진 한 장</strong>을 카카오 채널로 보내주세요. 📸
              </p>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: "#9B7B6A" }}>
            💡 화장실 2구 스위치 — 위쪽은 다락, 아래쪽은 화장실이에요.<br />
            가끔 실수로 켜고 나오는 경우가 있으니, 두 개 다 같은 방향으로 내려주세요.
          </p>
        </div>

        {/* 12. 리뷰 이벤트 */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "#F0E8D5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Star size={16} style={{ color: "#B5632A" }} />
            </div>
            <h2 style={{ fontFamily: "'Noto Serif KR', serif", fontSize: "17px", fontWeight: 700, color: "#2C1810" }}>
              리뷰 이벤트
            </h2>
          </div>
          <div className="card p-5 sm:p-6" style={{ backgroundColor: "#F0E8D5" }}>
            <p className="text-sm" style={{ color: "#2C1810" }}>스페이스클라우드 또는 네이버 리뷰 작성 시</p>
            <p className="text-base font-bold mt-2 mb-3" style={{ color: "#B5632A", fontFamily: "'Noto Serif KR', serif" }}>
              🎁 무료 주차!
            </p>
            <p className="text-xs" style={{ color: "#9B7B6A" }}>리뷰 작성 예정이시면 미리 알려주세요 :) 감사합니다!</p>
          </div>
        </div>

        {/* 13. 주변 편의시설 */}
        <Block icon={Building2} title="주변 편의시설">
          <div className="space-y-4 text-sm" style={{ color: "#2C1810" }}>
            <div>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "8px" }}>근처 편의시설</p>
              <div className="space-y-2">
                {[
                  { name: "서동미로시장", addr: "부산 금정구 서동로141번길 16" },
                  { name: "GS25 서동로점", addr: "부산 금정구 서동로 105" },
                  { name: "엘마트", addr: "부산 금정구 서동로103번길 14" },
                  { name: "새마을금고", addr: "부산 금정구 서동로 109" },
                  { name: "부산은행", addr: "부산 금정구 서동로 75-7" },
                ].map((place) => (
                  <div key={place.name} className="flex items-start gap-2">
                    <span className="font-semibold" style={{ flexShrink: 0 }}>{place.name}</span>
                    <span style={{ color: "#9B7B6A" }}>{place.addr}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(196, 168, 130, 0.3)", paddingTop: "14px" }}>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "8px" }}>대형마트 (차량 이용)</p>
              <div className="space-y-2">
                {[
                  { name: "탑마트 금사점", addr: "부산 금정구 공단서로 22" },
                  { name: "GS더프레시 부곡점", addr: "부산 금정구 부곡로 79" },
                ].map((place) => (
                  <div key={place.name} className="flex items-start gap-2">
                    <span className="font-semibold" style={{ flexShrink: 0 }}>{place.name}</span>
                    <span style={{ color: "#9B7B6A" }}>{place.addr}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Block>

        {/* 푸터 */}
        <div className="text-center py-10" style={{ borderTop: "1px solid rgba(196, 168, 130, 0.3)" }}>
          <p className="text-sm" style={{ color: "#9B7B6A", fontFamily: "'Noto Serif KR', serif" }}>
            편안하고 즐거운 시간 되세요 ♡
          </p>
          <p className="text-xs mt-2" style={{ color: "#C4A882" }}>고개서동</p>
        </div>

      </div>
    </div>
  );
}
