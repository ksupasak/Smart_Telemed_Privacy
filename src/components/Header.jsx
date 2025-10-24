import React, { useState } from 'react';
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

const LinkItem = ({ to, children, end, onClick }) => (
  <NavLink
    to={to}
    end={end}
    onClick={onClick}
    className={({ isActive }) =>
      'hover:text-brand transition-colors ' + (isActive ? 'text-brand' : 'text-gray-700')
    }
  >
    {children}
  </NavLink>
);

export default function Header() {
  const { t, lang, setLang } = useLang();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container-slim h-16 flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <LinkItem to="/" end>{t('nav.home')}</LinkItem>
            <LinkItem to="/privacy">{t('nav.privacy')}</LinkItem>
            <LinkItem to="/terms">{t('nav.terms')}</LinkItem>
            <LinkItem to="/faq">{t('nav.faq')}</LinkItem>
            <LinkItem to="/contact">{t('nav.contact')}</LinkItem>
            {/* <LinkItem to="/admin">
              <span className="inline-flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {lang === 'th' ? 'จัดการ' : 'Admin'}
              </span>
            </LinkItem> */}

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

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-700 hover:text-brand transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-semibold text-gray-800">Menu</span>
            <button
              onClick={closeMobileMenu}
              className="p-2 text-gray-700 hover:text-brand transition-colors"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 flex flex-col gap-1 p-4">
            <LinkItem to="/" end onClick={closeMobileMenu}>
              <div className="px-4 py-3 rounded-lg hover:bg-gray-50">
                {t('nav.home')}
              </div>
            </LinkItem>
            <LinkItem to="/privacy" onClick={closeMobileMenu}>
              <div className="px-4 py-3 rounded-lg hover:bg-gray-50">
                {t('nav.privacy')}
              </div>
            </LinkItem>
            <LinkItem to="/terms" onClick={closeMobileMenu}>
              <div className="px-4 py-3 rounded-lg hover:bg-gray-50">
                {t('nav.terms')}
              </div>
            </LinkItem>
            <LinkItem to="/faq" onClick={closeMobileMenu}>
              <div className="px-4 py-3 rounded-lg hover:bg-gray-50">
                {t('nav.faq')}
              </div>
            </LinkItem>
            <LinkItem to="/contact" onClick={closeMobileMenu}>
              <div className="px-4 py-3 rounded-lg hover:bg-gray-50">
                {t('nav.contact')}
              </div>
            </LinkItem>
            <LinkItem to="/admin" onClick={closeMobileMenu}>
              <div className="px-4 py-3 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {lang === 'th' ? 'จัดการ' : 'Admin'}
              </div>
            </LinkItem>
          </nav>

          {/* Language Toggle in Sidebar */}
          <div className="p-4 border-t">
            <button
              onClick={() => {
                setLang(lang === 'th' ? 'en' : 'th');
                closeMobileMenu();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border bg-white text-gray-700 shadow-sm hover:border-brand/50"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
              </svg>
              <span>{lang === 'th' ? 'ไทย' : 'EN'}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
