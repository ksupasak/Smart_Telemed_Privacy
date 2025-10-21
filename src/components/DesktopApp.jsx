export default function DesktopApp() {
  return (
    <section className="section">
      <div className="container-slim grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">ฟังก์ชันการใช้งาน Smart Telemed</h2>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">📹</span>
              <span><strong>Video Call คุณภาพสูง:</strong> เชื่อมต่อแพทย์และผู้ป่วยผ่านระบบวิดีโอคอลที่ปลอดภัย รองรับการสื่อสารแบบเรียลไทม์</span>
            </p>
            <p className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">📊</span>
              <span><strong>ตรวจวัดค่าสุขภาพ:</strong> เชื่อมต่อกับเครื่องมือวัดค่าต่างๆ เพื่อส่งข้อมูลสุขภาพไปยังแพทย์ในทันที</span>
            </p>
            <p className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">⚡</span>
              <span><strong>ง่าย สะดวก รวดเร็ว:</strong> ไม่ต้องเดินทางไกล สามารถพบแพทย์ได้ทุกที่ทุกเวลาผ่านอุปกรณ์ที่คุ้นเคย</span>
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
