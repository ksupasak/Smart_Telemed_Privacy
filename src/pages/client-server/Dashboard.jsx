import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

export default function Dashboard() {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Sample user data - ในระบบจริงจะดึงจาก session/context
  const user = {
    name: 'นพ.ทดสอบ ทดสอบ',
    role: 'แพทย์',
    hospital: 'โรงพยาบาล ทดสอบ Smart Telemed'
  };

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
    const months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
                    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear() + 543;
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `วันที่ ${day} ${month} ${year} เวลา ${hours}:${minutes} น.`;
  };

  const handleLogout = () => {
    if (window.confirm('ต้องการออกจากระบบหรือไม่?')) {
      navigate('/admin');
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex">
      <style>{`
        :root {
          --gradient-start: #1ab882;
          --gradient-end: #10a5c9;
          --primary-color: #1ab882;
          --secondary-color: #10a5c9;
          --text-color: #4a4a4a;
          --text-light: #6b7280;
          --hover-bg: #f3f4f6;
          --sidebar-w: 240px;
          --shadow: 0 4px 16px rgba(0,0,0,.06);
        }
      `}</style>

      {/* Sidebar Component */}
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <div className="flex justify-between items-center px-6 py-4 bg-white border-b border-[#e0e0e0] flex-shrink-0">
          <div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-2xl font-bold text-[#4a4a4a]">Dashboard</h1>
            </div>
            <div className="flex items-center gap-2 text-[14.4px] text-[#6b7280] mt-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="currentColor"/>
              </svg>
              <span>{formatDateTime(currentTime)}</span>
            </div>
          </div>
          <button className="relative w-11 h-11 rounded-xl bg-white shadow-[0_4px_16px_rgba(0,0,0,.06)] flex items-center justify-center">
            <svg className="w-[22px] h-[22px] text-[#4a4a4a]" viewBox="0 0 24 24" fill="none">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" fill="currentColor"/>
            </svg>
            <span className="absolute -top-1 -right-1 bg-[#ef4444] text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-[10px] min-w-[18px] text-center">3</span>
          </button>
        </div>

        {/* Container */}
        <div className="p-5 flex flex-col gap-6 h-[calc(100vh-72px)] overflow-auto">
          
          {/* Stats Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-[0_4px_16px_rgba(0,0,0,.06)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,.1)]">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-[13.76px] text-[#6b7280] mb-1">ตรวจแล้ว</div>
                <div className="text-[28.8px] font-bold text-[#4a4a4a]">247</div>
                <div className="text-[12.48px] text-[#10b981] mt-1.5">+12% จากเมื่อวาน</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-[0_4px_16px_rgba(0,0,0,.06)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,.1)]">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f093fb] to-[#f5576c] flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3ZM14 17H7V15H14V17ZM17 13H7V11H17V13ZM17 9H7V7H17V9Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-[13.76px] text-[#6b7280] mb-1">รอตรวจ</div>
                <div className="text-[28.8px] font-bold text-[#4a4a4a]">38</div>
                <div className="text-[12.48px] text-[#6b7280] mt-1.5">รายการคงค้าง</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-[0_4px_16px_rgba(0,0,0,.06)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,.1)]">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand to-secondary flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-[13.76px] text-[#6b7280] mb-1">คนไข้ทั้งหมด</div>
                <div className="text-[28.8px] font-bold text-[#4a4a4a]">1,284</div>
                <div className="text-[12.48px] text-[#10b981] mt-1.5">+5% เดือนนี้</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-[0_4px_16px_rgba(0,0,0,.06)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,.1)]">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#fa709a] to-[#fee140] flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM19 19c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z" fill="currentColor"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-[13.76px] text-[#6b7280] mb-1">ข้อมูลตรวจสุขภาพ</div>
                <div className="text-[28.8px] font-bold text-[#4a4a4a]">3,847</div>
                <div className="text-[12.48px] text-[#6b7280] mt-1.5">บันทึกทั้งหมด</div>
              </div>
            </div>
          </section>

          {/* Categories */}
          <section>
            <h2 className="text-xl font-bold text-[#4a4a4a] mb-3">หมวดหมู่ผู้ใช้งาน</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="bg-white rounded-xl p-[18px] shadow-[0_4px_16px_rgba(0,0,0,.06)] transition-transform hover:-translate-y-0.5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm6 11h-3v3h-2v-3H8v-2h3v-3h2v3h3v2z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h3 className="text-[16.8px] font-semibold text-[#4a4a4a]">แพทย์</h3>
                </div>
                <div className="text-[25.6px] font-bold text-[#4a4a4a] my-2">42</div>
                <div className="text-[13.6px] text-[#6b7280] mb-3">แพทย์ทั้งหมด</div>
                <button className="w-full px-4 py-2.5 border-2 border-brand bg-transparent text-brand rounded-lg font-semibold transition-all hover:bg-brand hover:text-white">
                  ดูรายละเอียด
                </button>
              </div>

              <div className="bg-white rounded-xl p-[18px] shadow-[0_4px_16px_rgba(0,0,0,.06)] transition-transform hover:-translate-y-0.5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f093fb] to-[#f5576c] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h3 className="text-[16.8px] font-semibold text-[#4a4a4a]">ผู้ป่วย</h3>
                </div>
                <div className="text-[25.6px] font-bold text-[#4a4a4a] my-2">1,284</div>
                <div className="text-[13.6px] text-[#6b7280] mb-3">ผู้ป่วยทั้งหมด</div>
                <button className="w-full px-4 py-2.5 border-2 border-brand bg-transparent text-brand rounded-lg font-semibold transition-all hover:bg-brand hover:text-white">
                  ดูรายละเอียด
                </button>
              </div>

              <div className="bg-white rounded-xl p-[18px] shadow-[0_4px_16px_rgba(0,0,0,.06)] transition-transform hover:-translate-y-0.5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4facfe] to-[#00f2fe] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h3 className="text-[16.8px] font-semibold text-[#4a4a4a]">เจ้าหน้าที่</h3>
                </div>
                <div className="text-[25.6px] font-bold text-[#4a4a4a] my-2">68</div>
                <div className="text-[13.6px] text-[#6b7280] mb-3">เจ้าหน้าที่ทั้งหมด</div>
                <button className="w-full px-4 py-2.5 border-2 border-brand bg-transparent text-brand rounded-lg font-semibold transition-all hover:bg-brand hover:text-white">
                  ดูรายละเอียด
                </button>
              </div>
            </div>
          </section>

          {/* Activities */}
          <section className="bg-white rounded-xl p-4 shadow-[0_4px_16px_rgba(0,0,0,.06)]">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-bold text-[#4a4a4a]">กิจกรรมล่าสุด</h2>
              <a href="#" className="text-[14px] text-brand font-medium hover:underline">ดูทั้งหมด</a>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 p-3 rounded-[10px] bg-[#f8f9fa] hover:bg-[#f3f4f6] transition-colors">
                <div className="w-10 h-10 rounded-[10px] bg-[#d1fae5] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#10b981]" viewBox="0 0 24 24" fill="none">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-[15.2px] text-[#4a4a4a]">แพทย์ สมชาย ใจดี ตรวจผู้ป่วยเสร็จสิ้น</div>
                  <div className="text-[12.8px] text-[#6b7280] mt-0.5">5 นาทีที่แล้ว</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-[10px] bg-[#f8f9fa] hover:bg-[#f3f4f6] transition-colors">
                <div className="w-10 h-10 rounded-[10px] bg-[#dbeafe] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#3b82f6]" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-[15.2px] text-[#4a4a4a]">ผู้ป่วยใหม่ ดวงใจ สวยงาม ลงทะเบียน</div>
                  <div className="text-[12.8px] text-[#6b7280] mt-0.5">15 นาทีที่แล้ว</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-[10px] bg-[#f8f9fa] hover:bg-[#f3f4f6] transition-colors">
                <div className="w-10 h-10 rounded-[10px] bg-[#fef3c7] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#f59e0b]" viewBox="0 0 24 24" fill="none">
                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-[15.2px] text-[#4a4a4a]">เตือน: ผู้ป่วยรอตรวจเกิน 30 นาที</div>
                  <div className="text-[12.8px] text-[#6b7280] mt-0.5">22 นาทีที่แล้ว</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Mobile Sidebar Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
