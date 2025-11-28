import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bechir Yengui - Ingénieur Développement Embarqué',
  description: 'Portfolio de Bechir Yengui, ingénieur spécialisé en systèmes embarqués et cybersécurité',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}