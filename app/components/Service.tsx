'use client'

import { useReveal } from '../hooks/useReveal'

const services = [
  {
    num: '01',
    title: 'クリエイティブ\nマーケティング支援',
    lead: '集客導線まで設計する、クリエイティブ戦略。',
    items: [
      'コンセプト設計',
      'ブランディング',
      'SNS導線設計',
      'LINE導線設計',
      '発信設計',
      'クリエイティブ改善提案',
    ],
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
    items: [
      'Webサイト / LP制作',
      'ロゴ・ブランディングデザイン',
      'SNSクリエイティブ',
      '各種販促物',
    ],
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
      className="relative bg-parchment overflow-hidden"
    >
      {/* Diagonal lines background */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(196,135,58,0.04) 40px, rgba(196,135,58,0.04) 41px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-28 md:py-36">
        {/* Section header */}
        <div className="reveal mb-20">
          <p className="section-label text-muted mb-4">SERVICE</p>
          <div className="flex items-center gap-4">
            <h2 className="font-serif text-ink text-2xl md:text-3xl lg:text-4xl">
              事業内容
            </h2>
            <div className="flex-1 h-px bg-border max-w-xs" />
          </div>
        </div>

        {/* Service list */}
        <div className="space-y-px">
          {services.map((svc, i) => (
            <article
              key={svc.num}
              className={`reveal reveal-delay-${i + 1} group`}
            >
              <div className="border border-border bg-parchment hover:bg-white transition-colors duration-300 p-8 md:p-10 lg:p-12">
                <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[260px_1fr] gap-8 lg:gap-16">
                  {/* Left */}
                  <div>
                    <span className="card-number text-accent tracking-[0.3em] block mb-4">{svc.num}</span>
                    <h3 className="font-serif text-ink text-xl md:text-2xl leading-[1.6] whitespace-pre-line">
                      {svc.title}
                    </h3>
                    {svc.lead && (
                      <p className="font-sans text-muted text-sm leading-[1.8] mt-4 italic">
                        {svc.lead}
                      </p>
                    )}
                  </div>

                  {/* Right */}
                  <div className="font-sans text-sm leading-[2] text-muted space-y-5">
                    {svc.body && (
                      <p className="whitespace-pre-line">{svc.body}</p>
                    )}
                    {svc.items && (
                      <ul className="space-y-2">
                        {svc.items.map((item) => (
                          <li key={item} className="flex items-center gap-3">
                            <span className="w-4 h-px bg-accent flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {svc.closing && (
                      <p className="font-serif text-ink text-sm md:text-base leading-[1.9] border-t border-border pt-5 mt-5">
                        {svc.closing.prefix}
                        <br />
                        <strong className="text-accent font-medium">{svc.closing.strong}</strong>
                        {svc.closing.suffix}
                      </p>
                    )}
                    {svc.achievement && (
                      <p className="font-serif text-ink text-sm md:text-base leading-[1.9]">
                        {svc.achievement}
                      </p>
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
