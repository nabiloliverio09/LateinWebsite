import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem', paddingBottom: '6rem' }}>
      
      {/* Hero Section */}
      <section className="container" style={{
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '8rem'
      }}>
        <ScrollReveal>
          <h1 className="hero-title">
            <span className="text-gradient">Veni, Vidi, Vici.</span><br />
            Die Welt des Caesar.
          </h1>
          <p className="hero-subtitle" style={{ margin: '0 auto 3rem auto', maxWidth: '700px' }}>
            Erkunden Sie das Leben des berühmtesten Feldherrn der Antike und sein literarisches Meisterwerk, den Gallischen Krieg. Ein interaktives Schulprojekt für das Kant-Gymnasium Spandau.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <Link href="#explore" className="btn-primary" style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)' }}>
              Entdecken
            </Link>
            <Link href="/caesar" className="btn-primary" style={{ backgroundColor: 'transparent', color: 'var(--foreground)', border: '1px solid var(--nav-border)' }}>
              Über Caesar
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Bento Grid Section */}
      <section id="explore" className="container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>Zwei Epochen. Ein Mann.</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>Der Aufstieg Roms zum Weltreich, geprägt durch Strategie, Verrat und brillante Propaganda.</p>
          </div>
        </ScrollReveal>

        <div className="bento-grid">
          
          {/* Card 1: Caesar Overview (Large) */}
          <div className="bento-col-8">
            <ScrollReveal delay="delay-1" style={{ height: '100%' }}>
              <Link href="/caesar" style={{ display: 'block', height: '100%' }}>
                <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundImage: 'url(/caesar-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                  {/* Overlay for readability */}
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
                  <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto', paddingTop: '12rem', color: '#fff' }}>
                    <h3 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Julius Caesar</h3>
                    <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', maxWidth: '500px' }}>
                      Staatsmann, Feldherr und Diktator. Erfahren Sie alles über seinen Aufstieg zur Macht, das Erste Triumvirat und die Iden des März.
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', color: '#fff', fontWeight: 600 }}>
                      Biografie lesen <span style={{ marginLeft: '0.5rem' }}>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>

          {/* Card 2: Schulprojekt Info (Small) */}
          <div className="bento-col-4">
            <ScrollReveal delay="delay-2" style={{ height: '100%' }}>
              <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--accent)', color: '#fff' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '1rem' }}>Kant-Gymnasium</h3>
                <p style={{ color: 'rgba(255,255,255,0.9)', flexGrow: 1 }}>
                  Dieses digitale Lexicon wurde von Nabil Oliverio als aufwendiges Schulprojekt im Fach Latein erstellt.
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.2)', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600 }}>Schuljahr 2026</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Card 3: Quellen (Small) */}
          <div className="bento-col-4">
            <ScrollReveal delay="delay-1" style={{ height: '100%' }}>
              <Link href="/quellen" style={{ display: 'block', height: '100%' }}>
                <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📚</div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 600, marginBottom: '1rem' }}>Forschung & Quellen</h3>
                  <p style={{ flexGrow: 1 }}>
                    Historische Texte von Sueton, Plutarch und natürlich Caesars eigenen <em>Commentarii</em>.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', color: 'var(--accent)', fontWeight: 500 }}>
                    Zur Bibliografie <span style={{ marginLeft: '0.5rem' }}>→</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>

          {/* Card 4: Bellum Gallicum (Large) */}
          <div className="bento-col-8">
            <ScrollReveal delay="delay-2" style={{ height: '100%' }}>
              <Link href="/bellum-gallicum" style={{ display: 'block', height: '100%' }}>
                <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundImage: 'url(/gallicum-hero.png)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.2))' }}></div>
                  <div style={{ position: 'relative', zIndex: 1, paddingRight: '2rem', color: '#fff' }}>
                    <h3 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>De Bello Gallico</h3>
                    <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', maxWidth: '400px' }}>
                      Acht Jahre Krieg, brutale Eroberungen und ein Meisterwerk der antiken Propaganda. Inklusive eigener Handschrift-Übersetzung!
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', color: '#fff', fontWeight: 600 }}>
                      Kriegsverlauf analysieren <span style={{ marginLeft: '0.5rem' }}>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>

        </div>
      </section>

    </div>
  );
}
