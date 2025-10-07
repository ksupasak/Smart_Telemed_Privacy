import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-slim text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-2 text-gray-600">ไม่พบหน้าที่คุณกำลังค้นหา</p>
        <Link to="/" className="mt-6 inline-block rounded-full bg-brand px-4 py-2 text-white">
          กลับสู่หน้าแรก
        </Link>
      </div>
    </section>
  );
}
