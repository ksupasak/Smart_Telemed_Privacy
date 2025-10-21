export default function KitShowcase() {
  return (
    <section className="section bg-white">
      <div className="container-slim grid md:grid-cols-2 gap-12 items-center">
        <div className="justify-self-center">
          <img src="/images/icon_device.png" alt="Smart Telemed Kit" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">อุปกรณ์ทางการแพทย์</h2>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1">🔗</span>
              <span><strong>เชื่อมต่อแบบไร้สาย:</strong> รองรับอุปกรณ์วัดสัญญาณชีพหลากหลาย เช่น เครื่องวัดความดัน วัดอุณหภูมิ วัดน้ำตาลในเลือด และเครื่องชั่งน้ำหนักอัจฉริยะ</span>
            </p>
            <p className="flex items-start">
              <span className="text-green-500 mr-3 mt-1">📱</span>
              <span><strong>ใช้งานง่าย:</strong> อาสาสมัครสามารถนำอุปกรณ์ไปตรวจผู้ป่วยตามบ้านได้ โดยข้อมูลจะส่งตรงถึงแพทย์ในทันที ไม่ต้องจดบันทึกด้วยมือ</span>
            </p>
            <p className="flex items-start">
              <span className="text-purple-500 mr-3 mt-1">🏥</span>
              <span><strong>มาตรฐานการแพทย์:</strong> อุปกรณ์ทุกชิ้นผ่านการรับรองคุณภาพ ให้ผลลัพธ์ที่แม่นยำและเชื่อถือได้ เหมาะสำหรับการดูแลสุขภาพระยะไกล</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
