import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "서동 여행 가이드 | 고개서동",
  description: "서동 토박이 송군이 직접 추천하는 부산 가성비 노포 맛집 여행. 고개서동에 머무는 동안 더 즐겁게.",
};

const foodSpots = [
  {
    category: "고기·메인",
    emoji: "🥩",
    items: [
      { name: "송부장연탄갈비", desc: "20살부터 20년 가까이 다닌 단골. 양념갈비 필수. 유명 유튜버 부산 양념갈비 1등 픽." },
      { name: "팔도족발", desc: "동네에서 가장 인기 많은 족발집. 반반족발 최애. 저녁 9시 이후에는 족발이 없는 경우 많으니 일찍 가세요." },
      { name: "일단마포", desc: "친한 동생이 운영하는 가게. 얇은 고기 좋아하시는 분께 딱. 가성비 끝판왕. 츄릅켠 유튜브 출연." },
      { name: "동키치킨 서동점", desc: "맛있을 때는 진짜 맛있는 옛날 통닭. 들쑥날쑥한 편이라 기대치 조절 추천. 후라이드 위주로 시키세요." },
    ],
  },
  {
    category: "국밥·분식",
    emoji: "🍜",
    items: [
      { name: "우래돼지국밥", desc: "서동시장 안에 있는 현지인 맛집. 옛날 시장국밥 맛 그대로. 가성비 끝내주고 사람 진짜 많이 감." },
      { name: "명동손칼국수", desc: "초등학교 때부터 다닌 집. 가성비 최고. 칼국수+김밥, 선지국밥 추천. 서동 고개 바로 옆." },
      { name: "맛나분식", desc: "BTS 지민이 어릴 적 자주 다녀간 곳. 계란만두·떡볶이 시그니처. 4명이 먹어도 2만원 안 넘는 가성비." },
      { name: "동원김밥 (일미김밥)", desc: "부산 3대 김밥. 사장님 까탈스럽지만 맛은 인정. 체크아웃 날 포장 강추." },
      { name: "정가네선지국밥", desc: "선지국밥·우동이 맛있고 소주 한잔하기 딱. 새벽 4시까지 운영." },
    ],
  },
  {
    category: "2·3차",
    emoji: "🍶",
    items: [
      { name: "일차로", desc: "진짜 레트로. 40~50대 단골 가득한 찐 옛날 술집. 안주 1~3인 총 15,000원·추가 1인 5,000원. 소주·맥주 3,000원." },
      { name: "노가리ok", desc: "노가리가 진짜 맛있음. 2·3차로 강추." },
      { name: "단미포차", desc: "레트로 분위기는 아니지만 맛있는 포차. 편하게 마시기 좋음." },
    ],
  },
];

const outsideSpots = [
  { name: "칼맛나는횟집", desc: "주인장의 넘사벽 픽. 부산대 근처 (29번 버스 10분). 모듬회 필수. 대기가 워낙 많아 오후 6시 이전에 가야 함.", emoji: "🐟" },
  { name: "컬리반스 피자", desc: "도우가 진짜 맛있음. 부산대 위치.", emoji: "🍕" },
  { name: "수수하지만 굉장해", desc: "돈까스 체인인데 진짜 맛있음. 부산대 위치.", emoji: "🍱" },
];

const cafeSpots = [
  { name: "모모스커피 본점", dist: "도보 20분", desc: "온천장역 바로 앞. 부산 대표 스페셜티 커피. 취향의방은 지하철·버스 이용 추천." },
  { name: "로제이브", dist: "부산대", desc: "콜드브루 강추!! 송군 최애 카페." },
  { name: "수안커피", dist: "버스·지하철", desc: "프리미엄 다도 감성 커피. 1인 11,000원. 부산 여행객에게 추천." },
  { name: "메가커피·컴포즈", dist: "서동 내", desc: "서동 내 가장 가까운 카페. 금사공단·부산은행 방면." },
];

const walkSpots = [
  {
    name: "서동 미로시장",
    tag: "도보 5분",
    emoji: "🏘️",
    desc: "서동 골목 안에 숨어있는 작은 재래시장. 우래돼지국밥, 맛나분식이 이 안에 있어요. 밥 먹고 골목 한 바퀴 도는 것만으로도 충분합니다.",
  },
  {
    name: "서명초등학교 전경",
    tag: "도보 15분",
    emoji: "🌄",
    desc: "고개를 올라 서명초등학교까지 가면 서동 전경이 멋지게 펼쳐집니다. 배정남·최용수·안정환이 TV에 나와서 이쪽에 왔던 곳. 밥 먹고 산책 삼아 걸어가기 딱 좋아요.",
  },
];

