import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import Sidebar from '@/app/components/Sidebar'
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
      <body className={poppins.className}>
        <main className="max-w-7xl mx-auto">
          {children}
        </main>
        {/* <Sidebar /> */}
      </body>
    </html >
  );
}
