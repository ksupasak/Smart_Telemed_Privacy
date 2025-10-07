export default function FAQ() {
  const faqs = [
    { q: 'แอพรองรับอุปกรณ์วัดอะไรบ้าง?', a: 'รองรับเครื่องวัดความดัน ชีพจร ออกซิเจนปลายนิ้ว เครื่องชั่ง ฯลฯ' },
    { q: 'ข้อมูลสุขภาพของฉันปลอดภัยไหม?', a: 'เราเข้ารหัสข้อมูลทั้งขณะส่งและขณะเก็บ และจำกัดการเข้าถึงตามบทบาท' },
    { q: 'ใช้งานฟรีหรือไม่?', a: 'มีแผนใช้งานพื้นฐานฟรี และมีแพ็กเกจสำหรับองค์กร/คลินิก' },
  ];

  return (
    <section className="section">
      <div className="container-slim max-w-3xl">
        <h1 className="text-3xl font-bold">คำถามที่พบบ่อย</h1>

        <div className="mt-8 space-y-4">
          {faqs.map((item, i) => (
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
