import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import Navbar from "@/components/NavBar/Navbar";
import { GloobcampProvider } from "@/context/GloobcampContext";

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
    <GloobcampProvider>
      <html lang="en">
        <body className={poppins.className}>
          <Navbar />
          <ToastContainer />
          <main className="mx-auto px-4 max-w-7xl">{children}</main>
        </body>
      </html>
    </GloobcampProvider>
  );
}
