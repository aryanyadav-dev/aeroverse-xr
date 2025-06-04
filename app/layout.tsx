import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import LoadingScreen from '@/components/loading';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Aeroverse XR',
  description: 'Experience Space Like Never Before with Aeroverse XR.',
  icons: {
    icon: '/aeroverse.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <link rel="icon" href="/aero.png" type="image/png" /> */}
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          <LoadingScreen />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}