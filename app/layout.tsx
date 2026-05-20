import type { Metadata } from 'next'
import { Noto_Serif_JP, Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const notoSerifJP = Noto_Serif_JP({
  weight: ['400', '500', '700', '900'],
  variable: '--font-serif',
  display: 'swap',
  preload: false,
})

const notoSansJP = Noto_Sans_JP({
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  title: 'CocoDesign株式会社 | クリエイティブ×マーケティングで"選ばれる理由"をつくる',
  description:
    'CocoDesign株式会社は、クリエイティブとマーケティングを掛け合わせ、小規模事業者・ブランドの「選ばれ続ける仕組み」をつくるクリエイティブマーケティング会社です。Web制作、SNSクリエイティブ、AI活用支援、デザインスクール運営まで一貫してご提供します。',
  openGraph: {
    title: 'ブランドの魅力を、"選ばれる理由"に変える。| CocoDesign株式会社',
    description:
      'CocoDesign株式会社は、クリエイティブとマーケティングを掛け合わせ、小規模事業者・ブランドの「選ばれ続ける仕組み」をつくるクリエイティブマーケティング会社です。',
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${notoSansJP.variable}`}>
      <body>{children}</body>
    </html>
  )
}
