import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--card-border)',
      padding: '4rem 0',
      marginTop: '6rem',
      backgroundColor: 'var(--background)',
      color: 'var(--text-muted)'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        fontSize: '0.9rem'
      }}>
        <p style={{ margin: 0, fontWeight: 500, color: 'var(--foreground)' }}>
          Schulprojekt Latein – Kant-Gymnasium Spandau
        </p>
        <p style={{ margin: 0, fontSize: '0.85rem' }}>
          Erstellt von Nabil Oliverio © {new Date().getFullYear()}
        </p>
        <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
          <Link href="/datenschutz">Datenschutz</Link>
          <Link href="/impressum">Impressum</Link>
          <Link href="/quellen">Quellen</Link>
          <a href="https://github.com/nabiloliverio09/LateinWebsite" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent)'}}>GitHub Repo</a>
        </div>
      </div>
    </footer>
  );
}
