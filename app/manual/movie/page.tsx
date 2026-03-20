import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import {
  MapPin,
  Key,
  Lightbulb,
  Wind,
  Tv,
  Package,
  Trash2,
  Wifi,
  Phone,
  Star,
  AlertCircle,
  ExternalLink,
  Zap,
  Camera,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "서동영화 이용 메뉴얼 | 고개서동",
  description: "서동영화 OTT 영화감상실 이용 안내. 비밀번호, 빔프로젝터, 와이파이, 퇴실 방법.",
  openGraph: {
    title: "서동영화 이용 메뉴얼",
    description: "서동영화 OTT 영화감상실 이용 안내",
    images: [{ url: "/manual/movie/서동영화.png", width: 1200, height: 630, alt: "서동영화" }],
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

export default function MovieManualPage() {
  return (
    <div className="pt-16">
      {/* ── 히어로 ─────────────────────────────────────── */}
      <div className="relative w-full" style={{ height: "280px" }}>
        <Image src="/manual/movie/서동영화.png" alt="서동영화" fill className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(44,24,16,0.05) 0%, rgba(44,24,16,0.72) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 pb-7 px-6 sm:px-8">
          <div className="max-w-2xl mx-auto">
            <p className="section-label mb-3" style={{ color: "rgba(250,245,237,0.75)" }}>
              03 · SCREENING ROOM · MANUAL
            </p>
            <h1 style={{ fontFamily: "'Noto Serif KR', serif", fontSize: "clamp(26px, 6vw, 42px)", fontWeight: 300, color: "#FAF5ED", lineHeight: 1.15 }}>
              서동영화 이용 메뉴얼
              <span style={{ display: "block", fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(13px, 2vw, 18px)", fontWeight: 400, color: "rgba(250,245,237,0.65)", marginTop: "5px" }}>
                Seodong Movie
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
              <a href="http://pf.kakao.com/_VCxnsb" target="_blank" rel="noopener noreferrer" style={{ color: "#B5632A" }}>카카오 채널</a>
              {" "}또는{" "}
              <a href="tel:01035484572" style={{ color: "#B5632A" }}>010-3548-4572</a>
              {" "}로 연락 주세요
            </p>
          </div>
          <div className="text-sm space-y-2" style={{ color: "#2C1810", lineHeight: "1.9" }}>
            <p className="section-label" style={{ fontSize: "10px", marginBottom: "6px" }}>입장 방법</p>
            <p>
              부산 금정구 서동로91번길 7, <strong>2층</strong>
            </p>
            <p style={{ color: "#9B7B6A" }}>
              1층에 하얀 커튼으로 쳐진 집이 있어요. 해당 건물의 <strong style={{ color: "#B5632A" }}>빨간 대문</strong>으로 들어오세요.
            </p>
            <p>
              2층으로 올라오시면 <strong>회색 문</strong>이 서동영화입니다.<br />
              도어락 커버를 올리고 비밀번호 입력 후 닫으면 문이 열립니다.
            </p>
            <div className="rounded-xl overflow-hidden mt-4" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <Image src="/manual/movie/입구문.JPG" alt="서동영화 입구 문" width={600} height={400} className="w-full object-cover" />
            </div>
          </div>
        </Block>

        {/* 2. 와이파이 */}
        <Block icon={Wifi} title="와이파이">
          <div className="space-y-2">
            {[
              { id: "seodongwifi1", pw: "seodong12!@", badge: "신호 강함 ★★", highlight: true },
              { id: "seodongwifi3", pw: "seodong12!@", badge: "신호 강함 ★", highlight: true },
              { id: "seodongwifi4", pw: "seodong12!@", badge: null, highlight: false },
            ].map((wifi) => (
              <div key={wifi.id} className="rounded-xl p-3 flex items-center justify-between"
                style={{ backgroundColor: wifi.highlight ? "#FFF8F0" : "#F0E8D5", border: wifi.highlight ? "1px solid rgba(181, 99, 42, 0.5)" : "1px solid rgba(196, 168, 130, 0.4)" }}>
                <div>
                  <p className="text-xs" style={{ color: "#9B7B6A" }}>ID</p>
                  <p className="text-sm font-semibold" style={{ color: "#2C1810" }}>
                    {wifi.id}
                    {wifi.badge && <span className="ml-2 text-xs font-normal" style={{ color: "#B5632A" }}>{wifi.badge}</span>}
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
              <p>부산 금정구 서동로91번길 7, 2층</p>
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
                <Image src="/manual/movie/가는길.png" alt="서동영화 가는 길 지도" width={600} height={400} className="w-full object-cover" />
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

        {/* 4. 전등 · 차단기 */}
        <Block icon={Lightbulb} title="전등 · 차단기">
          <div className="space-y-4 text-sm" style={{ color: "#2C1810" }}>
            <div className="rounded-xl p-4"
              style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "6px" }}>입실 시</p>
              <p>
                입구 <strong>좌측 벽면</strong>의 차단기 스위치를 <strong>올려주세요.</strong><br />
                차단기를 올리면 전체 전원이 켜집니다.
              </p>
            </div>
            <div className="rounded-xl p-4"
              style={{ backgroundColor: "#FFF8F0", border: "1px solid rgba(181, 99, 42, 0.25)" }}>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "6px" }}>퇴실 시</p>
              <p>에어컨, 빔프로젝터 등 전자제품과 전등을 모두 끈 후<br />
                <strong style={{ color: "#B5632A" }}>차단기를 내려주세요.</strong>
              </p>
            </div>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <Image src="/manual/movie/두꺼비집.jpg" alt="차단기(두꺼비집)" width={600} height={400} className="w-full object-cover" />
              <p className="text-xs text-center py-2" style={{ color: "#9B7B6A", backgroundColor: "#F0E8D5" }}>입구 좌측 벽면 차단기</p>
            </div>
          </div>
        </Block>

        {/* 5. 냉난방기 */}
        <Block icon={Wind} title="냉난방기 (에어컨)">
          <div className="space-y-4 text-sm" style={{ color: "#2C1810" }}>
            <p>내부 에어컨(캐리어) 리모컨으로 조작합니다.</p>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <Image src="/manual/movie/리모컨.JPG" alt="에어컨 리모컨" width={600} height={400} className="w-full object-cover" />
            </div>
            <div className="rounded-xl p-4"
              style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "8px" }}>운전 선택 모드</p>
              <div className="grid grid-cols-2 gap-y-1" style={{ fontSize: "13px" }}>
                <p><strong>A</strong> — 오토</p>
                <p>❄️ <strong>결정체</strong> — 냉방</p>
                <p>💧 <strong>물방울</strong> — 제습</p>
                <p>☀️ <strong>태양</strong> — 히터</p>
                <p>💨 <strong>팬 모양</strong> — 송풍</p>
              </div>
            </div>
            <p className="text-xs" style={{ color: "#9B7B6A" }}>
              ① 전원 ON → ② 운전 선택 → ③ 온도·풍향·풍량 선택
            </p>
            <div className="rounded-xl p-3"
              style={{ backgroundColor: "#FFF8F0", border: "1px solid rgba(181, 99, 42, 0.3)" }}>
              <p className="text-xs font-semibold" style={{ color: "#B5632A" }}>
                ⚡ 인버터 방식이라 작동 후 3~5분 정도 지나야 냉난방이 됩니다.
              </p>
            </div>
          </div>
        </Block>

        {/* 6. 보일러 */}
        <Block icon={Zap} title="보일러">
          <div className="space-y-3 text-sm" style={{ color: "#2C1810" }}>
            <p>보일러 <strong>우측 아래 전원버튼</strong>을 누르면 작동합니다.</p>
            <div className="space-y-2">
              <div className="rounded-xl p-3"
                style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.4)" }}>
                <p><strong>난방 / 온수</strong> — 바닥 난방과 온수가 함께 작동</p>
              </div>
              <div className="rounded-xl p-3"
                style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.4)" }}>
                <p><strong>온수 전용</strong> — 온수만 나옵니다</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <Image src="/manual/movie/보일러.jpg" alt="보일러" width={600} height={400} className="w-full object-cover" />
            </div>
            <p className="font-semibold" style={{ color: "#B5632A" }}>사용 후 전원을 꼭 꺼주세요!</p>
          </div>
        </Block>

        {/* 7. 빔프로젝터 & OTT */}
        <Block icon={Tv} title="빔프로젝터 · OTT">
          <div className="space-y-4">
            <div className="rounded-xl p-4"
              style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "8px" }}>연결 순서 (노트북 사용 시)</p>
              <div className="rounded-xl p-3 text-center mb-3"
                style={{ backgroundColor: "#FFF8F0", border: "2px solid rgba(181, 99, 42, 0.5)" }}>
                <p className="section-label" style={{ fontSize: "10px", marginBottom: "4px" }}>💻 노트북 비밀번호</p>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, color: "#B5632A", letterSpacing: "4px" }}>
                  11110000
                </p>
              </div>
              <div className="space-y-1 text-sm" style={{ color: "#2C1810" }}>
                <p className="text-xs mt-2" style={{ color: "#9B7B6A" }}>① 노트북 전원 ON</p>
                <p className="text-xs" style={{ color: "#9B7B6A" }}>② 까만 리모컨으로 빔 전원 ON <span style={{ color: "#C4A882" }}>(버튼을 잘 눌러야 작동됩니다)</span></p>
                <p className="text-xs" style={{ color: "#9B7B6A" }}>③ 빔 화면에서 <strong>HDMI &amp; VGA 모드</strong>로 접속</p>
                <p className="text-xs" style={{ color: "#9B7B6A" }}>④ 화면에 &ldquo;connect success&rdquo; 뜨면 연결 완료!</p>
              </div>
              <a href="https://youtu.be/IQC2etAZMTQ" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs mt-3" style={{ color: "#B5632A" }}>
                <ExternalLink size={12} />
                빔프로젝터 참고 영상
              </a>
            </div>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <Image src="/manual/movie/HDMI.png" alt="HDMI 연결" width={600} height={400} className="w-full object-cover" />
            </div>
            <div className="rounded-xl p-4"
              style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "8px" }}>다른 연결 방법</p>
              <div className="space-y-1 text-sm" style={{ color: "#2C1810" }}>
                <p>💾 <strong>USB</strong> — 빔프로젝터에 USB 연결 후 시청</p>
                <p>📱 <strong>스마트폰 무선</strong> — 안드로이드: Miracast / 아이폰: iOS 미러링</p>
              </div>
            </div>
            <div className="rounded-xl p-4"
              style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "8px" }}>OTT 이용 안내</p>
              <p className="text-sm" style={{ color: "#2C1810" }}>
                넷플릭스·왓챠·디즈니+ 등 <strong>개인 계정</strong>으로 사용하실 수 있어요.
              </p>
            </div>
            <div className="rounded-xl p-4"
              style={{ backgroundColor: "#FFF5F5", border: "1px solid rgba(180, 50, 50, 0.2)" }}>
              <p className="text-sm font-semibold mb-1" style={{ color: "#B52A2A" }}>침구류 · 어메니티 미제공</p>
              <p className="text-sm" style={{ color: "#6B4C3B" }}>
                서동영화는 숙박 공간이 아닙니다.<br />
                침구류와 세면 용품은 제공되지 않아요.
              </p>
            </div>
          </div>
        </Block>

        {/* 8. 셀프 스튜디오 */}
        <Block icon={Camera} title="셀프 스튜디오">
          <div className="text-sm" style={{ color: "#2C1810" }}>
            <p className="mb-3">스튜디오 조명과 거울을 이용한 셀프 촬영이 가능해요.</p>
            <a
              href="https://www.notion.so/e6170b202802458eb3d4cd0390caf119"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
              style={{ color: "#B5632A" }}
            >
              <ExternalLink size={13} />
              셀프 스튜디오 이용 메뉴얼 보기
            </a>
          </div>
        </Block>

        {/* 9. 집기류 */}
        <Block icon={Package} title="컵 · 접시 · 집기류">
          <div className="text-sm space-y-2" style={{ color: "#2C1810" }}>
            <p>싱크대 상부장에 구비되어 있습니다.</p>
            <p style={{ color: "#9B7B6A" }}>이용 후 깨끗이 정리 부탁드립니다.</p>
          </div>
        </Block>

        {/* 10. 쓰레기 */}
        <Block icon={Trash2} title="쓰레기 분리수거">
          <div className="space-y-3 text-sm" style={{ color: "#2C1810" }}>
            <p>🗑 <strong>일반쓰레기</strong> — 냉장고 옆 쓰레기통에 넣어주세요.</p>
            <p>🥬 <strong>음식물</strong> — 싱크대에 놔두시면 됩니다.</p>
            <p>♻️ <strong>재활용품</strong> — 싱크대에 놔두시면 됩니다.</p>
          </div>
        </Block>

        {/* 11. 문의 */}
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

        {/* 12. 퇴실 */}
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
              { num: "1", label: "에어컨 · 빔프로젝터", sub: "전자제품 전원 OFF" },
              { num: "2", label: "보일러", sub: "사용 시 전원 OFF" },
              { num: "3", label: "전등 OFF", sub: "전체 소등" },
              { num: "4", label: "설거지 · 정리", sub: "사용한 컵·그릇 정리" },
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
              <div>
                <p className="text-sm font-semibold" style={{ color: "#2C1810" }}>차단기 내리기</p>
                <p className="text-xs mt-0.5" style={{ color: "#9B7B6A" }}>입구 좌측 벽면 차단기를 내려주세요</p>
              </div>
            </div>
            <div className="col-span-2 rounded-xl p-4 flex items-center gap-3"
              style={{ backgroundColor: "#FFF0E0", border: "1px solid rgba(181, 99, 42, 0.4)" }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: "#B5632A", flexShrink: 0 }}>6</span>
              <p className="text-sm" style={{ color: "#2C1810" }}>
                퇴실 후 <strong>공간 사진 한 장</strong>을 카카오 채널로 보내주세요. 📸
              </p>
            </div>
          </div>
        </div>

        {/* 13. 리뷰 이벤트 */}
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
            <p className="text-xs" style={{ color: "#9B7B6A" }}>리뷰 작성 예정이시면 미리 알려주시면 더 챙겨드릴 수 있어요.</p>
          </div>
        </div>

        {/* 14. 주변 편의시설 */}
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
