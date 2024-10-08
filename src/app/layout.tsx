import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Providers } from "./providers";
import TestNavbar from '@/components/TestNavbar'
import GoogleAnalytics from "@/GoogleAnalytics";

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
  title: 'Socialty Media',
  robots: 'follow, index',
  description: 'Social Media services for your business',
  keywords: 'Entrepreneurship, Small business, Social media marketing, Digital marketing, Web development, SEO, Search engine optimization, Social networks, Online advertising, Miami area, Brand growth, Social media strategy, Start up Marketing',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://socialtymedia.com',
    title: 'Socialty Media',
    description: 'Social Media services for your business',
    images: [
      {
        url: '/LogoSocialtyMedia.png',
        width: 1200,
        height: 630,
        alt: 'Socialty Media',
      },
    ],
  },
  icons: {
    icon: '/LogoSocialtyMedia.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=' relative'>
      <body className={`${roboto.className} `}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id=
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <Providers>
          <TestNavbar />
          <Navbar />
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  )
}
