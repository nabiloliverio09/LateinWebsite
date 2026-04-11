import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'De Bello Gallico – Der Gallische Krieg | Imperium Romanum',
  description: 'Die vollständige Geschichte des Bellum Gallicum (58–50 v. Chr.): Ursachen, Schlachten, Alesia, Propagandafunktion der Commentarii und die eigene Schülerübersetzung.',
};

export default function BellumGallicumPage() {
  return (
    <div>

      {/* ── HERO ─────────────────────────────────────── */}
      <section style={{ padding: '7rem 0 5rem', borderBottom: '1px solid var(--divider)', textAlign: 'center' }}>
        <div className="container">
          <ScrollReveal>
            <p className="label" style={{ marginBottom: '1.2rem' }}>58 – 50 v. Chr.</p>
            <h1 className="hero-display" style={{ marginBottom: '1.5rem' }}>
              <span className="text-gradient">De Bello Gallico</span>
            </h1>
            <p className="hero-subtitle" style={{ maxWidth: '750px', margin: '0 auto 2.5rem' }}>
              Acht Jahre Krieg. Über eine Million Tote und Versklavte. Und ein Meisterwerk politischer Propaganda, das noch heute das bekannteste Schulbuch der Latinistik ist.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/caesar" className="btn-primary">Julius Caesar →</Link>
              <Link href="/quellen" className="btn-secondary">Quellen</Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay="delay-1">
            <img src="/gallicum-hero.png" alt="Römische Legion im Gallischen Wald" className="full-bleed-img" style={{ marginTop: '4rem' }} />
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay="delay-2">
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">8</span>
                <div className="stat-label">Jahre Krieg (58–50 v. Chr.)</div>
              </div>
              <div className="stat-card">
                <span className="stat-number">800k</span>
                <div className="stat-label">Gallier getötet (Plutarch)</div>
              </div>
              <div className="stat-card">
                <span className="stat-number">1 Mio.</span>
                <div className="stat-label">Versklavte Gallier</div>
              </div>
              <div className="stat-card">
                <span className="stat-number">VIII</span>
                <div className="stat-label">Bücher der Commentarii</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ÜBERSETZUNG ──────────────────────────────── */}
      <section style={{ background: 'var(--card-bg)', padding: '6rem 0', borderBottom: '1px solid var(--divider)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <p className="label" style={{ marginBottom: '0.8rem' }}>Bellum Gallicum 1.1</p>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Gallien und seine Bewohner</h2>
              <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                Die berühmtesten Anfangsworte der lateinischen Schulprosa. Unten: der Originaltext gegenübergestellt mit der Schülerübersetzung von Nabil Oliverio (Kant-Gymnasium Spandau).
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
            <ScrollReveal>
              <div className="card" style={{ borderTop: '3px solid var(--accent)' }}>
                <p className="label" style={{ marginBottom: '1rem' }}>Originaltext (Caesar, BG 1.1)</p>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.05rem', lineHeight: '1.8', fontStyle: 'italic', color: 'var(--foreground)' }}>
                  „Gallia est omnis divisa in partes tres, quarum unam incolunt Belgae, aliam Aquitani, tertiam qui ipsorum lingua Celtae, nostra Galli appellantur. Hi omnes lingua, institutis, legibus inter se differunt.“
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay="delay-1">
              <div className="card" style={{ borderTop: '3px solid var(--accent-warm)' }}>
                <p className="label" style={{ color: 'var(--accent-warm)', marginBottom: '1rem' }}>Übersetzung (Nabil Oliverio)</p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--foreground)' }}>
                  „Ganz Gallien ist in drei Teile geteilt, deren einen die Belger bewohnen, die anderen die Aquitanier, den dritten diejenigen, die in ihrer eigenen Sprache Kelten, in unserer Gallier genannt werden. Diese alle unterscheiden sich in Sprache, Sitten und Gesetzen.“
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── KRIEGSVERLAUF ─────────────────────────────── */}
      <section className="container" style={{ padding: '6rem 2rem' }}>

        {/* ZIGZAG 1: Ursachen */}
        <div className="zigzag-row">
          <ScrollReveal>
            <p className="label" style={{ marginBottom: '0.8rem' }}>58 v. Chr.</p>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.2rem' }}>Helvetier & Ariovist</h2>
            <p>
              Caesar nutzte die Wanderung der <strong style={{ color: 'var(--foreground)' }}>Helvetier</strong> als Vorwand, um militärisch in das freie Gallien einzugreifen. Mit strategischem Geschick besiegte er zuerst die Helvetier bei Bibracte und drängte im selben Jahr den germanischen Fürsten <strong style={{ color: 'var(--foreground)' }}>Ariovist</strong> über den Rhein zurück. 
            </p>
            <p>
              Obwohl Ariovist zuvor ein „Freund des römischen Volkes“ war, stellte Caesar ihn als existentielle Bedrohung für Gallien dar, um seine eigene Präsenz in der Region zu legitimieren. Damit begann eine Kette von Eroberungen, die fast ganz Westeuropa unter römische Herrschaft brachten.
            </p>
          </ScrollReveal>
          <ScrollReveal delay="delay-1">
            <img src="/gallicum.png" alt="Römische Taktik" className="zigzag-img" />
          </ScrollReveal>
        </div>

        {/* Info Box: Propaganda */}
        <ScrollReveal>
          <div className="info-box gold" style={{ marginBottom: '5rem' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>🎭 Die Kunst der Propaganda</h3>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>
              Caesar schreibt unter dem Titel <strong style={{ fontStyle: 'italic' }}>Commentarii</strong> (Amtsaufzeichnungen), was Objektivität suggeriert. Doch die Verwendung der <strong style={{ color: 'var(--foreground)' }}>dritten Person</strong> („Caesar tat...“) und die gezielte Übertreibung barbarischer Gräueltaten dienten dazu, seine oft völkerrechtswidrigen Feldzüge vor dem römischen Senat zu rechtfertigen.
            </p>
          </div>
        </ScrollReveal>

        {/* ZIGZAG 2: Alesia */}
        <div className="zigzag-row reverse">
          <ScrollReveal>
            <p className="label" style={{ marginBottom: '0.8rem' }}>52 v. Chr.</p>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.2rem' }}>Alesia: Das Ende des Traums</h2>
            <p>
              Die Belagerung von <strong style={{ color: 'var(--foreground)' }}>Alesia</strong> war Caesars größtes militärisches Risiko. Um den Aufstand unter <strong style={{ color: 'var(--foreground)' }}>Vercingetorix</strong> zu brechen, ließ er einen doppelten Belagerungsring errichten: Die <strong style={{ fontStyle: 'italic' }}>Circumvallation</strong> hielt die Belagerten ein, während die <strong style={{ fontStyle: 'italic' }}>Contravallation</strong> die römischen Legionen vor einem herannahenden gallischen Entsatzheer schützte.
            </p>
            <p>
              Am Ende kapitulierte Vercingetorix vor Caesar. Diese Schlacht besiegelte das Schicksal der Kelten in Gallien und legte den Grundstein für die heute romanisch geprägte Kultur Frankreichs (<em>Aequitas, Jus, Lex</em>).
            </p>
          </ScrollReveal>
          <ScrollReveal delay="delay-1">
            <img src="/alesia.png" alt="Die Belagerung von Alesia" className="zigzag-img" />
          </ScrollReveal>
        </div>

        {/* ZIGZAG 3: Rheinbrücke */}
        <div className="zigzag-row">
          <ScrollReveal>
            <p className="label" style={{ marginBottom: '0.8rem' }}>55 v. Chr.</p>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.2rem' }}>Die Brücke über den Rhein</h2>
            <p>
              Caesar wollte zeigen, dass kein Hindernis zu groß für Rom ist. Innerhalb von nur <strong style={{ color: 'var(--foreground)' }}>10 Tagen</strong> bauten seine Legionäre eine massive Holzbrücke über den damals wilden Rhein. 
            </p>
            <p>
              Nach 18 Tagen Strafexpedition gegen germanische Stämme ließ er die Brücke beim Rückzug wieder zerstören. Es war eine reine <strong style={{ color: 'var(--foreground)' }}>psychologische Kriegführung</strong>: Er wollte beweisen, dass die Germanen nirgendwo vor dem Zugriff Roms sicher waren.
            </p>
          </ScrollReveal>
          <ScrollReveal delay="delay-1">
            <img src="/caesar-hero.png" alt="Römische Armee" className="zigzag-img" />
          </ScrollReveal>
        </div>

      </section>
    </div>
  );
}
