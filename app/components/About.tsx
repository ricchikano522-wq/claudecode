'use client'

import { useReveal } from '../hooks/useReveal'

export default function About() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-parchment overflow-hidden"
    >
      {/* Ghost background text */}
      <span
        className="ghost-title text-ink/[0.04] select-none pointer-events-none top-8 -left-4"
        style={{ position: 'absolute', fontFamily: 'var(--font-sans)', fontWeight: 800 }}
      >
        ABOUT
      </span>

      {/* Dot grid */}
      <div className="absolute inset-0 dot-on-light" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-28 md:py-36">
        <div className="grid lg:grid-cols-[220px_1fr] gap-16 lg:gap-24 items-start">

          {/* Left — label + decoration */}
          <div className="reveal">
            <p className="section-label text-wine mb-5 flex items-center gap-3">
              <span className="w-6 h-px bg-wine inline-block" />
              ABOUT
            </p>
            <p className="font-sans text-muted-light text-xs leading-relaxed tracking-wide mt-2">
              私たちについて
            </p>
            <div className="hidden lg:block mt-12">
              {/* Layered circles decoration */}
              <svg viewBox="0 0 140 140" className="w-32 h-32" fill="none">
                <circle cx="70" cy="70" r="65" stroke="#8B2D3E" strokeWidth="0.8" strokeOpacity="0.3" />
                <circle cx="70" cy="70" r="45" stroke="#2A6B50" strokeWidth="0.8" strokeOpacity="0.3" />
                <circle cx="70" cy="70" r="25" stroke="#8B2D3E" strokeWidth="0.8" strokeOpacity="0.3" />
                <line x1="5"  y1="70" x2="135" y2="70" stroke="#2A6B50" strokeWidth="0.6" strokeOpacity="0.25" />
                <line x1="70" y1="5"  x2="70"  y2="135" stroke="#8B2D3E" strokeWidth="0.6" strokeOpacity="0.25" />
                <circle cx="70" cy="70" r="3" fill="#8B2D3E" fillOpacity="0.5" />
              </svg>
              <div
                className="mt-8 ml-3 w-px h-28"
                style={{ background: 'linear-gradient(to bottom, rgba(139,45,62,0.4), transparent)' }}
              />
            </div>
          </div>

          {/* Right — content */}
          <div>
            {/* Heading */}
            <h2 className="reveal font-serif text-ink text-2xl md:text-3xl lg:text-4xl leading-[1.65] tracking-wide mb-12">
              クリエイティブ×マーケティングで、
              <br />
              ブランドの
              <em className="not-italic" style={{ color: '#8B2D3E' }}>&#34;唯一無二の価値&#34;</em>
              を<br className="hidden md:block" />
              お客様に届ける。
            </h2>

            {/* Separator */}
            <div className="reveal reveal-delay-1 flex items-center gap-3 mb-10">
              <div className="w-12 h-px bg-wine/40" />
              <div className="w-2 h-2 rotate-45 border border-wine/40" />
              <div className="w-6 h-px bg-forest/30" />
            </div>

            {/* Body */}
            <div className="reveal reveal-delay-2 font-sans text-muted text-sm md:text-[0.9rem] leading-[2.3] space-y-5">
              <p>
                どれだけ美しいデザインも、
                <br />
                集客や売上につながらなければ意味がない。
              </p>
              <p>私たちはそう考えています。</p>
              <p>CocoDesignは単なる制作会社ではなく、</p>

              {/* Quote block */}
              <div
                className="relative border-l-2 pl-7 py-3 my-8"
                style={{ borderColor: '#8B2D3E' }}
              >
                <div
                  className="absolute top-0 left-0 w-3 h-3 -translate-x-[7px] -translate-y-1"
                  style={{ background: '#8B2D3E' }}
                />
                <p className="font-serif text-ink text-base md:text-lg leading-[2] font-medium">
                  誰に届けるのか。
                  <br />
                  どう伝えるのか。
                  <br />
                  なぜ選ばれるのか。
                </p>
              </div>

              <p>
                その設計までを担う、
                <br />
                <strong className="text-ink font-medium">クリエイティブマーケティング</strong>会社です。
              </p>
              <p>
                デザイン・SNS・AIを掛け合わせ、
                <br />
                ブランドや事業の魅力を、
                <br />
                成果につながる形へと落とし込みます。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,45,62,0.3) 40%, rgba(42,107,80,0.3) 60%, transparent)' }}
      />
    </section>
  )
}
