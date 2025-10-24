import { useState } from 'react';
import { useLang } from '../i18n/LangContext';

export default function Contact() {
  const { lang } = useLang();
  const isEn = lang === 'en';
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = isEn ? 'Please enter your full name' : 'โปรดระบุชื่อและนามสกุล';
    if (!form.email.trim()) newErrors.email = isEn ? 'Please enter your email' : 'โปรดระบุอีเมล';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = isEn ? 'Invalid email format' : 'รูปแบบอีเมลไม่ถูกต้อง';
    if (!form.subject.trim()) newErrors.subject = isEn ? 'Please enter a subject' : 'โปรดระบุหัวข้อ';
    if (!form.message.trim()) newErrors.message = isEn ? 'Please type your message' : 'โปรดพิมพ์ข้อความของคุณ';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      setStatus('submitting');
      // ไม่มี backend: จำลองการส่งข้อมูลเล็กน้อย
      await new Promise((r) => setTimeout(r, 900));
      setStatus('success');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      setErrors({});
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="section">
      <div className="container-slim max-w-3xl">
        <h1 className="text-3xl font-bold">{isEn ? 'Contact Us' : 'ติดต่อเรา'}</h1>
        <p className="mt-2 text-gray-600">{isEn ? 'For help, feedback, or questions about Smart Telemed, send us a message via the form or channels below.' : 'หากต้องการความช่วยเหลือ ข้อเสนอแนะ หรือสอบถามการใช้งาน Smart Telemed สามารถส่งข้อความผ่านแบบฟอร์มหรือช่องทางด้านล่างได้เลย'}</p>

        {/* Contact details */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-white p-5 shadow-soft">
            <h2 className="text-sm font-semibold text-gray-800">{isEn ? 'E.S.M. Solution Co. Ltd' : 'บริษัท E.S.M. Solution Co. Ltd'}</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li><span className="font-medium">{isEn ? 'Email:' : 'อีเมล:'}</span> support@esm-solution.co.th</li>
              <li><span className="font-medium">{isEn ? 'Phone:' : 'โทรศัพท์:'}</span> 098 169 2641</li>
              <li><span className="font-medium">{isEn ? 'Business hours:' : 'เวลาทำการ:'}</span> {isEn ? 'Mon–Fri 08:00–17:00' : 'จันทร์–ศุกร์ 08:00–17:00 น.'}</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white p-5 shadow-soft">
            <h2 className="text-sm font-semibold text-gray-800">{isEn ? 'Additional channels' : 'ช่องทางเสริม'}</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li><span className="font-medium">LINE Official:</span> @SmartTelemed</li>
              <li><span className="font-medium">{isEn ? 'Address:' : 'ที่อยู่:'}</span> {isEn ? '[Office address]' : '[ที่อยู่สำนักงาน]'}</li>
              <li className="text-gray-500">{isEn ? 'For emergencies, call 1669' : 'สำหรับเหตุฉุกเฉิน โปรดโทร 1669'}</li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 rounded-2xl border bg-white p-6 shadow-soft">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-800">{isEn ? 'Full name' : 'ชื่อ-นามสกุล'}<span className="text-red-500">*</span></label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className={`mt-2 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${errors.name ? 'border-red-400 focus:ring-red-200' : 'border-gray-300 focus:ring-teal-200'}`}
                placeholder={isEn ? 'Enter your full name' : 'ระบุชื่อและนามสกุล'}
                autoComplete="name"
              />
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800">{isEn ? 'Email' : 'อีเมล'}<span className="text-red-500">*</span></label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={`mt-2 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${errors.email ? 'border-red-400 focus:ring-red-200' : 'border-gray-300 focus:ring-teal-200'}`}
                placeholder="example@email.com"
                autoComplete="email"
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-800">{isEn ? 'Phone (optional)' : 'เบอร์โทร (ไม่บังคับ)'}</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-200"
                placeholder={isEn ? '08X-XXX-XXXX' : '08X-XXX-XXXX'}
                autoComplete="tel"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-800">{isEn ? 'Subject' : 'หัวข้อ'}<span className="text-red-500">*</span></label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                className={`mt-2 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${errors.subject ? 'border-red-400 focus:ring-red-200' : 'border-gray-300 focus:ring-teal-200'}`}
                placeholder={isEn ? 'e.g., Product question / Suggestion' : 'เช่น สอบถามการใช้งาน / เสนอแนะ'}
              />
              {errors.subject && <p className="mt-1 text-xs text-red-600">{errors.subject}</p>}
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="block text-sm font-medium text-gray-800">{isEn ? 'Message' : 'ข้อความ'}<span className="text-red-500">*</span></label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              className={`mt-2 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 ${errors.message ? 'border-red-400 focus:ring-red-200' : 'border-gray-300 focus:ring-teal-200'}`}
              placeholder={isEn ? 'Type your question or feedback here' : 'พิมพ์รายละเอียดคำถามหรือข้อเสนอแนะของคุณ'}
            />
            {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
          </div>

          <p className="mt-4 text-xs text-gray-500">{isEn ? 'By sending this message, you agree to our ' : 'การส่งข้อความนี้แสดงว่าคุณได้อ่านและยอมรับ '}<a href="/privacy" className="text-brand underline">{isEn ? 'Privacy Policy' : 'นโยบายความเป็นส่วนตัว'}</a></p>

          <div className="mt-6 flex items-center gap-3">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center justify-center rounded-lg bg-brand px-5 py-2 text-white shadow hover:opacity-95 disabled:opacity-60"
            >
              {status === 'submitting' ? (isEn ? 'Sending…' : 'กำลังส่ง…') : (isEn ? 'Send message' : 'ส่งข้อความ')}
            </button>
            {status === 'success' && (
              <span className="text-sm text-green-600">{isEn ? 'Message sent. Thank you for contacting us.' : 'ส่งข้อความสำเร็จ ขอบคุณที่ติดต่อเรา'}</span>
            )}
            {status === 'error' && (
              <span className="text-sm text-red-600">{isEn ? 'Failed to send. Please try again.' : 'ส่งไม่สำเร็จ โปรดลองใหม่อีกครั้ง'}</span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
