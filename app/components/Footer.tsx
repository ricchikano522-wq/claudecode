export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative border-t"
      style={{
        background: '#100508',
        borderColor: 'rgba(139,45,62,0.25)',
      }}
    >
      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #8B2D3E 30%, #2A6B50 70%, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-light-text text-base font-bold tracking-wide">CocoDesign</span>
            <span className="font-sans text-light-text-muted text-[10px] tracking-[0.2em]">株式会社</span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6">
            {['ABOUT', 'STRENGTH', 'SERVICE', 'MESSAGE', 'COMPANY', 'CONTACT'].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="font-sans text-[10px] tracking-[0.2em] text-light-text-muted hover:text-wine-light transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          <p className="font-sans text-[10px] tracking-wider text-light-text-muted">
            © {year} CocoDesign株式会社
          </p>
        </div>
      </div>

      {/* Dual color bottom bar */}
      <div className="h-[2px] flex">
        <div className="flex-1" style={{ background: '#8B2D3E' }} />
        <div className="flex-1" style={{ background: '#2A6B50' }} />
      </div>
    </footer>
  )
}
