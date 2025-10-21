import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const DEFAULT_LANG = (typeof window !== 'undefined' && (localStorage.getItem('lang') || navigator.language || 'th').toLowerCase().startsWith('en')) ? 'en' : 'th';

const dict = {
  th: {
    brand: 'Smart Telemed',
    nav: {
      home: 'หน้าแรก',
      privacy: 'นโยบายความเป็นส่วนตัว',
      terms: 'ข้อกำหนดในการให้บริการ',
      faq: 'คำถามที่พบบ่อย',
      contact: 'ติดต่อเรา',
    },
    hero: {
      title: 'ดูแลสุขภาพระยะไกล',
      subtitle: 'Smart Telemed แอพเพื่อติดตามสุขภาพทางการแพทย์',
    },
    notFound: {
      title: 'ไม่พบหน้าที่คุณกำลังค้นหา',
      backHome: 'กลับสู่หน้าแรก',
    },
    footer: {
      downloadAt: 'ดาวน์โหลดที่',
      appstore: 'App Store',
      playstore: 'Google Play',
      copyright: '©2025 E.S.M.Solution Co.,Ltd.',
      home: 'หน้าแรก',
      privacy: 'นโยบายความเป็นส่วนตัว',
      terms: 'ข้อกำหนดในการให้บริการ',
      faq: 'คำถามที่พบบ่อย',
      contact: 'ติดต่อเรา',
    },
  },
  en: {
    brand: 'Smart Telemed',
    nav: {
      home: 'Home',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      faq: 'FAQ',
      contact: 'Contact Us',
    },
    hero: {
      title: 'Remote healthcare made simple',
      subtitle: 'Smart Telemed — your companion for medical telemonitoring',
    },
    notFound: {
      title: 'The page you are looking for was not found',
      backHome: 'Back to Home',
    },
    footer: {
      downloadAt: 'Get it on',
      appstore: 'App Store',
      playstore: 'Google Play',
      copyright: '©2025 E.S.M.Solution Co.,Ltd.',
      home: 'Home',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      faq: 'FAQ',
      contact: 'Contact Us',
    },
  },
};

const LangContext = createContext({ lang: 'th', setLang: () => {}, t: (k) => k });

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(DEFAULT_LANG);

  useEffect(() => {
    try { localStorage.setItem('lang', lang); } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l) => setLangState(l === 'en' ? 'en' : 'th');

  const t = (key) => {
    const parts = key.split('.');
    let cur = dict[lang];
    for (const p of parts) {
      if (cur && Object.prototype.hasOwnProperty.call(cur, p)) cur = cur[p];
      else return key;
    }
    return typeof cur === 'string' ? cur : key;
  };

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);

  return (
    <LangContext.Provider value={value}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
