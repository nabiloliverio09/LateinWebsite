import ScrollReveal from '@/components/ScrollReveal';

export default function Quellen() {
  return (
    <div className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem', maxWidth: '800px' }}>
      <ScrollReveal>
        <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Quellen & Bildnachweise</h1>
        <p className="hero-subtitle" style={{ marginBottom: '4rem' }}>
          Eine Übersicht der verwendeten Literatur und Bildmaterialien für dieses Schulprojekt.
        </p>

        <div className="card" style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Antike Primärquellen</h2>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
            <li>
              <strong className="highlight">Gaius Julius Caesar:</strong> <em>Commentarii de bello Gallico</em>. Der maßgebliche Originaltext über den Gallischen Krieg. (Verschiedene Ausgaben, z.B. Reclam).
            </li>
            <li>
              <strong className="highlight">Sueton:</strong> <em>De vita Caesarum (Kaiservitae)</em> - Buch 1: Divus Iulius. Beschreibt das Leben, die Charakterzüge und das Privatleben Caesars.
            </li>
            <li>
              <strong className="highlight">Plutarch:</strong> <em>Bioi paralleloi (Große Griechen und Römer)</em> - Die Vita des Caesar. Fokus auf seine politischen Ambitionen und seinen Tod.
            </li>
          </ul>
        </div>

        <div className="card delay-1" style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Sekundärliteratur & Weblinks</h2>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
            <li>
              <strong className="highlight">Wikipedia:</strong> Artikel über <a href="https://de.wikipedia.org/wiki/Gaius_Iulius_Caesar" target="_blank" style={{textDecoration: 'underline'}}>Julius Caesar</a> und den <a href="https://de.wikipedia.org/wiki/Gallischer_Krieg" target="_blank" style={{textDecoration: 'underline'}}>Gallischen Krieg</a> (Grundlegende Strukturierung).
            </li>
            <li>
              <strong className="highlight">Latein Schulbücher:</strong> Diverses Unterrichtsmaterial des Kant-Gymnasium Spandau.
            </li>
            <li>
              <strong className="highlight">Cristo, Karl:</strong> <em>Geschichte der römischen Kaiserzeit.</em>
            </li>
          </ul>
        </div>

        <div className="card delay-2">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Bildnachweise</h2>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
            <li>
              <strong className="highlight">Generierte Illustrationen:</strong> Die Bilder auf der Startseite, der Caesar- sowie Bellum-Gallicum-Seite wurden via KI (Imagen/Midjourney/DALL-E) erstellt, um den Premium-Apple-Style der Webseite zu unterstreichen.
            </li>
            <li>
              <strong className="highlight">Schülerübersetzung:</strong> Fotografie des eigenen Lateinheftes (Nabil Oliverio).
            </li>
          </ul>
        </div>
      </ScrollReveal>
    </div>
  );
}
