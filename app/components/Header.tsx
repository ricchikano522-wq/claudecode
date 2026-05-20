'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'ABOUT',    href: '#about' },
  { label: 'STRENGTH', href: '#strength' },
  { label: 'SERVICE',  href: '#service' },
  { label: 'MESSAGE',  href: '#message' },
  { label: 'COMPANY',  href: '#company' },
  { label: 'CONTACT',  href: '#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: scrolled
            ? 'rgba(28, 9, 16, 0.96)'
            : 'rgba(16, 8, 12, 0.75)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(139,45,62,0.2)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#hero" onClick={(e) => go(e, '#hero')} className="flex items-baseline gap-2">
              <span className="font-serif text-light-text text-base md:text-lg font-bold tracking-wide">
                CocoDesign
              </span>
              <span className="font-sans text-light-text-muted text-[10px] tracking-[0.2em]">
                株式会社
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => go(e, link.href)}
                  className="section-label text-[9px] text-light-text-muted hover:text-wine-light transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => go(e, '#contact')}
                className="font-sans text-[10px] tracking-widest border border-wine text-wine-light px-5 py-2 hover:bg-wine hover:text-light-text transition-all duration-200"
              >
                お問い合わせ
              </a>
            </nav>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="メニュー"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block w-6 h-px bg-light-text transition-all duration-300 ${
                    i === 0 && menuOpen ? 'rotate-45 translate-y-2' :
                    i === 1 && menuOpen ? 'opacity-0' :
                    i === 2 && menuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center items-center transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(28,9,16,0.98)' }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 right-0 h-px" style={{ background: 'rgba(139,45,62,0.2)' }} />
          <div className="absolute left-1/2 top-0 bottom-0 w-px" style={{ background: 'rgba(42,107,80,0.2)' }} />
        </div>
        <nav className="relative z-10 flex flex-col items-center gap-9">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => go(e, link.href)}
              className="section-label text-xs text-light-text hover:text-wine-light transition-colors duration-200"
              style={{ transitionDelay: menuOpen ? `${i * 55}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
