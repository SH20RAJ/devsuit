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
<<<<<<< HEAD
=======
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
>>>>>>> a53e0fc (Authentication Added)

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
<<<<<<< HEAD
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
=======
      <SessionProvider>
        <body
        
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <NextUIProvider>{children}</NextUIProvider>
        </body>
      </SessionProvider>
>>>>>>> a53e0fc (Authentication Added)
    </html>
  );
}
