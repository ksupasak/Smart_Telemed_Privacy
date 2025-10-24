import Hero from '../components/Hero';
import Features from '../components/Features';
import KitShowcase from '../components/KitShowcase';
import DesktopApp from '../components/DesktopApp';
import { useLang } from '../i18n/LangContext';

export default function Home() {
  const { lang } = useLang();
  const isEn = lang === 'en';
  return (
    <>
      <Hero />
      <Features />
      <KitShowcase />
      <DesktopApp />
      {/* Contact section (bilingual) */}
      <section id="contact" className="section bg-gray-50">
        <div className="container-slim">
          <h2 className="text-2xl font-semibold">{isEn ? 'Contact' : 'ช่องทางการติดต่อ'}</h2>
          {isEn ? (
            <div className="mt-2 text-gray-700">
              <p className="text-gray-600">E.S.M. Solution Co., Ltd.</p>
              <p className="mt-2">942/88 Charn Issara Tower 1, 3rd Floor, Rama IV Road, Suriyawongse, Bangrak, Bangkok 10500</p>
              <p className="mt-2">Tel: +66 96 249 6428</p>
              <p className="mt-2">Email: sales@esm-solution.com</p>
            </div>
          ) : (
            <div className="mt-2 text-gray-700">
              <p className="text-gray-600">บริษัท อี.เอส.เอ็ม. โซลูชัน จำกัด สาขา ชาญ อิสสระทาวเวอร์</p>
              <p className="mt-2">942/88 อาคารชาญ อิสสระ ทาวเวอร์ ชั้น 3 ถนนพระราม 4 แขวงสุริยวงศ์ เขตบางรัก กรุงเทพฯ 10500</p>
              <p className="mt-2">โทร: +66 96 249 6428</p>
              <p className="mt-2">อีเมล: sales@esm-solution.com</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
