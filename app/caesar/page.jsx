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

        {/* ZIGZAG 4: Die Bedeutung der Iden */}
        <div className="zigzag-row reverse" style={{ marginTop: '3rem' }}>
          <ScrollReveal className="zigzag-text">
            <p className="label" style={{ marginBottom: '0.8rem' }}>15. März 44 v. Chr.</p>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.2rem' }}>Die Iden des März</h2>
            <p>
              Im römischen Kalender bezeichnete der Begriff <strong style={{ color: 'var(--foreground)' }}>„Idus"</strong> (latinisiert: Iden) ursprünglich den Tag des Vollmonds – und damit je nach Monat den 13. oder 15. Tag. Die Iden des März (<em>Idus Martiae</em>) fielen stets auf den <strong style={{ color: 'var(--foreground)' }}>15. März</strong> und galten als religiöser Festtag zu Ehren des Kriegsgottes Mars, Schutzgott Roms. Dass ausgerechnet an diesem Tag Caesar ermordet wurde, empfanden die Römer als besonders schicksalhaft.
            </p>
            <p>
              In der Kurie des Pompeius-Theaters umzingelten über <strong style={{ color: 'var(--foreground)' }}>60 Verschwörer</strong> den Diktator – angeführt von <strong style={{ color: 'var(--foreground)' }}>Marcus Junius Brutus</strong> und <strong style={{ color: 'var(--foreground)' }}>Gaius Cassius Longinus</strong>. Nach 23 Stichen brach Caesar am Fuße der Statue seines ehemaligen Rivalen Pompeius zusammen.
            </p>
          </ScrollReveal>
          <ScrollReveal delay="delay-1">
            <img src="/senate.png" alt="Das Attentat im Senat" className="zigzag-img" />
          </ScrollReveal>
        </div>

        {/* Full-width: Warum & Wer schrieb darüber */}
        <ScrollReveal>
          <div style={{ margin: '2rem 0 0' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Quellen: Wer schrieb über die Iden des März – und warum?</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>

              {/* Sueton */}
              <div className="card">
                <p className="label" style={{ marginBottom: '0.5rem' }}>ca. 121 n. Chr.</p>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>Sueton</h4>
                <p style={{ fontSize: '0.95rem' }}>
                  <strong style={{ color: 'var(--foreground)' }}>Gaius Suetonius Tranquillus</strong> schrieb unter Kaiser Hadrian sein Werk <em>De vita Caesarum</em> (Über das Leben der Caesaren). Er hatte Zugang zu kaiserlichen Archiven und schildert das Attentat mit grausamer Nüchternheit: Er berichtet, dass Caesar nach dem ersten Stich schweigend blieb – und sich am Ende sein Gewand über den Kopf zog, um würdevoll zu sterben. Von den 23 Wunden sei nur eine einzige tödlich gewesen (Wunde Nr. 2, so der Arzt Antistius).
                </p>
                <div className="info-box" style={{ marginTop: '1rem' }}>
                  <p style={{ margin: 0, fontSize: '0.85rem' }}>
                    <strong>Zweck:</strong> Sueton wollte ein umfassendes Porträt der Persönlichkeit schreiben – Stärken und Schwächen gleichermaßen. Er gilt als einer der ersten „investigativen" Biografen der Antike.
                  </p>
                </div>
              </div>

              {/* Plutarch */}
              <div className="card">
                <p className="label" style={{ marginBottom: '0.5rem' }}>ca. 100 n. Chr.</p>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>Plutarch</h4>
                <p style={{ fontSize: '0.95rem' }}>
                  <strong style={{ color: 'var(--foreground)' }}>Mestrios Plutarchos</strong> – griechischer Philosoph – verfasste die <em>Bioi paralleloi</em> (Parallele Lebensbeschreibungen), in denen er je einen griechischen und einen römischen Staatsmann vergleicht. Caesar wird mit Alexander dem Großen verglichen. Plutarch betont die Warnsignale vor den Iden (Haruspex Spurinna warnte ihn mit „Hüte dich vor den Iden des März!") und beschreibt, wie 23 Verschwörer auf Caesar einstachen.
                </p>
                <div className="info-box" style={{ marginTop: '1rem' }}>
                  <p style={{ margin: 0, fontSize: '0.85rem' }}>
                    <strong>Zweck:</strong> Plutarch suchte moralische Vorbilder und Gegenbilder für seine griechische und römische Leserschaft – seine Biografie ist moralisch-philosophisch geprägt, nicht politisch.
                  </p>
                </div>
              </div>

              {/* Shakespeare */}
              <div className="card">
                <p className="label" style={{ marginBottom: '0.5rem' }}>1599 n. Chr.</p>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>Shakespeare</h4>
                <p style={{ fontSize: '0.95rem' }}>
                  Das berühmteste Zitat – <strong style={{ color: 'var(--foreground)' }}><em>„Et tu, Brute?"</em></strong> (Auch du, Brutus?) – stammt <strong style={{ color: 'var(--foreground)' }}>nicht</strong> aus antiken Quellen, sondern aus dem Theaterstück <em>Julius Caesar</em> von <strong style={{ color: 'var(--foreground)' }}>William Shakespeare</strong> (uraufgeführt 1599). Plutarch erwähnt, Caesar habe zuletzt nichts mehr gesagt. Sueton überliefert die griechische Variante: <em>„καὶ σύ, τέκνον"</em> (Auch du, mein Kind?). Shakespeares Version wurde so mächtig, dass sie heute für historisch gehalten wird.
                </p>
                <div className="info-box" style={{ marginTop: '1rem' }}>
                  <p style={{ margin: 0, fontSize: '0.85rem' }}>
                    <strong>Zweck:</strong> Shakespeare schrieb ein politisches Drama für das elisabethanische England – eine Warnung vor Tyrannei und den Folgen des Meuchelmords.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* Pull Quote Finale */}
        <ScrollReveal>
          <blockquote className="pull-quote" style={{ marginTop: '4rem' }}>
            „Statt die Republik zu retten, beendeten die Mörder sie."
            <p className="pull-quote-attr">— Historische Schlussfolgerung. Die <em>Liberatores</em> lösten 13 Jahre Bürgerkrieg aus – bis Augustus 27 v. Chr. das Kaisertum begründete.</p>
          </blockquote>
        </ScrollReveal>

      </section>
    </div>
  );
}
