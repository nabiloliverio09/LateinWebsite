import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Julius Caesar – Biografie & Geschichte | Imperium Romanum',
  description: 'Das vollständige Porträt von Gaius Julius Caesar: Herkunft, Aufstieg, Piraten-Entführung, Triumvirat, Gallischer Krieg, Diktatur und die Iden des März.',
};

export default function CaesarPage() {
  return (
    <div>

      {/* ── HERO ─────────────────────────────────────── */}
      <section style={{ padding: '7rem 0 5rem', borderBottom: '1px solid var(--divider)', textAlign: 'center', background: 'var(--background)' }}>
        <div className="container">
          <ScrollReveal>
            <p className="label" style={{ marginBottom: '1.2rem' }}>Biografie</p>
            <h1 className="hero-display" style={{ marginBottom: '1.5rem' }}>
              <span className="text-gradient">Gaius Julius Caesar</span>
            </h1>
            <p className="hero-subtitle" style={{ maxWidth: '700px', margin: '0 auto 2.5rem' }}>
              Staatsmann, Feldherr, Schriftsteller und Diktator. Caesar ist die wohl einflussreichste Einzelpersönlichkeit der antiken Geschichte – ein Genie der Strategie und der politischen Kommunikation.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/bellum-gallicum" className="btn-primary">De Bello Gallico →</Link>
              <Link href="/quellen" className="btn-secondary">Quellen</Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay="delay-1">
            <img
              src="/caesar-hero.png"
              alt="Panorama des antiken Roms"
              className="full-bleed-img"
              style={{ marginTop: '4rem' }}
            />
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay="delay-2">
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">100</span>
                <div className="stat-label">Geburtsjahr v. Chr.</div>
              </div>
              <div className="stat-card">
                <span className="stat-number">58–50</span>
                <div className="stat-label">Gallischer Krieg (v. Chr.)</div>
              </div>
              <div className="stat-card">
                <span className="stat-number">23</span>
                <div className="stat-label">Messerstiche (15. März 44)</div>
              </div>
              <div className="stat-card">
                <span className="stat-number">1 Mio.</span>
                <div className="stat-label">Gallier getötet (Schätzung Plutarch)</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────── */}
      <section className="container" style={{ padding: '6rem 2rem' }}>

        {/* ZIGZAG 1: Herkunft */}
        <div className="zigzag-row">
          <ScrollReveal className="zigzag-text">
            <p className="label" style={{ marginBottom: '0.8rem' }}>100 – 84 v. Chr.</p>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.2rem' }}>Herkunft & frühe Jahre</h2>
            <p>
              Caesar wurde am <strong style={{ color: 'var(--foreground)' }}>13. Juli 100 v. Chr.</strong> in eine Patrizierfamilie, die <em>gens Iulia</em>, geboren. Die Familie leitete ihren Ursprung von <em>Iulus</em> ab, dem Sohn des Trojaners Aeneas – und damit direkt von der Göttin Venus. Dieser göttliche Stammbaum war für Caesar kein bloßer Aberglaube, sondern ein mächtiges Instrument politischer Legitimation (<em>Propaganda</em>).
            </p>
            <div className="info-box">
              <h4 style={{ marginBottom: '0.5rem' }}>Optimaten vs. Popularen</h4>
              <p style={{ margin: 0, fontSize: '0.92rem' }}>
                Rom war gespalten: Die <strong style={{ color: 'var(--foreground)' }}>Optimaten</strong> wollten die Macht des Senats zementieren. Die <strong style={{ color: 'var(--foreground)' }}>Popularen</strong>, zu denen sich Caesar bekannte, suchten ihre Machtbasis im Volk und in den Volksversammlungen.
              </p>
            </div>
            <p>
              Als der Diktator Sulla 83 v. Chr. die Macht in Rom übernahm, geriet der junge Caesar in Lebensgefahr. Er weigerte sich, seine Frau Cornelia zu verlassen. Er musste fliehen und kehrte erst nach Sullas Tod 78 v. Chr. nach Rom zurück, wo er sich sofort als brillanter Redner in Gerichtsprozessen einen Namen machte.
            </p>
          </ScrollReveal>
          <ScrollReveal delay="delay-1">
            <img src="/caesar.png" alt="Marmorbüste Julius Caesars" className="zigzag-img" />
          </ScrollReveal>
        </div>

        {/* Pull Quote */}
        <ScrollReveal>
          <blockquote className="pull-quote">
            „Lieber der Erste in diesem kleinen Bergdorf als der Zweite in Rom."
            <p className="pull-quote-attr">— Caesar zugeschrieben, zitiert bei Plutarch (Caes. 11.3)</p>
          </blockquote>
        </ScrollReveal>

        {/* ZIGZAG 2: Piraten */}
        <div className="zigzag-row reverse">
          <ScrollReveal className="zigzag-text">
            <p className="label" style={{ marginBottom: '0.8rem' }}>75 v. Chr.</p>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.2rem' }}>Entführung durch Piraten</h2>
            <p>
              Auf dem Weg nach Rhodos wurde Caesar von kilikischen Piraten gefangen genommen. Das berühmte Ereignis zeigt seinen Charakter: Als sie 20 Talente Lösegeld forderten, bestand er darauf, auf <strong style={{ color: 'var(--foreground)' }}>50 Talente</strong> zu erhöhen. Während der Gefangenschaft behandelte er die Piraten wie seine Untergebenen und drohte ihnen lachend, sie später kreuzigen zu lassen.
            </p>
            <p>
              Nach seiner Freilassung tat er genau das: Er stellte eine Flotte auf, jagte sie und ließ sie hängen. Damit demonstrierte er schon früh die Konsequenz und Härte, die seinen späteren Aufstieg prägen sollten.
            </p>
          </ScrollReveal>
          <ScrollReveal delay="delay-1">
            <img src="/gallicum.png" alt="Antike Seefahrt" className="zigzag-img" />
          </ScrollReveal>
        </div>

        {/* ZIGZAG 3: Rubikon */}
        <div className="zigzag-row">
          <ScrollReveal className="zigzag-text">
            <p className="label" style={{ marginBottom: '0.8rem' }}>Januar 49 v. Chr.</p>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.2rem' }}>Der Übergang über den Rubikon</h2>
            <p>
              Nach dem Ende des Gallischen Krieges verlangte der Senat Caesars Rückkehr ohne Heer. Caesar wusste: Ohne den Schutz seines Amtes würde er von seinen Feinden (wie Cato dem Jüngeren) sofort angeklagt. Am <strong style={{ color: 'var(--foreground)' }}>10. Januar 49 v. Chr.</strong> überschritt er den Grenzfluss Rubikon. 
            </p>
            <p>
              Mit dem Ausruf <strong style={{ fontStyle: 'italic' }}>„Alea iacta est“</strong> (Die Würfel sind gefallen) beging er Hochverrat an der Republik und löste den Bürgerkrieg gegen Pompeius Magnus aus. Es war der Anfang vom Ende der Römischen Republik.
            </p>
          </ScrollReveal>
          <ScrollReveal delay="delay-1">
            <img src="/rubicon.png" alt="Caesar am Rubikon" className="zigzag-img" />
          </ScrollReveal>
        </div>

        {/* Timeline: Politischer Aufstieg */}
        <ScrollReveal>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', paddingTop: '2rem' }}>Meilensteine der Macht</h2>
        </ScrollReveal>

        <div className="timeline">
          <div className="timeline-item">
            <ScrollReveal>
              <p className="label" style={{ marginBottom: '0.5rem' }}>63 v. Chr.</p>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Pontifex Maximus</h3>
              <p>
                Gegen erfahrene Konkurrenten gewann Caesar das Amt des obersten Priesters. Er zog enorme Kredite auf, um Wählerstimmen zu kaufen – eine riskante "Alles-oder-nichts"-Wette, die aufging.
              </p>
            </ScrollReveal>
          </div>

          <div className="timeline-item">
            <ScrollReveal>
              <p className="label" style={{ marginBottom: '0.5rem' }}>60 v. Chr.</p>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Das Erste Triumvirat</h3>
              <div className="info-box gold">
                <p style={{ margin: 0, fontSize: '0.95rem' }}>
                  Bündnis mit <strong style={{ color: 'var(--foreground)' }}>Pompeius Magnus</strong> (Militär) und <strong style={{ color: 'var(--foreground)' }}>Crassus</strong> (Finanzen). Gemeinsam kontrollierten sie die Politik Roms am Senat vorbei.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="timeline-item">
            <ScrollReveal>
              <p className="label" style={{ marginBottom: '0.5rem' }}>45 v. Chr.</p>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Kalenderreform & Lupercalien</h3>
              <p>
                Caesar führte den <strong style={{ color: 'var(--foreground)' }}>Julianischen Kalender</strong> ein. Kurz vor seinem Tod, beim Fest der Lupercalia, bot ihm sein Vertrauter Marcus Antonius demonstrativ eine Königskrone an. Caesar lehnte dreimal ab – das Volk applaudierte, doch die Verschwörer im Senat sahen darin eine Bestätigung ihrer schlimmsten Befürchtungen.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* ZIGZAG 4: Das Ende */}
        <div className="zigzag-row reverse" style={{ marginTop: '3rem' }}>
          <ScrollReveal className="zigzag-text">
            <p className="label" style={{ marginBottom: '0.8rem' }}>15. März 44 v. Chr.</p>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.2rem' }}>Die Iden des März</h2>
            <p>
              In der Kurie des Pompeius, wo der Senat tagte, wurde Caesar von einer Gruppe Verschwörer unter der Leitung von <strong style={{ color: 'var(--foreground)' }}>Brutus und Cassius</strong> umzingelt. 
            </p>
            <p>
              Nach 23 Messerstichen brach Caesar am Fuße der Statue seines ehemaligen Rivalen Pompeius zusammen. Er hinterließ ein Machtvakuum, das schließlich durch seinen Adoptivsohn <strong style={{ color: 'var(--foreground)' }}>Augustus</strong> und das Zeitalter des Kaisertums gefüllt wurde.
            </p>
          </ScrollReveal>
          <ScrollReveal delay="delay-1">
            <img src="/senate.png" alt="Das Attentat im Senat" className="zigzag-img" />
          </ScrollReveal>
        </div>

      </section>
    </div>
  );
}
