import ScrollReveal from '@/components/ScrollReveal';

export default function Datenschutz() {
  return (
    <div className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem', maxWidth: '800px' }}>
      <ScrollReveal>
        <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Datenschutz</h1>
        <p className="hero-subtitle" style={{ marginBottom: '4rem' }}>
          Informationen zum Umgang mit Ihren Daten.
        </p>

        <div className="card">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Datenschutzerklärung</h2>
          <p>
            Da diese Seite ein statisches <strong>Schulprojekt</strong> für das Kant-Gymnasium Spandau ist, legen wir höchsten Wert auf Minimalismus und Privatsphäre.
          </p>

          <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.5rem' }}>1. Datenerfassung</h3>
          <p>
            Diese Webseite verwendet <strong>keine Cookies</strong>, keine Analysetools (wie Google Analytics) und sammelt aktiv keine persönlichen Daten der Besucher.
          </p>

          <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.5rem' }}>2. Server-Log-Dateien</h3>
          <p>
            Der Provider (z.B. Vercel oder GitHub Pages), über den diese Webseite gehostet wird, erhebt und speichert möglicherweise automatisch Informationen in sogenannten Server-Log-Dateien (z.B. IP-Adresse, verwendeter Browser), die Ihr Browser automatisch übermittelt. Dies dient der Sicherheit und der fehlerfreien Darstellung der Webseite.
          </p>
          
          <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.5rem' }}>3. Kontakt</h3>
          <p>
            Bei Fragen zum Datenschutz wenden Sie sich an die im Impressum genannte Person.
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}
