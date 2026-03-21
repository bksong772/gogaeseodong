# 고개서동 사이트 개발 계획 (2026년 3월)

생성일: 2026-03-17
GitHub: github.com/bksong772/busan-ailab (확인 필요)
배포: gogaeseodong-sigma.vercel.app

---

## 기술 스택
Next.js (App Router) + Tailwind CSS + Vercel

## 이달 MVP 범위 (총 약 10시간)

| 작업 | 시간 |
|------|------|
| 히어로 + 네비 CTA 버튼 추가 | 1시간 |
| 각 공간 카드 예약 버튼 추가 | 1시간 |
| Tally 폼 3개 생성 (여관/부엌/영화) | 2시간 |
| Make.com 연동 (→ Google Sheets + 알림) | 2시간 |
| /guide 가이드북 페이지 (하드코딩) | 3시간 |
| 배포 + 테스트 | 1시간 |

## Week별 개발 계획

### Week 1: CTA 수술 (즉시 효과)
- 네비게이션에 "예약하기" 버튼 추가
- 히어로에 "지금 예약하기" + "공간 구경하기" 버튼
- 각 공간 카드 하단 개별 예약 링크
- Tally 폼 3개 + Make.com 연동

### Week 2: 가이드북 페이지
- /guide 라우트 신설 (가이드 목록)
- /guide/[slug] 상세 페이지
- 네비에 "가이드" 메뉴 추가

### Week 3: 예약 시스템 강화
- Make.com 시나리오 고도화 (Notion 예약 DB + 확인 메일)
- 진완이 모바일로 예약 현황 확인 가능

### Week 4: 매뉴얼 페이지
- /manual 페이지 (체크인/체크아웃 + FAQ)
- FAQ Accordion 컴포넌트

## 예약 자동화 구조
Tally 폼 제출 → Make.com → Google Sheets + Notion DB + Gmail + 병근 알림

## 월 운영 비용
Vercel + Tally + Make.com + Google Sheets + Notion = $0

## 오늘 당장 할 것 (병근)
1. tally.so 가입 → 서동여관 예약 폼 1개 생성
2. 히어로 컴포넌트 버튼 2개 추가 → push
3. 네비게이션 "예약하기" 버튼 추가
