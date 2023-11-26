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

// export const myFont = localFont({
//   src: [
//     {
//       path: './fonts/NEXONLv1GothicLight.ttf',
//       weight: '300',
//     },
//     {
//       path: './fonts/NEXONLv1GothicRegular.ttf',
//       weight: '400',
//     },
//     {
//       path: './fonts/NEXONLv1GothicBold.ttf',
//       weight: '700',
//     },
//   ],
//   variable: '--font-nexon'
// })

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
      <body className={`${inter.className} ${pretend.className}`}>
        {/* <NavBar /> */}
        {children}
      </body>
    </html>
  )
}
