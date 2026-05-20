'use client'

import { useReveal } from '../hooks/useReveal'

const rows = [
  { label: '会社名', value: 'CocoDesign株式会社' },
  {
    label: '事業内容',
    value: 'クリエイティブマーケティング支援 / Web・SNSクリエイティブ制作\nデザインスクール運営 / AI活用支援',
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
      className="relative bg-parchment overflow-hidden"
    >
      {/* Ghost BG */}
      <span
        style={{
          position: 'absolute', top: 12, right: -4,
          fontFamily: 'var(--font-sans)', fontWeight: 800,
          fontSize: 'clamp(4rem,11vw,9rem)',
          lineHeight: 1, whiteSpace: 'nowrap',
          color: 'rgba(139,45,62,0.04)',
          userSelect: 'none', pointerEvents: 'none',
        }}
      >
        COMPANY
      </span>

      {/* Dot grid */}
      <div className="absolute inset-0 dot-on-light" />

      {/* Decorative corner arc */}
      <div
        className="absolute -right-16 bottom-0 rounded-full pointer-events-none"
        style={{
          width: 'min(35vw,320px)', height: 'min(35vw,320px)',
          border: '1px solid rgba(42,107,80,0.15)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-28 md:py-36">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="section-label text-wine mb-5 flex items-center gap-3">
            <span className="w-6 h-px bg-wine inline-block" />
            COMPANY
          </p>
          <h2 className="font-serif text-ink text-2xl md:text-3xl lg:text-4xl">会社概要</h2>
        </div>

        {/* Table */}
        <div className="reveal reveal-delay-1 max-w-3xl">
          <table className="w-full">
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-b border-border ${i === 0 ? 'border-t' : ''}`}
                >
                  <th
                    scope="row"
                    className="font-sans text-xs tracking-widest text-wine font-semibold text-left py-6 pr-8 w-32 md:w-44 align-top"
                  >
                    {row.label}
                  </th>
                  <td className="font-sans text-ink text-sm leading-[2] py-6 whitespace-pre-line">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Decorative bottom */}
          <div className="mt-8 flex items-center gap-3">
            <div className="w-4 h-px bg-wine/40" />
            <div className="w-2 h-2 border border-wine/30 rotate-45" />
            <div className="flex-1 h-px bg-border" />
          </div>
        </div>
      </div>
    </section>
  )
}
