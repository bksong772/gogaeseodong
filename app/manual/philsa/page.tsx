import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  MapPin,
  Key,
  Lightbulb,
  Wind,
  Flame,
  Package,
  Trash2,
  Wifi,
  Phone,
  AlertCircle,
  Clock,
  Building2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "서동여관 필사의방 이용 메뉴얼 | 고개서동",
  description: "서동여관 필사의방 이용 안내. 체크인/체크아웃, 비밀번호, 시설 사용법, 퇴실 방법.",
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

export default function YeogwanManualPage() {
  return (
    <div className="pt-16">
      {/* ── 히어로 ─────────────────────────────────────── */}
      <div
        className="relative w-full flex items-end"
        style={{ height: "280px" }}
      >
        <Image src="/manual/philsa/필사의방.png" alt="필사의방" fill className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(44,24,16,0.05) 0%, rgba(44,24,16,0.72) 100%)" }} />
        <div className="w-full pb-7 px-6 sm:px-8">
          <div className="max-w-2xl mx-auto">
            <p className="section-label mb-3" style={{ color: "rgba(250,245,237,0.65)" }}>
              01 · SEODONG YEOGWAN · MANUAL
            </p>
            <h1 style={{ fontFamily: "'Noto Serif KR', serif", fontSize: "clamp(26px, 6vw, 42px)", fontWeight: 300, color: "#FAF5ED", lineHeight: 1.15 }}>
              서동여관 필사의방
              <span style={{ display: "block", fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(13px, 2vw, 18px)", fontWeight: 400, color: "rgba(250,245,237,0.5)", marginTop: "5px" }}>
                Seodong Yeogwan · Pilsa Room
              </span>
            </h1>
            <p className="text-sm mt-3" style={{ color: "rgba(250,245,237,0.6)" }}>
              편안한 이용을 위해 아래 내용을 확인해주세요.
            </p>
          </div>
        </div>
      </div>
      <div style={{ borderBottom: "1px solid rgba(196, 168, 130, 0.3)" }} />

      {/* ── TV 없음 안내 ────────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-6 sm:px-8 pt-6">
        <div className="rounded-xl px-5 py-4 mb-3"
          style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.5)" }}>
          <p className="text-sm font-semibold mb-1" style={{ color: "#2C1810" }}>📵 필사의방에는 TV·영상매체가 없습니다</p>
          <p className="text-xs leading-5" style={{ color: "#6B4C3B" }}>
            대신 책과 글, 조용한 시간을 드립니다. 온전히 나를 위한 하룻밤을 원하시는 분께 맞는 공간이에요.
          </p>
        </div>
      </div>

      {/* ── 퇴실 배너 ──────────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-6 sm:px-8">
        <a href="#checkout" className="flex items-center justify-between rounded-xl px-5 py-3"
          style={{ backgroundColor: "#FFF0E0", border: "1px solid rgba(181, 99, 42, 0.35)", textDecoration: "none" }}>
          <span className="text-sm font-semibold" style={{ color: "#B5632A" }}>퇴실 전 확인사항</span>
          <span className="text-xs" style={{ color: "#9B7B6A" }}>바로가기 ↓</span>
        </a>
      </div>

      {/* ── 본문 ────────────────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-6 sm:px-8 py-8 space-y-10">

        {/* 1. 체크인/체크아웃 */}
        <Block icon={Clock} title="체크인 · 체크아웃">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl p-4 text-center"
              style={{ backgroundColor: "#FFF8F0", border: "1px solid rgba(181, 99, 42, 0.3)" }}>
              <p className="text-xs mb-1" style={{ color: "#9B7B6A" }}>체크인</p>
              <p className="text-xl font-bold" style={{ color: "#2C1810", fontFamily: "'Playfair Display', serif" }}>15:00</p>
              <p className="text-xs mt-1" style={{ color: "#9B7B6A" }}>이후 가능</p>
            </div>
            <div className="rounded-xl p-4 text-center"
              style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <p className="text-xs mb-1" style={{ color: "#9B7B6A" }}>체크아웃</p>
              <p className="text-xl font-bold" style={{ color: "#2C1810", fontFamily: "'Playfair Display', serif" }}>11:00</p>
              <p className="text-xs mt-1" style={{ color: "#9B7B6A" }}>이전 완료</p>
            </div>
          </div>
          <p className="text-xs mt-3" style={{ color: "#9B7B6A" }}>
            빠른 체크인·체크아웃 변경·짐 보관 등은 카카오 채널로 문의해주세요.
          </p>
        </Block>

        {/* 2. 비밀번호 · 출입방법 */}
        <Block icon={Key} title="비밀번호 · 출입 방법">
          <div className="rounded-xl p-4 text-center mb-5"
            style={{ backgroundColor: "#FFF8F0", border: "1px solid rgba(181, 99, 42, 0.25)" }}>
            <p className="section-label" style={{ fontSize: "10px", marginBottom: "6px" }}>📌 비밀번호 안내</p>
            <p className="text-sm font-semibold" style={{ color: "#B5632A", fontFamily: "'Noto Serif KR', serif" }}>
              이용 당일 카카오 채널로 별도 전달드려요
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
          <div className="text-sm space-y-2" style={{ color: "#2C1810" }}>
            <p className="section-label" style={{ fontSize: "10px", marginBottom: "6px" }}>입장 방법</p>
            <p style={{ lineHeight: "1.9" }}>
              부산 금정구 서동로91번길 7, <strong>3층</strong><br />
              <span style={{ color: "#9B7B6A" }}>1층이 하얀 커튼으로 쳐진 집이에요.</span><br />
              <strong style={{ color: "#B5632A" }}>빨간 대문</strong>으로 올라오셔서
              계단을 따라 <strong style={{ color: "#B5632A" }}>3층 끝까지</strong> 오시면 파란 대문이 필사의방입니다.<br />
              <span style={{ color: "#9B7B6A" }}>숫자 3이 적힌 파란 대문이 필사의방이에요.</span><br />
              도어락 커버를 올리고 비밀번호 입력 후 닫으면 열려요.
            </p>
            <div className="rounded-xl overflow-hidden mt-4" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <Image src="/manual/philsa/입구문.JPG" alt="필사의방 입구 문" width={600} height={400} className="w-full object-cover" />
            </div>
          </div>
        </Block>

        {/* 3. 와이파이 */}
        <Block icon={Wifi} title="와이파이">
          <div className="space-y-2">
            {[
              { id: "seodongwifi1", pw: "seodong12!@", best: false },
              { id: "seodongwifi3", pw: "seodong12!@", best: true },
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

        {/* 4. 찾아오는 길 */}
        <Block icon={MapPin} title="찾아오는 길">
          <div className="space-y-4 text-sm" style={{ color: "#2C1810" }}>
            <div>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "4px" }}>주소</p>
              <p>부산 금정구 서동로91번길 7, 3층</p>
              <p className="text-xs mt-1" style={{ color: "#9B7B6A" }}>1층 하얀 커튼 집 — 빨간 대문으로 올라오세요.</p>
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
                <Image src="/manual/philsa/가는길.png" alt="필사의방 가는 길 지도" width={600} height={400} className="w-full object-cover" />
              </div>
            </div>
            <div style={{ borderTop: "1px solid rgba(196, 168, 130, 0.3)", paddingTop: "14px" }}>
              <a href="https://m.blog.naver.com/bksong77/222609333636" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm" style={{ color: "#B5632A" }}>
                골목길 즐기기 · 교통편 안내 블로그 →
              </a>
            </div>
          </div>
        </Block>

        {/* 5. 비치물품 */}
        <Block icon={Package} title="비치물품">
          <div className="space-y-4">
            <div className="rounded-xl p-4" style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "10px" }}>공통 비치 품목</p>
              <div className="space-y-1.5 text-sm" style={{ color: "#2C1810" }}>
                <p>🛁 수건, 물티슈, 휴지, 드라이기, 고데기, 치약</p>
                <p>🧴 샴푸·바디워시·컨디셔너·샤워타월·손세정제</p>
                <p>🍳 그릇·수저·냄비·팬·와인잔·오프너</p>
                <p>🌿 공기청정기·무드등·인센스 스틱</p>
                <p>❄️ 냉장고·가스렌지·전자렌지</p>
                <p>🪞 전신거울·옷걸이</p>
              </div>
            </div>
            <div className="rounded-xl p-4" style={{ backgroundColor: "#FFF8F0", border: "1px solid rgba(181, 99, 42, 0.3)" }}>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "10px" }}>필사의방 전용</p>
              <div className="space-y-1.5 text-sm" style={{ color: "#2C1810" }}>
                <p>🛏️ 퀸 침대 · 2인 침구세트 (베개·이불)</p>
                <p>🛋️ 2인용 소파 · 흔들의자</p>
                <p>📖 독서용 책 · 블루투스 스피커</p>
                <p>💼 업무용 책상·의자·스탠드 조명</p>
                <p>✏️ 메모장·필기도구</p>
              </div>
            </div>
            <div className="rounded-xl p-4" style={{ backgroundColor: "#FFF5F5", border: "1px solid rgba(180, 50, 50, 0.2)" }}>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "8px" }}>⚠️ 참고사항</p>
              <div className="space-y-1.5 text-sm" style={{ color: "#6B4C3B" }}>
                <p>화장실 변기·세면대 사이즈가 작습니다. 양해 부탁드려요.</p>
                <p>정수기 없음 — 500ml 생수 2병 제공, 추가 필요시 개별 준비</p>
                <p>일회용품 제한으로 칫솔·면봉·화장솜·머리끈은 제공되지 않아요.</p>
              </div>
            </div>
          </div>
        </Block>

        {/* 6. 전등 */}
        <Block icon={Lightbulb} title="전등 스위치">
          <div className="space-y-2 text-sm" style={{ color: "#2C1810" }}>
            <p>입구 정면 <strong>보일러 옆</strong>에 거실등 스위치가 있습니다.</p>
            <p>방·부엌·화장실 전등은 각 공간 벽면에서 켜시면 돼요.</p>
            <p className="font-semibold" style={{ color: "#B5632A" }}>퇴실 시 전체 소등 꼭 부탁드립니다.</p>
          </div>
        </Block>

        {/* 7. 보일러 */}
        <Block icon={Wind} title="보일러">
          <div className="space-y-2 text-sm" style={{ color: "#2C1810" }}>
            <div className="rounded-xl overflow-hidden mb-4" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <Image src="/manual/philsa/보일러.jpg" alt="보일러" width={600} height={400} className="w-full object-cover" />
            </div>
            <p><strong>우측 아래 전원 버튼</strong>을 누르면 작동합니다.</p>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <div className="rounded-xl p-3 text-center"
                style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.4)" }}>
                <p className="text-xs font-semibold" style={{ color: "#2C1810" }}>난방 / 온수</p>
                <p className="text-xs mt-1" style={{ color: "#9B7B6A" }}>바닥 난방 + 온수 동시 작동</p>
              </div>
              <div className="rounded-xl p-3 text-center"
                style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.4)" }}>
                <p className="text-xs font-semibold" style={{ color: "#2C1810" }}>온수 전용</p>
                <p className="text-xs mt-1" style={{ color: "#9B7B6A" }}>온수만 사용 시</p>
              </div>
            </div>
            <p className="font-semibold mt-2" style={{ color: "#B5632A" }}>사용 후 전원을 꼭 꺼주세요.</p>
          </div>
        </Block>

        {/* 8. 온풍기 */}
        <Block icon={Wind} title="온풍기 안내 (꼭 확인해주세요)">
          <div className="space-y-3 text-sm" style={{ color: "#2C1810" }}>
            <p>안방에 비치된 온풍기입니다. 직접 조작하시면 됩니다.</p>
            <div className="rounded-xl p-4"
              style={{ backgroundColor: "#FFF5F5", border: "1px solid rgba(180, 50, 50, 0.25)" }}>
              <p className="font-semibold" style={{ color: "#B52A2A" }}>
                ⚠️ 작동 중에는 커버가 뜨거우니 화상에 주의하세요!
              </p>
            </div>
            <p style={{ color: "#9B7B6A" }}>
              온도 조절이 필요하시면 카카오 채널로 편하게 연락 주세요 😊
            </p>
          </div>
        </Block>

        {/* 9. 가스렌지 */}
        <Block icon={Flame} title="가스렌지">
          <div className="space-y-2 text-sm" style={{ color: "#2C1810" }}>
            <p>가스렌지 <strong>좌측에 가스밸브</strong>가 위치합니다.</p>
            <p className="font-semibold" style={{ color: "#B5632A" }}>⚠️ 사용 후 반드시 가스밸브를 잠궈주세요! 안전을 위해 꼭 확인 부탁드립니다 🙏</p>
          </div>
        </Block>

        {/* 9. 쓰레기 */}
        <Block icon={Trash2} title="쓰레기 분리수거">
          <div className="space-y-3 text-sm" style={{ color: "#2C1810" }}>
            <p>🗑 <strong>일반쓰레기</strong> — 냉장고 옆 쓰레기통에 버려주세요.</p>
            <p>🥬 <strong>음식물</strong> — 주방 싱크대 음식물통에 넣어주세요.</p>
            <p>♻️ <strong>재활용</strong> (플라스틱·캔·병) — 화장실 내 분리수거함에 부탁드려요.</p>
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
              { num: "1", label: "전체 소등", sub: "방·부엌·화장실 전부" },
              { num: "2", label: "보일러", sub: "전원 OFF" },
              { num: "3", label: "가스렌지", sub: "가스밸브 잠금" },
              { num: "4", label: "히터기·에어컨", sub: "켜두셨으면 전원 OFF" },
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
                퇴실 후 <strong>서동여관 사진 한 장</strong>을 카카오 채널로 보내주세요. 📸
              </p>
            </div>
          </div>
        </div>

        {/* 12. 주변 편의시설 */}
        <Block icon={Building2} title="주변 편의시설">
          <div className="space-y-4 text-sm" style={{ color: "#2C1810" }}>
            <div>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "8px" }}>근처 편의시설</p>
              <div className="space-y-2">
                {[
                  { name: "서동미로시장", addr: "부산 금정구 서동로141번길 16" },
                  { name: "GS25 서동로점", addr: "부산 금정구 서동로 105" },
                  { name: "엘마트", addr: "부산 금정구 서동로103번길 14" },
                  { name: "다이소", addr: "부산 금정구 반송로 400" },
                  { name: "스타벅스", addr: "부산 금정구 서동로 173" },
                  { name: "파리바게뜨", addr: "부산 금정구 서동로 73" },
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

        {/* 여행 가이드 링크 */}
        <div className="rounded-2xl p-5"
          style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.4)" }}>
          <p className="text-sm font-semibold mb-1" style={{ color: "#2C1810" }}>🗺️ 서동 여행 가이드</p>
          <p className="text-xs mb-3" style={{ color: "#9B7B6A" }}>주인장이 직접 고른 맛집·카페·산책 코스</p>
          <Link href="/guide"
            className="inline-flex items-center gap-1 text-xs font-semibold"
            style={{ color: "#B5632A" }}>
            가이드 보러가기 →
          </Link>
        </div>

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
