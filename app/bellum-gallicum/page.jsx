import Head from 'next/head';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'De Bello Gallico - Historie & Übersetzung',
  description: 'Der Gallische Krieg, seine Schlachten und Caesars literarisches Meisterwerk inkl. Schülerübersetzungen.',
};

export default function BellumGallicumPage() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '5rem 1.5rem',
        borderBottom: '1px solid var(--nav-border)'
      }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <ScrollReveal>
            <p style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Der Gallische Krieg
            </p>
            <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', marginBottom: '1.5rem' }}>
              De Bello Gallico
            </h1>
            <p className="hero-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Acht Jahre Krieg, brutale Eroberungen und ein Meisterwerk der antiken Propaganda. Erforschen Sie den Feldzug (58–50 v. Chr.), der die Grenzen Roms bis an den Rhein verschob.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay="delay-1" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div style={{
               width: '100%',
               maxWidth: '900px',
               height: '500px',
               marginTop: '4rem',
               borderRadius: 'var(--radius-lg)',
               backgroundImage: 'url(/gallicum.png)',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               boxShadow: 'var(--shadow-lg)'
            }} />
          </ScrollReveal>
        </div>
      </section>

      {/* Schüler-Übersetzung (Highlight) */}
      <section className="container" style={{ padding: '6rem 1.5rem', maxWidth: '900px' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Gallien und seine Bewohner</h2>
            <p>Die wohl berühmtesten Anfangsworte der lateinischen Literatur. Unten sehen Sie eine eigens angefertigte Schul-Übersetzung von Nabil Oliverio des Originaltextes ("Gallia est omnis divisa in partes tres...").</p>
          </div>
          
          <div className="card" style={{ padding: '0', overflow: 'hidden', backgroundColor: 'var(--card-bg)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {/* Handschriftliches Bild */}
              <div style={{ flex: '1 1 400px', minHeight: '300px', backgroundColor: '#e5e5ea', backgroundImage: 'url(/translation.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', borderRight: '1px solid var(--card-border)' }}>
                {/* Fallback falls das Bild vom User noch nicht reingeschoben wurde */}
                <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(5px)' }}>
                  <p style={{ margin: 0, fontWeight: 600, color: 'var(--foreground)' }}>Handschriftliche Übersetzung<br/><span style={{fontSize: '0.8rem', fontWeight: 'normal'}}>(Als /public/translation.jpg hinterlegt)</span></p>
                </div>
              </div>
              
              {/* Transkribierter Text */}
              <div style={{ flex: '1 1 400px', padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--accent)' }}>Transkription der Übersetzung:</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '0' }}>
                  "Ganz Gallien ist in drei Teile geteilt, deren einen die Belger bewohnen, die anderen die Aquitanier, den dritten, die in ihrer eigener Sprache Celten, in unserer Gallier genannt werden. Diese unterscheiden sich alle durch die Sprache, Einrichtungen und Gesetze. Der Fluss Garonne teilt die Gallier von den Aquitanern, die Marne und die Seine von den Belgern. Von denen allen sind die Belger die tapfersten, deswegen weil sie äußerst weit von der hohen Kultur und auch der höheren Bildung der Provinz entfernt sind und wenig oft die Händler zu ihnen kommen und diese, welche die Geister zu den Verweichlichten führen, sie einführen und sie sind am nächsten den Germanen, welche jenseits von dem Rhein wohnen und mit welchen sie ständig Krieg führen. Deshalb übertreffen die Helvetier auch die übrigen Gallier durch Kraft, weil sie durch fast tägliche Schlachten mit den Germanen kämpfen, indem sie diese entweder von ihren Gebieten fernhalten oder sie selbst in deren Gebieten Krieg führen..."
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Content Section mit Timeline */}
      <section className="container" style={{ padding: '2rem 1.5rem 6rem 1.5rem', maxWidth: '800px' }}>
        
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
