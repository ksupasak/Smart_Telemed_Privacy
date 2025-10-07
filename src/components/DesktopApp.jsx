export default function DesktopApp() {
  return (
    <section className="section">
      <div className="container-slim grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">ฟังก์ชันการใช้งาน</h2>
          <div className="space-y-4 text-gray-700">
            <p>Lorem ipsum dolor sit amet consectetur. Leo id nunc egestas aliquam ut justo egestas</p>
            <p>Lorem ipsum dolor sit amet consectetur. Leo id nunc egestas aliquam ut justo egestas</p>
            <p>Lorem ipsum dolor sit amet consectetur. Leo id nunc egestas aliquam ut justo egestas</p>
          </div>
        </div>
        <div className="justify-self-center">
          <img src="/images/desktop.png" alt="Desktop Telemed"/>
        </div>
      </div>
    </section>
  )
}
