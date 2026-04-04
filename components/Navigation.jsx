'use client';
import Link from 'next/link';

export default function Navigation() {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '60px',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
    }} className="glass">
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 1.5rem',
      }}>
        <div style={{ fontWeight: 600, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
          <Link href="/">Imperium Romanum</Link>
        </div>
        <nav style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 500 }}>
          <Link href="/caesar" style={{ opacity: 0.8 }} onMouseOver={e => e.target.style.opacity = 1} onMouseOut={e => e.target.style.opacity = 0.8}>
            Julius Caesar
          </Link>
          <Link href="/bellum-gallicum" style={{ opacity: 0.8 }} onMouseOver={e => e.target.style.opacity = 1} onMouseOut={e => e.target.style.opacity = 0.8}>
            De Bello Gallico
          </Link>
          <Link href="/quellen" style={{ opacity: 0.8, color: 'var(--accent)' }} onMouseOver={e => e.target.style.opacity = 1} onMouseOut={e => e.target.style.opacity = 0.8}>
            Quellen
          </Link>
        </nav>
      </div>
    </header>
  );
}
