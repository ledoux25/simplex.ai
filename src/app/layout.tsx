import type { Metadata } from "next";
import "./globals.css";
import { Toaster, toast } from 'sonner'
import CursorFollower from "./components/general-components/cursorFollower";

export const metadata: Metadata = {
  title: "Create Next App",
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
