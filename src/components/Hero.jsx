import { AppBadges } from './Badges'
import PhoneMockup from './PhoneMockup'
import { useLang } from '../i18n/LangContext'

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="bg-hero relative overflow-hidden pb-24 md:pb-32">
      <div className="container-slim section relative z-10 grid md:grid-cols-2 gap-12 items-center">
  <div className="relative pb-24">

         
             <img className="h-40 w-40 rounded-xl grid place-items-center " src="/images/Telemed_app.png" alt="Smart Telemed" />


          <h1 className="mt-6 text-3xl md:text-4xl font-bold text-gray-900">{t('hero.title')}</h1>
          <p className="lead mt-4">{t('hero.subtitle')}</p>
          <AppBadges />

          {/* wave moved to full-width container at section bottom */}
        </div>
        <div className="md:justify-self-end">
          <PhoneMockup />
        </div>
      </div>
      {/* Full-width parallax waves behind content (z-0), matching brand color */}
      <div aria-hidden="true" className="brand-waves text-brand z-0">
        <svg className="brand-waves-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use href="#gentle-wave" x="48" y="0" fill="currentColor" fillOpacity="0.35" />
            <use href="#gentle-wave" x="48" y="3" fill="currentColor" fillOpacity="0.5" />
            <use href="#gentle-wave" x="48" y="5" fill="currentColor" fillOpacity="0.65" />
            <use href="#gentle-wave" x="48" y="7" fill="currentColor" fillOpacity="1" />
          </g>
        </svg>
      </div>
    </section>
  )
}
