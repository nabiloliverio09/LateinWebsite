import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Imperium Romanum – Lexicon für Julius Caesar & De Bello Gallico',
  description: 'Ein interaktives Schulprojekt des Kant-Gymnasiums Spandau. Erkunden Sie das Leben Caesars und den Gallischen Krieg in einem modernen Apple-Style Lexicon.',
};

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0', paddingBottom: '0' }}>

      {/* ── HERO ─────────────────────────────────────── */}
      <section style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '8rem 2rem 6rem' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
              <svg
                width="80"
                height="80"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: 'var(--foreground)', opacity: 0.8 }}
              >
                <circle cx="50" cy="50" r="47" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.25" />
                <path d="M18 50 Q14 38 20 28 Q24 22 30 20 Q26 30 22 40 Q20 45 18 50Z" fill="currentColor" opacity="0.6"/>
                <path d="M16 58 Q10 48 14 36 Q17 28 24 24 Q20 35 18 46 Q17 52 16 58Z" fill="currentColor" opacity="0.4"/>
                <path d="M20 66 Q12 58 14 46 Q16 38 22 33 Q20 44 20 55 Q20 60 20 66Z" fill="currentColor" opacity="0.3"/>
                <path d="M82 50 Q86 38 80 28 Q76 22 70 20 Q74 30 78 40 Q80 45 82 50Z" fill="currentColor" opacity="0.6"/>
                <path d="M84 58 Q90 48 86 36 Q83 28 76 24 Q80 35 82 46 Q83 52 84 58Z" fill="currentColor" opacity="0.4"/>
                <path d="M80 66 Q88 58 86 46 Q84 38 78 33 Q80 44 80 55 Q80 60 80 66Z" fill="currentColor" opacity="0.3"/>
                <path d="M50 20 L44 32 L30 30 L38 40 L28 52 L42 48 L50 72 L58 48 L72 52 L62 40 L70 30 L56 32 Z" fill="currentColor"/>
                <circle cx="50" cy="18" r="6" fill="currentColor"/>
                <path d="M55 17 L62 20 L55 22 Z" fill="currentColor"/>
                <path d="M40 82 Q50 78 60 82 L58 88 Q50 86 42 88 Z" fill="currentColor" opacity="0.5"/>
              </svg>
            </div>
            <p className="label" style={{ marginBottom: '1.5rem' }}>Schulprojekt Latein · Kant-Gymnasium Spandau</p>
            <h1 className="hero-display" style={{ marginBottom: '2rem', lineHeight: 1.05 }}>
              <span className="text-gradient">Veni,<br />Vidi,<br />Vici.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay="delay-1">
            <p className="hero-subtitle" style={{ maxWidth: '650px', margin: '0 auto 3rem' }}>
              Das interaktive Lexicon über <strong style={{ fontWeight: 600, color: 'var(--foreground)' }}>Gaius Julius Caesar</strong> – Feldherr, Diktator und brillanter Schriftsteller. Entstanden als Schulprojekt für das Fach Latein.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/caesar" className="btn-primary">Julius Caesar entdecken</Link>
              <Link href="/bellum-gallicum" className="btn-secondary">De Bello Gallico</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BENTO GRID ────────────────────────────────── */}
      <section className="container" style={{ padding: '4rem 2rem 8rem' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '1rem' }}>Zwei Epochen. Ein Mann.</h2>
            <p style={{ maxWidth: '550px', margin: '0 auto' }}>Erkunden Sie Caesars Leben und sein literarisches Erbe im Detail.</p>
          </div>
        </ScrollReveal>

        <div className="bento-grid" style={{ gap: '1.5rem' }}>

          {/* CARD 1: CAESAR (Large, Dark) */}
          <div className="bento-col-8">
            <ScrollReveal style={{ height: '100%' }}>
              <Link href="/caesar" style={{ display: 'block', height: '100%' }}>
                <div
                  className="card"
                  style={{
                    height: '100%',
                    minHeight: '500px',
                    backgroundImage: 'url(/caesar-hero.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    padding: 0,
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%)', borderRadius: 'inherit' }} />
                  <div style={{ position: 'relative', zIndex: 1, padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%', color: '#fff' }}>
                    <p style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.6rem' }}>Biografie</p>
                    <h3 style={{ fontSize: '2.4rem', fontWeight: 700, marginBottom: '0.7rem', letterSpacing: '-0.03em', color: '#fff' }}>Julius Caesar</h3>
                    <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', maxWidth: '480px' }}>
                      Vom Patrizierkind zum ewigen Diktator. Entführung durch Piraten, Rubikon-Übergang und die Iden des März – alles über den bekanntesten Römer der Geschichte.
                    </p>
                    <span style={{ fontWeight: 600, color: '#fff', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>Biografie lesen →</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>

          {/* CARD 2: Schulprojekt badge */}
          <div className="bento-col-4">
            <ScrollReveal delay="delay-1" style={{ height: '100%' }}>
              <div className="card" style={{ height: '100%', background: 'var(--accent)', color: '#fff', minHeight: '240px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '0.8rem' }}>Kant-Gymnasium Spandau</p>
                  <h3 style={{ fontSize: '1.9rem', fontWeight: 700, color: '#fff', marginBottom: '0.8rem', letterSpacing: '-0.02em' }}>Schulprojekt<br />Latein 2026</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>Erstellt von Nabil Oliverio. Mit eigener Handschrift-Übersetzung der <em>Commentarii</em>.</p>
                </div>
                <div>
                  <span style={{ display: 'inline-block', padding: '0.45rem 1rem', background: 'rgba(255,255,255,0.2)', borderRadius: '999px', fontSize: '0.82rem', fontWeight: 600 }}>Nabil Oliverio</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* CARD 3: Zitat */}
          <div className="bento-col-4">
            <ScrollReveal delay="delay-2" style={{ height: '100%' }}>
              <div className="card" style={{ height: '100%', minHeight: '240px', background: '#1c1c1e', color: '#f5f5f7', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontSize: '2.5rem', lineHeight: 1, marginBottom: '0.5rem', color: 'var(--accent)' }}>"</p>
                <p style={{ fontSize: '1.3rem', fontStyle: 'italic', color: '#f5f5f7', fontWeight: 500, letterSpacing: '-0.01em' }}>
                  Gallia est omnis divisa in partes tres.
                </p>
                <p style={{ marginTop: '1rem', fontSize: '0.82rem', color: '#86868b' }}>— Caesar, Bellum Gallicum I.1</p>
              </div>
            </ScrollReveal>
          </div>

          {/* CARD 4: Bellum Gallicum (Large) */}
          <div className="bento-col-8">
            <ScrollReveal delay="delay-1" style={{ height: '100%' }}>
              <Link href="/bellum-gallicum" style={{ display: 'block', height: '100%' }}>
                <div
                  className="card"
                  style={{
                    height: '100%',
                    minHeight: '360px',
                    backgroundImage: 'url(/gallicum-hero.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                    position: 'relative',
                    padding: 0,
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 70%)', borderRadius: 'inherit' }} />
                  <div style={{ position: 'relative', zIndex: 1, padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', color: '#fff' }}>
                    <p style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '0.6rem' }}>58–50 v. Chr.</p>
                    <h3 style={{ fontSize: '2.4rem', fontWeight: 700, marginBottom: '0.7rem', letterSpacing: '-0.03em', color: '#fff' }}>De Bello Gallico</h3>
                    <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', maxWidth: '400px' }}>
                      Alesia, Vercingetorix, Rheinbrücke – und Caesars meisterhafter Propaganda-Text. Inklusive eigener Handschrift-Übersetzung!
                    </p>
                    <span style={{ fontWeight: 600, color: '#fff', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>Kriegsverlauf entdecken →</span>
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
