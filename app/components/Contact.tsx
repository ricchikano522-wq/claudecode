'use client'

import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-ink-deep overflow-hidden noise-overlay"
    >
      {/* Large diamond decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="border border-accent/8 rotate-45"
          style={{ width: '70vw', height: '70vw', maxWidth: 700, maxHeight: 700 }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="border border-accent/4 rotate-45"
          style={{ width: '90vw', height: '90vw', maxWidth: 900, maxHeight: 900 }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-28 md:py-40">
        <div className="max-w-2xl mx-auto text-center">
          <p className="reveal section-label text-accent mb-8">CONTACT</p>

          <h2 className="reveal reveal-delay-1 font-serif text-light-text text-2xl md:text-3xl lg:text-4xl leading-[1.7] mb-10">
            お問い合わせ
          </h2>

          <div className="reveal reveal-delay-2 font-sans text-light-text-muted text-sm leading-[2.2] mb-12">
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

          <div className="reveal reveal-delay-3">
            {/* Decorative lines */}
            <div className="flex items-center gap-4 justify-center mb-10">
              <div className="w-16 h-px bg-accent/30" />
              <div className="w-1.5 h-1.5 border border-accent/40 rotate-45" />
              <div className="w-16 h-px bg-accent/30" />
            </div>

            <a
              href="mailto:info@coco-design.jp"
              className="btn-solid-accent text-base tracking-[0.2em] px-12 py-5"
            >
              お問い合わせはこちら
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
