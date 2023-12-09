import type { Metadata } from 'next';


import Image from "next/image";


import Menu from "@/components/header";
import Sidebar from "@/components/sidebar";
import { playlists } from "@/lib/data";


import { Inter as FontSans } from "next/font/google";


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

import "@/app/globals.css";
 
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
			<body className={`${fontSans.variable} min-h-screen bg-background antialiased`}>
				<div className="md:hidden">
        <Image
          src="/music-light.png"
          width={1280}
          height={1114}
          alt="Music"
          className="block dark:hidden"
        />
        <Image
          src="/music-dark.png"
          width={1280}
          height={1114}
          alt="Music"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden md:block">
        <Menu />
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar playlists={playlists} className="hidden lg:block" />
              {children}
            </div>
          </div>
        </div>
      </div>
				
			</body>
    </html>
  )
}
