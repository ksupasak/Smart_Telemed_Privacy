import { useLang } from '../i18n/LangContext';

export default function FAQ() {
  const { lang } = useLang();
  const isEn = lang === 'en';
  const faqsTh = [
    { q: 'Smart Telemed คืออะไร?', a: 'แพลตฟอร์มการแพทย์ทางไกลที่ช่วยให้ผู้ป่วยพูดคุยกับแพทย์ผ่านวิดีโอคอล วัดสัญญาณชีพจากอุปกรณ์ที่บ้าน และจัดการนัดหมายได้ในที่เดียว' },
    { q: 'ต้องลงทะเบียนอย่างไร?', a: 'ลงทะเบียนด้วยข้อมูลส่วนตัวที่ถูกต้องและยืนยันตัวตนตามที่ระบบกำหนด จากนั้นเข้าสู่ระบบเพื่อเริ่มใช้งาน' },
    { q: 'แอพรองรับอุปกรณ์วัดอะไรบ้าง?', a: 'รองรับเครื่องวัดความดัน ออกซิเจนปลายนิ้ว เครื่องวัดอุณหภูมิ เครื่องชั่งน้ำหนัก และเครื่องวัดน้ำตาลในเลือดที่เชื่อมต่อผ่าน Bluetooth' },
    { q: 'อุปกรณ์ต้องมีสเปกขั้นต่ำอย่างไร?', a: 'สมาร์ตโฟน iOS/Android ที่รองรับ Bluetooth 4.0 ขึ้นไป และมีการเชื่อมต่ออินเทอร์เน็ตที่เสถียร' },
    { q: 'เชื่อมต่ออุปกรณ์ไม่ติดควรทำอย่างไร?', a: 'ตรวจสอบว่าเปิด Bluetooth และตำแหน่งที่ตั้งแล้ว อุปกรณ์มีแบตเตอรี่เพียงพอ และอยู่ใกล้โทรศัพท์ จากนั้นลองจับคู่ใหม่' },
    { q: 'ข้อมูลสุขภาพของฉันปลอดภัยไหม?', a: 'ข้อมูลถูกเข้ารหัสทั้งระหว่างส่งและขณะจัดเก็บ (TLS/AES) และจำกัดการเข้าถึงตามบทบาทของผู้ใช้' },
    { q: 'ใครสามารถเห็นข้อมูลของฉันได้บ้าง?', a: 'เฉพาะแพทย์/พยาบาลและเจ้าหน้าที่ที่เกี่ยวข้องตามบทบาท รวมถึงผู้ใช้ที่ให้ความยินยอมเท่านั้น' },
    { q: 'สามารถถอนความยินยอมได้หรือไม่?', a: 'ทำได้ตลอดเวลาในเมนูการตั้งค่า ความเป็นส่วนตัว การถอนความยินยอมอาจส่งผลต่อการใช้บริการบางส่วน' },
    { q: 'วิดีโอคอลใช้อย่างไร?', a: 'กดเข้า “นัดหมาย” หรือ “พบแพทย์” แล้วกดยอมรับสิทธิ์กล้อง/ไมโครโฟน จากนั้นเข้าห้องวิดีโอคอลตามเวลานัด' },
    { q: 'วิดีโอคอลมีการบันทึกหรือไม่?', a: 'ไม่มีการบันทึกเนื้อหาการสนทนา เก็บเฉพาะข้อมูลเมตาเช่นเวลาที่เข้าร่วม ตามนโยบายความเป็นส่วนตัว' },
    { q: 'อินเทอร์เน็ตช้า ใช้วิดีโอคอลได้ไหม?', a: 'สามารถปรับคุณภาพวิดีโออัตโนมัติตามความเร็วเน็ต หากต่ำมากแนะนำใช้เสียงหรือแชท' },
    { q: 'นัดหมายแพทย์อย่างไร?', a: 'ไปที่เมนู “นัดหมาย” เลือกวันที่และเวลาที่สะดวก ระบบจะแจ้งยืนยันและแสดงในปฏิทิน' },
    { q: 'ยกเลิกหรือเลื่อนนัดได้หรือไม่?', a: 'ได้ แนะนำให้ทำอย่างน้อย 2 ชั่วโมงก่อนเวลา เพื่อหลีกเลี่ยงค่าธรรมเนียมตามนโยบาย' },
    { q: 'ผลตรวจและประวัติย้อนหลังดูที่ไหน?', a: 'ดูได้ในเมนู “ประวัติสุขภาพ” ซึ่งแสดงค่าที่บันทึกและสรุปผลการตรวจ' },
    { q: 'อาสาสมัคร (อสม.) ใช้งานอย่างไร?', a: 'อสม. สามารถช่วยวัดค่าพื้นฐานที่บ้านผู้ป่วยและส่งผลให้แพทย์แบบเรียลไทม์ โดยทำงานภายใต้การนิเทศของบุคลากรทางแพทย์' },
    { q: 'ต้องเตรียมอะไรเมื่อตรวจที่บ้าน?', a: 'เตรียมอุปกรณ์วัดให้พร้อม แบตเตอรี่พอ เปิด Bluetooth และอยู่ในพื้นที่ที่มีสัญญาณอินเทอร์เน็ตดี' },
    { q: 'ค่าที่วัดขึ้นไม่ปกติ ระบบทำอย่างไร?', a: 'ระบบจะแจ้งเตือน และแนะนำให้ติดต่อบุคลากรทางการแพทย์หรือไปโรงพยาบาลหากเสี่ยงฉุกเฉิน' },
    { q: 'แอปใช้ได้ฟรีไหม?', a: 'มีแผนใช้งานพื้นฐานฟรี บริการเฉพาะทางบางรายการอาจมีค่าใช้จ่ายตามที่ระบุ' },
    { q: 'รองรับการชำระเงินแบบใด?', a: 'รองรับบัตรเครดิต/เดบิต และ Mobile Banking ผ่านผู้ให้บริการที่ได้รับการรับรอง' },
    { q: 'ขอใบเสร็จรับเงินได้ที่ไหน?', a: 'ใบเสร็จจะส่งทางอีเมลหรือดูย้อนหลังได้ในเมนูการชำระเงิน' },
    { q: 'ตั้งค่าความเป็นส่วนตัวได้อย่างไร?', a: 'ไปที่เมนู การตั้งค่า > ความเป็นส่วนตัว เพื่อจัดการคุกกี้ การอนุญาต และการแชร์ข้อมูล' },
    { q: 'แอปรองรับภาษาอะไรบ้าง?', a: 'รองรับภาษาไทย และมีแผนรองรับภาษาอื่นในอนาคต' },
    { q: 'อุปกรณ์ไม่แสดงผลในแอป?', a: 'ปิด-เปิด Bluetooth ใหม่ รีสตาร์ทอุปกรณ์ ตรวจสอบสิทธิ์การเข้าถึงตำแหน่ง หากยังไม่ติดให้จับคู่ใหม่' },
    { q: 'ต้องปรับเทียบอุปกรณ์ไหม?', a: 'ควรปรับเทียบตามคู่มือผู้ผลิต และตรวจสอบสภาพอุปกรณ์สม่ำเสมอเพื่อความแม่นยำ' },
    { q: 'ลืมรหัสผ่านทำอย่างไร?', a: 'ใช้ฟังก์ชัน “ลืมรหัสผ่าน” เพื่อรับลิงก์รีเซ็ตที่อีเมลที่ลงทะเบียนไว้' },
    { q: 'ใครติดต่อฉุกเฉินได้บ้าง?', a: 'ตั้งค่าผู้ติดต่อฉุกเฉินในโปรไฟล์ได้ และแชร์ข้อมูลที่จำเป็นให้ทีมแพทย์เมื่อเกิดเหตุการณ์' },
    { q: 'ข้อมูลจะถูกเก็บไว้นานเท่าไร?', a: 'ข้อมูลการรักษาเก็บ 10 ปี ข้อมูลการใช้งานเก็บ 2 ปี หรือจนกว่าจะพ้นความจำเป็น ตามนโยบาย' },
    { q: 'ถอนความยินยอมแล้วใช้งานต่อได้ไหม?', a: 'สามารถใช้งานบางส่วนได้ แต่บริการที่ต้องอาศัยข้อมูลที่ถอนยินยอมอาจใช้งานไม่ได้' },
    { q: 'แอปรองรับโรงพยาบาลอะไรบ้าง?', a: 'รองรับหน่วยบริการสาธารณสุขที่เข้าร่วมโครงการ ตรวจสอบรายชื่อได้ในหน้า “เกี่ยวกับเรา”' },
    { q: 'มีบริการช่วยเหลือผู้ใช้หรือไม่?', a: 'มี Help Desk ในเวลาทำการ แชทสนับสนุน คู่มือใช้งาน และวิดีโอสอน' },
    { q: 'ติดต่อทีมสนับสนุนได้อย่างไร?', a: 'อีเมล support@esmSolution.co.th หรือ LINE Official: @SmartTelemed ในเวลาทำการ' },
    { q: 'ใช้ในพื้นที่อินเทอร์เน็ตจำกัดได้ไหม?', a: 'ใช้งานได้แต่ฟังก์ชันวิดีโอคอลอาจถูกจำกัด แนะนำใช้แชทหรือโทรศัพท์' },
    { q: 'แชร์ข้อมูลให้ญาติหรือผู้ดูแลได้ไหม?', a: 'สามารถมอบสิทธิ์ผู้ดูแลให้เข้าถึงข้อมูลบางส่วนได้ โดยผ่านการยินยอมของผู้ป่วย' },
    { q: 'แอปรองรับคนพิการหรือไม่?', a: 'รองรับการเข้าถึงพื้นฐาน เช่น ขนาดตัวอักษรและคอนทราสต์ และกำลังพัฒนาให้ครอบคลุมมากขึ้น' },
    { q: 'ย้ายข้อมูลไปผู้ให้บริการอื่นได้หรือไม่?', a: 'สามารถขอรับข้อมูลในรูปแบบที่อ่านได้ด้วยเครื่องเพื่อโอนไปผู้ควบคุมข้อมูลอื่น ตามสิทธิ PDPA' },
    { q: 'จะรู้ได้อย่างไรว่าแพทย์ว่าง?', a: 'ดูตารางว่างของแพทย์ในหน้าจองนัด ระบบจะแสดงช่วงเวลาที่พร้อมให้บริการ' },
    { q: 'อาสาสมัครต้องมีคุณสมบัติอะไร?', a: 'ต้องผ่านการอบรมและได้รับการรับรอง ทำงานภายใต้การนิเทศของบุคลากรทางการแพทย์' },
    { q: 'ค่าที่วัดไม่ขึ้นหรือผิดปกติบ่อย?', a: 'ตรวจท่าทางการวัด เปลี่ยนแบตเตอรี่ ตรวจสอบการเชื่อมต่อ และลองกับอุปกรณ์สำรองหากมี' },
    { q: 'แอปเก็บค่าคุกกี้หรือไม่?', a: 'มีการใช้คุกกี้เพื่อปรับปรุงประสบการณ์และวิเคราะห์การใช้งาน สามารถจัดการได้ในเมนูการตั้งค่า' },
    { q: 'เปลี่ยนเบอร์/อีเมลในบัญชีได้ไหม?', a: 'สามารถแก้ไขได้ในหน้าโปรไฟล์ โดยอาจต้องยืนยันตัวตนอีกครั้งเพื่อความปลอดภัย' },
  ];

  const faqsEn = [
    { q: 'What is Smart Telemed?', a: 'A telemedicine platform that enables patients to video call doctors, capture vital signs at home, and manage appointments in one place.' },
    { q: 'How do I register?', a: 'Register with accurate personal information and follow the identity verification steps, then sign in to start.' },
    { q: 'Which devices are supported?', a: 'Common devices like blood pressure monitors, pulse oximeters, thermometers, smart scales, and glucose meters via Bluetooth.' },
    { q: 'Minimum device requirements?', a: 'iOS/Android smartphones supporting Bluetooth 4.0+ with a stable internet connection.' },
    { q: 'Can’t connect a device—what to do?', a: 'Ensure Bluetooth/location are enabled, the device has sufficient battery, is near your phone, then try pairing again.' },
    { q: 'Is my health data safe?', a: 'Data is encrypted in transit and at rest (TLS/AES) with role-based access control.' },
    { q: 'Who can see my data?', a: 'Only authorized medical staff and users you consent to.' },
    { q: 'Can I withdraw consent?', a: 'Yes, anytime in Settings > Privacy. Some features may become unavailable.' },
    { q: 'How to use video calls?', a: 'Open Appointments or Meet Doctor, allow camera/mic permissions, and join the room at your scheduled time.' },
    { q: 'Are video calls recorded?', a: 'No conversation content is recorded; only metadata like join times is stored per privacy policy.' },
    { q: 'Slow internet—can I still video call?', a: 'Quality adapts to bandwidth. If very low, use voice or chat instead.' },
    { q: 'How to book doctors?', a: 'Go to Appointments, pick date/time, confirm your booking—check the calendar for details.' },
    { q: 'Cancel or reschedule?', a: 'Yes. Please do so at least 2 hours in advance to avoid fees.' },
    { q: 'Where to view results/history?', a: 'See Health History for logged measurements and summaries.' },
    { q: 'How do volunteers use it?', a: 'Volunteers can measure basics at patients’ homes and send results to doctors in real time under medical supervision.' },
    { q: 'What to prepare for home checks?', a: 'Prepare devices, ensure enough battery, enable Bluetooth, and choose a spot with strong internet.' },
    { q: 'Abnormal readings—what happens?', a: 'The system alerts you and recommends contacting medical staff or a hospital if risk is high.' },
    { q: 'Is the app free?', a: 'There is a free basic plan. Some services may have fees as specified.' },
    { q: 'What payments are supported?', a: 'Credit/debit cards and mobile banking via certified providers.' },
    { q: 'How to get receipts?', a: 'Receipts are emailed or available in the Payments menu.' },
    { q: 'How to set privacy options?', a: 'Go to Settings > Privacy to manage cookies, permissions, and data sharing.' },
    { q: 'Which languages are supported?', a: 'Thai is supported, with more languages planned.' },
    { q: 'Device not showing in app?', a: 'Toggle Bluetooth, restart devices, check location permission, and re-pair if needed.' },
    { q: 'Do I need to calibrate devices?', a: 'Calibrate per manufacturer instructions and maintain device condition for accuracy.' },
    { q: 'Forgot password?', a: 'Use Forgot Password to receive a reset link via your registered email.' },
    { q: 'Who are my emergency contacts?', a: 'Set up emergency contacts in your profile to share essential data with medical teams during incidents.' },
    { q: 'How long is data kept?', a: 'Treatment data is kept for 10 years; usage data for 2 years or as necessary per policy.' },
    { q: 'After withdrawing consent, can I continue?', a: 'Some features remain available, but those requiring withdrawn data may be disabled.' },
    { q: 'Which hospitals are supported?', a: 'Participating public health units; see the About Us page for the list.' },
    { q: 'Is user support available?', a: 'Yes—Help Desk during business hours, live chat, guides, and tutorials.' },
    { q: 'How to contact support?', a: 'Email support@esmSolution.co.th or LINE Official: @SmartTelemed during business hours.' },
    { q: 'Use in low-internet areas?', a: 'Yes, but video features may be limited. Use chat or phone instead.' },
    { q: 'Share data with family/caregivers?', a: 'You can grant caregiver access to some data with patient consent.' },
    { q: 'Accessibility support?', a: 'Basic accessibility like larger text and contrast is supported; more improvements are planned.' },
    { q: 'Can I port my data?', a: 'You can request machine-readable data to transfer to another controller as per PDPA rights.' },
    { q: 'How to check doctors’ availability?', a: 'See doctors’ schedules on the booking page.' },
    { q: 'Volunteer qualifications?', a: 'Volunteers must be trained/certified and operate under medical supervision.' },
    { q: 'Frequent abnormal readings?', a: 'Check measurement posture, change batteries, verify connections, or try a backup device.' },
    { q: 'Does the app use cookies?', a: 'Yes, to improve experience and analytics; manage them in Settings.' },
    { q: 'Can I change my phone/email?', a: 'Yes, edit in Profile; re-verification may be required for security.' },
  ];

  return (
    <section className="section">
      <div className="container-slim max-w-3xl">
  <h1 className="text-3xl font-bold">{isEn ? 'Frequently Asked Questions' : 'คำถามที่พบบ่อย'}</h1>

        <div className="mt-8 space-y-4">
          {(isEn ? faqsEn : faqsTh).map((item, i) => (
            <details key={i} className="group rounded-xl border bg-white p-4 open:shadow-soft">
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800">{item.q}</span>
                  <span className="ml-4 h-6 w-6 grid place-items-center rounded-full border text-gray-500 group-open:rotate-45 transition">
                    +
                  </span>
                </div>
              </summary>
              <p className="mt-3 text-gray-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
