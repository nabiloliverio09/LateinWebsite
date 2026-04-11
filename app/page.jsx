import Link from 'next/link';
import Image from 'next/image';
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
              <Image src="/logo.png" alt="Imperium Romanum" width={80} height={80} style={{ filter: 'invert(0.6)' }} />
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
