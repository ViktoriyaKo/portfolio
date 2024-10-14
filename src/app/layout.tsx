import './globals.css';
import { Plus_Jakarta_Sans, Caveat } from 'next/font/google';
import clsx from 'clsx';
import { Header } from '@/ui/atoms/Header';
import { createMetadata } from '@/utils';
import { METADATA } from '@/entities';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
});

export const metadata = createMetadata(METADATA);

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
