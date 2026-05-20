'use client'

import { useReveal } from '../hooks/useReveal'

const rows = [
  { label: '会社名', value: 'CocoDesign株式会社' },
  {
    label: '事業内容',
    value:
      'クリエイティブマーケティング支援 / Web・SNSクリエイティブ制作 / デザインスクール運営 / AI活用支援',
  },
  { label: '所在地', value: '兵庫県神戸市' },
  { label: '代表者', value: '前橋 香乃' },
  { label: 'お問い合わせ', value: 'お問い合わせフォームより受付' },
]

export default function Company() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>

  return (
    <section
      id="company"
      ref={sectionRef}
      className="relative bg-parchment-mid overflow-hidden"
    >
      {/* Geometric background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Right deco circle */}
      <div
        className="absolute -right-20 bottom-0 rounded-full border border-accent/10 pointer-events-none"
        style={{ width: '40vw', height: '40vw', maxWidth: 400, maxHeight: 400 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-28 md:py-36">
        <div className="reveal mb-16">
          <p className="section-label text-muted mb-4">COMPANY</p>
          <h2 className="font-serif text-ink text-2xl md:text-3xl lg:text-4xl">
            会社概要
          </h2>
        </div>

        <div className="reveal reveal-delay-1 max-w-3xl">
          <table className="w-full">
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={`group border-b ${
                    i === 0 ? 'border-t' : ''
                  } border-border`}
                >
                  <th
                    scope="row"
                    className="font-sans text-xs tracking-widest text-muted font-medium text-left py-5 pr-8 whitespace-nowrap w-36 md:w-48"
                  >
                    {row.label}
                  </th>
                  <td className="font-sans text-ink text-sm leading-[1.9] py-5">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
