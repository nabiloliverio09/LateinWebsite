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

          <div style={{ maxWidth: '800px', margin: '3rem auto 0', padding: '1.5rem', backgroundColor: 'var(--card-bg)', borderRadius: '12px', borderLeft: '4px solid var(--accent)' }}>
            <p style={{ margin: '0 0 1rem 0', fontSize: '1.05rem', lineHeight: '1.6' }}>
              <strong>Hintergrundwissen:</strong> Die Berichte über den Gallischen Krieg sind dabei in 8 Bücher aufgeteilt, wobei das letzte Buch nicht von Caesar selbst geschrieben wurde, sondern von seinem hohen Offizier, Freund und Sekretär Aulus Hirtius.
            </p>
            <p style={{ margin: '0 0 1rem 0', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Die Bücher folgen dem annalistischen Prinzip (von <em>annales libri</em>, Jahrbücher). Für jedes Kriegsjahr wurde also ein Buch geschrieben, in dem die Handlung und der Ablauf des Krieges in diesem Jahr geschildert werden.
            </p>
            <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: '1.6' }}>
              Caesar schrieb seine Bücher zudem bewusst in der 3. Person, um Objektivität und ein Gefühl der Souveränität zu erwecken (eine klare Form der Propaganda, um eigene subjektive Sichten und Ziele zu verdecken).
            </p>
          </div>
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

      {/* ── KRIEGSVERLAUF (Timeline) ─────────────────────────────── */}
      <section className="container" style={{ padding: '6rem 2rem' }}>
        <ScrollReveal>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Der Kriegsverlauf</h2>
        </ScrollReveal>

        <div className="timeline">
          {/* Phase 1 */}
          <div className="timeline-item">
            <ScrollReveal>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Ursprung und Helvetier-Feldzug (58 v. Chr.)</h2>
              <p>
                Gallien war von verschiedenen keltischen Stämmen besiedelt. Als Caesar sein Prokonsulat in der <em>Gallia Narbonensis</em> antrat, nutzte er die geplante Massenabwanderung des Stammes der <strong>Helvetier</strong> als Vorwand. Er behauptete, sie würden verbündete Stämme Roms (die Häduer) plündern, besiegte sie vernichtend bei Bibracte und zwang sie zur Umkehr.
              </p>
            </ScrollReveal>
          </div>

          {/* Phase 2 */}
          <div className="timeline-item">
            <ScrollReveal>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Rheinübergang und Britannien (55–54 v. Chr.)</h2>
              <p>
                Caesar war der Meister der Einschüchterung. Um den germanischen Stämmen Roms technische Überlegenheit zu demonstrieren, ließ seine Armee innerhalb von nur zehn Tagen eine massive <strong>Rheinbrücke</strong> bauen, marschierte für 18 Tage nach Germanien ein und zerstörte die Brücke auf dem Rückweg wieder.
              </p>
              <p>
                Im Anschluss plante er die erste römische Expedition über den Ärmelkanal nach <strong>Britannien</strong>, welche – obwohl strategisch eher wirkungslos – in Rom für unglaubliches Aufsehen und Bewunderung sorgte.
              </p>
            </ScrollReveal>
          </div>

          {/* Phase 3 */}
          <div className="timeline-item">
            <ScrollReveal>
              <div className="card" style={{ backgroundColor: 'var(--card-bg)', margin: '2rem 0' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ff3b30' }}>Die Rebellion von Ambiorix (54 v. Chr.)</h3>
                <p style={{ margin: 0 }}>
                  Im Winter brach ein schwerer Aufstand der Eburonen unter <strong>Ambiorix</strong> aus. Ein komplettes römisches Kastell (ca. 15 Kohorten unter Sabinus und Cotta) wurde in einen Hinterhalt gelockt und niedergemetzelt. Dies war Caesars schwerste bis dahin erlittene Niederlage. Er wandte extreme Brutalität an, um den Aufstand niederzuschlagen.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Phase 4 */}
          <div className="timeline-item" style={{ paddingBottom: '0' }}>
            <ScrollReveal>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Vercingetorix & Die Schlacht um Alesia (52 v. Chr.)</h2>
              <p>
                Im Jahr 52 v. Chr. sah sich Caesar der ultimativen Bedrohung gegenüber: Ein großflächiger, vereinter gallischer Aufstand unter dem Arverner <strong>Vercingetorix</strong>.
              </p>
              <p>
                Die Entscheidung fiel bei der Festung <strong>Alesia</strong>. In einer militärisch beispiellosen Meisterleistung ließ Caesar einen gewaltigen Doppelring aus Befestigungen errichten – eine 15 km lange Mauer nach innen (gegen Vercingetorix) und eine 21 km lange Mauer nach außen (gegen ein riesiges gallisches Entsatzheer von 250.000 Mann). Die Römer gewannen die Doppelschlacht, Vercingetorix kapitulierte und ganz Gallien wurde dauerhaft römische Provinz.
              </p>
            </ScrollReveal>
          </div>
        </div>

      </section>
    </div>
  );
}
