'use client';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

export default function Navigation() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <header
      className="glass"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '64px',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo + Wordmark */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', opacity: 1 }}>
          {/* SVG Aquila Logo (inline, scales with theme) */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ flexShrink: 0 }}
          >
            {/* Outer laurel wreath circles */}
            <circle cx="50" cy="50" r="47" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
            {/* Laurel left */}
            <path d="M18 50 Q14 38 20 28 Q24 22 30 20 Q26 30 22 40 Q20 45 18 50Z" fill="currentColor" opacity="0.7"/>
            <path d="M16 58 Q10 48 14 36 Q17 28 24 24 Q20 35 18 46 Q17 52 16 58Z" fill="currentColor" opacity="0.5"/>
            <path d="M20 66 Q12 58 14 46 Q16 38 22 33 Q20 44 20 55 Q20 60 20 66Z" fill="currentColor" opacity="0.4"/>
            {/* Laurel right */}
            <path d="M82 50 Q86 38 80 28 Q76 22 70 20 Q74 30 78 40 Q80 45 82 50Z" fill="currentColor" opacity="0.7"/>
            <path d="M84 58 Q90 48 86 36 Q83 28 76 24 Q80 35 82 46 Q83 52 84 58Z" fill="currentColor" opacity="0.5"/>
            <path d="M80 66 Q88 58 86 46 Q84 38 78 33 Q80 44 80 55 Q80 60 80 66Z" fill="currentColor" opacity="0.4"/>
            {/* Eagle body */}
            <path d="M50 20 L44 32 L30 30 L38 40 L28 52 L42 48 L50 72 L58 48 L72 52 L62 40 L70 30 L56 32 Z" fill="currentColor"/>
            {/* Eagle head */}
            <circle cx="50" cy="18" r="6" fill="currentColor"/>
            {/* Beak */}
            <path d="M55 17 L62 20 L55 22 Z" fill="currentColor"/>
            {/* Base tie */}
            <path d="M40 82 Q50 78 60 82 L58 88 Q50 86 42 88 Z" fill="currentColor" opacity="0.6"/>
          </svg>
          <span
            style={{
              fontWeight: 700,
              fontSize: '1.05rem',
              letterSpacing: '-0.02em',
              color: 'var(--foreground)',
            }}
          >
            Imperium Romanum
          </span>
        </Link>

        {/* Desktop Nav + Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <nav style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 500 }}>
            {[
              { href: '/caesar', label: 'Julius Caesar' },
              { href: '/bellum-gallicum', label: 'De Bello Gallico' },
              { href: '/quellen', label: 'Quellen' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  color: 'var(--foreground)',
                  opacity: 0.75,
                  transition: 'opacity 0.2s',
                }}
                onMouseOver={e => (e.currentTarget.style.opacity = 1)}
                onMouseOut={e => (e.currentTarget.style.opacity = 0.75)}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={toggle}
            title={isDark ? 'Zum Light Mode wechseln' : 'Zum Dark Mode wechseln'}
            style={{
              width: '44px',
              height: '26px',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              background: isDark
                ? 'linear-gradient(135deg, #2c2c2e, #3a3a3c)'
                : 'linear-gradient(135deg, #e5e5ea, #d1d1d6)',
              transition: 'background 0.3s ease',
              flexShrink: 0,
              boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.2)',
            }}
          >
            {/* Track knob */}
            <span
              style={{
                position: 'absolute',
                top: '3px',
                left: isDark ? '21px' : '3px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: isDark ? '#f5f5f7' : '#1d1d1f',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
              }}
            >
              {isDark ? '🌙' : '☀️'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
