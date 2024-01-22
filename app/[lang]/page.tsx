import { Locale } from "@/i18n.config";
import Header from "./components/header/header";
import About from "./components/about/about";
import Document from "./components/document/document";
import Statistics from "./components/statistics/statistics";


export default function HomePage({params: { lang }}: {params: { lang: Locale }}) {
  return (
    <main className="page-wrapper">
      <Header lang={lang} />
      <About lang={lang}/>
      <Document lang={lang}/>
      <Statistics lang={lang} />
      {/* <Directors />
      <Funds />
      <Contact /> */}
    </main>
  );
}
