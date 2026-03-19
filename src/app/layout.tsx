import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIAutoCar - AI-Powered Automotive Technology",
  description: "Your source for AI automotive news, autonomous driving technology, and intelligent vehicle features.",
  openGraph: {
    title: "AIAutoCar - AI-Powered Automotive Technology",
    description: "Your source for AI automotive news, autonomous driving technology, and intelligent vehicle features.",
    type: "website",
    locale: "en_US",
    siteName: "AIAutoCar",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIAutoCar - AI-Powered Automotive Technology",
    description: "Your source for AI automotive news and autonomous driving technology.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PYZMW7SX9L"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-PYZMW7SX9L');`
        }} />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
