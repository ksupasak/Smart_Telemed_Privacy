import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Logo = () => (
  <div className="flex items-center gap-2">
    <img className="h-11 w-11" src="/images/telemed.png" alt="Smart Telemed" />
    <span className="font-semibold text-gray-800 text-lg">
      <Link to="#">Smart <span className="text-brand">Telemed</span></Link>
    </span>
  </div>
);

const LinkItem = ({ to, children, end }) => (
  <NavLink
    to={to}
    end={end}
    className={({ isActive }) =>
      'hover:text-brand transition-colors ' + (isActive ? 'text-brand' : 'text-gray-700')
    }
  >
    {children}
  </NavLink>
);

export default function Header() {
  return (
    <header className="bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container-slim h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <LinkItem to="/" end>หน้าแรก</LinkItem>
          <LinkItem to="/privacy">นโยบายความเป็นส่วนตัว</LinkItem>
          <LinkItem to="/terms">ข้อกำหนดในการให้บริการ</LinkItem>
          <LinkItem to="/faq">คำถามที่พบบ่อย</LinkItem>
          {/* ไปยังส่วนติดต่อบนหน้าแรก */}
          <a href="/#contact" className="hover:text-brand transition-colors">ติดต่อเรา</a>

          {/* ตัวเลือกภาษา (ไอคอน globe inline) */}
          <div className="relative group">
            <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-white text-gray-700 shadow-soft hover:border-brand/50">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
              </svg>
              <span>ภาษาไทย</span>
              <svg className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="absolute right-0 mt-2 w-40 rounded-xl border bg-white shadow-lg hidden group-hover:block">
              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">ภาษาไทย</button>
              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50">English</button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
