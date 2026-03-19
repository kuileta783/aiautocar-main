import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "AIAutoCar - AI-Powered Automotive Technology",
    template: "%s | AIAutoCar",
  },
  description: "Your source for AI automotive news, autonomous driving technology, and intelligent vehicle features. Stay informed about the future of mobility.",
  keywords: ["AI cars", "autonomous driving", "self-driving cars", "automotive AI", "AI technology", "Level 4 autonomy", "Tesla Autopilot", "Waymo"],
  authors: [{ name: "AIAutoCar" }],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AIAutoCar",
              "url": "https://www.aiautocar.com",
              "description": "Your source for AI automotive news, autonomous driving technology, and intelligent vehicle features.",
              "publisher": {
                "@type": "Organization",
                "name": "AIAutoCar",
                "url": "https://www.aiautocar.com"
              }
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
