'use client'

import { useReveal } from '../hooks/useReveal'

const services = [
  {
    num: '01',
    title: 'クリエイティブ\nマーケティング支援',
    lead: '集客導線まで設計する、クリエイティブ戦略。',
    items: ['コンセプト設計', 'ブランディング', 'SNS導線設計', 'LINE導線設計', '発信設計', 'クリエイティブ改善提案'],
    closing: {
      prefix: '"売るため"ではなく、',
      strong: '「選ばれ続けるブランド」',
      suffix: 'をつくるための支援を行います。',
    },
  },
  {
    num: '02',
    title: 'クリエイティブ\n制作',
    lead: '「伝わる」で終わらない、デザイン制作。',
    body: 'ターゲット分析・導線設計をもとに、\n集客・成約までを見据えたデザインをご提供します。',
    items: ['Webサイト / LP制作', 'ロゴ・ブランディングデザイン', 'SNSクリエイティブ', '各種販促物'],
  },
  {
    num: '03',
    title: 'デザインスクール\n・講座運営',
    body: '未経験からフリーランスを目指す方へ、\nデザイン×SNS集客が学べるキャリアスクールを運営。',
    achievement: '累計380名以上のデザイナーを輩出しています。',
    note: '※女性誌『美人百花』掲載実績',
  },
]

export default function Service() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>

  return (
    <section
      id="service"
      ref={sectionRef}
      className="relative bg-parchment-mid overflow-hidden"
    >
      {/* Ghost BG text */}
      <span
        style={{
          position: 'absolute', top: 16, right: -8,
          fontFamily: 'var(--font-sans)', fontWeight: 800,
          fontSize: 'clamp(4rem,11vw,9rem)',
          lineHeight: 1, whiteSpace: 'nowrap',
          color: 'rgba(42,107,80,0.05)',
          userSelect: 'none', pointerEvents: 'none',
        }}
      >
        SERVICE
      </span>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-28 md:py-36">
        {/* Section header */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-5 mb-5">
            <p className="section-label text-wine flex items-center gap-3">
              <span className="w-6 h-px bg-wine inline-block" />
              SERVICE
            </p>
            <div className="flex-1 h-px bg-border" />
          </div>
          <h2 className="font-serif text-ink text-2xl md:text-3xl lg:text-4xl">
            事業内容
          </h2>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          {services.map((svc, i) => (
            <article
              key={svc.num}
              className={`reveal reveal-delay-${i + 1} group bg-parchment border border-border hover:border-wine/30 transition-all duration-300`}
            >
              {/* Top accent bar on hover */}
              <div
                className="h-[2px] transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ background: 'linear-gradient(90deg, #8B2D3E, #2A6B50, transparent)' }}
              />

              <div className="p-8 md:p-10 lg:p-12">
                <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[260px_1fr] gap-8 lg:gap-14">
                  {/* Left */}
                  <div>
                    <span className="card-number text-wine block mb-4">{svc.num}</span>
                    <div className="w-8 h-px bg-wine/40 mb-5" />
                    <h3 className="font-serif text-ink text-xl md:text-2xl leading-[1.7] whitespace-pre-line">
                      {svc.title}
                    </h3>
                    {svc.lead && (
                      <p className="font-sans text-muted text-xs leading-[1.9] mt-4 italic tracking-wide">
                        {svc.lead}
                      </p>
                    )}
                  </div>

                  {/* Right */}
                  <div className="font-sans text-sm leading-[2.2] text-muted space-y-5">
                    {svc.body && <p className="whitespace-pre-line">{svc.body}</p>}
                    {svc.items && (
                      <ul className="space-y-2.5">
                        {svc.items.map((item) => (
                          <li key={item} className="flex items-center gap-3">
                            <span className="w-3 h-px bg-wine flex-shrink-0" />
                            <span className="w-1 h-1 bg-forest flex-shrink-0 rounded-full" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {svc.closing && (
                      <p
                        className="font-serif text-ink text-sm md:text-base leading-[2] border-t pt-6 mt-6"
                        style={{ borderColor: 'rgba(139,45,62,0.2)' }}
                      >
                        {svc.closing.prefix}
                        <br />
                        <strong style={{ color: '#8B2D3E' }} className="font-medium">
                          {svc.closing.strong}
                        </strong>
                        {svc.closing.suffix}
                      </p>
                    )}
                    {svc.achievement && (
                      <p className="font-serif text-ink text-sm md:text-base">{svc.achievement}</p>
                    )}
                    {svc.note && (
                      <p className="font-sans text-muted-light text-xs tracking-wide">{svc.note}</p>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
