import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/Navbar'
import MobNavbar from "@/components/MobNavbar";
import Footer from '@/components/Footer'
import { Providers } from "./providers";
import TestNavbar from '@/components/TestNavbar'

const roboto = Roboto({
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

// const myFont = localFont({ 
//   src: './Gotham-Black-Regular.ttf',
//   variable: "--font-gotham", 
// })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={roboto.className}>
        <Providers>
          {/* <TestNavbar/> */}
          {children}
        </Providers>
        {/* <Navbar /> */}
        <Footer />
      </body>
    </html>
  )
}
