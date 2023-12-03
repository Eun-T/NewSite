import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/Navbar'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

const pretend = localFont({
  src: "./fonts/pretendard/PretendardVariable.woff2",
  weight: "100 900",
  variable: '--font-pretend'
})

// export const metadata: Metadata = {
//   title: 'Acme',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${pretend.className} ${inter.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
