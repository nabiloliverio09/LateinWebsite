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
                <span className="stat-number">25°</span>
                <div className="stat-label">Messerstiche (15. März 44)</div>
              </div>
              <div className="stat-card">
                <span className="stat-number">800.000</span>
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
              Caesar wurde am <strong style={{ color: 'var(--foreground)' }}>13. Juli 100 v. Chr.</strong> in eine alteingesessene Patrizierfamilie, die <em>gens Iulia</em>, geboren. Die Familie leitete ihren Ursprung von <em>Iulus</em> ab, dem Sohn des Trojaners Aeneas und damit von der Göttin Venus – ein Mythos, den Caesar zeitlebens politisch nutzte.
            </p>
            <p>
              Sein Vater, ebenfalls <em>Gaius Julius Caesar</em>, war Praetor der Provinz Asia. Nach dessen frühem Tod (85 v. Chr.) wurde Caesar von seiner Mutter Aurelia Cotta erzogen, die als strenge, außergewöhnlich gebildete Frau gilt. Als Sulla 83 v. Chr. die Diktatur ergriff, befahl er Caesar, sich von seiner Frau <strong style={{ color: 'var(--foreground)' }}>Cornelia</strong> zu scheiden (Tochter des Sulla-Feindes Cinna). Caesar weigerte sich – eine lebensgefährliche Entscheidung. Er floh aus Rom, wurde aber dank der einflussreichen Fürsprache von Vestal-Priesterinnen und Verwandten schließlich begnadigt.
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
              Auf der Fahrt nach Rhodos, um dort bei dem Rhetoriker Appolonius Molon Redekunst zu studieren, wurde Caesars Schiff bei der Insel Pharmakussa von <strong style={{ color: 'var(--foreground)' }}>kilikischen Piraten</strong> aufgebracht. Als die Räuber ein Lösegeld von 20 Talenten verlangten, lachte er sie nach Überlieferung des Plutarch aus – und bestand darauf, das Lösegeld auf <strong style={{ color: 'var(--foreground)' }}>50 Talente</strong> zu erhöhen, da 20 für einen Mann seiner Bedeutung eine Beleidigung seien.
            </p>
            <p>
              Während der rund 38 Tage andauernden Gefangenschaft las Caesar seinen Entführern Reden und Gedichte vor, beschimpfte sie freundschaftlich als Barbaren, wenn sie ihm nicht applaudierten – und kündigte ihnen beiläufig an, sie nach seiner Freilassung kreuzigen zu lassen. Die Piraten hielten das für einen Scherz. Nach Zahlung des Lösegelds rüstete Caesar auf eigene Kosten eine Flotte aus, ließ die Piraten verfolgen, gefangennehmen und tatsächlich kreuzigen.
            </p>
          </ScrollReveal>
          <ScrollReveal delay="delay-1">
            <img src="/gallicum.png" alt="Antike Hafenszene" className="zigzag-img" />
          </ScrollReveal>
        </div>

        {/* Timeline: Politischer Aufstieg */}
        <ScrollReveal>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', paddingTop: '2rem' }}>Der politische Aufstieg</h2>
        </ScrollReveal>

        <div className="timeline">
          <div className="timeline-item">
            <ScrollReveal>
              <p className="label" style={{ marginBottom: '0.5rem' }}>69 v. Chr.</p>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Quaestor in Hispania</h3>
              <p>
                Caesar begann den traditionellen <em>cursus honorum</em> als <strong style={{ color: 'var(--foreground)' }}>Quaestor</strong> in der Provinz Hispania Ulterior. Bei einer Statue Alexanders des Großen soll er in Tränen ausgebrochen sein – mit den Worten, Alexander habe in seinem Alter bereits so viel erreicht, während er selbst noch nichts geleistet habe.
              </p>
            </ScrollReveal>
          </div>

          <div className="timeline-item">
            <ScrollReveal>
              <p className="label" style={{ marginBottom: '0.5rem' }}>65 v. Chr.</p>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Aedil und populäre Öffentlichkeitsarbeit</h3>
              <p>
                Als kurulischer <strong style={{ color: 'var(--foreground)' }}>Aedil</strong> war Caesar für die öffentlichen Spiele zuständig. Er verschuldete sich immens, um dem Volk prächtige Gladiatorenkämpfe und Tierhetzen auszurichten. 320 Gladiatorenpaare traten allein zu den Gedächtnisspielen für seinen Vater auf. Die Beliebtheit, die er sich so erwarb, war enormes politisches Kapital.
              </p>
            </ScrollReveal>
          </div>

          <div className="timeline-item">
            <ScrollReveal>
              <p className="label" style={{ marginBottom: '0.5rem' }}>63 v. Chr.</p>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Pontifex Maximus</h3>
              <p>
                Trotz überlegener Mitbewerber aus alten Adelsgeschlechtern gewann Caesar die Wahl zum <strong style={{ color: 'var(--foreground)' }}>Pontifex Maximus</strong>, dem obersten Priester Roms – ein Lebenszeit-Amt. Berühmtes Zitat an seine Mutter am Wahltag: <em>„Heute, Mutter, wirst du deinen Sohn entweder als Pontifex maximum oder als Verbannten wiedersehen."</em> Der Sieg basierte auf massiver Bestechung.
              </p>
            </ScrollReveal>
          </div>

          <div className="timeline-item">
            <ScrollReveal>
              <p className="label" style={{ marginBottom: '0.5rem' }}>60 v. Chr.</p>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Das Erste Triumvirat</h3>
              <div className="info-box gold">
                <p style={{ margin: 0, fontSize: '0.95rem' }}>
                  Caesar schloss ein inoffizielles, geheimes machtpolitisches Bündnis mit zwei der mächtigsten Männer Roms: dem General <strong style={{ color: 'var(--foreground)' }}>Pompeius Magnus</strong> und dem Milliardär <strong style={{ color: 'var(--foreground)' }}>Marcus Licinius Crassus</strong>. Pompeius wollte Landversorgung für seine Veteranen, Crassus steuerliche Erleichterungen für seine Geschäfte – Caesar sicherte sich das Konsulat 59 v. Chr. und danach das Prokonsulat in Gallien.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="timeline-item">
            <ScrollReveal>
              <p className="label" style={{ marginBottom: '0.5rem' }}>49 v. Chr.</p>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Der Rubikon-Übergang</h3>
              <p>
                Nach dem Ende des Gallischen Krieges beschlossen die Optimaten im Senat, Caesar von seinem Amt zu entheben und ihn vor Gericht zu stellen. Da er nur als amtierender Magistrat Immunität genoss, bedeutete die Rückkehr nach Rom ohne Heer seine sichere Verhaftung. Caesar überschritt in der Nacht des <strong style={{ color: 'var(--foreground)' }}>10./11. Januar 49 v. Chr.</strong> mit der Legio XIII den Fluss Rubikon – die Grenze zwischen der Provinz und dem römischen Kernland. Er sagte: <em>„Alea iacta est"</em> (Die Würfel sind gefallen). Damit begann der zweite Bürgerkrieg.
              </p>
            </ScrollReveal>
          </div>

          <div className="timeline-item">
            <ScrollReveal>
              <p className="label" style={{ marginBottom: '0.5rem' }}>48 v. Chr.</p>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Pharsalos und Kleopatra</h3>
              <p>
                In der entscheidenden <strong style={{ color: 'var(--foreground)' }}>Schlacht von Pharsalos</strong> (9. August 48 v. Chr.) standen sich ca. 22.000 Caesarianer und 45.000 Pompeianer gegenüber. Caesars Taktik: Er schwächte seinen eigenen Angriff ab und platzierte eine verdeckte vierte Linie, die Pompeius' Reiter flankierte. Pompeius floh nach Ägypten und wurde dort ermordet.  
              </p>
              <p>
                In Alexandria traf Caesar auf <strong style={{ color: 'var(--foreground)' }}>Kleopatra VII.</strong>, die sich, um von Caesar empfangen zu werden, in einem Teppich eingerollt in sein Zimmer tragen ließ. Caesar unterstützte sie im ägyptischen Thronstreit – und zeugte mit ihr einen Sohn, <em>Kaisarion</em>.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* ZIGZAG 3: Diktatur */}
        <div className="zigzag-row" style={{ marginTop: '3rem' }}>
          <ScrollReveal className="zigzag-text">
            <p className="label" style={{ marginBottom: '0.8rem' }}>44 v. Chr.</p>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.2rem' }}>Dictator perpetuo</h2>
            <p>
              Im Februar 44 v. Chr. ließ Caesar sich zum <strong style={{ color: 'var(--foreground)' }}>Dictator perpetuo</strong> (Diktator auf Lebenszeit) ernennen. Das war die endgültige Provokation. In der republikanischen Verfassung war die Diktatur immer nur ein temporäres Notinstrument – eine Besetzung auf Lebenszeit war einmalig und erschien vielen als verdecktes Königtum.
            </p>
            <p>
              Caesar führte in dieser Zeit bedeutende Reformen durch: Er reorganisierte den <strong style={{ color: 'var(--foreground)' }}>Julianischen Kalender</strong> (365 Tage mit Schalttag alle 4 Jahre, gültig bis 1582), reformierte das Münzsystem, legte Kolonien für 80.000 Bürger an und erweiterte den Senat auf 900 Mitglieder.
            </p>
          </ScrollReveal>
          <ScrollReveal delay="delay-1">
            <img src="/gallicum-hero.png" alt="Römische Legion" className="zigzag-img" />
          </ScrollReveal>
        </div>

        {/* Rote Karte: Iden des März */}
        <ScrollReveal>
          <div className="info-box red" style={{ borderRadius: 'var(--radius-lg)', borderLeft: 'none', border: '1px solid rgba(255,59,48,0.25)', background: 'rgba(255,59,48,0.05)', padding: '3rem', marginTop: '3rem', textAlign: 'center' }}>
            <p className="label" style={{ color: '#ff3b30', marginBottom: '1rem' }}>15. März 44 v. Chr.</p>
            <h2 style={{ fontSize: '2.8rem', color: '#ff3b30', marginBottom: '1.5rem' }}>Die Iden des März</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto 1.5rem', fontSize: '1.15rem' }}>
              An diesem Tag versammelten sich über <strong style={{ color: 'var(--foreground)' }}>60 Senatoren</strong> in der Kurie des Pompeius-Theaters. Diese Gruppe, die sich <em>Liberatores</em> nannte und von <strong style={{ color: 'var(--foreground)' }}>Marcus Junius Brutus</strong> und <strong style={{ color: 'var(--foreground)' }}>Gaius Cassius Longinus</strong> angeführt wurde, stach <strong style={{ color: 'var(--foreground)' }}>23 Mal</strong> auf Caesar ein. Laut Sueton rief er nicht "Et tu, Brute" – das war Shakespeare – sondern soll sich nach dem ersten Stich sein Toga-Gewand über das Gesicht gezogen haben, um würdevoll zu sterben.
            </p>
            <p style={{ maxWidth: '600px', margin: '0 auto 0', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Statt die Republik zu retten, wie erhofft, beendete das Attentat sie endgültig. 13 Jahre Bürgerkrieg folgten, bis Caesars Adoptivsohn Octavian (Augustus) als erster Kaiser Roms die Alleinherrschaft übernahm.
            </p>
          </div>
        </ScrollReveal>

      </section>
    </div>
  );
}
