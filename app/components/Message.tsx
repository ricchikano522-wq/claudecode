'use client'

import { useReveal } from '../hooks/useReveal'

export default function Message() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>

  return (
    <section
      id="message"
      ref={sectionRef}
      className="relative bg-ink-deep overflow-hidden noise-overlay"
    >
      {/* Background arc */}
      <div
        className="absolute -left-40 top-1/2 -translate-y-1/2 rounded-full border border-accent/10 pointer-events-none"
        style={{ width: '70vw', height: '70vw', maxWidth: 600, maxHeight: 600 }}
      />

      {/* Vertical rule */}
      <div className="absolute top-0 bottom-0 right-1/4 w-px bg-border-dark hidden xl:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-28 md:py-36">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Label */}
          <div className="reveal">
            <p className="section-label text-accent mb-6">MESSAGE</p>
            <div className="hidden lg:block mt-10">
              <div className="w-px h-40 bg-gradient-to-b from-accent/30 to-transparent ml-4" />
            </div>
          </div>

          {/* Body */}
          <div className="reveal reveal-delay-1 max-w-xl">
            <div className="font-serif text-light-text text-base md:text-lg leading-[2.2] space-y-6">
              <p>
                情報が溢れる時代、
                <br />
                &#34;良いものをつくる&#34;だけでは、
                <br />
                選ばれにくくなりました。
              </p>

              <p>
                今必要なのは、
                <br />
                「何を作るか」だけでなく、
              </p>

              <blockquote className="border-l-2 border-accent pl-6 py-2">
                <p className="text-accent font-serif text-xl md:text-2xl font-medium leading-[1.8]">
                  「どう伝え、どう選ばれるか」。
                </p>
              </blockquote>

              <p>
                私たちはデザイン・SNS・AIを掛け合わせ、
                <br />
                ブランドや事業の魅力を、
                <br />
                <em className="not-italic text-accent">&#34;選ばれる形&#34;</em>へと変えていきます。
              </p>

              <p>
                一度きりの制作で終わらせず、
                <br />
                事業の成長に長く伴走できるパートナーへ。
              </p>
            </div>

            {/* Signature */}
            <div className="reveal reveal-delay-2 mt-14 flex flex-col items-end border-t border-border-dark pt-8">
              <p className="font-sans text-light-text-muted text-xs tracking-[0.25em] mb-2">CocoDesign株式会社</p>
              <p className="font-serif text-light-text text-lg">代表　前橋 香乃</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(196,135,58,0.25) 50%, transparent)' }}
      />
    </section>
  )
}
