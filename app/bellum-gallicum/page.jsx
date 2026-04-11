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
                <span className="stat-number">800.000</span>
                <div className="stat-label">Gallier getötet (Plutarch)</div>
              </div>
              <div className="stat-card">
                <span className="stat-number">1 Mio.</span>
                <div className="stat-label">Versklavte Gallier</div>
              </div>
              <div className="stat-card">
                <span className="stat-number">8</span>
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
                Die berühmtesten Anfangsworte der lateinischen Schulprosa. Unten: die Schülerübersetzung von Nabil Oliverio (Kant-Gymnasium Spandau) und der Originaltext gegenübergestellt.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
            {/* Originaltext */}
            <ScrollReveal>
              <div className="card" style={{ borderTop: '3px solid var(--accent)' }}>
                <p className="label" style={{ marginBottom: '1rem' }}>Originaltext (Caesar, BG 1.1)</p>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.05rem', lineHeight: '1.8', fontStyle: 'italic', color: 'var(--foreground)' }}>
                  „Gallia est omnis divisa in partes tres, quarum unam incolunt Belgae, aliam Aquitani, tertiam qui ipsorum lingua Celtae, nostra Galli appellantur. Hi omnes lingua, institutis, legibus inter se differunt. Gallos ab Aquitanis Garumna flumen, a Belgis Matrona et Sequana dividit. Horum omnium fortissimi sunt Belgae, propterea quod a cultu atque humanitate provinciae longissime absunt..."
                </p>
              </div>
            </ScrollReveal>

            {/* Schülerübersetzung */}
            <ScrollReveal delay="delay-1">
              <div className="card" style={{ borderTop: '3px solid var(--accent-warm)' }}>
                <p className="label" style={{ color: 'var(--accent-warm)', marginBottom: '1rem' }}>Schülerübersetzung (Nabil Oliverio)</p>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--foreground)' }}>
                  „Ganz Gallien ist in drei Teile geteilt, deren einen die Belger bewohnen, die anderen die Aquitanier, den dritten diejenigen, die in ihrer eigenen Sprache Celten, in unserer Gallier genannt werden. Diese unterscheiden sich alle durch die Sprache, Einrichtungen und Gesetze. Der Fluss Garonne teilt die Gallier von den Aquitanern, die Marne und die Seine von den Belgern. Von denen allen sind die Belger die tapfersten..."
                </p>
                <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(255,159,10,0.08)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  📖 Aus dem Lateinheft des Schülers Nabil Oliverio, Kant-Gymnasium Spandau 2026
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── KRIEGSVERLAUF ─────────────────────────────── */}
      <section className="container" style={{ padding: '6rem 2rem' }}>

        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="label" style={{ marginBottom: '0.8rem' }}>Historische Analyse</p>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Der Kriegsverlauf</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              Der Gallische Krieg war kein defensiver Schutzkrieg – er war Caesars bewusst herbeigeführtes Machtprojekt, finanziert durch Beutenanteile und gerechtfertigt durch clevere Propaganda.
            </p>
          </div>
        </ScrollReveal>

        {/* ZIGZAG 1: Ursachen */}
        <div className="zigzag-row">
          <ScrollReveal>
            <p className="label" style={{ marginBottom: '0.8rem' }}>58 v. Chr.</p>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.2rem' }}>Der Helvetier-Feldzug: Ein konstruierter Kriegsgrund</h2>
            <p>
              Der Stamm der <strong style={{ color: 'var(--foreground)' }}>Helvetier</strong> (in der heutigen Schweiz beheimatet) plante eine groß angelegte Wanderung nach Westgallien. Caesar behauptete, sie seien eine Bedrohung für die mit Rom verbündeten <strong style={{ color: 'var(--foreground)' }}>Häduer</strong> und marschierte ein. Tatsächlich war er gezwungen, Gallien zu einem Schauplatz zu machen – nur militärischer Ruhm und Beutegelder konnten seine enormen Schulden in Rom tilgen.
            </p>
            <p>
              Nach der verheerenden Niederlage der Helvetier am <strong style={{ color: 'var(--foreground)' }}>Mons Bibracte</strong> (Sommer 58 v. Chr.) wurden die Überlebenden zur Rückkehr in ihre Heimat gezwungen. Caesar betonte in seinen <em>Commentarii</em>, er habe die Verbündeten Roms geschützt – verschweigt aber, dass er den Konflikt aktiv eskaliert hatte.
            </p>
          </ScrollReveal>
          <ScrollReveal delay="delay-1">
            <img src="/gallicum.png" alt="Gallische Landschaft" className="zigzag-img" />
          </ScrollReveal>
        </div>

        {/* Info Box: Propaganda */}
        <ScrollReveal>
          <div className="info-box gold" style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>🎭 Die Propagandafunktion der Commentarii</h3>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>
              Caesar schrieb seine <em>Commentarii de Bello Gallico</em> <strong style={{ color: 'var(--foreground)' }}>in der dritten Person</strong> (z. B. „Caesar befahl..."), was ihnen den Anschein objektiver Berichterstattung gab. In Wirklichkeit war das Werk hochpolitische Rechtfertigungsschrift: Er musste dem Senat erklären, warum er im Namen Roms acht Jahre lang Krieg ohne formellen Senatsbeschluss führte. Heute gilt das Werk als ein Meisterwerk der politischen Rhetorik.
            </p>
          </div>
        </ScrollReveal>

        {/* ZIGZAG 2: Ariovist */}
        <div className="zigzag-row reverse">
          <ScrollReveal>
            <p className="label" style={{ marginBottom: '0.8rem' }}>58 v. Chr.</p>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.2rem' }}>Ariovist und der Germanen-Feldzug</h2>
            <p>
              Nach dem Helvetier-Feldzug riefen die Häduer Caesar um Hilfe gegen den germanischen Fürsten <strong style={{ color: 'var(--foreground)' }}>Ariovist</strong>, der mit 120.000 Sueben in Gallien eingefallen war. In der <strong style={{ color: 'var(--foreground)' }}>entscheidenden Schlacht in der Ebene des Elsass</strong> besiegte Caesar die Germanen durch eine schnelle Flügelaktion. Ariovist entkam über den Rhein.
            </p>
            <p>
              Damit festigte Caesar seinen Ruf als Retter Roms, obwohl er gegen einen Mann kämpfte, den der Senat wenige Jahre zuvor als „Freund und Verbündeter des Römischen Volkes" (amicus et socius) anerkannt hatte.
            </p>
          </ScrollReveal>
          <ScrollReveal delay="delay-1">
            <img src="/gallicum-hero.png" alt="Legion auf dem Marsch" className="zigzag-img" />
          </ScrollReveal>
        </div>

        {/* ZIGZAG 3: Rheinbrücke */}
        <div className="zigzag-row">
          <ScrollReveal>
            <p className="label" style={{ marginBottom: '0.8rem' }}>55 v. Chr.</p>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.2rem' }}>Die Rheinbrücke: Roms Ingenieurskunst</h2>
            <p>
              55 v. Chr. machte Caesar mit einer der beeindruckendsten Ingenieursleistungen der Antike auf sich aufmerksam: In nur <strong style={{ color: 'var(--foreground)' }}>10 Tagen</strong> ließ er eine vollständige Holzbrücke über den Rhein bauen – 400 Meter lang. Dann marschierte er 18 Tage lang in Germanien ein, verbrannte einige Dörfer als Machtdemonstration und ließ die Brücke beim Rückzug wieder abreißen.
            </p>
            <p>
              Die Botschaft an die germanischen Stämme war eindeutig: Der Rhein ist keine Grenze für Rom. Caesar selbst widmete dem Brückenbau im vierten Buch der <em>Commentarii</em> eine ungewöhnlich detaillierte technische Beschreibung – bewusst, um dem Senat (und der Nachwelt) Roms technische Überlegenheit zu demonstrieren.
            </p>
          </ScrollReveal>
          <ScrollReveal delay="delay-1">
            <img src="/caesar-hero.png" alt="Römer in der Antike" className="zigzag-img" />
          </ScrollReveal>
        </div>

        {/* BIG SECTION: Alesia */}
        <ScrollReveal>
          <div style={{ marginTop: '4rem', textAlign: 'center', marginBottom: '3rem' }}>
            <p className="label" style={{ marginBottom: '0.8rem' }}>52 v. Chr. – Das Finale</p>
            <h2 style={{ fontSize: '3rem' }}>Vercingetorix & die Belagerung von Alesia</h2>
          </div>
        </ScrollReveal>

        <div className="zigzag-row reverse">
          <ScrollReveal>
            <p style={{ fontSize: '1.1rem' }}>
              <strong style={{ color: 'var(--foreground)' }}>Vercingetorix</strong>, Fürst der Arverner, war der klügste Gegner, dem Caesar je begegnete. Er sammelte 52 v. Chr. fast alle gallischen Stämme in einem vereinten Aufstand und wandte die Strategie der <strong style={{ color: 'var(--foreground)' }}>verbrannten Erde</strong> an – gallische Städte wurden auf seinen Befehl hin selbst niedergebrannt, um Caesars Legionen keine Versorgung zu geben.
            </p>
            <div className="info-box" style={{ marginTop: '2rem' }}>
              <h4 style={{ marginBottom: '0.5rem' }}>Die doppelte Belagerung von Alesia</h4>
              <p style={{ margin: 0, fontSize: '0.92rem' }}>
                <strong style={{ color: 'var(--foreground)' }}>Circumvallation:</strong> 15,4 km Belagerungsring um die Bergfestung Alesia, in der sich Vercingetorix mit ca. 80.000 Kämpfern verschanzt hatte.<br/><br/>
                <strong style={{ color: 'var(--foreground)' }}>Contravallation:</strong> Ein weiterer, 21,7 km langer Ring nach außen, um das gallische Entsatzheer (ca. 250.000 Mann) abzuwehren.<br/><br/>
                Caesars rund <strong style={{ color: 'var(--foreground)' }}>50.000–60.000 Legionäre</strong> kämpften gleichzeitig auf zwei Fronten und siegten. Vercingetorix kapitulierte, wurde 6 Jahre in Rom gefangen gehalten und bei Caesars Triumph 46 v. Chr. erwürgt.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay="delay-1">
            <img src="/caesar.png" alt="Caesar nach dem Sieg" className="zigzag-img" />
          </ScrollReveal>
        </div>

        {/* Pull Quote abschließend */}
        <ScrollReveal>
          <blockquote className="pull-quote" style={{ marginTop: '4rem' }}>
            „Gallia est omnis divisa in partes tres."
            <p className="pull-quote-attr">— Caesar, Commentarii de Bello Gallico, Buch I. Beginn des meistgelesenen lateinischen Textes der Geschichte.</p>
          </blockquote>
        </ScrollReveal>

      </section>
    </div>
  );
}
