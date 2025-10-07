import { AppBadges } from "./Badges";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container-slim grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-2">
            <img className="h-10 w-10" src="/images/telemed.png" alt="Smart Telemed" />
            <span className="font-semibold text-gray-800 text-lg">Smart <span className="text-brand">Telemed</span></span>
          </div>
          <div className="mt-4 flex gap-3">
            <div className=" flex gap-3 flex-wrap">
        <a href="#" className="inline-flex items-center gap-4 rounded-xl border px-4 py-2 shadow-soft bg-black hover:translate-y-[1px] transition">
          <img className="h-11 w-11 "src="https://img.icons8.com/?size=100&id=4PbFeZOKAc61&format=png&color=000000" alt="Smart Telemed" />
          <div className="text-left">
            <div className="text-[10px] text-white leading-none text-gray-500">ดาวน์โหลดที่</div>
            <div className="text-sm text-white font-semibold">App Store</div>
          </div>
        </a>
        <a href="#" className="inline-flex items-center gap-3 rounded-xl border px-4 py-2 shadow-soft bg-black hover:translate-y-[1px] transition">
          <img className="h-9 w-9" src="https://img.icons8.com/?size=100&id=22988&format=png&color=000000" alt="Smart Telemed" />
          <div className="text-left">
            <div className="text-[10px] text-white leading-none text-gray-500">ดาวน์โหลดที่</div>
            <div className="text-sm text-white font-semibold">Google Play</div>
          </div>
        </a>
    </div>
          </div>
          <p className="mt-4 text-xs text-gray-500">©2025 E.S.M.Solution Co.,Ltd.</p>
        </div>
        <div className="text-sm text-gray-600">
          <ul className="space-y-2">
            <li><a className="hover:text-brand" href="#">หน้าแรก</a></li>
            <li><a className="hover:text-brand" href="#safety">นโยบายความเป็นส่วนตัว</a></li>
            <li><a className="hover:text-brand" href="#policy">ข้อกำหนดในการให้บริการ</a></li>
            <li><a className="hover:text-brand" href="#faq">คำถามที่พบบ่อย</a></li>
          </ul>
        </div>
        <div id="contact" className="text-sm text-gray-600">
          <div className="font-semibold mb-2">ติดต่อเรา</div>
          <div className="flex gap-3">
            <a className="h-9 w-9 grid place-items-center rounded-full bg-white border shadow-sm" href="#"><svg viewBox="0 0 24 24" className="h-4 w-4"><path fill="currentColor" d="M22.46 6c-.77.35-1.5.6-2.36.7a4.1 4.1 0 0 0 1.8-2.3 8 8 0 0 1-2.6 1A4.13 4.13 0 0 0 16.1 4c-2.3 0-4.2 2-4.2 4.3 0 .34 0 .67.08.97-3.5-.18-6.6-1.9-8.7-4.6a4.4 4.4 0 0 0-.57 2.2c0 1.5.74 2.8 1.9 3.6-.67 0-1.3-.2-1.9-.5 0 2.2 1.5 4 3.5 4.5-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.5 3.4 4.6 3.5A8.3 8.3 0 0 1 2 19.5a11.7 11.7 0 0 0 6.3 1.9c7.6 0 11.8-6.5 11.8-12.1v-.5A8.9 8.9 0 0 0 22.5 6Z"/></svg></a>
            <a className="h-9 w-9 grid place-items-center rounded-full bg-white border shadow-sm" href="#"><svg viewBox="0 0 24 24" className="h-4 w-4"><path fill="currentColor" d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.2V12h2.2V9.8c0-2.1 1.2-3.2 3-3.2.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.5l-.4 2.9h-2.1v7A10 10 0 0 0 22 12"/></svg></a>
            <a className="h-9 w-9 grid place-items-center rounded-full bg-white border shadow-sm" href="#"><svg viewBox="0 0 24 24" className="h-4 w-4"><path fill="currentColor" d="M12 2.2C6.5 2.2 2 6.7 2 12.2c0 4.4 2.8 8.2 6.6 9.5.5.1.7-.2.7-.5v-1.8c-2.7.6-3.3-1.1-3.3-1.1-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1 1.7.8 1.9 1.2.5.9 1.6.8 2 .6.1-.7.4-1.2.7-1.5-2.2-.2-4.4-1.1-4.4-5 0-1.1.4-2 1.2-2.7-.1-.3-.5-1.5.1-3 0 0 1-.3 3 .9a10 10 0 0 1 5.6 0c2-1.2 3-.9 3-.9.2 1.5.2 2.6.1 3 .7 1.2 1.1 1.7 1.1 2.7 0 3.9-2.2 4.7-4.4 5 .4.3.8 1 .8 2v2.9c0 .3.2.6.7.5A10.1 10.1 0 0 0 22 12.2c0-5.5-4.5-10-10-10Z"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
