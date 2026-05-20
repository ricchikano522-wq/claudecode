'use client'

import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-parchment overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-28 md:py-36">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">
          {/* Left column — label + deco */}
          <div className="reveal">
            <p className="section-label text-muted mb-6">ABOUT</p>
            <div className="hidden lg:block mt-8">
              {/* Geometric decoration */}
              <svg viewBox="0 0 120 120" className="w-28 h-28 text-accent/25" fill="none" stroke="currentColor" strokeWidth="0.8">
                <circle cx="60" cy="60" r="55" />
                <circle cx="60" cy="60" r="35" />
                <circle cx="60" cy="60" r="15" />
                <line x1="5" y1="60" x2="115" y2="60" />
                <line x1="60" y1="5" x2="60" y2="115" />
              </svg>
              <div className="mt-8 w-px h-32 bg-gradient-to-b from-accent/40 to-transparent ml-4" />
            </div>
          </div>

          {/* Right column — content */}
          <div>
            {/* Main heading */}
            <h2 className="reveal font-serif text-ink text-2xl md:text-3xl lg:text-4xl leading-[1.5] tracking-wide mb-12">
              クリエイティブ×マーケティングで、
              <br />
              ブランドの
              <em className="not-italic text-accent">
                &#34;唯一無二の価値&#34;
              </em>
              をお客様に届ける。
            </h2>

            {/* Body text */}
            <div className="reveal reveal-delay-1 font-sans text-muted text-sm md:text-base leading-[2.2] space-y-5">
              <p>
                どれだけ美しいデザインも、
                <br />
                集客や売上につながらなければ意味がない。
              </p>
              <p>私たちはそう考えています。</p>
              <p>CocoDesignは単なる制作会社ではなく、</p>

              <div className="border-l-2 border-accent pl-6 py-2 my-6">
                <p className="font-serif text-ink text-base md:text-lg leading-[1.9] font-medium">
                  誰に届けるのか。
                  <br />
                  どう伝えるのか。
                  <br />
                  なぜ選ばれるのか。
                </p>
              </div>

              <p>
                その設計までを担う、
                <br />
                クリエイティブマーケティング会社です。
              </p>
              <p>
                デザイン・SNS・AIを掛け合わせ、
                <br />
                ブランドや事業の魅力を、
                <br />
                成果につながる形へと落とし込みます。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom edge decoration */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(196,135,58,0.3) 50%, transparent)' }}
      />
    </section>
  )
}
