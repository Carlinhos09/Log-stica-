import { useState } from 'react';

export default function Navigation({
  currentSlide,
  totalSlides,
  onGoToSlide,
  onPrev,
  onNext,
  slideTitles = [],
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pad = (n) => String(n).padStart(2, '0');

  return (
    <>
      <nav id="main-nav">
        {/* ── Brand ── */}
        <div className="nav-brand">
          <div className="nav-icon" />
          <span className="nav-text">
            EQUIPE <span className="highlight">6</span>
            <span style={{ color: 'var(--text-dim)', margin: '0 8px', fontWeight: 300 }}>|</span>
            <span style={{ color: 'var(--text-muted)', fontWeight: 400, letterSpacing: '1px', textTransform: 'none', fontSize: '0.72rem' }}>
              Gestão Logística
            </span>
          </span>
        </div>

        {/* ── Dots ── */}
        <div className="nav-dots">
          {Array.from({ length: totalSlides }, (_, i) => (
            <button
              key={i}
              className={`nav-dot${i === currentSlide ? ' active' : ''}`}
              onClick={() => onGoToSlide(i)}
              aria-label={`Ir para slide ${i + 1}`}
              data-title={slideTitles[i] || ''}
            />
          ))}
        </div>

        {/* ── Controls ── */}
        <div className="nav-controls">
          <button
            className="nav-btn"
            onClick={onPrev}
            disabled={currentSlide === 0}
            aria-label="Slide anterior"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <span className="slide-counter">
            {pad(currentSlide + 1)} / {pad(totalSlides)}
          </span>

          <button
            className="nav-btn"
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            aria-label="Próximo slide"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* ── Hamburger (mobile) ── */}
        <button
          className="nav-menu-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* ── Mobile overlay menu ── */}
      {menuOpen && (
        <div className="mobile-menu open" onClick={() => setMenuOpen(false)}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="mobile-menu-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar menu"
            >
              ✕
            </button>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '4px', color: 'var(--text-dim)', marginBottom: '4px', textTransform: 'uppercase' }}>
                NAVEGAÇÃO
              </div>
              <div style={{ height: '1px', background: 'var(--border)' }} />
            </div>

            <ul className="mobile-menu-list">
              {slideTitles.map((title, i) => (
                <li key={i}>
                  <button
                    className={i === currentSlide ? 'active' : ''}
                    onClick={() => { onGoToSlide(i); setMenuOpen(false); }}
                  >
                    <span className="menu-num">{pad(i + 1)}</span>
                    {title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
