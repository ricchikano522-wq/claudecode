'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const refs = {
    label:   useRef<HTMLParagraphElement>(null),
    title:   useRef<HTMLHeadingElement>(null),
    divider: useRef<HTMLDivElement>(null),
    sub:     useRef<HTMLDivElement>(null),
    cta:     useRef<HTMLDivElement>(null),
  }

  useEffect(() => {
    const items = [refs.label, refs.title, refs.divider, refs.sub, refs.cta]
    items.forEach((r, i) => {
      const el = r.current
      if (!el) return
      el.style.cssText = 'opacity:0;transform:translateY(24px)'
      setTimeout(() => {
        el.style.cssText =
          'transition:opacity 1s cubic-bezier(0.16,1,0.3,1),transform 1s cubic-bezier(0.16,1,0.3,1);opacity:1;transform:translateY(0)'
      }, 200 + i * 150)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* ── Light gradient base ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #FAFAF8 0%, #F6EEE9 35%, #ECF3EF 70%, #F8F8F6 100%)',
        }}
      />

      {/* ── Noise / grain texture ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23g)' opacity='0.055'/%3E%3C/svg%3E\")",
          opacity: 1,
          mixBlendMode: 'multiply',
        }}
      />

      {/* ── Soft color blobs ── */}
      <div
        className="absolute top-0 right-0 w-2/3 h-2/3 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 20%, rgba(139,45,62,0.08) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 20% 80%, rgba(42,107,80,0.07) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute top-1/3 left-1/4 w-1/2 h-1/2 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.6) 0%, transparent 70%)',
        }}
      />

      {/* ── Dot grid (subtle on light) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      {/* ── Decorative thin circles ── */}
      <div
        className="absolute -right-24 top-1/2 -translate-y-1/2 rounded-full pointer-events-none hidden md:block"
        style={{
          width: 'min(60vw,580px)', height: 'min(60vw,580px)',
          border: '1px solid rgba(139,45,62,0.12)',
        }}
      />
      <div
        className="absolute -right-44 top-1/2 -translate-y-1/2 rounded-full pointer-events-none hidden md:block"
        style={{
          width: 'min(80vw,780px)', height: 'min(80vw,780px)',
          border: '1px solid rgba(42,107,80,0.08)',
        }}
      />
      {/* Small accent circle */}
      <div
        className="absolute right-[20%] top-[18%] rounded-full pointer-events-none hidden lg:block"
        style={{ width: 100, height: 100, border: '1px solid rgba(139,45,62,0.2)' }}
      />

      {/* ── Geometric corner ornament ── */}
      <svg
        className="absolute top-14 right-8 hidden md:block"
        width="72" height="72" viewBox="0 0 72 72" fill="none"
        stroke="rgba(139,45,62,0.22)" strokeWidth="0.8"
      >
        <rect x="3" y="3" width="66" height="66" />
        <rect x="16" y="16" width="40" height="40" transform="rotate(45 36 36)" />
        <circle cx="36" cy="36" r="10" />
      </svg>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-32">
        {/* Label */}
        <p ref={refs.label} className="section-label mb-10 flex items-center gap-4" style={{ color: '#2A6B50' }}>
          <span className="w-10 h-px inline-block" style={{ background: '#2A6B50' }} />
          CocoDesign Inc.
        </p>

        {/* Main copy */}
        <h1
          ref={refs.title}
          className="font-serif leading-[1.3] tracking-wide"
          style={{ color: '#1A1618' }}
        >
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[5rem] mb-3">
            ブランドの魅力を、
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[5rem]">
            <em className="not-italic relative" style={{ color: '#8B2D3E' }}>
              &#34;選ばれる理由&#34;
              <span
                className="absolute bottom-1 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, rgba(139,45,62,0.7), rgba(139,45,62,0.1))' }}
              />
            </em>
            <span style={{ color: '#1A1618' }}>に変える。</span>
          </span>
        </h1>

        {/* Divider */}
        <div ref={refs.divider} className="my-9 flex items-center gap-3">
          <div className="w-10 h-px" style={{ background: '#8B2D3E' }} />
          <div className="w-1.5 h-1.5 rotate-45" style={{ background: 'rgba(139,45,62,0.5)' }} />
          <div className="w-4 h-px" style={{ background: 'rgba(42,107,80,0.5)' }} />
          <div className="w-1.5 h-1.5 rotate-45" style={{ background: 'rgba(42,107,80,0.3)' }} />
        </div>

        {/* Sub copy — 2 lines */}
        <div ref={refs.sub} className="font-sans text-sm md:text-base leading-[2.1] max-w-xl" style={{ color: '#5A5055' }}>
          <p>CocoDesign株式会社は、クリエイティブとマーケティングを掛け合わせ、</p>
          <p>ブランドの「選ばれ続ける仕組み」をつくる会社です。</p>
        </div>

        {/* CTA */}
        <div ref={refs.cta} className="mt-14 flex flex-wrap items-center gap-6">
          <a
            href="mailto:ricchikano522@gmail.com"
            className="inline-flex items-center gap-3 font-sans text-xs tracking-widest px-9 py-4 transition-all duration-300 text-light-text"
            style={{ background: '#8B2D3E' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#5A1A28')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#8B2D3E')}
          >
            お問い合わせはこちら
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#about"
            className="font-sans text-xs tracking-widest underline underline-offset-4 transition-colors duration-200"
            style={{ color: '#6B5C60' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#2A6B50')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#6B5C60')}
          >
            私たちについて
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="section-label text-[9px]" style={{ color: '#998E91' }}>SCROLL</span>
        <div
          className="w-px h-14"
          style={{ background: 'linear-gradient(to bottom, rgba(139,45,62,0.4), transparent)' }}
        />
      </div>

      {/* ── Bottom fade to next section ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(246,242,238,0.6))',
        }}
      />
    </section>
  )
}
