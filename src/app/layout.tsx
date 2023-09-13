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
    <html lang='en' data-theme='forest'>
      <link rel='icon' href='/favicon.ico' sizes='any' />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
