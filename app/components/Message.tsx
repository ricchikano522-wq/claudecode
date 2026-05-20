'use client'

import { useReveal } from '../hooks/useReveal'

export default function Message() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>

  return (
    <section
      id="message"
      ref={sectionRef}
      className="relative overflow-hidden noise-overlay"
      style={{ background: 'linear-gradient(150deg, #091A12 0%, #0D1F15 50%, #091A12 100%)' }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-on-dark" />

      {/* Large arc — wine */}
      <div
        className="absolute -left-40 top-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: 'min(60vw, 560px)', height: 'min(60vw, 560px)',
          border: '1px solid rgba(139,45,62,0.18)',
        }}
      />
      <div
        className="absolute -left-60 top-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: 'min(80vw, 740px)', height: 'min(80vw, 740px)',
          border: '1px solid rgba(139,45,62,0.08)',
        }}
      />

      {/* Right vertical rule */}
      <div
        className="absolute top-0 bottom-0 right-1/4 w-px hidden xl:block"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(42,107,80,0.2) 30%, rgba(42,107,80,0.2) 70%, transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-28 md:py-36">
        <div className="grid lg:grid-cols-[200px_1fr] gap-16 items-start">

          {/* Label */}
          <div className="reveal">
            <p className="section-label text-wine-light mb-5 flex items-center gap-3">
              <span className="w-6 h-px bg-wine inline-block" />
              MESSAGE
            </p>
            <div className="hidden lg:block mt-12">
              {/* Small ornament */}
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="2" y="2" width="44" height="44" stroke="rgba(139,45,62,0.3)" strokeWidth="0.8" />
                <rect x="10" y="10" width="28" height="28" transform="rotate(45 24 24)" stroke="rgba(42,107,80,0.3)" strokeWidth="0.8" />
                <circle cx="24" cy="24" r="6" stroke="rgba(139,45,62,0.4)" strokeWidth="0.8" />
              </svg>
              <div
                className="mt-8 w-px h-36 ml-4"
                style={{ background: 'linear-gradient(to bottom, rgba(42,107,80,0.4), transparent)' }}
              />
            </div>
          </div>

          {/* Body */}
          <div className="reveal reveal-delay-1 max-w-2xl">
            <div className="font-serif text-light-text text-base md:text-lg leading-[2.3] space-y-6">
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

              {/* Quote */}
              <blockquote
                className="border-l-2 pl-7 py-2"
                style={{ borderColor: '#8B2D3E' }}
              >
                <p
                  className="font-serif text-xl md:text-2xl lg:text-3xl font-medium leading-[1.8]"
                  style={{ color: '#B84D62' }}
                >
                  「どう伝え、どう選ばれるか」。
                </p>
              </blockquote>

              <p>
                私たちはデザイン・SNS・AIを掛け合わせ、
                <br />
                ブランドや事業の魅力を、
                <br />
                <em className="not-italic" style={{ color: '#B84D62' }}>
                  &#34;選ばれる形&#34;
                </em>
                へと変えていきます。
              </p>
              <p>
                一度きりの制作で終わらせず、
                <br />
                事業の成長に長く伴走できるパートナーへ。
              </p>
            </div>

            {/* Signature */}
            <div className="reveal reveal-delay-2 mt-14 pt-8 border-t border-forest/20">
              <div className="flex flex-col items-end">
                <p className="font-sans text-light-text-muted text-xs tracking-[0.3em]">
                  CocoDesign株式会社
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(42,107,80,0.4) 40%, rgba(139,45,62,0.4) 60%, transparent)' }}
      />
    </section>
  )
}
