import type { Metadata } from 'next';
import './globals.css';
import { Plus_Jakarta_Sans, Caveat } from 'next/font/google';
import clsx from 'clsx';
import { Header } from '@/ui/atoms/Header';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio Avsievich Viktoriia',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(jakarta.variable, caveat.variable)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
