import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'Caesar & Bellum Gallicum | Lexicon',
  description: 'Ein umfangreiches Lexicon über Gaius Julius Caesar und seinen gallischen Krieg (Bellum Gallicum) im Apple-Style Design.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <Navigation />
        <main style={{ minHeight: '100vh', paddingTop: '60px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
