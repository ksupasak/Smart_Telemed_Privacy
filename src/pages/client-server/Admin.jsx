import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Admin() {
  const [hospitals, setHospitals] = useState([
    { id: '67442576790f9b3c1a000002', code: '123456', name: 'รพ.ทดสอบ', status: 'active' },
    { id: '674429f3790f9b3c1a000022', code: '10795', name: 'รพ.โคกเจริญ', status: 'active' },
    { id: '68b7e7a1790f9b16ad000009', code: '456789', name: 'รพ.ทดสอบ2', status: 'inactive' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentHospital, setCurrentHospital] = useState({
    id: '',
    code: '',
    name: '',
    status: 'active'
  });
  const [alertMessage, setAlertMessage] = useState({ text: '', type: '' });

  const showAlert = (text, type) => {
    setAlertMessage({ text, type });
    setTimeout(() => setAlertMessage({ text: '', type: '' }), 5000);
  };

  const handleAddNew = () => {
    setEditMode(false);
    setCurrentHospital({ id: '', code: '', name: '', status: 'active' });
    setShowModal(true);
  };

  const handleEdit = (hospital) => {
    setEditMode(true);
    setCurrentHospital({ ...hospital });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('ต้องการลบโรงพยาบาลนี้หรือไม่?')) {
      setHospitals(hospitals.filter(h => h.id !== id));
      showAlert('ลบโรงพยาบาลเรียบร้อยแล้ว', 'success');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!currentHospital.code || !currentHospital.name) {
      showAlert('กรุณากรอกข้อมูลให้ครบถ้วน', 'error');
      return;
    }

    if (editMode) {
      setHospitals(hospitals.map(h => 
        h.id === currentHospital.id ? currentHospital : h
      ));
      showAlert('อัปเดตโรงพยาบาลเรียบร้อยแล้ว', 'success');
    } else {
      const newHospital = {
        ...currentHospital,
        id: Date.now().toString()
      };
      setHospitals([...hospitals, newHospital]);
      showAlert('เพิ่มโรงพยาบาลเรียบร้อยแล้ว', 'success');
    }
    
    setShowModal(false);
  };

  const toggleStatus = (id) => {
    setHospitals(hospitals.map(h => 
      h.id === id ? { ...h, status: h.status === 'active' ? 'inactive' : 'active' } : h
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-x-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>

      {/* Gradient Background */}
      <div className="fixed top-0 left-0 right-0 h-[60vh] bg-gradient-to-br from-brand to-secondary opacity-40 -z-10">
        <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-b from-transparent to-gray-50"></div>
      </div>

      <div className="min-h-screen flex items-center justify-center p-5">
        <div className="w-full max-w-5xl" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
      <div className="container max-w-6xl py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {isEn ? 'Hospital Management System' : 'ระบบจัดการโรงพยาบาล'}
          </h1>
          <p className="text-gray-600">
            {isEn 
              ? 'Manage hospital codes and access control for Smart Telemed system' 
              : 'จัดการรหัสโรงพยาบาลและการเข้าถึงระบบ Smart Telemed'}
          </p>
        </div>

        {/* Alert Message */}
        {alertMessage.text && (
          <div className={`mb-6 p-4 rounded-lg border-l-4 ${
            alertMessage.type === 'success' 
              ? 'bg-green-50 border-green-500 text-green-800' 
              : 'bg-red-50 border-red-500 text-red-800'
          }`}>
            {alertMessage.text}
          </div>
        )}

        {/* Actions Bar */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="text-sm text-gray-600">
            {isEn ? 'Total Hospitals:' : 'โรงพยาบาลทั้งหมด:'} <span className="font-semibold text-brand">{hospitals.length}</span>
          </div>
          <button
            onClick={handleAddNew}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-brand to-secondary text-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            {isEn ? 'Add New Hospital' : 'เพิ่มโรงพยาบาลใหม่'}
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-brand/10 to-secondary/10">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    {isEn ? 'Hospital Code' : 'รหัสโรงพยาบาล'}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    {isEn ? 'Hospital Name' : 'ชื่อโรงพยาบาล'}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    {isEn ? 'Status' : 'สถานะ'}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                    {isEn ? 'Actions' : 'การจัดการ'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {hospitals.map((hospital) => (
                  <tr key={hospital.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="font-mono font-semibold text-gray-800">{hospital.code}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{hospital.name}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => toggleStatus(hospital.id)}
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                          hospital.status === 'active'
                            ? 'bg-green-100 text-green-800 hover:bg-green-200'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        <span className={`w-2 h-2 rounded-full ${
                          hospital.status === 'active' ? 'bg-green-500' : 'bg-gray-500'
                        }`}></span>
                        {hospital.status === 'active' 
                          ? (isEn ? 'Active' : 'ใช้งาน')
                          : (isEn ? 'Inactive' : 'ปิดใช้งาน')}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleEdit(hospital)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title={isEn ? 'Edit' : 'แก้ไข'}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(hospital.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title={isEn ? 'Delete' : 'ลบ'}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {hospitals.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <p>{isEn ? 'No hospitals found' : 'ไม่พบข้อมูลโรงพยาบาล'}</p>
            </div>
          )}
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-brand">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{isEn ? 'Active Hospitals' : 'โรงพยาบาลที่ใช้งาน'}</p>
                <p className="text-3xl font-bold text-brand mt-1">
                  {hospitals.filter(h => h.status === 'active').length}
                </p>
              </div>
              <div className="p-3 bg-brand/10 rounded-lg">
                <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-gray-400">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{isEn ? 'Inactive Hospitals' : 'โรงพยาบาลที่ปิดใช้งาน'}</p>
                <p className="text-3xl font-bold text-gray-700 mt-1">
                  {hospitals.filter(h => h.status === 'inactive').length}
                </p>
              </div>
              <div className="p-3 bg-gray-100 rounded-lg">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-secondary">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{isEn ? 'Total Hospitals' : 'โรงพยาบาลทั้งหมด'}</p>
                <p className="text-3xl font-bold text-secondary mt-1">{hospitals.length}</p>
              </div>
              <div className="p-3 bg-secondary/10 rounded-lg">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-[fadeInUp_0.3s_ease-out]">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-bold text-gray-800">
                {editMode 
                  ? (isEn ? 'Edit Hospital' : 'แก้ไขโรงพยาบาล')
                  : (isEn ? 'Add New Hospital' : 'เพิ่มโรงพยาบาลใหม่')}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isEn ? 'Hospital Code' : 'รหัสโรงพยาบาล'} *
                </label>
                <input
                  type="text"
                  value={currentHospital.code}
                  onChange={(e) => setCurrentHospital({ ...currentHospital, code: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                  placeholder={isEn ? 'Enter hospital code' : 'กรอกรหัสโรงพยาบาล'}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isEn ? 'Hospital Name' : 'ชื่อโรงพยาบาล'} *
                </label>
                <input
                  type="text"
                  value={currentHospital.name}
                  onChange={(e) => setCurrentHospital({ ...currentHospital, name: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                  placeholder={isEn ? 'Enter hospital name' : 'กรอกชื่อโรงพยาบาล'}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isEn ? 'Status' : 'สถานะ'}
                </label>
                <select
                  value={currentHospital.status}
                  onChange={(e) => setCurrentHospital({ ...currentHospital, status: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                >
                  <option value="active">{isEn ? 'Active' : 'ใช้งาน'}</option>
                  <option value="inactive">{isEn ? 'Inactive' : 'ปิดใช้งาน'}</option>
                </select>
              </div>

              {/* Modal Footer */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {isEn ? 'Cancel' : 'ยกเลิก'}
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2.5 bg-gradient-to-r from-brand to-secondary text-white rounded-lg hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                  {editMode ? 'อัปเดต' : 'เพิ่ม'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
        </div>
      </div>
    </div>
  );
}
