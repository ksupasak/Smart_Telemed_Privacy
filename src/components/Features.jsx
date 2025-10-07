import { useState } from 'react';

const features = [
  {
    id: 'search',
    icon: '/images/icon_search.png',
    title: 'ตรวจวัด Vatal sign',
    description:
      'อัปเดตค่า Vital Sign จากอุปกรณ์ภายในบ้านและแชร์ข้อมูลให้แพทย์ดูได้อย่างปลอดภัย',
    highlights: [
      'บันทึกค่าไว้ ให้สามารถตรวตสอบย้อนหลังได้',
      'มีการบันทึกค่าแบบละเอียด เช่น ค่าน้ำหนัก,ค่าส่วนสูง,ค่า BMI,ค่าน้ำตาลในเลือด,ค่าอุณหภูมิ,ค่าความดัน,ค่าอัตราการหายใจ',
      'บันทัึกข้อมูลส่งให้กับแพทย์ตรวจสอบได้โดยตรง',
    ],
  },
  {
    id: 'monitor',
    icon: '/images/icon_doctor.png',
    title: 'นัดพบแพทย์',
    description:
      'ติดตามสุขภาพเพื่อตรวจสอบผลการตรวจสอบของแพทย์ เพื่อติดตามอาการการแบบระยะไกล',
    highlights: [
      'เชื่อมต่อวิดีโอคอลเพื่อเข้าถึงผู้ป่วยได้อย่างไกล้ชิด',
      'วิดีโอคอลเพื่อติดตามอาการของผู้ป่วย',
      'มีการสรุปผลการตรวจได้ทันที',
    ],
  },
  {
    id: 'appointment',
    icon: '/images/icon_appoint.png',
    title: 'ตรวจสอบวันนัดพบแพทย์',
    description:
      'ตรวจเช็ควันที่เข้าพบแพทย์หรือ ตรวจสอบการพบแพทย์ย้อนหลังได้แบบง่ายดาย',
    highlights: [
      'ตรวจสอบวันที่ต้องบแพทย์ได้',
      'ตรวจสอบการพบแพทย์ย้อนหลังได้',
      'ตรวจสอบผลตรวจย้อนหลังได้',
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
  return (
    <section className="section">
      <div className="container-slim">
        <h2 className="text-center text-2xl font-semibold md:text-3xl">ฟังก์ชันการใช้งาน</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
