import Head from 'next/head';

export const metadata = {
  title: 'De Bello Gallico - Historie',
  description: 'Der Gallische Krieg, seine Schlachten und Caesars literarisches Meisterwerk.',
};

export default function BellumGallicumPage() {
  return (
    <div className="animate-fade-in stagger-1">
      
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '5rem 1.5rem',
        borderBottom: '1px solid var(--nav-border)'
      }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <p style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Der Gallische Krieg
          </p>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem' }}>
            De Bello Gallico
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '700px' }}>
            Acht Jahre Krieg, brutale Eroberungen und ein Meisterwerk der antiken Propaganda. Erforschen Sie Caesars Feldzug, der die Grenzen Roms bis an den Rhein verschob.
          </p>
          <div style={{
             width: '100%',
             maxWidth: '800px',
             height: '400px',
             marginTop: '4rem',
             borderRadius: 'var(--radius-lg)',
             backgroundImage: 'url(/gallicum-hero.png)',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             boxShadow: 'var(--shadow-lg)'
          }} />
        </div>
      </section>

      {/* Content Section */}
      <section className="container" style={{ padding: '5rem 1.5rem', maxWidth: '800px' }}>
        
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 600 }}>Ursprung und Ausbruch (58 v. Chr.)</h2>
          <p>
            Im Jahr 58 v. Chr. trat Caesar sein Prokonsulat in den Provinzen Gallia Cisalpina, Gallia Narbonensis und Illyricum an. Gallien, das heute weitgehend Frankreich, Belgien und Teile der Schweiz umfasst, war von keltischen (gallischen) Stämmen besiedelt.
          </p>
          <p>
            Der Auslöser für den Krieg war die Wanderung der Helvetier. Caesar nutzte diesen Vorwand, um militärisch einzugreifen, da er Ruhm und Beute suchte, um seine Schulden in Rom zu tilgen und politische Stärke zu demonstrieren. Nach dem Sieg über die Helvetier folgte kurz darauf der Kampf gegen den germanischen Fürsten Ariovist.
          </p>
        </div>

        <div className="card" style={{ marginBottom: '4rem', backgroundColor: 'var(--background)' }}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Vercingetorix & Die Schlacht um Alesia (52 v. Chr.)</h3>
          <p style={{ fontSize: '0.95rem', marginBottom: '1.2rem' }}>
            Im Jahr 52 v. Chr. sah sich Caesar der größten Bedrohung seiner Kampagne gegenüber: Einem vereinten gallischen Aufstand unter der Führung des Arverners Vercingetorix. Dieser wandte die Taktik der verbrannten Erde an, um Caesars Versorgungslinien zu schwächen.
          </p>
          <p style={{ fontSize: '0.95rem' }}>
            Die Entscheidung fiel bei der Belagerung von Alesia. Caesar ließ einen gewaltigen Doppelring aus Befestigungen errichten – einen nach innen gegen die Belagerten (Circumvallation) und einen nach außen gegen gallische Entsatzheere (Contravallation). Die Römer siegten trotz massiver zahlenmäßiger Unterlegenheit, woraufhin Vercingetorix kapitulierte und Gallien endgültig römische Provinz wurde.
          </p>
        </div>

        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 600 }}>Die "Commentarii"</h2>
          <p>
            <em>Commentarii de bello Gallico</em> ist weit mehr als ein simpler Kriegsbericht. Es handelt sich um ein stilistisch vollendetes, in der dritten Person verfasstes Meisterwerk, das in erster Linie zur Rechtfertigung von Caesars Handeln vor dem römischen Senat diente. 
          </p>
          <p>
            Durch die klare, sachliche Latein-Sprache ("Gallia est omnis divisa in partes tres...") vermittelt Caesar dem Leser den Eindruck absoluter Objektivität, auch wenn es sich faktisch um politische Propaganda handelt. Bis heute ist das Werk der wichtigste Text im lateinischen Anfangsunterricht weltweit.
          </p>
        </div>

      </section>

    </div>
  );
}
