'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'ABOUT', href: '#about' },
  { label: 'STRENGTH', href: '#strength' },
  { label: 'SERVICE', href: '#service' },
  { label: 'MESSAGE', href: '#message' },
  { label: 'COMPANY', href: '#company' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-ink-deep/95 backdrop-blur-sm border-b border-border-dark' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex flex-col leading-none"
            >
              <span className="font-serif text-light-text text-base md:text-lg font-bold tracking-wide">
                CocoDesign
              </span>
              <span className="font-sans text-light-text-muted text-[10px] tracking-[0.2em] mt-0.5">
                株式会社
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-sans text-[10px] tracking-[0.25em] text-light-text-muted hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="メニュー"
            >
              <span
                className={`block w-6 h-px bg-light-text transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-px bg-light-text transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-px bg-light-text transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-ink-deep flex flex-col justify-center items-center transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-sans text-sm tracking-[0.3em] text-light-text hover:text-accent transition-colors duration-200"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
