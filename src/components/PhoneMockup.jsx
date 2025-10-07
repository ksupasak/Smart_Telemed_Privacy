function Metric({label, value, unit, sub}) {
  return (
    <div className="rounded-xl border bg-white p-2 text-center w-20 shadow-sm">
      <div className="text-[10px] text-gray-500">{label}</div>
      <div className="text-brand font-bold">{value}</div>
      <div className="text-[10px] text-gray-500 -mt-1">{unit}</div>
      {sub && <div className="mt-1 text-[10px] text-gray-400">{sub}</div>}
    </div>
  )
}

export default function PhoneMockup() {
  return (
    <div className="group relative mx-auto h-[640px] w-[320px]">
      {/* เงาหนักวงรีใต้เครื่อง */}
      <div className="pointer-events-none absolute inset-x-10 -bottom-6 h-8 rounded-full bg-black/25 blur-2xl group-hover:bg-black/30 transition"></div>

      {/* ตัวเครื่อง (กรอบโลหะ) */}
      <div className="relative h-full w-full rounded-[52px] bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 shadow-2xl ring-1 ring-black/80">
        {/* เส้นหูช้าง/เสาอากาศ (ขีดเล็ก ๆ บนกรอบ) */}
        <div className="absolute left-1/2 top-1.5 h-3 w-[34px] -translate-x-1/2 rounded-full bg-white/10"></div>
        <div className="absolute left-1/2 bottom-1.5 h-3 w-[34px] -translate-x-1/2 rounded-full bg-white/10"></div>

        {/* ไฮไลต์กรอบโลหะ + inner shadow ของตัวเครื่อง */}
        <div className="pointer-events-none absolute inset-0 rounded-[52px] shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-6px_16px_rgba(0,0,0,0.45)]"></div>

        {/* ปุ่มกดด้านข้าง (ซ้าย: Volume, ขวา: Power) */}
        <div className="absolute -left-0.5 top-[120px] h-12 w-1 rounded-l bg-neutral-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"></div>
        <div className="absolute -left-0.5 top-[170px] h-24 w-1 rounded-l bg-neutral-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"></div>
        <div className="absolute -right-0.5 top-[150px] h-28 w-1 rounded-r bg-neutral-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"></div>

        {/* ขอบจอ/เบเซล */}
        <div className="absolute inset-2 rounded-[46px] bg-black/95">
          {/* กระจกหน้าจอ + เงาสะท้อน */}
          <div className="absolute inset-[10px] rounded-[40px] overflow-hidden bg-black ring-1 ring-white/5 shadow-[inset_0_0_30px_rgba(0,0,0,0.6)]">
            {/* ไฮไลต์แสงเฉียงบนกระจก */}
            <div className="pointer-events-none absolute -top-8 -left-10 h-40 w-[140%] rotate-[-12deg] rounded-full bg-white/[0.06] blur-2xl"></div>

            {/* เกาะกล้องหน้า/ลำโพง (Dynamic Island) */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 h-6 w-20 rounded-full bg-black/90 border border-black/70 shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
              {/* ลำโพง (ช่องเล็ก ๆ) */}
              <div className="absolute left-1/2 top-1/2 h-1 w-12 -translate-x-1/2 -translate-y-1/2 rounded bg-neutral-800"></div>
              {/* กล้องหน้า (จุดเล็ก) */}
              <div className="absolute right-3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-neutral-700 ring-2 ring-black"></div>
            </div>

            {/* เนื้อหาหน้าจอ: รูปภาพเต็มจอ */}
            <img
              src="/images/icon_screen.png"
              alt="Screen Vital Sign"
              className="h-full w-full object-cover"
            />

            {/* แถบ Gesture ด้านล่าง */}
            <div className="pointer-events-none absolute bottom-3 left-1/2 h-1.5 w-24 -translate-x-1/2 rounded-full bg-white/70"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
