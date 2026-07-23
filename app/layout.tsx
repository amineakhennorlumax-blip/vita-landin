import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "./smooth-scroll-provider";

export const metadata: Metadata = {
  title: "VITA | شريكك للتأشيرة إلى ألمانيا",
  description: "نرافقك من ملفك الأول وصولك إلى ألمانيا بأمان: عقد عمل حقيقي، راتب مجزي، حياة مستقرة.",
  openGraph: {
    title: "VITA | شريكك للتأشيرة إلى ألمانيا",
    description: "ابدأ رحلتك نحو ألمانيا اليوم مع فريق يتحدث لغتك.",
    locale: "ar",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@500;600;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Inter:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
