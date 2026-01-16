import Analytics from '@/components/Analytics';
import Sider from '@/components/sider';
import Footer from '@/sections/footer';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NRS | Software Engineer',
  description: 'Merging Tech, Business, and Creativity',
  openGraph: {
    title: 'NRS | Software Engineer',
    description: 'Merging Tech, Business, and Creativity',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'NRS | Software Engineer',
    description: 'Merging Tech, Business, and Creativity',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <link rel='icon' href='/favicon.ico' sizes='any' />
      <Analytics />
      <body className={inter.className} suppressHydrationWarning>
        <main className='max-w-screen grid w-full h-full relative font-sans uppercase'>
          <Sider />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
