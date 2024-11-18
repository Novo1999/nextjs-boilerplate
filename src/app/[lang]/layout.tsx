import type { Metadata } from 'next';
import { Jaldi, Noto_Sans_Bengali } from 'next/font/google';
import '@/app/globals.css';
import ThemeProvider from '@/components/layouts/ThemeProvider';

const jaldiFont = Jaldi({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-jaldi',
});

const notoSansBengaliFont = Noto_Sans_Bengali({
  subsets: ['bengali'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-bengali',
});

export const metadata: Metadata = {
  title: 'SaleBee CRM',
  description: 'SaleBee CRM Application',
  openGraph: {
    title: 'SaleBee CRM',
    description: 'SaleBee CRM Application',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jaldiFont.variable} ${notoSansBengaliFont.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}