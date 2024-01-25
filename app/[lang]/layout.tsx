import 'bootstrap/dist/css/bootstrap.min.css';
import { Almarai } from 'next/font/google';
import './globals.css';
import { i18n } from '@/i18n.config';
import { RootLayoutProps } from '@/types/Layout.types';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';


const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['300', '400', '700'],
  display: 'swap',
  style: ['normal'],
  variable: '--font-almarai',
});


// generate static params
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  // console.log(params.lang)
  return (
    <html lang={params.lang} dir={params.lang === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content='Generated by create next app' />
        <title>{params.lang === 'ar' ? 'الاستثمار' : 'Alistithmar'}</title>
        <link rel="icon" href="/img/logo-sm.svg" sizes="16x16 32x32 48x48 64x64" />

      </head>
      <body className={almarai.className}>
        <Navbar lang={params.lang} />
        <main>{children}</main>
        <Footer lang={params.lang}/>
      </body>
    </html>
  );
}
