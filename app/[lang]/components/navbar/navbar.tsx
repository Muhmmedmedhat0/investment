// import { Locale } from '@/i18n/i18n-config';
import Link from 'next/link';
// import { getDictionary } from '../../utils/dictionaries';
import Image from 'next/image';
import MobileMenu from './mobile-menu';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

export default async function NavBar({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);
  
  return (
    <nav className="top-nav" id="navbar">
      <div className="container h-100">
        <div className="nav-content">
          <div className="nav-logo">
            <Link href={`/${lang}`} className="d-block">
              <Image
                src="/img/logo-black.svg"
                alt="Alistithmar"
                width={246}
                height={59}
                className="img-fluid"
              />
            </Link>
          </div>
          <MobileMenu  navigation={navigation} lang={lang}/>
        </div>
      </div>
    </nav>
  );
}
