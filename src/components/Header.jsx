import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLang } from '../i18n/LangContext';

const Logo = () => (
  <div className="flex items-center gap-2">
    <img className="h-11 w-11" src="/images/telemed.png" alt="Smart Telemed" />
    <span className="font-semibold text-gray-800 text-lg">
      <Link to="#">Smart <span className="text-brand">Telemed</span></Link>
    </span>
  </div>
);

const LinkItem = ({ to, children, end }) => (
  <NavLink
    to={to}
    end={end}
    className={({ isActive }) =>
      'hover:text-brand transition-colors ' + (isActive ? 'text-brand' : 'text-gray-700')
    }
  >
    {children}
  </NavLink>
);

export default function Header() {
  const { t, lang, setLang } = useLang();
  return (
    <header className="bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container-slim h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <LinkItem to="/" end>{t('nav.home')}</LinkItem>
          <LinkItem to="/privacy">{t('nav.privacy')}</LinkItem>
          <LinkItem to="/terms">{t('nav.terms')}</LinkItem>
          <LinkItem to="/faq">{t('nav.faq')}</LinkItem>
          <LinkItem to="/contact">{t('nav.contact')}</LinkItem>

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-white text-gray-700 shadow-soft hover:border-brand/50"
            aria-label="Toggle language"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
            </svg>
            <span>{lang === 'th' ? 'ไทย' : 'EN'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
