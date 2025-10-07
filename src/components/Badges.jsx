export function AppBadges() {
  // ปุ่มพร้อม “เงาใต้ปุ่ม” โดยใช้ pseudo-element (after) เป็นเงาวงรีด้านล่าง
  const btn =
    "group relative inline-flex items-center gap-3 rounded-2xl border border-gray-200 " +
    "bg-white px-4 py-3 shadow-md hover:shadow-lg active:shadow " +
    "transition duration-200 hover:-translate-y-0.5 active:translate-y-0 " +
    // เงาวงรีใต้ปุ่ม
    "after:content-[''] after:absolute after:inset-x-4 after:-bottom-2 after:h-4 " +
    "after:rounded-full after:bg-black/10 after:blur-lg after:opacity-70 " +
    "group-hover:after:opacity-90 group-active:after:translate-y-[2px]";

  return (
    <div className="mt-6 flex gap-3 flex-wrap">
      <a href="#" className={btn} aria-label="Download on the App Store">
        <img
          className="h-11 w-11"
          src="https://img.icons8.com/?size=100&id=4PbFeZOKAc61&format=png&color=000000"
          alt="Apple"
        />
        <div className="text-left leading-tight">
          <div className="text-[10px] leading-none text-gray-500">ดาวน์โหลดที่</div>
          <div className="text-sm font-semibold">App Store</div>
        </div>
      </a>

      <a href="#" className={btn} aria-label="Get it on Google Play">
        <img
          className="h-10 w-10"
          src="https://img.icons8.com/?size=100&id=22988&format=png&color=000000"
          alt="Google Play"
        />
        <div className="text-left leading-tight">
          <div className="text-[10px] leading-none text-gray-500">ดาวน์โหลดที่</div>
          <div className="text-sm font-semibold">Google Play</div>
        </div>
      </a>
    </div>
  );
}
