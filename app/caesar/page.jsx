import Head from 'next/head';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Julius Caesar - Biografie & Geschichte',
  description: 'Leben, Aufstieg und Ermordung von Gaius Julius Caesar. Eine detaillierte Übersicht.',
};

export default function CaesarPage() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '5rem 1.5rem',
        borderBottom: '1px solid var(--nav-border)',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <ScrollReveal>
            <p style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Porträt
            </p>
            <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', marginBottom: '1.5rem' }}>
              Gaius Julius Caesar
            </h1>
            <p className="hero-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Der berühmteste Römer der Geschichte. Vom aristokratischen Aufsteiger zum Dictator perpetuo. Entdecken Sie das Leben des Mannes, dessen Name zum Synonym für kaiserliche Macht wurde.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay="delay-1" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div style={{
               width: '100%',
               maxWidth: '900px',
               height: '500px',
               marginTop: '4rem',
               borderRadius: 'var(--radius-lg)',
               backgroundImage: 'url(/caesar.png)',
               backgroundSize: 'cover',
               backgroundPosition: 'center 20%',
               boxShadow: 'var(--shadow-lg)'
            }} />
          </ScrollReveal>
        </div>
      </section>

      {/* Content Section mit Timeline */}
      <section className="container" style={{ padding: '6rem 1.5rem', maxWidth: '800px' }}>
        
        <ScrollReveal>
          <div className="quote-box">
            „Lieber der Erste hier in diesem armseligen Bergdorf als der Zweite in Rom.“
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem', fontStyle: 'normal' }}>– Caesar, auf der Durchreise in den Alpen (überliefert von Plutarch)</div>
          </div>
        </ScrollReveal>

        <div className="timeline">
          {/* Phase 1 */}
          <div className="timeline-item">
            <ScrollReveal>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Herkunft und frühe Jugend</h2>
              <p>
                Gaius Julius Caesar wurde am 13. Juli 100 v. Chr. in die Patrizierfamilie der Julier (<strong>gens Iulia</strong>) geboren. Laut eigener familiärer Propaganda stammten sie von Iulus ab, dem Sohn des Aeneas, und somit letztlich direkt von der Göttin Venus.
              </p>
              <p>
                Während Sullas Diktatur schwebte der junge Caesar in Lebensgefahr. Er weigerte sich, sich von seiner Frau Cornelia (der Tochter von Sullas politischem Feind Cinna) zu scheiden, musste aus Rom fliehen und beging seinen frühen Militärdienst in Kleinasien, wo er die <em>Corona Civica</em> (Bürgerkrone) für die Rettung eines Mitbürgers erhielt.
              </p>
            </ScrollReveal>
          </div>

          {/* Phase 2 */}
          <div className="timeline-item">
            <ScrollReveal>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Die Piraten-Episode (75 v. Chr.)</h2>
              <p>
                Auf einer Reise nach Rhodos, um Rhetorik zu studieren, wurde Caesar von kilikischen Piraten entführt. Als sie 20 Talente Lösegeld forderten, lachte er sie aus und schlug vor, sie sollten stattdessen 50 verlangen. Während der 38-tägigen Gefangenschaft behandelte er die Piraten fast wie seine eigenen Leibwächter und drohte scherzhaft, sie später alle kreuzigen zu lassen. Nach seiner Freilassung rüstete er auf eigene Faust eine Flotte aus, jagte die Piraten und machte seine Drohung wahr.
              </p>
            </ScrollReveal>
          </div>

          {/* Phase 3 */}
          <div className="timeline-item">
            <ScrollReveal>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Aufstieg zum Pontifex Maximus (63 v. Chr.)</h2>
              <p>
                Durch immense Bestechungsgelder und geschicktes Netzwerken gewann er 63 v. Chr. die Lebenszeit-Stellung des <strong>Pontifex Maximus</strong> (oberster Priester). Dies brachte ihm nicht nur enorme politische Reichweite, sondern auch das Recht, im Zentrum der Macht, nahe dem Forum Romanum, zu residieren.
              </p>
            </ScrollReveal>
          </div>

          {/* Phase 4 */}
          <div className="timeline-item">
            <ScrollReveal>
              <div className="card" style={{ backgroundColor: 'var(--card-bg)', margin: '2rem 0' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent)' }}>Das Erste Triumvirat (60 v. Chr.)</h3>
                <p style={{ margin: 0 }}>
                  Caesar schloss ein inoffizielles, geheimes Bündnis mit <strong>Pompeius</strong> (dem damals erfolgreichsten General Roms) und <strong>Crassus</strong> (dem reichsten Mann Roms). Dieses Bündnis sicherte ihm das Konsulat im Jahr 59 v. Chr., bei dem er radikale Ackergesetze durchboxte. Anschließend ließ er sich das Prokonsulat in Gallien geben – der Startschuss für sein lukrativstes Unternehmen. 
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Phase 5 */}
          <div className="timeline-item">
            <ScrollReveal>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Bürgerkrieg und Pharsalos (49–48 v. Chr.)</h2>
              <p>
                Nach dem Gallischen Krieg sollte Caesar seine Armeen aufgeben. Stattdessen überquerte er am 10. Januar 49 v. Chr. den Grenzfluss Rubikon (<em>„Alea iacta est“</em>) und marschierte auf Rom. Pompeius und weite Teile des Senats flohen nach Griechenland.
              </p>
              <p>
                In der brillanten <strong>Schlacht von Pharsalos</strong> (48 v. Chr.) besiegte Caesar das doppelt so große Heer des Pompeius durch ein Manöver: Er versteckte eine vierte Linie hinter seiner Kavallerie, die Pompeius' Reiter völlig überraschte.
              </p>
            </ScrollReveal>
          </div>

          {/* Phase 6 */}
          <div className="timeline-item">
            <ScrollReveal>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Diktatur, Reformen und Kleopatra</h2>
              <p>
                Nach seiner Ankunft in Ägypten unterstützte er <strong>Kleopatra</strong> im ägyptischen Thronstreit und zeugte mit ihr einen Sohn (Kaisarion). Zurück in Rom wurde er schließlich zum <em>Dictator perpetuo</em> (Diktator auf Lebenszeit) ernannt.
              </p>
              <p>
                Zu seinen wichtigsten, nachhaltigen Reformen gehört die Einführung des <strong>Julianischen Kalenders</strong> (365 Tage mit Schaltjahr), der erst im 16. Jahrhundert durch Papst Gregor modifiziert wurde.
              </p>
            </ScrollReveal>
          </div>

          {/* Phase 7 (Ende) */}
          <div className="timeline-item" style={{ paddingBottom: '0' }}>
            <ScrollReveal>
              <div style={{ padding: '3rem', backgroundColor: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', textAlign: 'center', boxShadow: 'var(--shadow-sm)', border: '1px solid rgba(255,59,48,0.2)' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#ff3b30' }}>Die Iden des März</h2>
                <p style={{ margin: '0 auto', maxWidth: '600px', fontSize: '1.1rem' }}>
                  Am 15. März 44 v. Chr. trat Caesar ans Licht des Senats in der Kurie des Pompeius. Eine Gruppe von über 60 Senatoren, angeführt von Brutus und Cassius, stach 23 Mal auf ihn ein. Die Verschwörer nannten sich <em>Liberatores</em> und glaubten, so die Republik zu retten. Stattdessen folgten 13 Jahre Bürgerkrieg, bis Caesars Adoptivsohn Octavian (Augustus) den Untergang der Republik besiegelte.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
