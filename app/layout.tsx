import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://gogaeseodong-sigma.vercel.app"),
  title: {
    default: "고개서동 | 부산 서동의 낡은 공간들",
    template: "%s | 고개서동",
  },
  description:
    "부산 금정구 서동. 버려진 공간을 다시 쓰임 있게. 서동여관(독채 숙박), 서동부엌(공유주방), 서동영화(프라이빗 상영관).",
  keywords: [
    "고개서동", "서동여관", "부산 독채 숙박", "부산 감성 숙박",
    "서동부엌", "부산 공유주방", "서동영화", "부산 영화감상실",
    "부산 금정구", "부산 에어비앤비", "부산 커플여행", "부산 가족여행",
    "서동", "부산 감성 공간", "부산 프라이빗",
  ],
  authors: [{ name: "고개서동" }],
  icons: {
    icon: [{ url: "/logo.png" }],
    apple: [{ url: "/logo.png" }],
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://gogaeseodong-sigma.vercel.app",
    siteName: "고개서동",
    title: "고개서동 | 부산 서동의 낡은 공간들",
    description: "버려진 공간을 다시 쓰임 있게. 서동여관, 서동부엌, 서동영화.",
    images: [{ url: "/logo.png", alt: "고개서동" }],
  },
  twitter: {
    card: "summary",
    title: "고개서동 | 부산 서동의 낡은 공간들",
    description: "버려진 공간을 다시 쓰임 있게. 서동여관, 서동부엌, 서동영화.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
  verification: {
    google: "NCmSUlylxVZTnOxYsc97UieZ58KABUKTxMh_IPz8ztY",
    other: {
      "naver-site-verification": ["0df98323fa4f583f383ab9aeb76a6ebb91784daa"],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SW7DC2BWF4" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SW7DC2BWF4');
            `,
          }}
        />
        {/* 나눔명조 + Noto Sans KR - CDN으로 로드 (서버 시작 안 막음) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Noto Serif KR — 얇고 현대적인 한국어 명조체 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200;300;400;600&display=swap"
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
      </body>
    </html>
  );
}
