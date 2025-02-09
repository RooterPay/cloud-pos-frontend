import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { AppContextProvider } from '@/context/AppContext';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rooter - Cloud POS',
  description: '',
  robots: 'noindex,nofollow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${spaceGrotesk.className} antialiased scroll-smooth m-0 p-0 motion-reduce:transform-none`}
      >
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
