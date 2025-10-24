import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

export default function Users() {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // State for users data from API
  const [users, setUsers] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [staff, setStaff] = useState([]);
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API Base URL - ปรับตาม server ของคุณ
  const API_BASE_URL = 'http://localhost:3000'; // เปลี่ยนเป็น URL ของ API จริง

  // Fetch doctors from API
  const fetchDoctors = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/doctors`); // ปรับ endpoint ตามจริง
      if (!response.ok) throw new Error('Failed to fetch doctors');
      const data = await response.json();
      
      // แปลงข้อมูลให้ตรงกับ format ที่ใช้ในแอป
      const formattedDoctors = data.map(doc => ({
        type: 'doctor',
        id: doc._id || doc.id,
        name: doc.name || doc.rec?.name || '',
        spec: doc.specialty || doc.specialization || 'ทั่วไป',
        code: doc.code || doc.doctor_code || '',
        phone: doc.tel || doc.phone || doc.rec?.tel || '',
        email: doc.email || doc.rec?.email || '',
        photo: doc.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(doc.name || 'Doctor')}&background=667eea`,
        createdAt: doc.created_at || doc.createdAt
      }));
      
      setDoctors(formattedDoctors);
      return formattedDoctors;
    } catch (err) {
      console.error('Error fetching doctors:', err);
      setError(err.message);
      return [];
    }
  };

  // Fetch staff from API
  const fetchStaff = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/staff`); // ปรับ endpoint ตามจริง
      if (!response.ok) throw new Error('Failed to fetch staff');
      const data = await response.json();
      
      const formattedStaff = data.map(s => ({
        type: 'staff',
        id: s._id || s.id,
        name: s.name || s.rec?.name || '',
        role: s.role || s.position || 'เจ้าหน้าที่',
        code: s.code || s.staff_code || '',
        dept: s.department || s.dept || '',
        phone: s.tel || s.phone || s.rec?.tel || '',
        email: s.email || s.rec?.email || '',
        photo: s.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(s.name || 'Staff')}&background=4facfe`,
        createdAt: s.created_at || s.createdAt
      }));
      
      setStaff(formattedStaff);
      return formattedStaff;
    } catch (err) {
      console.error('Error fetching staff:', err);
      setError(err.message);
      return [];
    }
  };

  // Fetch patients from API
  const fetchPatients = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/patients`); // ปรับ endpoint ตามจริง
      if (!response.ok) throw new Error('Failed to fetch patients');
      const data = await response.json();
      
      const formattedPatients = data.map(p => ({
        type: 'patient',
        id: p._id || p.id,
        name: p.name || p.patient_name || '',
        hn: p.hn || p.patient_hn || '',
        idcard: p.idcard || p.id_card || '',
        age: p.age || calculateAge(p.birthdate),
        phone: p.tel || p.phone || '',
        addr: p.address || p.addr || '',
        chronic: p.chronic_diseases || p.chronic || [],
        photo: p.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(p.name || 'Patient')}&background=f093fb`,
        history: p.visit_history || p.history || [],
        createdAt: p.created_at || p.createdAt
      }));
      
      setPatients(formattedPatients);
      return formattedPatients;
    } catch (err) {
      console.error('Error fetching patients:', err);
      setError(err.message);
      return [];
    }
  };

  // Helper function to calculate age
  const calculateAge = (birthdate) => {
    if (!birthdate) return null;
    const today = new Date();
    const birth = new Date(birthdate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  // Fetch all data on component mount
  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        // Fetch ข้อมูลทั้งสามกลุ่มพร้อมกัน
        const [doctorsData, staffData, patientsData] = await Promise.all([
          fetchDoctors(),
          fetchStaff(),
          fetchPatients()
        ]);

        // รวมข้อมูลทั้งหมด
        const allUsers = [...doctorsData, ...staffData, ...patientsData];
        setUsers(allUsers);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
    const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    return `วันที่ ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear() + 543}`;
  };

  const handleLogout = () => {
    navigate('/admin');
  };

  const filterUsers = () => {
    return users.filter(user => {
      // Apply type filter
      if (activeFilter !== 'all' && user.type !== activeFilter) {
        return false;
      }
      
      // Apply search filter
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        const searchText = `${user.name} ${user.hn || ''} ${user.code || ''}`.toLowerCase();
        return searchText.includes(searchLower);
      }
      
      return true;
    });
  };

  const getCounts = () => {
    return {
      doctor: doctors.length,
      staff: staff.length,
      patient: patients.length
    };
  };

  // Refresh data function
  const refreshData = async () => {
    setLoading(true);
    try {
      const [doctorsData, staffData, patientsData] = await Promise.all([
        fetchDoctors(),
        fetchStaff(),
        fetchPatients()
      ]);
      const allUsers = [...doctorsData, ...staffData, ...patientsData];
      setUsers(allUsers);
    } catch (err) {
      console.error('Error refreshing data:', err);
    } finally {
      setLoading(false);
    }
  };

  const showDetail = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  const handleAddUser = () => {
    alert('เปิดฟอร์มเพิ่มผู้ใช้งาน (ตัวอย่าง)');
  };

  const counts = getCounts();
  const filteredUsers = filterUsers();

  // Show loading state
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#1ab882] mx-auto mb-4"></div>
          <p className="text-gray-600">กำลังโหลดข้อมูล...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center p-6 bg-red-50 rounded-lg">
          <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-red-600 font-semibold mb-2">เกิดข้อผิดพลาด</p>
          <p className="text-red-500 text-sm mb-4">{error}</p>
          <button 
            onClick={refreshData}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
          >
            ลองใหม่อีกครั้ง
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden" style={{ 
      '--gradient-start': '#1ab882',
      '--gradient-end': '#10a5c9',
      '--primary-color': '#1ab882',
      '--text-color': '#4a4a4a',
      '--text-light': '#6b7280',
      '--background-color': '#f8f9fa',
      '--sidebar-bg': '#ffffff',
      '--card-bg': '#ffffff',
      '--border-color': '#e0e0e0',
      '--hover-bg': '#f3f4f6',
      '--success': '#10b981',
      '--info': '#3b82f6'
    }}>
      {/* Sidebar Component */}
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden md:ml-0">
        {/* Top Bar */}
        <div className="flex justify-between items-center px-5 py-4 bg-white border-b border-gray-200">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div>
              <h1 className="text-xl font-bold text-[var(--text-color)] m-0">จัดการผู้ใช้งาน</h1>
              <div className="text-[14.4px] text-[var(--text-light)] mt-1">{formatDateTime(currentTime)}</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={refreshData}
              className="px-3 py-2 rounded-lg border border-gray-300 cursor-pointer text-gray-700 font-medium text-sm transition-all hover:bg-gray-50"
              title="รีเฟรชข้อมูล"
            >
              <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            <button 
              onClick={handleAddUser}
              className="px-3 py-2 rounded-lg border-none cursor-pointer text-white font-medium text-sm transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(90deg, var(--gradient-start), var(--gradient-end))' }}
            >
              + เพิ่ม
            </button>
          </div>
        </div>

        {/* Container */}
        <div className="flex-1 p-5 overflow-auto flex flex-col gap-3" style={{ background: 'var(--background-color)' }}>
          {/* Stats */}
          <div className="flex gap-3">
            <div 
              onClick={() => setActiveFilter('doctor')}
              className={`flex-1 bg-white p-3 rounded-[10px] cursor-pointer flex flex-col gap-1.5 transition-all ${activeFilter === 'doctor' ? 'outline outline-3 outline-[#1ab882]' : ''}`}
              style={{ boxShadow: '0 6px 18px rgba(0,0,0,.04)' }}
            >
              <h3 className="m-0 text-lg font-bold">{counts.doctor}</h3>
              <p className="m-0 text-[var(--text-light)] text-[13.6px]">แพทย์</p>
            </div>
            <div 
              onClick={() => setActiveFilter('staff')}
              className={`flex-1 bg-white p-3 rounded-[10px] cursor-pointer flex flex-col gap-1.5 transition-all ${activeFilter === 'staff' ? 'outline outline-3 outline-[#1ab882]' : ''}`}
              style={{ boxShadow: '0 6px 18px rgba(0,0,0,.04)' }}
            >
              <h3 className="m-0 text-lg font-bold">{counts.staff}</h3>
              <p className="m-0 text-[var(--text-light)] text-[13.6px]">เจ้าหน้าที่</p>
            </div>
            <div 
              onClick={() => setActiveFilter('patient')}
              className={`flex-1 bg-white p-3 rounded-[10px] cursor-pointer flex flex-col gap-1.5 transition-all ${activeFilter === 'patient' ? 'outline outline-3 outline-[#1ab882]' : ''}`}
              style={{ boxShadow: '0 6px 18px rgba(0,0,0,.04)' }}
            >
              <h3 className="m-0 text-lg font-bold">{counts.patient}</h3>
              <p className="m-0 text-[var(--text-light)] text-[13.6px]">ผู้ป่วย</p>
            </div>
          </div>

          {/* Search */}
          <div className="flex gap-3 items-center">
            <div className="flex-1">
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ค้นหา ชื่อ, HN, รหัส..."
                className="w-full px-2.5 py-2.5 rounded-[10px] border border-[var(--border-color)] text-sm focus:outline-none focus:border-[var(--primary-color)]"
              />
            </div>
          </div>

          {/* User List */}
          <div className="mt-1.5 grid gap-3 content-start" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
            {filteredUsers.map(user => (
              <div 
                key={user.id}
                onClick={() => showDetail(user)}
                className="bg-white p-3 rounded-[10px] flex gap-3 items-center cursor-pointer hover:shadow-md transition-all"
                style={{ boxShadow: '0 6px 18px rgba(0,0,0,.04)' }}
              >
                <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={user.photo} alt={user.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="m-0 text-[15px] font-semibold truncate">{user.name}</h4>
                  <p className="mt-1.5 mb-0 text-[var(--text-light)] text-[13px]">
                    {user.spec || user.role || (user.type === 'patient' ? 'ผู้ป่วย' : '')}
                  </p>
                  <div className="flex gap-2 mt-2 text-[var(--text-light)] text-xs items-center flex-wrap">
                    <span>{user.type === 'patient' ? `HN: ${user.hn || '-'}` : (user.code || '')}</span>
                    <span 
                      className="px-2 py-1 rounded-full font-bold text-xs"
                      style={{
                        background: user.type === 'doctor' ? '#e6fff3' : user.type === 'patient' ? '#e6f0ff' : '#e6fff3',
                        color: user.type === 'doctor' ? 'var(--success)' : user.type === 'patient' ? 'var(--info)' : 'var(--success)'
                      }}
                    >
                      {user.type === 'doctor' ? 'ออนไลน์' : user.type === 'patient' ? (user.hn ? 'มาวันนี้' : '') : 'ออนไลน์'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal */}
      {showModal && selectedUser && (
        <div 
          className="fixed inset-0 flex items-center justify-center p-4 z-[60]"
          style={{ background: 'rgba(0,0,0,.45)' }}
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="w-full max-w-[720px] bg-white rounded-xl overflow-auto max-h-[90vh]">
            {/* Header */}
            <div 
              className="flex gap-3.5 p-4 text-white rounded-t-xl items-center"
              style={{ background: 'linear-gradient(90deg, var(--gradient-start), var(--gradient-end))' }}
            >
              <div className="w-21 h-21 rounded-[10px] overflow-hidden flex-shrink-0">
                <img src={selectedUser.photo} alt={selectedUser.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h2 className="m-0 text-xl font-bold">{selectedUser.name}</h2>
                <p className="mt-1.5 mb-0 opacity-95">
                  {selectedUser.type === 'doctor' 
                    ? selectedUser.spec 
                    : selectedUser.type === 'staff' 
                      ? selectedUser.role 
                      : (selectedUser.hn ? `HN: ${selectedUser.hn}` : '')
                  }
                </p>
              </div>
              <button 
                onClick={closeModal}
                className="ml-auto bg-transparent border-0 text-white text-xl cursor-pointer w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded transition-all"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="p-3.5">
              {selectedUser.type === 'patient' ? (
                <>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <div className="text-[var(--text-light)] font-bold mb-1.5 text-sm">เลขบัตรประชาชน</div>
                      <div className="font-semibold">{selectedUser.idcard || '-'}</div>
                      <div className="text-[var(--text-light)] font-bold mb-1.5 mt-3 text-sm">อายุ</div>
                      <div className="font-semibold">{selectedUser.age || '-'}</div>
                    </div>
                    <div>
                      <div className="text-[var(--text-light)] font-bold mb-1.5 text-sm">โทร</div>
                      <div className="font-semibold">{selectedUser.phone || '-'}</div>
                      <div className="text-[var(--text-light)] font-bold mb-1.5 mt-3 text-sm">ที่อยู่</div>
                      <div className="font-semibold">{selectedUser.addr || '-'}</div>
                    </div>
                  </div>

                  {selectedUser.chronic && selectedUser.chronic.length > 0 && (
                    <div className="mt-2.5">
                      <div className="text-[var(--text-light)] font-bold mb-1.5 text-sm">โรคประจำตัว</div>
                      <div className="flex gap-2 flex-wrap mt-2">
                        {selectedUser.chronic.map((disease, idx) => (
                          <span 
                            key={idx}
                            className="bg-red-50 text-red-700 px-2 py-1.5 rounded-lg font-bold text-xs"
                          >
                            {disease}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-2.5">
                    <strong className="text-sm">ประวัติ</strong>
                    {selectedUser.history && selectedUser.history.length > 0 ? (
                      selectedUser.history.map((h, idx) => (
                        <div key={idx} className="mt-1.5 text-sm">
                          {h.d} — {h.t} ({h.doc})
                        </div>
                      ))
                    ) : (
                      <div className="mt-1.5 text-sm">ไม่มีข้อมูล</div>
                    )}
                  </div>
                </>
              ) : selectedUser.type === 'doctor' ? (
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <div className="text-[var(--text-light)] font-bold mb-1.5 text-sm">รหัส</div>
                    <div className="font-semibold">{selectedUser.code || '-'}</div>
                    <div className="text-[var(--text-light)] font-bold mb-1.5 mt-3 text-sm">โทร</div>
                    <div className="font-semibold">{selectedUser.phone || '-'}</div>
                  </div>
                  <div>
                    <div className="text-[var(--text-light)] font-bold mb-1.5 text-sm">แผนก</div>
                    <div className="font-semibold">{selectedUser.spec || '-'}</div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <div className="text-[var(--text-light)] font-bold mb-1.5 text-sm">รหัส</div>
                    <div className="font-semibold">{selectedUser.code || '-'}</div>
                    <div className="text-[var(--text-light)] font-bold mb-1.5 mt-3 text-sm">โทร</div>
                    <div className="font-semibold">{selectedUser.phone || '-'}</div>
                  </div>
                  <div>
                    <div className="text-[var(--text-light)] font-bold mb-1.5 text-sm">หน่วยงาน</div>
                    <div className="font-semibold">{selectedUser.dept || '-'}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
