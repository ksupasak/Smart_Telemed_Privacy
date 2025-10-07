export default function Privacy() {
  return (
    <section className="section">
      <div className="container-slim max-w-3xl">
        <h1 className="text-3xl font-bold">นโยบายความเป็นส่วนตัว</h1>
        <p className="mt-2 text-gray-500">อัปเดตล่าสุด: 1 ตุลาคม 2025</p>

        <div className="mt-8 space-y-6 text-gray-700">
          <p>
            บริษัทมุ่งมั่นในการคุ้มครองข้อมูลส่วนบุคคลของผู้ใช้บริการ Smart Telemed
            เอกสารนี้อธิบายถึงประเภทข้อมูลที่เราเก็บ ใช้อย่างไร และสิทธิของท่าน
          </p>

          <h2 className="text-xl font-semibold">ข้อมูลที่เราเก็บ</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>ข้อมูลบัญชีผู้ใช้ (ชื่อ อีเมล หมายเลขติดต่อ)</li>
            <li>ข้อมูลสุขภาพที่ผู้ใช้ส่งเข้าระบบ (ค่าชีพจร ความดัน ฯลฯ)</li>
            <li>ข้อมูลอุปกรณ์/บันทึกการใช้งานเพื่อปรับปรุงบริการ</li>
          </ul>

          <h2 className="text-xl font-semibold">วัตถุประสงค์การใช้งาน</h2>
          <p>เพื่อให้บริการติดตามสุขภาพ พบแพทย์ออนไลน์ วิเคราะห์แนวโน้ม และแจ้งเตือนที่เกี่ยวข้อง</p>

          <h2 className="text-xl font-semibold">การเปิดเผยข้อมูล</h2>
          <p>เราจะไม่ขายข้อมูลของท่าน และเปิดเผยเฉพาะกรณีจำเป็นตามกฎหมาย หรือได้รับความยินยอม</p>

          <h2 className="text-xl font-semibold">สิทธิของท่าน</h2>
          <p>ขอเข้าถึง แก้ไข ลบ ถอนความยินยอม และร้องเรียนได้ผ่านช่องทางติดต่อ</p>

          <h2 className="text-xl font-semibold">การติดต่อ</h2>
          <p>อีเมล: privacy@smart-telemed.example</p>
        </div>
      </div>
    </section>
  );
}
