import Sider from '@/components/sider';
import Footer from '@/sections/footer';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NRS | Software Engineer',
  description: 'Merging Tech, Business, and Creativity',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <link rel='icon' href='/favicon.ico' sizes='any' />
      <body className={inter.className} data-theme='forest'>
        <main className='h-full max-w-screen grid w-full  relative font-sans uppercase'>
          <Sider />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
