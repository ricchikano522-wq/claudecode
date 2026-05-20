'use client'

import { useReveal } from '../hooks/useReveal'

const strengths = [
  {
    num: '01',
    title: 'マーケティング視点の\nクリエイティブ',
    body: '見た目の美しさだけでなく、\nターゲット設計・導線設計まで含めて制作します。',
    emphasis: '"なんとなく良いデザイン"ではなく、',
    strong: '選ばれる理由を持つデザイン',
    tail: 'を。',
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
      'AIを活用しながらも、\nブランドらしさや世界観を損なわない。\nその境界を見極めたクリエイティブをご提案します。',
  },
]

export default function Strength() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>

  return (
    <section
      id="strength"
      ref={sectionRef}
      className="relative bg-ink-deep overflow-hidden noise-overlay"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-28 md:py-36">
        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <p className="section-label text-accent mb-4">STRENGTH</p>
            <h2 className="font-serif text-light-text text-2xl md:text-3xl lg:text-4xl leading-[1.5]">
              CocoDesignが選ばれる
              <br />
              <em className="not-italic text-accent">3つ</em>
              の理由
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <div className="w-16 h-px bg-accent/40" />
            <div className="w-2 h-2 border border-accent/40 rotate-45" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {strengths.map((s, i) => (
            <article
              key={s.num}
              className={`reveal reveal-delay-${i + 1} relative bg-ink-card border border-border-dark p-8 md:p-10 group hover:border-accent/40 transition-colors duration-400`}
            >
              {/* Number */}
              <div className="flex items-start justify-between mb-8">
                <span className="card-number text-accent tracking-[0.3em]">{s.num}</span>
                <div className="w-8 h-8 rounded-full border border-border-dark group-hover:border-accent/30 transition-colors duration-300" />
              </div>

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-accent/60 via-accent/20 to-transparent" />

              {/* Title */}
              <h3 className="font-serif text-light-text text-lg md:text-xl leading-[1.6] mb-6 whitespace-pre-line">
                {s.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-px bg-accent/40 mb-6" />

              {/* Body */}
              <div className="font-sans text-light-text-muted text-sm leading-[2] space-y-3">
                <p className="whitespace-pre-line">{s.body}</p>
                {s.emphasis && (
                  <p>
                    {s.emphasis}
                    <br />
                    <strong className="text-light-text font-medium">{s.strong}</strong>
                    {s.tail}
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
