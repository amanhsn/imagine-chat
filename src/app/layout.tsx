import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const matrixDisplay = localFont({
  src: [
    {
      path: "./fonts/MatrixtypeDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/MatrixtypeDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-matrix-display",
  display: "swap",
});

const matrixBody = localFont({
  src: [
    { path: "./fonts/Matrixtype-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Matrixtype-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-matrix-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Imagine — Untitled Chat",
  description: "Imagine web editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${matrixDisplay.variable} ${matrixBody.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--colors-background)] text-[var(--colors-content-primary)]">
        {children}
      </body>
    </html>
  );
}
