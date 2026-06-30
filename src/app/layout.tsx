import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

const apkProtocol = localFont({
  src: [
    {
      path: "../fonts/APK-Protocol-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/APK-Protocol-Medium.C7Mq9oGh.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/APK-Protocol-Semi-Bold.CC2BASA5.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-apk",
});

export const metadata: Metadata = {
  title: "Internboat Assignment",
  description: "One repo with Sunday.ai and VoidZero clones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Pliant:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${dmSans.className} ${apkProtocol.variable}`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
