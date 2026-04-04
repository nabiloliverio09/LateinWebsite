import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem', paddingBottom: '4rem' }}>
      
      {/* Hero Section */}
      <section className="container" style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '6rem'
      }}>
        <div className="animate-fade-in stagger-1">
          <h1 className="hero-title">
            <span className="text-gradient">Veni, Vidi, Vici.</span><br />
            Die Welt des Caesar.
          </h1>
          <p className="hero-subtitle" style={{ margin: '0 auto 3rem auto' }}>
            Erkunden Sie das Leben des berühmtesten Feldherrn der Antike und sein literarisches Meisterwerk, den Gallischen Krieg. Eine moderne Enzyklopädie.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="#explore" className="btn-primary" style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)' }}>
              Entdecken
            </Link>
            <Link href="/caesar" className="btn-primary" style={{ backgroundColor: 'transparent', color: 'var(--foreground)', border: '1px solid var(--nav-border)' }}>
              Über Caesar
            </Link>
          </div>
        </div>
      </section>

      {/* Topics Sektion */}
      <section id="explore" className="container animate-fade-in stagger-2">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Zwei Epochen. Ein Mann.</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>Tauchen Sie tiefer ein in das historische Vermächtnis von Julius Caesar und sein monumentales Werk über den Gallischen Krieg.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {/* Card 1: Caesar */}
          <Link href="/caesar" style={{ display: 'block' }}>
            <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                height: '240px', 
                borderRadius: '12px', 
                backgroundColor: 'var(--card-border)', 
                marginBottom: '1.5rem',
                backgroundImage: 'url(/caesar.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: 'var(--shadow-sm)'
              }} />
              <h3 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>Julius Caesar</h3>
              <p style={{ flexGrow: 1, marginBottom: '1.5rem' }}>
                Staatsmann, Feldherr und Diktator. Erfahren Sie alles über seinen Aufstieg zur Macht und das tragische Ende an den Iden des März.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', color: 'var(--accent)', fontWeight: 500 }}>
                Mehr erfahren <span style={{ marginLeft: '0.5rem' }}>→</span>
              </div>
            </div>
          </Link>

          {/* Card 2: Bellum Gallicum */}
          <Link href="/bellum-gallicum" style={{ display: 'block' }}>
            <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                height: '240px', 
                borderRadius: '12px', 
                backgroundColor: 'var(--card-border)', 
                marginBottom: '1.5rem',
                backgroundImage: 'url(/gallicum.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: 'var(--shadow-sm)'
              }} />
              <h3 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>De Bello Gallico</h3>
              <p style={{ flexGrow: 1, marginBottom: '1.5rem' }}>
                Caesars literarisches Meisterwerk. Entdecken Sie die Strategien, Schlachten und Propaganda des achtjährigen Feldzugs gegen Gallien.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', color: 'var(--accent)', fontWeight: 500 }}>
                Mehr erfahren <span style={{ marginLeft: '0.5rem' }}>→</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
}
