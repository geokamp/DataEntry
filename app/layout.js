"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navigation/NavBar";
import { Toaster } from "react-hot-toast";
import {SessionProvider} from "next-auth/react"



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
        <body>
          <NavBar  />
          <Toaster />
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
