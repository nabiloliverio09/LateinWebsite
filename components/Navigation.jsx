'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        {/* Logo + Wortmarke */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <Image src="/logo.png" alt="Imperium Romanum Logo" width={36} height={36} style={{ filter: 'invert(0.7)' }} />
          <span style={{ fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.02em', color: 'var(--foreground)' }}>
            Imperium Romanum
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 500 }}>
          {[
            { href: '/caesar', label: 'Julius Caesar' },
            { href: '/bellum-gallicum', label: 'De Bello Gallico' },
            { href: '/quellen', label: 'Quellen' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{ color: 'var(--foreground)', opacity: 0.75, transition: 'opacity 0.2s' }}
              onMouseOver={e => e.currentTarget.style.opacity = 1}
              onMouseOut={e => e.currentTarget.style.opacity = 0.75}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
