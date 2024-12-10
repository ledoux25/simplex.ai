import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from 'sonner'
import CursorFollower from "./components/general-components/cursorFollower";

export const metadata: Metadata = {
  title: "Chat Book",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-black w-[100vw] overflow-x-hidden`}
      >
        <Toaster position="top-right" duration={1500}/>
        {children}
        <CursorFollower></CursorFollower> 
      </body>
    </html>
  );
}
