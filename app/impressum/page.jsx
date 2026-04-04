import ScrollReveal from '@/components/ScrollReveal';

export default function Impressum() {
  return (
    <div className="container" style={{ paddingTop: '5rem', paddingBottom: '5rem', maxWidth: '800px' }}>
      <ScrollReveal>
        <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Impressum</h1>
        <p className="hero-subtitle" style={{ marginBottom: '4rem' }}>
          Informationen zu den Verantwortlichen dieser Webseite.
        </p>

        <div className="card">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Angaben gemäß § 5 TMG</h2>
          <p>
            <strong className="highlight">Verantwortlich für den Inhalt:</strong><br />
            Nabil Oliverio<br />
            Schulprojekt im Fach Latein<br />
            Kant-Gymnasium Spandau
          </p>

          <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', marginBottom: '0.5rem' }}>Einsatzzweck</h3>
          <p>
            Diese Webseite ist ein statisches Schulprojekt im Rahmen des Latein-Unterrichts und verfolgt keine kommerziellen Zwecke. Sie dient ausschließlich der Vermittlung historischen Wissens.
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}
