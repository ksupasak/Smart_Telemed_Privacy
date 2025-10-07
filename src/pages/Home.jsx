import Hero from '../components/Hero';
import Features from '../components/Features';
import KitShowcase from '../components/KitShowcase';
import DesktopApp from '../components/DesktopApp';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <KitShowcase />
      <DesktopApp />
      {/* สมมติว่ามี contact ที่ Footer หรือเพิ่ม section นี้ได้ */}
      <section id="contact" className="section bg-gray-50">
        <div className="container-slim">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-gray-600">E.S.M.Solution Co., Ltd.</p>
          <p className='mt-2'>942/88 Charn Issara Tower 1, 3FL , Rama IV Road, Suriyawongse, Bangrak, Bangkok 10500</p>
          <p className ='mt-2'>Tel: +66 96 249 6428</p>
          <p className='mt-2'>Email: sales@esm-solution.com</p>
        </div><br />
         <div className="container-slim">
          <h2 className="text-2xl font-semibold">ช่องทางการติดต่อ</h2>
          <p className="mt-2 text-gray-600">บริษัท อี.เอส.เอ็ม.โซลูชั่น</p>
          <p className='mt-2'>จำกัด สาขา ชาญอิสสระทาวเวอร์</p>
           <p className='mt-2'>942/88 อาคารชาญอิสสระทาวเวอร์ ชั้น 3 ถนนพระราม4 แขวงสุริยวงศ์ เขตบางรัก กรุงเทพฯ 10500</p>
           <p className='mt-2'>โทร: +66 96 249 6428</p>
           <p className='mt-2'>อีเมล: sales@esm-solution.com</p>
        </div>
      </section>
    </>
  );
}
