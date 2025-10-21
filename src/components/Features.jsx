import { useState } from 'react';
import { useLang } from '../i18n/LangContext';
const featuresTh = [
  {
    id: 'search',
    icon: '/images/icon_search.png',
    title: 'ตรวจวัดสัญญาณชีพ',
    description:
      'อัปเดตค่าสุขภาพจากอุปกรณ์ที่บ้าน และแชร์ให้แพทย์ดูได้อย่างปลอดภัยแบบเรียลไทม์',
    highlights: [
      'บันทึกค่าอัตโนมัติ ย้อนดูประวัติได้ทุกช่วงเวลา',
      'รองรับค่าวัดหลัก: น้ำหนัก ส่วนสูง BMI น้ำตาลในเลือด อุณหภูมิ ความดัน อัตราการหายใจ',
      'ส่งข้อมูลให้แพทย์ตรวจสอบได้ทันที',
    ],
  },
  {
    id: 'monitor',
    icon: '/images/icon_doctor.png',
    title: 'ติดตามอาการกับแพทย์',
    description:
      'พูดคุยผ่านวิดีโอคอลเพื่อประเมินอาการและติดตามผล โดยไม่ต้องเดินทาง',
    highlights: [
      'วิดีโอคอลคุณภาพสูง เห็นอาการได้ใกล้ชิด',
      'ปรึกษาและรับคำแนะนำแบบเรียลไทม์',
      'สรุปผลการตรวจและบันทึกไว้ให้ทบทวนได้',
    ],
  },
  {
    id: 'appointment',
    icon: '/images/icon_appoint.png',
    title: 'จัดการนัดหมายพบแพทย์',
    description:
      'ตรวจเช็ควันนัด ลำดับคิว และดูประวัติการเข้าพบย้อนหลังได้ง่าย',
    highlights: [
      'ดูวันนัดถัดไปได้ทันที',
      'ตรวจสอบประวัติการพบแพทย์ย้อนหลัง',
      'เข้าถึงผลตรวจและสรุปการรักษาอย่างเป็นระบบ',
    ],
  },
];

const featuresEn = [
  {
    id: 'search',
    icon: '/images/icon_search.png',
    title: 'Vital signs tracking',
    description:
      'Update health metrics from home devices and securely share with doctors in real time.',
    highlights: [
      'Auto-save measurements with full history',
      'Supports weight, height, BMI, blood glucose, temperature, blood pressure, respiratory rate',
      'Send data to doctors instantly',
    ],
  },
  {
    id: 'monitor',
    icon: '/images/icon_doctor.png',
    title: 'Follow-up with doctors',
    description:
      'Consult via high-quality video calls without traveling, for assessment and follow-up.',
    highlights: [
      'High-quality video for close observation',
      'Real-time consultation and advice',
      'Summary recorded for later review',
    ],
  },
  {
    id: 'appointment',
    icon: '/images/icon_appoint.png',
    title: 'Manage appointments',
    description:
      'Check upcoming visits, queue order, and browse visit history with ease.',
    highlights: [
      'See next appointment at a glance',
      'Review past visits',
      'Access test results and treatment summaries',
    ],
  },
];

function FeatureCard({ feature }) {
  const { icon, title, description, highlights } = feature;
  const [isFlipped, setIsFlipped] = useState(false);

  const handlePointerEnter = (event) => {
    if (event.pointerType === 'mouse') {
      setIsFlipped(true);
    }
  };

  const handlePointerLeave = (event) => {
    if (event.pointerType === 'mouse') {
      setIsFlipped(false);
    }
  };

  const handleToggle = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  };

  return (
    <button
      type="button"
      aria-pressed={isFlipped}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      className="group perspective-1200 relative block h-full min-h-[380px] w-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-50"
    >
      <div
        className={`relative h-full w-full transform-gpu preserve-3d transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="backface-hidden flex h-full flex-col items-center rounded-2xl border bg-gradient-to-br from-gray-50 to-white p-20 text-center shadow-soft">
          <div className="flex h-40 w-40 items-center justify-center rounded-full bg-teal-50">
            <img className="h-28 w-28 p-4" src={icon} alt={title} />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">{description}</p>
         
        </div>

        <div className="backface-hidden absolute inset-0 flex h-full rotate-y-180 flex-col rounded-2xl border bg-gradient-to-br from-teal-500/95 to-teal-400/95 p-20 text-left text-white shadow-soft">
          <h4 className="text-lg font-semibold">จุดเด่น</h4>
          <ul className="mt-6 flex flex-1 flex-col justify-center gap-4 text-sm leading-relaxed">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-white" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {/* <p className="mt-8 text-xs uppercase tracking-wide text-teal-100">
            กดอีกครั้งเพื่อกลับด้านหน้า
          </p> */}
        </div>
      </div>
    </button>
  );
}

export default function Features() {
  const { lang } = useLang();
  const features = lang === 'en' ? featuresEn : featuresTh;
  return (
    <section className="section">
      <div className="container-slim">
        <h2 className="text-center text-2xl font-semibold md:text-3xl">{lang === 'en' ? 'Smart Telemed features' : 'ฟังก์ชันการใช้งานของ Smart Telemed'}</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
