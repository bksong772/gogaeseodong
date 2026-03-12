import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";

export const metadata: Metadata = {
  title: {
    default: "고개서동 | 부산 서동의 낡은 공간들",
    template: "%s | 고개서동",
  },
  description:
    "부산 금정구 서동. 버려진 공간을 다시 쓰임 있게. 서동여관, 서동부엌, 서동영화, 서동문방.",
  keywords: [
    "고개서동", "서동여관", "부산 숙박", "서동부엌",
    "공유주방 부산", "서동영화", "부산 OTT룸",
    "부산 금정구", "부산 독채숙박", "에어비앤비 부산",
  ],
  authors: [{ name: "고개서동" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://gogaeseodong.vercel.app",
    siteName: "고개서동",
    title: "고개서동 | 부산 서동의 낡은 공간들",
    description: "버려진 공간을 다시 쓰임 있게. 서동여관, 서동부엌, 서동영화.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "고개서동" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        {/* 나눔명조 + Noto Sans KR - CDN으로 로드 (서버 시작 안 막음) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-screen"
        style={{ backgroundColor: "#FAF5ED", color: "#2C1810" }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingChat />
      </body>
    </html>
  );
}
