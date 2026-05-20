'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [labelRef.current, titleRef.current, subRef.current, ctaRef.current]
    els.forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      setTimeout(() => {
        if (!el) return
        el.style.transition = 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 300 + i * 180)
    })
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-ink-deep flex flex-col justify-center overflow-hidden noise-overlay"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Vertical line left */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden lg:block" />

      {/* Large decorative circle — right */}
      <div
        className="absolute -right-32 top-1/2 -translate-y-1/2 rounded-full border border-accent/15 pointer-events-none"
        style={{ width: '65vw', height: '65vw', maxWidth: 720, maxHeight: 720 }}
      />
      <div
        className="absolute -right-52 top-1/2 -translate-y-1/2 rounded-full border border-white/4 pointer-events-none"
        style={{ width: '85vw', height: '85vw', maxWidth: 960, maxHeight: 960 }}
      />

      {/* Small corner geometry */}
      <svg
        className="absolute top-20 right-8 w-24 h-24 text-accent/20 hidden md:block"
        viewBox="0 0 96 96"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      >
        <rect x="4" y="4" width="88" height="88" />
        <rect x="20" y="20" width="56" height="56" transform="rotate(45 48 48)" />
        <circle cx="48" cy="48" r="20" />
      </svg>

      {/* Diagonal accent line */}
      <div
        className="absolute bottom-0 left-0 w-full h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(196,135,58,0.3) 40%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-28">
        {/* Label */}
        <p ref={labelRef} className="section-label text-accent mb-10 flex items-center gap-4">
          <span className="w-8 h-px bg-accent inline-block" />
          CocoDesign Inc.
        </p>

        {/* Main copy */}
        <h1
          ref={titleRef}
          className="font-serif text-light-text leading-[1.25] tracking-wide"
        >
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] mb-3">
            ブランドの魅力を、
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]">
            <em className="not-italic text-accent relative">
              &#34;選ばれる理由&#34;
              <span
                className="absolute bottom-0 left-0 h-px w-full"
                style={{ background: 'linear-gradient(90deg, #C4873A, rgba(196,135,58,0.3))' }}
              />
            </em>
            に変える。
          </span>
        </h1>

        {/* Divider */}
        <div className="my-10 flex items-center gap-4">
          <div className="w-12 h-px bg-accent" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
          <div className="w-4 h-px bg-accent/30" />
        </div>

        {/* Sub copy */}
        <p
          ref={subRef}
          className="font-sans text-light-text-muted text-sm md:text-base leading-[2] max-w-xl"
        >
          CocoDesign株式会社は、クリエイティブとマーケティングを掛け合わせ、
          <br className="hidden md:block" />
          小規模事業者・ブランドの「選ばれ続ける仕組み」をつくる会社です。
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="mt-14 flex flex-wrap gap-4">
          <a href="#contact" className="btn-outline-accent">
            お問い合わせはこちら
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#about" className="font-sans text-xs tracking-widest text-light-text-muted hover:text-light-text transition-colors duration-200 self-center underline underline-offset-4">
            私たちについて
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="section-label text-light-text-muted text-[9px]">SCROLL</span>
        <div className="w-px h-14 bg-gradient-to-b from-light-text/30 to-transparent" />
      </div>
    </section>
  )
}
