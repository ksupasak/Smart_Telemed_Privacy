import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminClean() {
  const navigate = useNavigate();
  const [hospitalCode, setHospitalCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState({ text: '', type: '' });

  // Customer Database - ตรงกับ home.rb
  const CUSTOMERS = {
    "123456": { id: "67442576790f9b3c1a000002", name: "รพ.ทดสอบ" },
    "10795": { id: "674429f3790f9b3c1a000022", name: "รพ.โคกเจริญ" },
    "456789": { id: "68b7e7a1790f9b16ad000009", name: "รพ.ทดสอบ2" }
  };

  const showAlert = (text, type) => {
    setAlertMessage({ text, type });
    setTimeout(() => setAlertMessage({ text: '', type: '' }), 5000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    const code = hospitalCode.trim();
    
    if (code === "") {
      showAlert("กรุณากรอกรหัส Hospital", "error");
      return;
    }

    setLoading(true);

    // จำลองการเรียก API
    setTimeout(() => {
      const customer = CUSTOMERS[code];
      
      if (customer) {
        showAlert(`ยินดีต้อนรับ ${customer.name}`, "success");
        // Redirect ไปหน้า Login User
        setTimeout(() => {
          navigate('/login', { 
            state: { 
              hospital: {
                code: code,
                name: customer.name,
                id: customer.id
              }
            } 
          });
        }, 1500);
      } else {
        const availableCodes = Object.keys(CUSTOMERS).join(", ");
        showAlert(`ไม่พบรหัสนี้ในระบบ (รหัสที่มี: ${availableCodes})`, "warning");
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-x-hidden">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      {/* Gradient Background */}
      <div className="fixed top-0 left-0 right-0 h-[60vh] bg-gradient-to-br from-brand to-secondary opacity-40 -z-10">
        <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-b from-transparent to-gray-50"></div>
      </div>

      <div className="min-h-screen flex items-center justify-center p-5">
        <div className="w-full max-w-[900px]" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
          
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/90 backdrop-blur-sm rounded-[20px] mb-5 shadow-lg" style={{ animation: 'float 3s ease-in-out infinite' }}>
              <img className="w-24 h-24" src="/images/telemed.png" alt="Smart Telemed Logo" />
            </div>
            <h1 className="text-4xl font-bold mb-2.5 text-[#2d2d2d] shadow-[0_2px_8px_rgba(255,255,255,0.8)]">
              Smart Telemed
            </h1>
            <p className="text-xl font-medium mb-2.5 opacity-85 text-[#3d3d3d]">
              ระบบการแพทย์ทางไกล
            </p>
            <p className="text-sm opacity-75 max-w-[350px] mx-auto text-[#4d4d4d]">
              กรุณากรอกรหัส Hospital เพื่อเข้าสู่ระบบ Smart Telemed
            </p>
          </div>

          {/* Alert Message */}
          {alertMessage.text && (
            <div className={`p-3 rounded-[10px] mb-5 text-sm ${
              alertMessage.type === 'success'
                ? 'bg-[#efe] text-[#3c3] border border-[#cfc]'
                : alertMessage.type === 'warning'
                ? 'bg-[#fff3cd] text-[#856404] border border-[#ffeaa7]'
                : 'bg-[#fee] text-[#c33] border border-[#fcc]'
            }`} style={{ animation: 'fadeInUp 0.3s ease-out' }}>
              {alertMessage.text}
            </div>
          )}

          {/* Login Card */}
          <div className="bg-white rounded-[20px] p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] mb-8" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s backwards' }}>
            
            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <label className="flex items-center gap-2 text-sm font-medium text-[#4a4a4a] mb-2.5">
                  <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  รหัส Hospital
                </label>
                <input
                  type="text"
                  value={hospitalCode}
                  onChange={(e) => {
                    setHospitalCode(e.target.value);
                    setAlertMessage({ text: '', type: '' });
                  }}
                  disabled={loading}
                  className="w-full px-4 py-3.5 text-base border-2 border-[#e0e0e0] rounded-xl bg-[#fafafa] focus:outline-none focus:border-brand focus:shadow-[0_0_0_4px_rgba(26,184,130,0.08)] focus:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="กรุณากรอกรหัส Hospital"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold border-none rounded-xl cursor-pointer bg-gradient-to-br from-brand to-secondary text-white shadow-[0_4px_12px_rgba(26,184,130,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(26,184,130,0.25)] hover:brightness-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                  loading ? 'animate-pulse' : ''
                }`}
              >
                {loading ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    กำลังตรวจสอบ...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    เข้าสู่ระบบ
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative text-center my-6">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-[#e0e0e0]"></div>
              <span className="relative inline-block px-4 bg-white text-[#999] text-sm">หรือ</span>
            </div>

            {/* Back to Home Button */}
            <Link
              to="/"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold border-2 border-brand rounded-xl cursor-pointer bg-transparent text-brand transition-all duration-300 hover:bg-brand hover:text-white hover:-translate-y-0.5 no-underline"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              กลับสู่หน้าหลัก
            </Link>
          </div>

          {/* Footer */}
          <footer className="text-center text-[#888] text-sm" style={{ animation: 'fadeInUp 0.8s ease-out 0.6s backwards' }}>
            <p className="mb-2.5">&copy; 2025 Smart Telemed. All rights reserved.</p>
            <div className="flex items-center justify-center gap-2.5 flex-wrap">
              <Link to="/privacy" className="text-brand no-underline hover:opacity-70 transition-opacity">นโยบายความเป็นส่วนตัว</Link>
              <span className="text-[#bbb]">|</span>
              <Link to="/terms" className="text-brand no-underline hover:opacity-70 transition-opacity">เงื่อนไขการใช้งาน</Link>
              <span className="text-[#bbb]">|</span>
              <Link to="/contact" className="text-brand no-underline hover:opacity-70 transition-opacity">ติดต่อเรา</Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
