import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

export default function Today() {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('notes');
  const [activeQueue, setActiveQueue] = useState(1);
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Sample data
  const user = {
    name: 'นพ.ทดสอบ ทดสอบ',
    role: 'แพทย์',
    hospital: 'โรงพยาบาล ทดสอบ Smart Telemed'
  };

  const queueData = [
    { id: 1, number: 'Q001', name: 'นางสาวสมหญิง ใจดี', hn: '123456', age: 35 },
    { id: 2, number: 'Q002', name: 'นายสมชาย รักดี', hn: '123457', age: 42 },
    { id: 3, number: 'Q003', name: 'นางดวงใจ สวยงาม', hn: '123458', age: 28 }
  ];

  const images = [
    'https://plus.unsplash.com/premium_photo-1661341116387-95a06afb98b7?q=80&w=2670&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1539327381140-bc020facf1e2?q=80&w=2670&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1609840533741-62c180d0be79?q=80&w=2670&auto=format&fit=crop'
  ];

  const vitalSigns = [
    { label: 'BT', value: '37.2°C', status: 'normal' },
    { label: 'PR', value: '78', status: 'normal' },
    { label: 'RR', value: '18', status: 'normal' },
    { label: 'SpO2', value: '98%', status: 'normal' },
    { label: 'BP', value: '135/85', status: 'warning' },
    { label: 'BW', value: '65.5kg', status: 'normal' },
    { label: 'H', value: '165cm', status: 'normal' },
    { label: 'DTX', value: '185', status: 'danger' }
  ];

  const history = [
    { date: '15 ก.ย. 68', title: 'หวัดธรรมดา', doctor: 'นพ.สมชาย ใจดี' },
    { date: '1 ก.ย. 68', title: 'ตรวจสุขภาพประจำปี', doctor: 'พญ.สมหญิง รักษ์ดี' },
    { date: '10 ส.ค. 68', title: 'ความดันโลหิตสูง', doctor: 'นพ.สมชาย ใจดี' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
    const months = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
                    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
    return `วันที่ ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear() + 543} เวลา ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')} น.`;
  };

  const handleLogout = () => {
    if (window.confirm('ต้องการออกจากระบบหรือไม่?')) {
      navigate('/admin');
    }
  };

  const openImageModal = (index) => {
    setCurrentImageIndex(index);
    setShowImageModal(true);
  };

  const navigateImage = (direction) => {
    let newIndex = currentImageIndex + direction;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showImageModal) {
        if (e.key === 'ArrowLeft') navigateImage(-1);
        if (e.key === 'ArrowRight') navigateImage(1);
        if (e.key === 'Escape') setShowImageModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showImageModal, currentImageIndex]);

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex overflow-hidden">
      <style>{`
        :root {
          --gradient-start: #1ab882;
          --gradient-end: #10a5c9;
          --vital-normal: #10b981;
          --vital-warning: #f59e0b;
          --vital-danger: #ef4444;
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(220, 38, 38, 0); }
        }
        .vital-item.critical {
          animation: pulse 2s infinite;
        }
      `}</style>

      {/* Sidebar Component */}
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-6 py-4 bg-white border-b border-[#e0e0e0] flex-shrink-0 gap-3 md:gap-0">
          <div>
            <div className="flex items-center gap-3">
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-2xl font-bold text-[#4a4a4a]">วันนี้</h1>
            </div>
            <div className="flex items-center gap-2 text-[13px] text-[#6b7280] mt-0.5">
              <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="currentColor"/>
              </svg>
              <span>{formatDateTime(currentTime)}</span>
            </div>
          </div>
          <div className="flex gap-3 md:gap-4 text-xs md:text-sm flex-wrap">
            <span className="text-[#6b7280]">รอตรวจ: <strong className="text-[#f59e0b] text-base md:text-lg">12</strong></span>
            <span className="text-[#6b7280]">กำลังตรวจ: <strong className="text-[#3b82f6] text-base md:text-lg">3</strong></span>
            <span className="text-[#6b7280]">เสร็จแล้ว: <strong className="text-[#10b981] text-base md:text-lg">28</strong></span>
          </div>
        </header>

        {/* 3-Column Layout - Responsive */}
        <div className="flex flex-col lg:grid lg:grid-cols-[260px_1fr_360px] gap-0 flex-1 overflow-hidden">
          
          {/* Left: Queue */}
          <section className="bg-white border-b lg:border-b-0 lg:border-r border-[#e0e0e0] flex flex-col overflow-hidden max-h-[300px] lg:max-h-none">
            <div className="flex justify-between items-center p-4 border-b border-[#e0e0e0]">
              <h2 className="text-base font-bold text-[#4a4a4a]">คิวผู้ป่วย</h2>
              <button className="w-8 h-8 rounded-lg bg-[#f3f4f6] hover:bg-brand hover:text-white flex items-center justify-center transition-colors">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none">
                  <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" fill="currentColor"/>
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3">
              {queueData.map((queue) => (
                <div key={queue.id} className={`border-2 rounded-[10px] p-3 mb-2.5 transition-all cursor-pointer ${
                  activeQueue === queue.id 
                    ? 'border-brand bg-gradient-to-br from-[rgba(26,184,130,0.05)] to-[rgba(16,165,201,0.05)]'
                    : 'border-[#e0e0e0] hover:border-brand hover:shadow-md'
                }`} onClick={() => setActiveQueue(queue.id)}>
                  <div className="inline-block bg-brand text-white px-2.5 py-0.5 rounded-xl font-semibold text-xs mb-2">
                    {queue.number}
                  </div>
                  <div className="text-[15px] font-semibold text-[#4a4a4a] mb-1">{queue.name}</div>
                  <div className="text-xs text-[#6b7280] mb-2.5">HN: {queue.hn} | {queue.age} ปี</div>
                  <button className="w-full py-2 bg-gradient-to-br from-brand to-secondary text-white rounded-md font-semibold text-sm flex items-center justify-center gap-1.5 hover:-translate-y-0.5 hover:shadow-lg transition-all">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5v14l11-7z" fill="currentColor"/>
                    </svg>
                    เริ่มตรวจ
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Center: Video + CHW + Vitals */}
          <section className="flex flex-col p-3 gap-3 overflow-hidden flex-1">
            {/* Patient Info */}
            <div className="bg-white rounded-xl p-4 flex flex-col md:flex-row gap-4 shadow-sm flex-shrink-0">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#f093fb] to-[#f5576c] flex items-center justify-center flex-shrink-0">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
                </svg>
              </div>
              <div className="flex-1 flex flex-col gap-1.5 text-[13px]">
                <div className="flex gap-2">
                  <span className="text-[#6b7280] font-semibold min-w-[120px]">ชื่อ-นามสกุล:</span>
                  <span className="text-[#4a4a4a] font-medium">นางสาวสมหญิง ใจดี</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#6b7280] font-semibold min-w-[120px]">เลขบัตรประชาชน:</span>
                  <span className="text-[#4a4a4a] font-medium">1-2345-67890-12-3</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#6b7280] font-semibold min-w-[120px]">วันเกิด:</span>
                  <span className="text-[#4a4a4a] font-medium">15 มีนาคม 2533 (อายุ 35 ปี)</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#6b7280] font-semibold min-w-[120px]">ที่อยู่:</span>
                  <span className="text-[#4a4a4a] font-medium">123/45 ถ.สุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110</span>
                </div>
              </div>
            </div>

            {/* Video + CHW */}
            <div className="flex flex-col lg:flex-row gap-3 flex-1 min-h-0">
              {/* Video */}
              <div className="w-full lg:w-[380px] aspect-video lg:aspect-auto bg-[#1a1a1a] rounded-xl overflow-hidden relative flex-shrink-0" style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                {/* Mini Video */}
                <div className="absolute bottom-3 right-3 w-[90px] aspect-[9/16] bg-[#2d2d2d] rounded-lg border-2 border-white overflow-hidden" style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1637059824899-a441006a6875?q=80&w=1352&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>

                {/* Controls */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-black/70 px-3 py-2 rounded-full">
                  <button className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors">
                    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none">
                      <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" fill="currentColor"/>
                    </svg>
                  </button>
                  <button className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors">
                    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none">
                      <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" fill="currentColor"/>
                    </svg>
                  </button>
                  <button className="w-9 h-9 rounded-full bg-[#ef4444] hover:bg-[#dc2626] flex items-center justify-center text-white transition-colors">
                    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none">
                      <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* CHW Notes */}
              <div className="flex-1 bg-white border-l-4 border-[#3b82f6] rounded-lg p-3 overflow-y-auto">
                <div className="flex items-center gap-1.5 text-[13px] font-semibold text-[#4a4a4a] mb-2">
                  <svg className="w-4 h-4 text-[#3b82f6]" viewBox="0 0 24 24" fill="none">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
                  </svg>
                  บันทึกจาก อสม.สมศรี ใจงาม
                </div>
                <p className="text-sm text-[#4a4a4a] mb-2"><strong>เวลา:</strong> 11:05 น.</p>
                <p className="text-sm text-[#4a4a4a] leading-relaxed mb-2">ผู้ป่วยมีอาการไอเล็กน้อย มีน้ำมูก ไม่มีไข้ เริ่มมีอาการมา 2 วัน ทานยาแก้ไอทั่วไปแล้วไม่ดีขึ้น</p>
                <p className="text-sm text-[#4a4a4a]"><strong>ประวัติแพ้ยา:</strong> ไม่มี</p>
                <p className="text-sm text-[#4a4a4a]"><strong>โรคประจำตัว:</strong> ไม่มี</p>
                <p className="text-sm text-[#4a4a4a] mt-2"><strong>หมายเหตุ:</strong> ผู้ป่วยต้องการพบแพทย์เพื่อขอใบรับรองแพทย์</p>

                {/* Photos */}
                <div className="mt-3 pt-3 border-t border-[#e0e0e0]">
                  <div className="text-[13px] font-semibold text-[#4a4a4a] mb-2">รูปถ่าย</div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {images.map((img, idx) => (
                      <div key={idx} onClick={() => openImageModal(idx)} className="aspect-square rounded-lg overflow-hidden cursor-pointer border-2 border-[#e0e0e0] hover:border-brand hover:scale-105 transition-all">
                        <img src={img} alt={`Photo ${idx + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Vitals */}
            <div className="grid grid-cols-4 md:grid-cols-8 gap-1.5 flex-shrink-0">
              {vitalSigns.map((vital, idx) => (
                <div key={idx} className={`bg-white rounded-lg p-2 text-center border-2 transition-all hover:-translate-y-0.5 hover:shadow-md ${
                  vital.status === 'normal' ? 'border-[var(--vital-normal)] bg-gradient-to-br from-[rgba(16,185,129,0.05)] to-[rgba(16,185,129,0.1)]' :
                  vital.status === 'warning' ? 'border-[var(--vital-warning)] bg-gradient-to-br from-[rgba(245,158,11,0.05)] to-[rgba(245,158,11,0.1)]' :
                  vital.status === 'danger' ? 'border-[var(--vital-danger)] bg-gradient-to-br from-[rgba(239,68,68,0.05)] to-[rgba(239,68,68,0.1)]' :
                  'border-[#e0e0e0]'
                } ${vital.status === 'critical' ? 'vital-item critical' : ''}`}>
                  <span className="block text-[10px] text-[#6b7280] font-semibold mb-0.5">{vital.label}</span>
                  <span className={`block text-[15px] font-bold ${
                    vital.status === 'normal' ? 'text-[var(--vital-normal)]' :
                    vital.status === 'warning' ? 'text-[var(--vital-warning)]' :
                    vital.status === 'danger' ? 'text-[var(--vital-danger)]' :
                    'text-[#4a4a4a]'
                  }`}>{vital.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Right: Forms */}
          <section className="bg-white border-t lg:border-t-0 lg:border-l border-[#e0e0e0] flex flex-col overflow-hidden min-h-[400px] lg:min-h-0">
            {/* Tabs */}
            <div className="flex border-b-2 border-[#e0e0e0]">
              <button onClick={() => setActiveTab('notes')} className={`flex-1 py-3 text-sm font-semibold transition-all ${
                activeTab === 'notes' ? 'text-brand border-b-4 border-brand -mb-0.5' : 'text-[#6b7280] hover:text-brand'
              }`}>บันทึกการตรวจ</button>
              <button onClick={() => setActiveTab('history')} className={`flex-1 py-3 text-sm font-semibold transition-all ${
                activeTab === 'history' ? 'text-brand border-b-4 border-brand -mb-0.5' : 'text-[#6b7280] hover:text-brand'
              }`}>ประวัติ</button>
            </div>

            {/* Tab Content */}
            {activeTab === 'notes' ? (
              <div className="flex-1 p-4 flex flex-col gap-2.5 overflow-y-auto">
                <input type="text" placeholder="การตรวจร่างกาย (PE)" className="px-3 py-2.5 border-2 border-[#e0e0e0] rounded-lg text-sm focus:outline-none focus:border-brand focus:shadow-[0_0_0_3px_rgba(26,184,130,0.08)] transition-all" />
                <input type="text" placeholder="การวินิจฉัย (Dx)" className="px-3 py-2.5 border-2 border-[#e0e0e0] rounded-lg text-sm focus:outline-none focus:border-brand focus:shadow-[0_0_0_3px_rgba(26,184,130,0.08)] transition-all" />
                <textarea rows="3" placeholder="การรักษา + ยาที่สั่ง" className="px-3 py-2.5 border-2 border-[#e0e0e0] rounded-lg text-sm resize-none focus:outline-none focus:border-brand focus:shadow-[0_0_0_3px_rgba(26,184,130,0.08)] transition-all"></textarea>
                <input type="text" placeholder="คำแนะนำ" className="px-3 py-2.5 border-2 border-[#e0e0e0] rounded-lg text-sm focus:outline-none focus:border-brand focus:shadow-[0_0_0_3px_rgba(26,184,130,0.08)] transition-all" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-auto pt-4">
                  <button className="py-3 bg-gradient-to-br from-brand to-secondary text-white rounded-lg font-semibold text-sm flex items-center justify-center gap-1.5 hover:-translate-y-0.5 hover:shadow-lg transition-all">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" fill="currentColor"/>
                    </svg>
                    บันทึก
                  </button>
                  <button className="py-3 bg-transparent border-2 border-brand text-brand rounded-lg font-semibold text-sm flex items-center justify-center gap-1.5 hover:bg-brand hover:text-white transition-all">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" fill="currentColor"/>
                    </svg>
                    พิมพ์
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex-1 p-4 flex flex-col gap-2.5 overflow-y-auto">
                {history.map((item, idx) => (
                  <div key={idx} className="flex gap-3 bg-[#f8f9fa] rounded-lg p-3">
                    <div className="text-xs font-semibold text-brand min-w-[70px]">{item.date}</div>
                    <div className="flex-1">
                      <div className="text-[15px] font-semibold text-[#4a4a4a] mb-0.5">{item.title}</div>
                      <div className="text-[13px] text-[#6b7280]">{item.doctor}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-5" onClick={() => setShowImageModal(false)}>
          <button onClick={() => setShowImageModal(false)} className="fixed top-8 right-8 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center text-white text-2xl transition-all hover:rotate-90 z-50">
            ✕
          </button>

          <div className="relative max-w-[90%] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => navigateImage(-1)} className="absolute left-[-70px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:scale-110 flex items-center justify-center text-white transition-all">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/>
              </svg>
            </button>

            <img src={images[currentImageIndex]} alt="Full size" className="max-w-full max-h-[90vh] rounded-xl shadow-2xl" />

            <button onClick={() => navigateImage(1)} className="absolute right-[-70px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:scale-110 flex items-center justify-center text-white transition-all">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/>
              </svg>
            </button>
          </div>

          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
