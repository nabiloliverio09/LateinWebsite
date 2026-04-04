export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--card-border)',
      padding: '3rem 0',
      marginTop: '6rem',
      backgroundColor: 'var(--background)',
      color: 'var(--text-muted)'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        fontSize: '0.85rem'
      }}>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} Imperium Romanum. Alle Rechte vorbehalten.</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#">Datenschutz</a>
          <a href="#">Impressum</a>
          <a href="https://github.com/nabiloliverio09/LateinWebsite" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
