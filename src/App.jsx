import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import AdminClean from './pages/client-server/AdminClean';
import Login from './pages/client-server/Login';
import Dashboard from './pages/client-server/Dashboard';
import Today from './pages/client-server/Today';
import Users from './pages/client-server/Users';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      {/* Admin routes without Header/Footer */}
      <Route path="/admin" element={<AdminClean />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/today" element={<Today />} />
      <Route path="/users" element={<Users />} />
      
      {/* Regular routes with Header/Footer */}
      <Route path="*" element={
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      } />
    </Routes>
  );
}
