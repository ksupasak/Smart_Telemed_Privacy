export default function Terms() {
  return (
    <section className="section">
      <div className="container-slim max-w-3xl">
        <h1 className="text-3xl font-bold">ข้อกำหนดในการให้บริการ</h1>
        <p className="mt-2 text-gray-500">มีผลบังคับใช้: 1 ตุลาคม 2025</p>

        <div className="mt-8 space-y-6 text-gray-700">
          <h2 className="text-xl font-semibold">การยอมรับเงื่อนไข</h2>
          <p>การใช้งานแพลตฟอร์ม Smart Telemed ถือว่าท่านยอมรับเงื่อนไขทั้งหมดในเอกสารนี้</p>

          <h2 className="text-xl font-semibold">การใช้งานที่เหมาะสม</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>ห้ามใช้เพื่อวัตถุประสงค์ที่ผิดกฎหมาย</li>
            <li>ห้ามเข้าถึง/แก้ไขระบบโดยไม่ได้รับอนุญาต</li>
          </ul>

          <h2 className="text-xl font-semibold">ข้อจำกัดความรับผิด</h2>
          <p>
            บริการนี้ให้ “ตามสภาพ” ข้อมูลสุขภาพเป็นข้อมูลประกอบ ไม่ทดแทนคำวินิจฉัยจากแพทย์
            โปรดปรึกษาผู้เชี่ยวชาญทางการแพทย์ในทุกกรณีที่จำเป็น
          </p>

          <h2 className="text-xl font-semibold">การแก้ไขเงื่อนไข</h2>
          <p>เราอาจปรับปรุงข้อกำหนดเป็นครั้งคราว โดยจะแจ้งเตือนผ่านหน้าเว็บไซต์</p>
        </div>
      </div>
    </section>
  );
}
