import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Gloobcamp",
  description:
    "Improve your knowledge of JavaScript and ReactJS with Gloobcamp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`max-w-7xl mx-auto ${poppins.className}`}> {/* Ese max-w-7xl achica la navbar, lo dejo igual por si lo dejaron por algun motivo */}
        {children}
      </body>
    </html>
  );
}
