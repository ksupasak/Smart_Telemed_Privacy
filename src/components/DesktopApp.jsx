import { useLang } from '../i18n/LangContext';

export default function DesktopApp() {
  const { lang } = useLang();
  const isEn = lang === 'en';
  return (
    <section className="section">
      <div className="container-slim grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            {isEn ? 'Smart Telemed capabilities' : 'ฟังก์ชันการใช้งาน Smart Telemed'}
          </h2>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">📹</span>
              <span>
                <strong>{isEn ? 'High-quality video call: ' : 'Video Call คุณภาพสูง: '}</strong>
                {isEn
                  ? 'Secure, real-time communication between doctors and patients.'
                  : 'เชื่อมต่อแพทย์และผู้ป่วยผ่านระบบวิดีโอคอลที่ปลอดภัย รองรับการสื่อสารแบบเรียลไทม์'}
              </span>
            </p>
            <p className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">📊</span>
              <span>
                <strong>{isEn ? 'Health measurements: ' : 'ตรวจวัดค่าสุขภาพ: '}</strong>
                {isEn
                  ? 'Connect medical devices and send measurements to doctors instantly.'
                  : 'เชื่อมต่อกับเครื่องมือวัดค่าต่างๆ เพื่อส่งข้อมูลสุขภาพไปยังแพทย์ในทันที'}
              </span>
            </p>
            <p className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">⚡</span>
              <span>
                <strong>{isEn ? 'Simple and convenient: ' : 'ง่าย สะดวก รวดเร็ว: '}</strong>
                {isEn
                  ? 'Meet doctors anywhere, anytime from your familiar devices.'
                  : 'ไม่ต้องเดินทางไกล สามารถพบแพทย์ได้ทุกที่ทุกเวลาผ่านอุปกรณ์ที่คุ้นเคย'}
              </span>
            </p>
          </div>
        </div>
        <div className="justify-self-center">
          <img src="/images/desktop.png" alt="Desktop Telemed"/>
        </div>
      </div>
    </section>
  )
}
