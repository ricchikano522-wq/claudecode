'use client'

import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden noise-overlay"
      style={{ background: 'linear-gradient(160deg, #1C0910 0%, #130612 50%, #1C0910 100%)' }}
    >
      {/* Grid */}
      <div className="absolute inset-0 grid-on-dark" />

      {/* Concentric diamonds */}
      {[280, 460, 640].map((size, i) => (
        <div
          key={size}
          className="absolute left-1/2 top-1/2 pointer-events-none"
          style={{
            width: size, height: size,
            transform: 'translate(-50%, -50%) rotate(45deg)',
            border: `1px solid rgba(${i % 2 === 0 ? '139,45,62' : '42,107,80'},${0.18 - i * 0.04})`,
          }}
        />
      ))}

      {/* Top rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,45,62,0.5) 40%, rgba(42,107,80,0.4) 60%, transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-28 md:py-40">
        <div className="max-w-2xl mx-auto text-center">
          {/* Label */}
          <p className="reveal section-label text-wine-light mb-8 flex items-center justify-center gap-4">
            <span className="w-8 h-px bg-wine inline-block" />
            CONTACT
            <span className="w-8 h-px bg-wine inline-block" />
          </p>

          <h2 className="reveal reveal-delay-1 font-serif text-light-text text-2xl md:text-3xl lg:text-4xl leading-[1.7] mb-10">
            お問い合わせ
          </h2>

          {/* Divider ornament */}
          <div className="reveal reveal-delay-1 flex items-center justify-center gap-3 mb-10">
            <div className="w-12 h-px bg-wine/40" />
            <div className="w-2 h-2 rotate-45 border border-wine/50" />
            <div className="w-6 h-px bg-forest/40" />
            <div className="w-2 h-2 rotate-45 border border-forest/40" />
            <div className="w-12 h-px bg-wine/40" />
          </div>

          <div className="reveal reveal-delay-2 font-sans text-light-text-muted text-sm leading-[2.3] mb-12">
            <p>
              制作・マーケティング支援・ブランディング・
              <br />
              スクールに関するお問い合わせなど、
              <br />
              お気軽にご相談ください。
            </p>
            <p className="mt-5">
              事業フェーズや課題に合わせて、
              <br />
              最適なご提案をさせていただきます。
            </p>
          </div>

          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@coco-design.jp"
              className="btn-wine text-sm tracking-[0.2em] px-12 py-5 justify-center"
            >
              お問い合わせはこちら
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom rule */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(42,107,80,0.4) 50%, transparent)' }}
      />
    </section>
  )
}
