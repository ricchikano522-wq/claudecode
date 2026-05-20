'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const refs = {
    label: useRef<HTMLParagraphElement>(null),
    title: useRef<HTMLHeadingElement>(null),
    divider: useRef<HTMLDivElement>(null),
    sub:   useRef<HTMLParagraphElement>(null),
    cta:   useRef<HTMLDivElement>(null),
  }

  useEffect(() => {
    const items = [refs.label, refs.title, refs.divider, refs.sub, refs.cta]
    items.forEach((r, i) => {
      const el = r.current
      if (!el) return
      el.style.cssText = 'opacity:0; transform:translateY(28px)'
      setTimeout(() => {
        el.style.cssText =
          'transition: opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1); opacity:1; transform:translateY(0)'
      }, 200 + i * 160)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden noise-overlay"
      style={{ background: 'linear-gradient(135deg, #091A12 0%, #1C0910 60%, #091A12 100%)' }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-on-dark" />

      {/* Large circle — forest green tint */}
      <div
        className="absolute -right-32 top-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: 'min(70vw, 680px)', height: 'min(70vw, 680px)',
          border: '1px solid rgba(42,107,80,0.25)',
        }}
      />
      <div
        className="absolute -right-52 top-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: 'min(90vw, 900px)', height: 'min(90vw, 900px)',
          border: '1px solid rgba(42,107,80,0.1)',
        }}
      />

      {/* Small inner circle — wine */}
      <div
        className="absolute right-[18%] top-[22%] rounded-full pointer-events-none hidden md:block"
        style={{ width: 120, height: 120, border: '1px solid rgba(139,45,62,0.4)' }}
      />

      {/* Vertical accent line */}
      <div
        className="absolute left-[12%] top-0 bottom-0 w-px hidden xl:block"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(139,45,62,0.3) 30%, rgba(139,45,62,0.3) 70%, transparent)' }}
      />

      {/* Geometric corner ornament */}
      <svg
        className="absolute top-16 right-8 hidden md:block"
        width="80" height="80" viewBox="0 0 80 80" fill="none"
        stroke="rgba(139,45,62,0.35)" strokeWidth="0.8"
      >
        <rect x="4" y="4" width="72" height="72" />
        <rect x="20" y="20" width="40" height="40" transform="rotate(45 40 40)" />
        <circle cx="40" cy="40" r="12" />
      </svg>

      {/* Bottom horizontal rule */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,45,62,0.5) 40%, rgba(42,107,80,0.5) 60%, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-32">
        {/* Label */}
        <p ref={refs.label} className="section-label text-forest-light mb-10 flex items-center gap-4">
          <span className="w-10 h-px bg-forest inline-block" />
          CocoDesign Inc.
        </p>

        {/* Main copy */}
        <h1 ref={refs.title} className="font-serif text-light-text leading-[1.3] tracking-wide">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] mb-3">
            ブランドの魅力を、
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem]">
            <em
              className="not-italic relative"
              style={{ color: '#B84D62' }}
            >
              &#34;選ばれる理由&#34;
              <span
                className="absolute bottom-1 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, #8B2D3E, rgba(139,45,62,0.2))' }}
              />
            </em>
            <span className="text-light-text">に変える。</span>
          </span>
        </h1>

        {/* Divider */}
        <div ref={refs.divider} className="my-10 flex items-center gap-3">
          <div className="w-10 h-px bg-wine" />
          <div className="w-1.5 h-1.5 bg-wine/60 rotate-45" />
          <div className="w-4 h-px bg-forest/60" />
          <div className="w-1.5 h-1.5 bg-forest/40 rotate-45" />
        </div>

        {/* Sub copy */}
        <p ref={refs.sub} className="font-sans text-light-text-muted text-sm md:text-base leading-[2.1] max-w-lg">
          CocoDesign株式会社は、クリエイティブとマーケティングを掛け合わせ、
          <br className="hidden md:block" />
          小規模事業者・ブランドの「選ばれ続ける仕組み」をつくる会社です。
        </p>

        {/* CTA */}
        <div ref={refs.cta} className="mt-14 flex flex-wrap items-center gap-6">
          <a href="#contact" className="btn-wine">
            お問い合わせはこちら
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#about"
            className="font-sans text-xs tracking-widest text-light-text-muted hover:text-forest-light transition-colors duration-200 underline underline-offset-4"
          >
            私たちについて
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="section-label text-[9px] text-light-text-muted">SCROLL</span>
        <div
          className="w-px h-14"
          style={{ background: 'linear-gradient(to bottom, rgba(139,45,62,0.5), transparent)' }}
        />
      </div>
    </section>
  )
}
