export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-deep border-t border-border-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start leading-none">
            <span className="font-serif text-light-text text-base font-bold tracking-wide">CocoDesign</span>
            <span className="font-sans text-light-text-muted text-[10px] tracking-[0.2em] mt-0.5">株式会社</span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6">
            {['ABOUT', 'STRENGTH', 'SERVICE', 'MESSAGE', 'COMPANY', 'CONTACT'].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="font-sans text-[10px] tracking-[0.2em] text-light-text-muted hover:text-accent transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="font-sans text-[10px] tracking-wider text-light-text-muted">
            © {year} CocoDesign株式会社
          </p>
        </div>
      </div>

      {/* Accent bottom bar */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    </footer>
  )
}
