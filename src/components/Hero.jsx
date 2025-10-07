import { AppBadges } from './Badges'
import PhoneMockup from './PhoneMockup'

export default function Hero() {
  return (
    <section className="bg-hero">
      <div className="container-slim section grid md:grid-cols-2 gap-12 items-center">
        <div>

         
             <img className="h-40 w-40 rounded-xl grid place-items-center " src="/images/Telemed_app.png" alt="Smart Telemed" />


          <h1 className="mt-6 text-3xl md:text-4xl font-bold text-gray-900">ดูแลสุขภาพระยะไกล</h1>
          <p className="lead mt-4">Smart Telemed แอพเพื่อติดตามสุขภาพทางการแพทย์</p>
          <AppBadges />
        </div>
        <div className="md:justify-self-end">
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}
