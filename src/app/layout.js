import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "DevSuit",
  description: "Empowering Students and Companies in Tech",
};
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <SessionProvider>
        <body
        
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <NextUIProvider>{children}</NextUIProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
