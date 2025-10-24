import { useNavigate, useLocation } from 'react-router-dom';

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // Clear session storage
    sessionStorage.removeItem('user');
    if (window.confirm('ต้องการออกจากระบบหรือไม่?')) {
      navigate('/admin');
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 z-50 w-60 bg-white border-r border-[#e0e0e0] flex flex-col transition-transform duration-300`}>
        <div className="p-5 border-b border-[#e0e0e0]">
          <div className="flex items-center gap-2.5">
            <svg className="w-7 h-7 text-[#1ab882]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM10 4H14V6H10V4ZM16 15H13V18H11V15H8V13H11V10H13V13H16V15Z" fill="currentColor"/>
            </svg>
            <span className="text-lg font-bold text-[#4a4a4a]">Smart Telemed</span>
          </div>
          <div className="text-[13px] text-[#6b7280] pl-9 mt-1.5">โรงพยาบาล ทดสอบ Smart Telemed</div>
        </div>

        <nav className="flex-1 p-2.5 overflow-auto flex flex-col gap-1.5">
          <a 
            onClick={() => navigate('/dashboard')} 
            className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg cursor-pointer font-medium text-[15px] transition-all ${
              isActive('/dashboard')
                ? 'text-white'
                : 'text-[#4a4a4a] hover:bg-[#f3f4f6]'
            }`}
            style={isActive('/dashboard') ? { background: 'linear-gradient(135deg, #1ab882, #10a5c9)' } : {}}
          >
            <svg className="w-[18px] h-[18px] flex-shrink-0" viewBox="0 0 24 24" fill="none">
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" fill="currentColor"/>
            </svg>
            <span>Dashboard</span>
          </a>
          
          <a 
            onClick={() => navigate('/today')} 
            className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg cursor-pointer font-medium text-[15px] transition-all ${
              isActive('/today')
                ? 'text-white'
                : 'text-[#4a4a4a] hover:bg-[#f3f4f6]'
            }`}
            style={isActive('/today') ? { background: 'linear-gradient(135deg, #1ab882, #10a5c9)' } : {}}
          >
            <svg className="w-[18px] h-[18px] flex-shrink-0" viewBox="0 0 24 24" fill="none">
              <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" fill="currentColor"/>
            </svg>
            <span>วันนี้</span>
          </a>
          
          <a 
            onClick={() => navigate('/users')} 
            className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg cursor-pointer font-medium text-[15px] transition-all ${
              isActive('/users')
                ? 'text-white'
                : 'text-[#4a4a4a] hover:bg-[#f3f4f6]'
            }`}
            style={isActive('/users') ? { background: 'linear-gradient(135deg, #1ab882, #10a5c9)' } : {}}
          >
            <svg className="w-[18px] h-[18px] flex-shrink-0" viewBox="0 0 24 24" fill="none">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/>
            </svg>
            <span>ผู้ใช้งาน</span>
          </a>
        </nav>

        <div className="p-4 border-t border-[#e0e0e0] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold" style={{ background: 'linear-gradient(135deg, #1ab882, #10a5c9)' }}>K</div>
            <div>
              <div className="text-[13px] font-semibold text-[#4a4a4a]">นพ.ทดสอบ ทดสอบ</div>
              <div className="text-[11px] text-[#6b7280]">แพทย์</div>
            </div>
          </div>
          <button onClick={handleLogout} className="w-9 h-9 rounded-lg bg-[#f3f4f6] border-none cursor-pointer flex items-center justify-center hover:bg-gray-200 transition-colors">
            <svg className="w-[18px] h-[18px] text-[#4a4a4a]" viewBox="0 0 24 24" fill="none">
              <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </aside>

      {/* Mobile sidebar backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
}
