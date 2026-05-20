'use client'

import { useReveal } from '../hooks/useReveal'

const strengths = [
  {
    num: '01',
    title: 'マーケティング視点の\nクリエイティブ',
    body: '見た目の美しさだけでなく、\nターゲット設計・導線設計まで含めて制作します。',
    closing: {
      prefix: '"なんとなく良いデザイン"ではなく、',
      strong: '選ばれる理由を持つデザイン',
      suffix: 'を。',
    },
  },
  {
    num: '02',
    title: 'SNS時代に最適化した\n設計',
    body: 'Instagram・YouTube・LINEなど、\n現代の集客導線に合わせたクリエイティブ設計。',
    extra: '第一印象・世界観・信頼構築まで、\nSNS時代に必要な要素を一貫してデザインします。',
  },
  {
    num: '03',
    title: 'AI時代を見据えた\nクリエイティブ',
    body: 'AIで制作効率が大きく変わる時代だからこそ、\n"人にしか作れない価値"の重要性が増しています。',
    extra:
      'AIを活用しながらも、ブランドらしさや世界観を損なわない。\nその境界を見極めたクリエイティブをご提案します。',
  },
]

export default function Strength() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>

  return (
    <section
      id="strength"
      ref={sectionRef}
      className="relative overflow-hidden noise-overlay"
      style={{ background: 'linear-gradient(160deg, #1C0910 0%, #130612 50%, #1C0910 100%)' }}
    >
      {/* Grid */}
      <div className="absolute inset-0 grid-on-dark" />

      {/* Ghost BG text */}
      <span
        className="ghost-title select-none pointer-events-none"
        style={{
          position: 'absolute', top: '50%', left: -8,
          transform: 'translateY(-50%)',
          color: 'rgba(139,45,62,0.07)',
          fontFamily: 'var(--font-sans)', fontWeight: 800,
          fontSize: 'clamp(4rem,12vw,10rem)',
          lineHeight: 1, whiteSpace: 'nowrap',
        }}
      >
        STRENGTH
      </span>

      {/* Decorative cross */}
      <div className="absolute top-0 bottom-0 right-1/3 w-px bg-wine/10 hidden xl:block" />
      <div className="absolute top-0 bottom-0 right-2/3 w-px bg-wine/5 hidden xl:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-28 md:py-36">
        {/* Section header */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <p className="section-label text-forest-light mb-5 flex items-center gap-3">
              <span className="w-6 h-px bg-forest inline-block" />
              STRENGTH
            </p>
            <h2 className="font-serif text-light-text text-2xl md:text-3xl lg:text-[2.25rem] leading-[1.5]">
              CocoDesignが選ばれる
              <em className="not-italic" style={{ color: '#B84D62' }}>3つ</em>
              の理由
            </h2>
          </div>
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="hidden md:block flex-shrink-0 opacity-30">
            <rect x="2" y="2" width="56" height="56" stroke="#8B2D3E" strokeWidth="0.8" />
            <rect x="12" y="12" width="36" height="36" transform="rotate(45 30 30)" stroke="#2A6B50" strokeWidth="0.8" />
            <circle cx="30" cy="30" r="8" stroke="#8B2D3E" strokeWidth="0.8" />
          </svg>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-7">
          {strengths.map((s, i) => (
            <article
              key={s.num}
              className={`reveal reveal-delay-${i + 1} relative p-8 md:p-10 group transition-all duration-400`}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(139,45,62,0.25)',
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-400 group-hover:opacity-100 opacity-60"
                style={{ background: 'linear-gradient(90deg, #8B2D3E, rgba(42,107,80,0.6), transparent)' }}
              />

              {/* Number + circle deco */}
              <div className="flex items-start justify-between mb-8">
                <span className="card-number" style={{ color: '#3A8A68' }}>{s.num}</span>
                <div
                  className="w-7 h-7 rounded-full transition-all duration-400"
                  style={{ border: '1px solid rgba(139,45,62,0.3)' }}
                />
              </div>

              {/* Title */}
              <h3 className="font-serif text-light-text text-lg md:text-xl leading-[1.65] mb-5 whitespace-pre-line">
                {s.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-px mb-6" style={{ background: 'rgba(139,45,62,0.5)' }} />

              {/* Body */}
              <div className="font-sans text-light-text-muted text-sm leading-[2.1] space-y-3">
                <p className="whitespace-pre-line">{s.body}</p>
                {s.closing && (
                  <p>
                    {s.closing.prefix}
                    <br />
                    <strong className="text-light-text font-medium">{s.closing.strong}</strong>
                    {s.closing.suffix}
                  </p>
                )}
                {s.extra && <p className="whitespace-pre-line">{s.extra}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
