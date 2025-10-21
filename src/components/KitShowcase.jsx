import { useLang } from '../i18n/LangContext';

export default function KitShowcase() {
  const { lang } = useLang();
  const isEn = lang === 'en';
  return (
    <section className="section bg-white">
      <div className="container-slim grid md:grid-cols-2 gap-12 items-center">
        <div className="justify-self-center">
          <img src="/images/icon_device.png" alt="Smart Telemed Kit" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            {isEn ? 'Medical devices' : 'อุปกรณ์ทางการแพทย์'}
          </h2>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">🔗</span>
              <span>
                <strong>{isEn ? 'Wireless connectivity: ' : 'เชื่อมต่อแบบไร้สาย: '}</strong>
                {isEn
                  ? 'Supports a variety of vital-sign devices such as blood pressure monitors, thermometers, glucometers, and smart scales.'
                  : 'รองรับอุปกรณ์วัดสัญญาณชีพหลากหลาย เช่น เครื่องวัดความดัน วัดอุณหภูมิ วัดน้ำตาลในเลือด และเครื่องชั่งน้ำหนักอัจฉริยะ'}
              </span>
            </p>
            <p className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">📱</span>
              <span>
                <strong>{isEn ? 'Easy to use: ' : 'ใช้งานง่าย: '}</strong>
                {isEn
                  ? 'Community health workers and volunteers can take devices for home visits and send results to doctors instantly—no manual notes needed.'
                  : 'อาสาสมัครสามารถนำอุปกรณ์ไปตรวจผู้ป่วยตามบ้านได้ โดยข้อมูลจะส่งตรงถึงแพทย์ในทันที ไม่ต้องจดบันทึกด้วยมือ'}
              </span>
            </p>
            <p className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">🏥</span>
              <span>
                <strong>{isEn ? 'Medical-grade standards: ' : 'มาตรฐานการแพทย์: '}</strong>
                {isEn
                  ? 'All devices meet quality standards to deliver accurate and reliable results, ideal for remote care.'
                  : 'อุปกรณ์ทุกชิ้นผ่านการรับรองคุณภาพ ให้ผลลัพธ์ที่แม่นยำและเชื่อถือได้ เหมาะสำหรับการดูแลสุขภาพระยะไกล'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
