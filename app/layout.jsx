import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';
import './globals.css';

export const metadata = {
  title: 'Caesar & Bellum Gallicum | Imperium Romanum',
  description: 'Ein umfangreiches Lexicon über Gaius Julius Caesar und den Gallischen Krieg im Apple-Style Design. Schulprojekt Kant-Gymnasium Spandau.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navigation />
          <main style={{ minHeight: '100vh', paddingTop: '64px' }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

