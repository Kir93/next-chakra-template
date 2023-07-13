import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Chakra-UI Template',
  description: 'Next Chakra UI Template',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
