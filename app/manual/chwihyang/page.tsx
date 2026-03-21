import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
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
  Tv,
  Zap,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "서동여관 취향의방 이용 메뉴얼 | 고개서동",
  description: "서동여관 취향의방 이용 안내. 체크인/체크아웃, 비밀번호, 시설 사용법, 퇴실 방법.",
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

export default function ChwiyhangManualPage() {
  return (
    <div className="pt-16">
      {/* ── 히어로 ─────────────────────────────────────── */}
      <div
        className="relative w-full flex items-end"
        style={{ height: "280px" }}
      >
        <Image src="/manual/chwihyang/취향의방.jpg" alt="취향의방" fill className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(44,24,16,0.05) 0%, rgba(44,24,16,0.72) 100%)" }} />
        <div className="w-full pb-7 px-6 sm:px-8" style={{ position: "relative" }}>
          <div className="max-w-2xl mx-auto">
            <p className="section-label mb-3" style={{ color: "rgba(250,245,237,0.65)" }}>
              03 · SEODONG YEOGWAN · MANUAL
            </p>
            <h1 style={{ fontFamily: "'Noto Serif KR', serif", fontSize: "clamp(26px, 6vw, 42px)", fontWeight: 300, color: "#FAF5ED", lineHeight: 1.15 }}>
              서동여관 취향의방
              <span style={{ display: "block", fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(13px, 2vw, 18px)", fontWeight: 400, color: "rgba(250,245,237,0.5)", marginTop: "5px" }}>
                Seodong Yeogwan · Chwihyang Room
              </span>
            </h1>
            <p className="text-sm mt-3" style={{ color: "rgba(250,245,237,0.6)" }}>
              편안한 이용을 위해 아래 내용을 확인해주세요.
            </p>
          </div>
        </div>
      </div>
      <div style={{ borderBottom: "1px solid rgba(196, 168, 130, 0.3)" }} />

      {/* ── 빔 프로젝터 안내 배너 ───────────────────────── */}
      <div className="max-w-2xl mx-auto px-6 sm:px-8 pt-6">
        <div className="rounded-xl px-5 py-4 mb-3"
          style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.5)" }}>
          <p className="text-sm font-semibold mb-1" style={{ color: "#2C1810" }}>📽️ 취향의방에는 빔 프로젝터(크롬캐스트)가 있습니다</p>
          <p className="text-xs leading-5" style={{ color: "#6B4C3B" }}>
            크롬캐스트 + 넷플릭스 개인 계정으로 바로 영상 시청이 가능해요. 리모컨 2개로 간단하게 조작하세요.
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
              <a href="tel:01086464572" style={{ color: "#B5632A" }}>010-8646-4572</a>
              {" "}로 연락 주세요
            </p>
          </div>
          <div className="text-sm space-y-3" style={{ color: "#2C1810" }}>
            <p className="section-label" style={{ fontSize: "10px", marginBottom: "6px" }}>입장 방법</p>
            <p style={{ lineHeight: "1.9" }}>
              부산 금정구 옥봉로 13번길 26, <strong>2층</strong><br />
              <span style={{ color: "#9B7B6A" }}>총 2개의 비밀번호가 필요해요.</span>
            </p>
            <div className="rounded-xl p-4 space-y-4"
              style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <div>
                <p className="text-xs font-semibold mb-1" style={{ color: "#9B7B6A" }}>① 1층 입구 대문</p>
                <p>건물 <strong>1층 대문 비밀번호</strong>를 입력해 안으로 들어오세요.</p>
              </div>
              <div style={{ borderTop: "1px solid rgba(196, 168, 130, 0.3)", paddingTop: "12px" }}>
                <p className="text-xs font-semibold mb-1" style={{ color: "#9B7B6A" }}>② 2층 서동여관</p>
                <p>계단을 올라 <strong>2층 서동여관 도어락</strong>에 비밀번호를 입력하세요.</p>
                <p className="text-xs mt-1" style={{ color: "#9B7B6A" }}>도어락 커버를 올리고 번호 입력 후 닫으면 열려요.</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden mt-2" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <Image src="/manual/chwihyang/입구.JPG" alt="취향의방 입구" width={600} height={400} className="w-full object-cover" />
            </div>
          </div>
        </Block>

        {/* 3. 와이파이 */}
        <Block icon={Wifi} title="와이파이">
          <div className="space-y-2">
            <div className="rounded-xl p-3 flex items-center justify-between"
              style={{ backgroundColor: "#FFF8F0", border: "1px solid rgba(181, 99, 42, 0.5)" }}>
              <div>
                <p className="text-xs" style={{ color: "#9B7B6A" }}>ID</p>
                <p className="text-sm font-semibold" style={{ color: "#2C1810" }}>
                  seodongwifi2
                  <span className="ml-2 text-xs font-normal" style={{ color: "#B5632A" }}>신호 강함 ★</span>
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#9B7B6A" }}>2.4GHz / 5GHz 지원</p>
              </div>
              <div className="text-right">
                <p className="text-xs" style={{ color: "#9B7B6A" }}>PW</p>
                <p className="text-sm font-semibold" style={{ color: "#2C1810" }}>seodong12!@</p>
              </div>
            </div>
          </div>
        </Block>

        {/* 4. 찾아오는 길 */}
        <Block icon={MapPin} title="찾아오는 길">
          <div className="space-y-4 text-sm" style={{ color: "#2C1810" }}>
            <div>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "4px" }}>주소</p>
              <p>부산 금정구 옥봉로 13번길 26, 2층</p>
            </div>
            <div style={{ borderTop: "1px solid rgba(196, 168, 130, 0.3)", paddingTop: "14px" }}>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "4px" }}>지하철</p>
              <p>4호선 <strong>서동역</strong>에서 도보 약 <strong>200m</strong></p>
              <p className="text-xs mt-1" style={{ color: "#9B7B6A" }}>서동역 출구 나오셔서 오르막길을 따라 올라오시면 됩니다.</p>
            </div>
            <div style={{ borderTop: "1px solid rgba(196, 168, 130, 0.3)", paddingTop: "14px" }}>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "4px" }}>주차</p>
              <p>건물 내 차고 주차 1대 가능 — <strong>이용 전 미리 말씀해 주세요</strong></p>
            </div>
            <div style={{ borderTop: "1px solid rgba(196, 168, 130, 0.3)", paddingTop: "14px" }}>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "4px" }}>택시</p>
              <p>
                카카오택시 목적지 →{" "}
                <strong style={{ color: "#B5632A" }}>&lsquo;옥봉로 13번길 26&rsquo;</strong>
                {" "}으로 설정하시면 바로 오실 수 있어요.
              </p>
            </div>
            <div style={{ borderTop: "1px solid rgba(196, 168, 130, 0.3)", paddingTop: "14px" }}>
              <div className="rounded-xl overflow-hidden mb-4" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
                <Image src="/manual/chwihyang/가는길.png" alt="취향의방 가는 길 지도" width={600} height={400} className="w-full object-cover" />
              </div>
              <a href="https://blog.naver.com/bksong77/223230168519" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm" style={{ color: "#B5632A" }}>
                교통편 안내 블로그 →
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
                <p>🛁 수건, 물티슈, 드라이기, 휴지, 치약</p>
                <p>🧴 손세정제·샴푸·바디워시·컨디셔너</p>
                <p>🍳 그릇·수저·냄비·팬·와인잔·오프너</p>
                <p>🌿 공기청정기·비데·전신거울·무드등·옷걸이·양키캔들 워머</p>
                <p>❄️ 냉장고·가스렌지·전자렌지·커피포트</p>
              </div>
            </div>
            <div className="rounded-xl p-4" style={{ backgroundColor: "#FFF8F0", border: "1px solid rgba(181, 99, 42, 0.3)" }}>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "10px" }}>취향의방 전용</p>
              <div className="space-y-1.5 text-sm" style={{ color: "#2C1810" }}>
                <p>🛋️ 2인용 소파 · 소형 테이블</p>
                <p>📽️ 빔 프로젝터 (크롬캐스트)</p>
                <p>🛏️ 퀸 침대 (2인) + 싱글 침대 (1인)</p>
                <p style={{ color: "#9B7B6A", fontSize: "12px" }}>침구(베개·이불)는 안방 수납장과 작은방 침대 수납장에 있어요.</p>
                <p>📚 원피스 1~97권 · 무라카미 하루키</p>
                <p>🎲 보드게임 · 빈백</p>
              </div>
            </div>
            <div className="rounded-xl p-4" style={{ backgroundColor: "#FFF5F5", border: "1px solid rgba(180, 50, 50, 0.2)" }}>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "8px" }}>⚠️ 참고사항</p>
              <div className="space-y-1.5 text-sm" style={{ color: "#6B4C3B" }}>
                <p>정수기 없음 — 500ml 생수 2병 제공, 추가 필요시 개별 준비</p>
                <p>일회용품 제한으로 칫솔·면봉·화장솜·머리끈은 제공되지 않아요.</p>
              </div>
            </div>
          </div>
        </Block>

        {/* 6. 빔 프로젝터 */}
        <Block icon={Tv} title="빔 프로젝터 사용 안내">
          <div className="space-y-4 text-sm" style={{ color: "#2C1810" }}>
            <div className="rounded-xl p-4" style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "8px" }}>📽️ 넷플릭스 시청 방법</p>
              <ol className="space-y-3" style={{ color: "#2C1810", paddingLeft: "4px" }}>
                <li>1. <strong>검정색 리모컨</strong>으로 <strong>크롬캐스트</strong>를 켜세요.</li>
                <li>2. 검정색 리모컨에서 <strong>HDMI</strong>를 누르세요.</li>
              </ol>
              <div className="rounded-xl overflow-hidden my-3" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
                <Image src="/manual/chwihyang/hdmi.jpg" alt="HDMI 연결" width={600} height={400} className="w-full object-cover" />
              </div>
              <ol className="space-y-3" style={{ color: "#2C1810", paddingLeft: "4px" }}>
                <li>3. <strong>하얀색 리모컨</strong>의 <strong>넷플릭스</strong> 버튼을 누르세요.</li>
                <li>4. <strong>개인 계정</strong>으로 로그인 후 감상하시면 됩니다 🎬</li>
              </ol>
            </div>
            <div className="rounded-xl p-4" style={{ backgroundColor: "#FFF8F0", border: "1px solid rgba(181, 99, 42, 0.3)" }}>
              <p className="text-xs font-semibold mb-2" style={{ color: "#B5632A" }}>🔇 소리가 안 날 때</p>
              <ol className="space-y-1.5 text-xs" style={{ color: "#6B4C3B" }}>
                <li>1. <strong>검정색 리모컨</strong>의 <strong>홈 버튼</strong>을 누르세요.</li>
                <li>2. 이후 <strong>하얀색 리모컨</strong>으로 다시 조작하시면 됩니다.</li>
              </ol>
            </div>
            <div className="rounded-xl p-3" style={{ backgroundColor: "#FFF5F5", border: "1px solid rgba(180, 50, 50, 0.2)" }}>
              <p className="text-xs" style={{ color: "#6B4C3B" }}>⚠️ 넷플릭스는 <strong>개인 계정</strong>을 이용해 주세요. 사용 후 <strong>로그아웃</strong> 꼭 부탁드립니다!</p>
            </div>
          </div>
        </Block>

        {/* 7. 전등 */}
        <Block icon={Lightbulb} title="전등 스위치">
          <div className="space-y-2 text-sm" style={{ color: "#2C1810" }}>
            <p>입구 정면 <strong>보일러 옆</strong>에 거실등 스위치가 있습니다.</p>
            <p>방·부엌·화장실 전등은 각 공간 벽면에서 켜시면 돼요.</p>
            <p className="font-semibold" style={{ color: "#B5632A" }}>퇴실 시 전체 소등 꼭 부탁드립니다.</p>
          </div>
        </Block>

        {/* 8. 보일러 */}
        <Block icon={Wind} title="보일러">
          <div className="space-y-2 text-sm" style={{ color: "#2C1810" }}>
            <div className="rounded-xl overflow-hidden mb-3" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <Image src="/manual/chwihyang/보일러.jpg" alt="보일러" width={600} height={400} className="w-full object-cover" />
            </div>
            <p><strong>오른쪽 중간 전원 버튼</strong>을 누르면 작동합니다.</p>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <div className="rounded-xl p-3 text-center"
                style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.4)" }}>
                <p className="text-xs font-semibold" style={{ color: "#2C1810" }}>온수 전용</p>
                <p className="text-xs mt-1" style={{ color: "#9B7B6A" }}>온수만 사용 시</p>
              </div>
              <div className="rounded-xl p-3 text-center"
                style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.4)" }}>
                <p className="text-xs font-semibold" style={{ color: "#2C1810" }}>실온</p>
                <p className="text-xs mt-1" style={{ color: "#9B7B6A" }}>온수 + 바닥 난방</p>
              </div>
            </div>
            <p className="text-xs mt-1" style={{ color: "#9B7B6A" }}>전원 버튼을 눌러 온수 전용 또는 실온 방향으로 돌려 선택하세요.</p>
            <p className="font-semibold mt-2" style={{ color: "#B5632A" }}>사용 후 전원을 꼭 꺼주세요.</p>
          </div>
        </Block>

        {/* 9. 온풍기 */}
        <Block icon={Zap} title="온풍기 안내 · 겨울 한정 비치">
          <div className="space-y-3 text-sm" style={{ color: "#2C1810" }}>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(196, 168, 130, 0.4)" }}>
              <Image src="/manual/chwihyang/온풍기.jpg" alt="온풍기" width={600} height={400} className="w-full object-cover" />
            </div>
            <p>리모컨 없이 기기를 직접 조작하시면 됩니다.</p>
            <div className="rounded-xl p-4 space-y-2"
              style={{ backgroundColor: "#FFF5F5", border: "1px solid rgba(180, 50, 50, 0.25)" }}>
              <p className="font-semibold" style={{ color: "#B52A2A" }}>⚠️ 반드시 타이머를 맞춰 이용해 주세요 (과열 위험)</p>
              <p>• 낮에는 <strong>2시간</strong>, 밤에는 <strong>4시간</strong> 타이머 설정</p>
              <p>• 사용 후 <strong>콘센트를 꼭 뽑아</strong> 주세요</p>
            </div>
            <a href="/manual/chwihyang/heater"
              className="flex items-center justify-between rounded-xl px-4 py-3"
              style={{ backgroundColor: "#F0E8D5", border: "1px solid rgba(196, 168, 130, 0.5)", textDecoration: "none" }}>
              <span className="text-sm font-semibold" style={{ color: "#2C1810" }}>🌡️ 온풍기 상세 사용법 보기</span>
              <span className="text-xs" style={{ color: "#B5632A" }}>버튼별 설명 →</span>
            </a>
          </div>
        </Block>

        {/* 11. 가스렌지 */}
        <Block icon={Flame} title="가스렌지">
          <div className="space-y-2 text-sm" style={{ color: "#2C1810" }}>
            <p>가스렌지 <strong>우측에 가스밸브</strong>가 위치합니다.</p>
            <p className="font-semibold" style={{ color: "#B5632A" }}>⚠️ 사용 후 반드시 가스밸브를 잠궈주세요! 안전을 위해 꼭 확인 부탁드립니다 🙏</p>
          </div>
        </Block>

        {/* 12. 쓰레기 */}
        <Block icon={Trash2} title="쓰레기 분리수거">
          <div className="space-y-3 text-sm" style={{ color: "#2C1810" }}>
            <p>🗑 <strong>일반쓰레기</strong> — 거실 쓰레기통에 버려주세요.</p>
            <p>🥬 <strong>음식물</strong> — 위생백에 담아 싱크대에 올려주세요.</p>
            <p>♻️ <strong>재활용</strong> (플라스틱·캔·병) — 2층 야외 <strong>초록색 쓰레기통</strong>에 넣어주세요.</p>
          </div>
        </Block>

        {/* 13. 문의 */}
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
              <a href="tel:01086464572" style={{ color: "#B5632A", fontWeight: 600 }}>010-8646-4572</a>
            </p>
            <p className="text-xs" style={{ color: "#9B7B6A" }}>응답이 느린 경우도 있으니 양해 부탁드립니다 🙏</p>
          </div>
        </Block>

        {/* 14. 퇴실 */}
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
              { num: "3", label: "가스렌지", sub: "가스밸브 잠금 (우측)" },
              { num: "4", label: "온풍기·에어컨", sub: "코드 뽑기 / 전원 OFF" },
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

        {/* 15. 주변 편의시설 */}
        <Block icon={Building2} title="주변 편의시설">
          <div className="space-y-4 text-sm" style={{ color: "#2C1810" }}>
            <div>
              <p className="section-label" style={{ fontSize: "10px", marginBottom: "8px" }}>근처 편의시설</p>
              <div className="space-y-2">
                {[
                  { name: "서동역 (4호선)", addr: "도보 약 200m" },
                  { name: "서동미로시장", addr: "부산 금정구 서동로141번길 16" },
                  { name: "GS25 서동로점", addr: "부산 금정구 서동로 105" },
                  { name: "엘마트", addr: "부산 금정구 서동로103번길 14" },
                  { name: "다이소", addr: "부산 금정구 반송로 400" },
                  { name: "스타벅스", addr: "부산 금정구 서동로 173" },
                  { name: "파리바게뜨", addr: "부산 금정구 서동로 73" },
                  { name: "새마을금고", addr: "부산 금정구 서동로 109" },
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