export default function GuidePage() {
  return (
    <main className="bg-[#FAF5ED] min-h-screen">

      {/* Hero */}
      <section className="bg-[#2C1810] text-[#FAF5ED] py-20 px-6 text-center">
        <p className="text-[#D4884E] text-sm tracking-widest mb-3 font-light">SEODONG LOCAL GUIDE</p>
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "'Noto Serif KR', serif" }}
        >
          서동 여행 가이드
        </h1>
        <p className="text-[#9B7B6A] text-base max-w-md mx-auto leading-relaxed">
          서동 토박이 주인장이 직접 다니는<br />
          가성비 노포 맛집 위주로 골랐습니다.
        </p>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-14 space-y-16">

        {/* 소개 */}
        <section>
          <h2
            className="text-2xl font-bold text-[#2C1810] mb-4"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            반갑습니다, 고개서동 주인장입니다.
          </h2>
          <p className="text-[#6B4C3B] leading-8 text-[15px]">
            제가 태어나고 자라난 동네를 조금이나마 알리기 위해 시작한 고개서동 프로젝트.
            방문객들이 늘어나기 시작하면서, 사라져가는 이 동네를 누군가 알아간다는 것에 뿌듯함을 느끼곤 합니다.
          </p>
          <p className="text-[#6B4C3B] leading-8 text-[15px] mt-3">
            서동에서 자란 저는 서동 골목이나 부산대 거리에서 주로 놀았어요.
            고개서동에 머무시면서 <strong className="text-[#2C1810]">서동 미로시장 골목</strong>을 즐기시거나,
            조금 더 활동적인 분들은 <strong className="text-[#2C1810]">부산대 거리</strong>로 나가시면 먹거리·카페·즐길 거리가 풍성해요.
            서동 ↔ 부산대는 버스로 10~15분 거리입니다.
          </p>
          <div className="mt-5 p-4 border border-[#D4884E]/30 rounded-xl bg-[#D4884E]/5">
            <p className="text-[#B5632A] text-sm font-semibold mb-1">🏆 서동 = 부산 최저가 가성비 노포 여행 성지</p>
            <p className="text-[#6B4C3B] text-sm leading-6">
              서동은 부산에서도 물가가 무척 싼 동네입니다. 프랜차이즈보다 노포·가성비 식당이 많아서,
              맛있게 먹고 적게 쓰는 여행을 원하시는 분께 딱 맞는 동네예요.
            </p>
          </div>
        </section>

        {/* 서동 유명인물 트리비아 */}
        <section>
          <h2
            className="text-2xl font-bold text-[#2C1810] mb-4"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            서동이 낳은 사람들
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: "배정남", desc: "모델·배우. 서동 출신." },
              { name: "김은혜", desc: "아나운서·전 정치인. 서동 출신." },
              { name: "BTS 지민", desc: "회동동 출신이지만 서동 주변에서 자라 이 동네 사람처럼 불림." },
            ].map((p) => (
              <div key={p.name} className="border border-[#C4A882]/30 rounded-2xl p-4 bg-white/40 text-center">
                <p className="font-semibold text-[#2C1810] text-[15px] mb-1">{p.name}</p>
                <p className="text-[#9B7B6A] text-xs leading-5">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 서동 맛집 */}
        <section>
          <h2
            className="text-2xl font-bold text-[#2C1810] mb-2"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            서동 맛집
          </h2>
          <p className="text-[#9B7B6A] text-sm mb-8">서동은 부산 최저가 동네. 가성비로는 어디에도 안 집니다.</p>
          <div className="space-y-10">
            {foodSpots.map((group) => (
              <div key={group.category}>
                <h3 className="text-base font-semibold text-[#D4884E] mb-4 flex items-center gap-2">
                  <span>{group.emoji}</span>
                  <span>{group.category}</span>
                </h3>
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div key={item.name} className="border-b border-[#C4A882]/20 pb-4">
                      <p className="font-semibold text-[#2C1810] text-[15px]">{item.name}</p>
                      <p className="text-[#9B7B6A] text-sm mt-1 leading-6">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 서동 밖 강추 */}
        <section>
          <h2
            className="text-2xl font-bold text-[#2C1810] mb-6"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            서동 밖 강추 (부산대)
          </h2>
          <p className="text-[#9B7B6A] text-sm mb-6">29번 버스 10분 거리. 먹고 싶은 게 있을 때 원정 가는 코스예요.</p>
          <div className="space-y-4">
            {outsideSpots.map((item) => (
              <div key={item.name} className="border-b border-[#C4A882]/20 pb-4 flex gap-3">
                <span className="text-xl mt-0.5">{item.emoji}</span>
                <div>
                  <p className="font-semibold text-[#2C1810] text-[15px]">{item.name}</p>
                  <p className="text-[#9B7B6A] text-sm mt-1 leading-6">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 카페 */}
        <section>
          <h2
            className="text-2xl font-bold text-[#2C1810] mb-4"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            카페
          </h2>
          <p className="text-[#9B7B6A] text-sm mb-6">
            솔직히 말씀드리면 서동 내에는 커피 맛집이 없어요 😅<br />
            아래 추천 드리는 곳들을 참고해 주세요!
          </p>
          <div className="space-y-4">
            {cafeSpots.map((item) => (
              <div key={item.name} className="border-b border-[#C4A882]/20 pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-semibold text-[#2C1810] text-[15px]">{item.name}</p>
                  <span className="text-xs text-[#D4884E] border border-[#D4884E]/40 rounded-full px-2 py-0.5">
                    {item.dist}
                  </span>
                </div>
                <p className="text-[#9B7B6A] text-sm leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 밥 먹고 산책 */}
        <section>
          <h2
            className="text-2xl font-bold text-[#2C1810] mb-4"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            밥 먹고 산책
          </h2>
          <p className="text-[#9B7B6A] text-sm mb-6">
            관광지보다는 골목 구경과 동네 산책이 서동의 매력입니다.
          </p>
          <div className="space-y-4">
            {walkSpots.map((item) => (
              <div key={item.name} className="border border-[#C4A882]/30 rounded-2xl p-5 bg-white/40">
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">{item.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-[#2C1810] text-[15px]">{item.name}</p>
                      <span className="text-xs text-[#D4884E] border border-[#D4884E]/40 rounded-full px-2 py-0.5">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-[#9B7B6A] text-sm leading-6">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1박2일 추천 코스 */}
        <section>
          <h2
            className="text-2xl font-bold text-[#2C1810] mb-6"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            1박 2일 가성비 노포 여행 코스
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#2C1810] text-[#FAF5ED] rounded-2xl p-6">
              <p className="text-[#D4884E] text-xs tracking-widest mb-3">DAY 1</p>
              <ul className="space-y-2 text-sm text-[#FAF5ED]/80 leading-7">
                <li>🏡 오후 3시 체크인</li>
                <li>🛒 미로시장 구경 + 맛나분식 계란만두</li>
                <li>🥩 저녁: 송부장연탄갈비 or 팔도족발</li>
                <li>🍶 2차: 일차로 or 노가리ok</li>
              </ul>
            </div>
            <div className="bg-[#FAF5ED] border border-[#C4A882]/30 rounded-2xl p-6">
              <p className="text-[#D4884E] text-xs tracking-widest mb-3">DAY 2</p>
              <ul className="space-y-2 text-sm text-[#6B4C3B] leading-7">
                <li>🍜 아침: 우래돼지국밥 or 명동손칼국수</li>
                <li>🌄 오전: 서명초등학교까지 산책 + 전경 구경</li>
                <li>☕ 로제이브 카페 (부산대, 29번 버스)</li>
                <li>📦 체크아웃 전: 동원김밥 포장 후 귀가</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8 border-t border-[#C4A882]/30">
          <p
            className="text-xl text-[#2C1810] font-bold mb-2"
            style={{ fontFamily: "'Noto Serif KR', serif" }}
          >
            더 궁금한 곳이 있으신가요?
          </p>
          <p className="text-[#9B7B6A] text-sm mb-6">
            카카오 채널로 편하게 물어봐 주세요. 직접 안내해드립니다.
          </p>
          <a
            href="https://pf.kakao.com/_gogaeseodong"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2C1810] text-[#FAF5ED] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#B5632A] transition-colors"
          >
            카카오 채널 바로가기 →
          </a>
        </section>

      </div>
    </main>
  );
}
