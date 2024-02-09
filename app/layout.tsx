import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  NavbarComponent from "./components/nav-bar-component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "necsus interview",
  description: "inteview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarComponent />
        {children}
        </body>
    </html>
  );
}
