import AOSWrapper from "@/components/aosWrapper";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Elevate Services",
  description: "Helping businesses grow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}`}>
        <AOSWrapper>{children}</AOSWrapper>
      </body>
    </html>
  );
}
