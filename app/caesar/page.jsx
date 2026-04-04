import Head from 'next/head';

export const metadata = {
  title: 'Julius Caesar - Biografie',
  description: 'Leben, Aufstieg und Ermordung von Gaius Julius Caesar. Eine detaillierte Übersicht.',
};

export default function CaesarPage() {
  return (
    <div className="animate-fade-in stagger-1">
      
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '5rem 1.5rem',
        borderBottom: '1px solid var(--nav-border)'
      }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <p style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Porträt
          </p>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem' }}>
            Gaius Julius Caesar
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '700px' }}>
            Der wohl berühmteste Römer der Geschichte. Ein brillanter Stratege, redegewandter Politiker und der Mann, der die Römische Republik für immer veränderte.
          </p>
          <div style={{
             width: '100%',
             maxWidth: '800px',
             height: '400px',
             marginTop: '4rem',
             borderRadius: 'var(--radius-lg)',
             backgroundImage: 'url(/caesar-hero.png)',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             boxShadow: 'var(--shadow-lg)'
          }} />
        </div>
      </section>

      {/* Content Section */}
      <section className="container" style={{ padding: '5rem 1.5rem', maxWidth: '800px' }}>
        
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 600 }}>Herkunft und früher Aufstieg</h2>
          <p>
            Gaius Julius Caesar wurde am 13. Juli 100 v. Chr. in eine alteingesessene, aber zu dieser Zeit nicht besonders einflussreiche Patrizierfamilie, die Julier, geboren. Die Julier führten ihre Abstammung auf Iulus, den Sohn des trojanischen Helden Aeneas, und damit auf die Göttin Venus zurück.
          </p>
          <p>
            In seinen frühen Jahren musste sich Caesar durch politische Wirren und Proskriptionen navigieren, unter anderem während der Diktatur Sullas, als er sich weigerte, sich von seiner Frau Cornelia zu scheiden. Erst nach Sullas Tod begann sein stetiger Aufstieg auf dem <em>cursus honorum</em>.
          </p>
        </div>

        <div className="card" style={{ marginBottom: '4rem', backgroundColor: 'var(--background)', display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Das Erste Triumvirat</h3>
            <p style={{ fontSize: '0.95rem' }}>
              60 v. Chr. bildete Caesar mit dem reichen Crassus und dem erfolgreichen Feldherrn Pompeius ein inoffizielles Bündnis: das sogenannte Erste Triumvirat. Dieses Bündnis sicherte ihm das Konsulat für das Jahr 59 v. Chr. und ebnete den Weg für sein Prokonsulat in Gallien, wo er militärischen Ruhm und enormen Reichtum erlangte.
            </p>
          </div>
        </div>

        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 600 }}>Diktatur und Reformen</h2>
          <p>
            Nach der Eroberung Galliens und dem zerbrochenen Triumvirat überschritt Caesar 49 v. Chr. mit den Worten <em>„Alea iacta est“ (Die Würfel sind gefallen)</em> den Grenzfluss Rubikon. Dies löste einen Bürgerkrieg gegen Pompeius und die Senatsmehrheit aus, aus dem Caesar siegreich hervorging.
          </p>
          <p>
            Als <em>Dictator perpetuo</em> (Diktator auf Lebenszeit) führte er weitreichende Reformen durch, insbesondere die Einführung des Julianischen Kalenders, der bis ins 16. Jahrhundert Bestand haben sollte.
          </p>
        </div>

        <div style={{ padding: '3rem', backgroundColor: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#ff3b30' }}>Die Iden des März</h2>
          <p style={{ margin: '0 auto', maxWidth: '600px' }}>
            Am 15. März 44 v. Chr. fiel Caesar einem Attentat im Senat zum Opfer. Angeleitet von Brutus und Cassius, stachen zahlreiche Senatoren zu, da sie fürchteten, Caesar strebe die Königsherrschaft an. Sein Tod markierte den endgültigen Untergang der Römischen Republik und den blutigen Übergang zur Kaiserzeit unter seinem Adoptivsohn Octavian (Augustus).
          </p>
        </div>

      </section>

    </div>
  );
}
