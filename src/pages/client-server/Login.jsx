import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState({ text: '', type: '' });

  // Get hospital info from navigation state
  const hospitalInfo = location.state?.hospital || { name: 'โรงพยาบาล', code: '' };

  // Sample users database (ตัวอย่างผู้ใช้งาน)
  const USERS = {
    'doctor1': { password: '1234', name: 'นพ.ทดสอบ ทดสอบ', role: 'แพทย์', roleEn: 'doctor' },
    'doctor2': { password: '1234', name: 'พญ.จินตนา รักษา', role: 'แพทย์', roleEn: 'doctor' },
    'nurse1': { password: '1234', name: 'น.ส.สุดา สวยงาม', role: 'พยาบาล', roleEn: 'nurse' },
    'staff1': { password: '1234', name: 'นาย ประยุทธ ช่วยเหลือ', role: 'เจ้าหน้าที่', roleEn: 'staff' },
    'admin': { password: 'admin', name: 'ผู้ดูแลระบบ', role: 'ผู้ดูแลระบบ', roleEn: 'admin' }
  };

  const showAlert = (text, type) => {
    setAlertMessage({ text, type });
    setTimeout(() => {
      setAlertMessage({ text: '', type: '' });
    }, 5000);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      showAlert('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน', 'warning');
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const user = USERS[username];

      if (!user) {
        showAlert('ไม่พบผู้ใช้งานในระบบ', 'error');
        setLoading(false);
        return;
      }

      if (user.password !== password) {
        showAlert('รหัสผ่านไม่ถูกต้อง', 'error');
        setLoading(false);
        return;
      }

      // Login successful
      showAlert(`เข้าสู่ระบบสำเร็จ ยินดีต้อนรับ ${user.name}`, 'success');
      
      // Store user info in sessionStorage
      sessionStorage.setItem('user', JSON.stringify({
        username,
        name: user.name,
        role: user.role,
        roleEn: user.roleEn,
        hospital: hospitalInfo
      }));

      setTimeout(() => {
        navigate('/dashboard', { 
          state: { 
            user: {
              username,
              name: user.name,
              role: user.role,
              roleEn: user.roleEn
            },
            hospital: hospitalInfo
          } 
        });
      }, 1000);
    }, 1000);
  };

  const handleBackToHospitalLogin = () => {
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-x-hidden">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
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
        <div className="w-full max-w-md" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
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
        <div className="bg-white rounded-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/90 backdrop-blur-sm rounded-[20px] mb-5 shadow-lg" style={{ animation: 'float 3s ease-in-out infinite' }}>
              <svg className="w-12 h-12 text-[#1ab882]" viewBox="0 0 24 24" fill="none">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold mb-2.5 text-[#2d2d2d]">เข้าสู่ระบบผู้ใช้</h1>
            <p className="text-base font-medium mb-2.5 opacity-85 text-[#3d3d3d]">
              {hospitalInfo.name}
              {hospitalInfo.code && <span className="ml-2 text-xs bg-gradient-to-r from-[#1ab882] to-[#10a5c9] text-white px-2 py-1 rounded-md">รหัส: {hospitalInfo.code}</span>}
            </p>
            <p className="text-sm opacity-75 text-[#4d4d4d]">
              กรุณากรอกชื่อผู้ใช้และรหัสผ่านเพื่อเข้าสู่ระบบ
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Username Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ชื่อผู้ใช้
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="กรอกชื่อผู้ใช้"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ab882] focus:border-transparent transition-all"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                รหัสผ่าน
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="กรอกรหัสผ่าน"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1ab882] focus:border-transparent transition-all"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Sample Credentials Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs">
              <p className="font-semibold text-blue-800 mb-1">ตัวอย่างบัญชีผู้ใช้:</p>
              <ul className="space-y-0.5 text-blue-700">
                <li>• แพทย์: <code className="bg-blue-100 px-1 rounded">doctor1</code> / <code className="bg-blue-100 px-1 rounded">1234</code></li>
                <li>• พยาบาล: <code className="bg-blue-100 px-1 rounded">nurse1</code> / <code className="bg-blue-100 px-1 rounded">1234</code></li>
                <li>• ผู้ดูแล: <code className="bg-blue-100 px-1 rounded">admin</code> / <code className="bg-blue-100 px-1 rounded">admin</code></li>
              </ul>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              style={{
                background: loading ? '#94a3b8' : 'linear-gradient(135deg, #1ab882 0%, #10a5c9 100%)'
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  กำลังเข้าสู่ระบบ...
                </span>
              ) : (
                'เข้าสู่ระบบ'
              )}
            </button>

            {/* Back Button */}
            <button
              type="button"
              onClick={handleBackToHospitalLogin}
              className="w-full py-3 px-4 rounded-xl font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all duration-200"
            >
              ← กลับไปเลือกโรงพยาบาล
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-[#4d4d4d] text-sm">
          <p className="opacity-90 font-medium">Smart Telemed System</p>
          <p className="opacity-75 text-xs mt-1">Secure Healthcare Platform</p>
        </div>
        </div>
      </div>
    </div>
  );
}
