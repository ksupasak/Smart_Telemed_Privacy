import { useLang } from '../i18n/LangContext';

export default function Privacy() {
  const { lang } = useLang();
  const isEn = lang === 'en';
  return (
    <section className="section">
      <div className="container-slim max-w-3xl">
        <h1 className="text-3xl font-bold">{isEn ? 'Privacy Policy - Smart Telemed' : 'นโยบายความเป็นส่วนตัว - Smart Telemed'}</h1>
        <div className="mt-2 text-gray-600 space-y-1">
          <p><strong>{isEn ? 'E.S.M. Solution Co. Ltd' : 'บริษัท E.S.M. Solution Co. Ltd'}</strong></p>
          <p>{isEn ? 'Last updated: October 21, 2025' : 'อัปเดตล่าสุด: 21 ตุลาคม 2568'}</p>
          <p>{isEn ? 'Version: 1.0' : 'เวอร์ชัน: 1.0'}</p>
        </div>

        <div className="mt-8 space-y-8 text-gray-700 leading-relaxed">{isEn ? (
          /* ENGLISH VERSION */
          <>
          <section>
            <h2 className="text-xl font-semibold">1. Introduction</h2>
            <p className="mt-2">
              E.S.M. Solution Co. Ltd ("Company", "we", "us") is the data controller for the Smart Telemed application ("App", "Service").
              The Company recognizes the importance of protecting personal data and adheres to privacy protection principles under the Personal Data Protection Act B.E. 2562 (PDPA).
            </p>
            <p className="mt-2">
              Smart Telemed is a telemedicine system that provides healthcare services through digital technology, connects medical devices, and facilitates communication between patients and medical personnel.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">2. Data We Collect</h2>
            <h3 className="mt-4 font-medium">2.1 Identification Data</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Full name</li>
              <li>National ID number (only when using card reader)</li>
              <li>Date of birth</li>
              <li>Gender</li>
              <li>Address</li>
              <li>Photo from national ID card (if using card reader)</li>
              <li>Hospital Number (HN)</li>
            </ul>

            <h3 className="mt-4 font-medium">2.2 Contact Information</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Phone number</li>
              <li>Email address</li>
              <li>Emergency contact information</li>
            </ul>

            <h3 className="mt-4 font-medium">2.3 Health and Medical Data</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Vital signs (blood pressure, heart rate, temperature, blood oxygen)</li>
              <li>Biometric data (weight, height, blood glucose level)</li>
              <li>Treatment history</li>
              <li>Diagnostic records</li>
              <li>Treatment-related images</li>
              <li>Doctor appointment information</li>
            </ul>

            <h3 className="mt-4 font-medium">2.4 Medical Device Data</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Data from blood pressure monitors (A&amp;D UA-651BLE, Beurer BM57, Yuwell YE680A)</li>
              <li>Data from pulse oximeters</li>
              <li>Data from thermometers (Beurer FT95)</li>
              <li>Data from smart scales (Mi Body Scale, BFS200B)</li>
              <li>Data from glucometers (Yuwell Glucometer)</li>
            </ul>

            <h3 className="mt-4 font-medium">2.5 Technical Data</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Device model and type</li>
              <li>Operating system and version</li>
              <li>Device ID</li>
              <li>Bluetooth MAC address</li>
              <li>Usage logs and errors</li>
              <li>Network connection information</li>
              <li>Cookies and tracking technologies</li>
            </ul>

            <h3 className="mt-4 font-medium">2.6 Communication Data</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Video call logs (metadata only, no content)</li>
              <li>Chat messages</li>
              <li>Images attached in communications</li>
              <li>Video meeting participation data</li>
            </ul>

            <h3 className="mt-4 font-medium">2.7 Location Data</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Approximate location to find nearby hospitals</li>
              <li>GPS data for emergency services (only when authorized)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">3. How We Collect Data</h2>
            <h3 className="mt-4 font-medium">3.1 Direct Provision</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>User registration</li>
              <li>Form filling</li>
              <li>Using national ID card reader</li>
              <li>Image uploads</li>
            </ul>

            <h3 className="mt-4 font-medium">3.2 Automatic Collection</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Connecting medical devices via Bluetooth</li>
              <li>App usage</li>
              <li>Camera and microphone access</li>
              <li>Storage access</li>
            </ul>

            <h3 className="mt-4 font-medium">3.3 From Third Parties</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Data from hospital systems</li>
              <li>Data from health insurance systems</li>
              <li>Data from technology service providers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">4. Purpose of Data Use</h2>
            <h3 className="mt-4 font-medium">4.1 Core Services</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Provide telemedicine services</li>
              <li>Connect and process medical device data</li>
              <li>Facilitate patient-doctor communication</li>
              <li>Manage appointments and treatment schedules</li>
              <li>Health monitoring and evaluation</li>
            </ul>

            <h3 className="mt-4 font-medium">4.2 Service Improvement</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Analyze usage to develop new features</li>
              <li>Improve system performance and stability</li>
              <li>Prevent and fix errors</li>
              <li>Medical technology research and development</li>
            </ul>

            <h3 className="mt-4 font-medium">4.3 Security</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Monitor and prevent unauthorized use</li>
              <li>Fraud and fake data prevention</li>
              <li>Data backup and recovery</li>
            </ul>

            <h3 className="mt-4 font-medium">4.4 Legal Compliance</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Comply with public health laws</li>
              <li>Report as required by government agencies</li>
              <li>Support medical audits</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">5. Legal Basis for Processing</h2>
            <h3 className="mt-4 font-medium">5.1 Consent</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Service registration</li>
              <li>Consent to connect medical devices</li>
              <li>Permission to access camera, microphone, and location</li>
            </ul>

            <h3 className="mt-4 font-medium">5.2 Contract Performance</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Provide services as requested by users</li>
              <li>Execute service agreement terms</li>
            </ul>

            <h3 className="mt-4 font-medium">5.3 Legitimate Interest</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Service development and improvement</li>
              <li>System security maintenance</li>
              <li>Medical and research analysis</li>
            </ul>

            <h3 className="mt-4 font-medium">5.4 Legal Obligation</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Public health data reporting</li>
              <li>Cooperation with government agencies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">6. Data Disclosure and Sharing</h2>
            <h3 className="mt-4 font-medium">6.1 Medical Personnel</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Treating doctors and nurses</li>
              <li>Relevant public health officials</li>
              <li>Medical experts for consultation</li>
            </ul>

            <h3 className="mt-4 font-medium">6.2 Technology Service Providers</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Cloud storage providers</li>
              <li>Communication system providers (WebRTC, OpenVidu)</li>
              <li>Data analytics providers</li>
            </ul>

            <h3 className="mt-4 font-medium">6.3 Government Agencies</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Ministry of Public Health</li>
              <li>National Health Security Office</li>
              <li>Agencies required by law</li>
            </ul>

            <h3 className="mt-4 font-medium">6.4 Emergency Cases</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Rescue and emergency services</li>
              <li>Nearest hospital in emergencies</li>
            </ul>
            <p className="mt-2 text-gray-600"><strong>Note:</strong> We will not disclose personal data to third parties without consent, except as required by law.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">7. Data Security</h2>
            <h3 className="mt-4 font-medium">7.1 Technical Measures</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Data encryption in transit (TLS/SSL)</li>
              <li>Data encryption at rest (AES-256)</li>
              <li>Access control with passwords and authentication</li>
              <li>Regular security updates</li>
            </ul>

            <h3 className="mt-4 font-medium">7.2 Physical Measures</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Data center access control</li>
              <li>Multi-location data backup</li>
              <li>Natural disaster and accident protection</li>
            </ul>

            <h3 className="mt-4 font-medium">7.3 Administrative Measures</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Employee privacy training</li>
              <li>Role-based data access restrictions</li>
              <li>Regular security audits</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">8. Data Retention Period</h2>
            <h3 className="mt-4 font-medium">8.1 Treatment Data</h3>
            <p className="mt-2">Retained for 10 years after the last treatment (per public health law)</p>

            <h3 className="mt-4 font-medium">8.2 Technical and Usage Data</h3>
            <p className="mt-2">Retained for 2 years or until no longer necessary</p>

            <h3 className="mt-4 font-medium">8.3 Communication Data</h3>
            <p className="mt-2">Retained for 1 year or as requested for deletion by users</p>

            <h3 className="mt-4 font-medium">8.4 User Account Data</h3>
            <p className="mt-2">Retained until user requests account deletion or inactive for 3 years</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">9. Data Subject Rights</h2>
            <h3 className="mt-4 font-medium">9.1 Right to Access</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Request to view personal data we maintain</li>
              <li>Request a copy of data in readable format</li>
            </ul>

            <h3 className="mt-4 font-medium">9.2 Right to Rectification</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Request correction of inaccurate or outdated data</li>
              <li>Request addition of incomplete data</li>
            </ul>

            <h3 className="mt-4 font-medium">9.3 Right to Erasure</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Request deletion when no longer necessary</li>
              <li>Request deletion of unlawfully processed data</li>
            </ul>

            <h3 className="mt-4 font-medium">9.4 Right to Restriction</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Request suspension of data processing in certain cases</li>
              <li>Request limitation of data use for specific purposes</li>
            </ul>

            <h3 className="mt-4 font-medium">9.5 Right to Object</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Object to processing based on legitimate interest</li>
              <li>Object to processing for direct marketing</li>
            </ul>

            <h3 className="mt-4 font-medium">9.6 Right to Data Portability</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Request data in machine-readable format</li>
              <li>Request transfer of data to another controller</li>
            </ul>

            <h3 className="mt-4 font-medium">9.7 Right to Withdraw Consent</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Withdraw consent at any time</li>
              <li>Withdrawal does not affect prior processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">10. Cookies and Tracking Technologies</h2>
            <h3 className="mt-4 font-medium">10.1 Types of Cookies</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Essential cookies</li>
              <li>Analytics cookies</li>
              <li>User experience improvement cookies</li>
            </ul>

            <h3 className="mt-4 font-medium">10.2 Purpose</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Remember user settings</li>
              <li>Analyze usage behavior</li>
              <li>Improve app performance</li>
            </ul>

            <h3 className="mt-4 font-medium">10.3 Cookie Management</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Users can manage cookie settings in the app</li>
              <li>Disabling cookies may affect app functionality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">11. Policy Changes</h2>
            <h3 className="mt-4 font-medium">11.1 Notification</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>We will notify through the app when changes occur</li>
              <li>Notification will be made at least 30 days in advance</li>
            </ul>

            <h3 className="mt-4 font-medium">11.2 Accepting Changes</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Continued use of the app constitutes acceptance of new policy</li>
              <li>If not accepted, account and data deletion can be requested</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">12. Contact and Rights Exercise</h2>
            <h3 className="mt-4 font-medium">12.1 Contact Channels</h3>
            <div className="mt-2">
              <p><strong>E.S.M. Solution Co. Ltd</strong></p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Email: privacy@esmSolution.co.th</li>
                <li>Phone: 02-XXX-XXXX</li>
                <li>Address: [Office address]</li>
              </ul>
            </div>

            <h3 className="mt-4 font-medium">12.2 Data Protection Officer (DPO)</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Email: dpo@esmSolution.co.th</li>
              <li>Phone: 02-XXX-XXXX (ext. XXX)</li>
            </ul>

            <h3 className="mt-4 font-medium">12.3 Request Submission</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Use in-app form (Menu &gt; Settings &gt; Privacy)</li>
              <li>Submit request via email with identity verification documents</li>
              <li>Contact directly at office</li>
            </ul>

            <h3 className="mt-4 font-medium">12.4 Response Time</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>We will respond within 30 days</li>
              <li>Complex cases may extend up to 60 days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">13. Complaints</h2>
            <h3 className="mt-4 font-medium">13.1 Internal</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Through channels specified in Section 12</li>
              <li>Complaint form in the app</li>
            </ul>

            <h3 className="mt-4 font-medium">13.2 External Agencies</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Personal Data Protection Committee (PDPC)</li>
              <li>Website: www.pdpc.go.th</li>
              <li>Phone: 02-XXX-XXXX</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">14. Enforcement</h2>
            <p className="mt-2">
              This policy is effective from October 21, 2025 and applies to all personal data we collect through the Smart Telemed application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">15. Language</h2>
            <p className="mt-2">
              This policy is prepared in Thai. In case of translation to other languages and conflicts arise, the Thai version shall prevail.
            </p>
          </section>

          <section className="text-gray-700">
            <hr className="my-6" />
            <p><strong>Important Note:</strong> Using the Smart Telemed app constitutes acceptance and consent to this privacy policy. You can withdraw consent at any time through the app settings.</p>
            <div className="mt-4 space-y-1 text-sm text-gray-600">
              <p>Last updated: October 21, 2025</p>
              <p>Document version: 1.0</p>
              <p>Approved by: Chief Executive Officer, E.S.M. Solution Co. Ltd</p>
            </div>
            <p className="mt-4 italic text-sm">
              This document is prepared to comply with the Personal Data Protection Act B.E. 2562 and international privacy protection standards.
            </p>
          </section>
          </>
        ) : (
          /* THAI VERSION */
          <>
          <section>
            <h2 className="text-xl font-semibold">1. บทนำ</h2>
            <p className="mt-2">
              บริษัท E.S.M. Solution Co. Ltd ("บริษัท", "เรา", "พวกเรา") เป็นผู้ควบคุมข้อมูลส่วนบุคคลสำหรับแอปพลิเคชัน Smart Telemed ("แอป", "บริการ")
              บริษัทตระหนักถึงความสำคัญของการคุ้มครองข้อมูลส่วนบุคคลและยึดมั่นในหลักการคุ้มครองความเป็นส่วนตัวตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)
            </p>
            <p className="mt-2">
              แอป Smart Telemed เป็นระบบการแพทย์ทางไกลที่ให้บริการการดูแลสุขภาพผ่านเทคโนโลยีดิจิทัล เชื่อมต่ออุปกรณ์ทางการแพทย์ และอำนวยความสะดวกในการติดต่อระหว่างผู้ป่วยและบุคลากรทางการแพทย์
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">2. ข้อมูลที่เราเก็บรวบรวม</h2>
            <h3 className="mt-4 font-medium">2.1 ข้อมูลระบุตัวตน</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ชื่อ-นามสกุล</li>
              <li>เลขประจำตัวประชาชน (เก็บเฉพาะกรณีการใช้เครื่องอ่านบัตรประชาชน)</li>
              <li>วันเดือนปีเกิด</li>
              <li>เพศ</li>
              <li>ที่อยู่</li>
              <li>รูปถ่ายจากบัตรประชาชน (หากใช้เครื่องอ่านบัตร)</li>
              <li>หมายเลขผู้ป่วย (HN) จากโรงพยาบาล</li>
            </ul>

            <h3 className="mt-4 font-medium">2.2 ข้อมูลติดต่อ</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>หมายเลขโทรศัพท์</li>
              <li>ที่อยู่อีเมล</li>
              <li>ข้อมูลการติดต่อฉุกเฉิน</li>
            </ul>

            <h3 className="mt-4 font-medium">2.3 ข้อมูลสุขภาพและทางการแพทย์</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>สัญญาณชีพ (ความดันโลหิต, อัตราการเต้นของหัวใจ, อุณหภูมิ, ออกซิเจนในเลือด)</li>
              <li>ข้อมูลชีววัด (น้ำหนัก, ส่วนสูง, ระดับน้ำตาลในเลือด)</li>
              <li>ประวัติการรักษา</li>
              <li>บันทึกการวินิจฉัย</li>
              <li>รูปภาพประกอบการรักษา</li>
              <li>ข้อมูลการนัดหมายแพทย์</li>
            </ul>

            <h3 className="mt-4 font-medium">2.4 ข้อมูลจากอุปกรณ์ทางการแพทย์</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ข้อมูลจากเครื่องวัดความดัน (A&amp;D UA-651BLE, Beurer BM57, Yuwell YE680A)</li>
              <li>ข้อมูลจากเครื่องวัดออกซิเจน (Pulse Oximeter)</li>
              <li>ข้อมูลจากเครื่องวัดอุณหภูมิ (Beurer FT95)</li>
              <li>ข้อมูลจากเครื่องชั่งน้ำหนัก (Mi Body Scale, BFS200B)</li>
              <li>ข้อมูลจากเครื่องวัดน้ำตาลในเลือด (Yuwell Glucometer)</li>
            </ul>

            <h3 className="mt-4 font-medium">2.5 ข้อมูลเทคนิค</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>รุ่นและประเภทของอุปกรณ์</li>
              <li>ระบบปฏิบัติการและเวอร์ชัน</li>
              <li>รหัสประจำอุปกรณ์ (Device ID)</li>
              <li>ที่อยู่ MAC ของอุปกรณ์ Bluetooth</li>
              <li>บันทึกการใช้งานและข้อผิดพลาด</li>
              <li>ข้อมูลการเชื่อมต่อเครือข่าย</li>
              <li>คุกกี้และเทคโนโลยีติดตาม</li>
            </ul>

            <h3 className="mt-4 font-medium">2.6 ข้อมูลการสื่อสาร</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>บันทึกการโทรวิดีโอ (metadata เท่านั้น ไม่บันทึกเนื้อหา)</li>
              <li>ข้อความแชท</li>
              <li>รูปภาพที่แนบในการสื่อสาร</li>
              <li>ข้อมูลการเข้าร่วมห้องประชุมวิดีโอ</li>
            </ul>

            <h3 className="mt-4 font-medium">2.7 ข้อมูลตำแหน่งที่ตั้ง</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ตำแหน่งประมาณเพื่อหาสถานพยาบาลใกล้เคียง</li>
              <li>ข้อมูล GPS สำหรับบริการฉุกเฉิน (เฉพาะเมื่อได้รับอนุญาต)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">3. วิธีการเก็บรวบรวมข้อมูล</h2>
            <h3 className="mt-4 font-medium">3.1 การให้ข้อมูลโดยตรง</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>การลงทะเบียนผู้ใช้</li>
              <li>การกรอกแบบฟอร์ม</li>
              <li>การใช้เครื่องอ่านบัตรประชาชน</li>
              <li>การอัปโหลดรูปภาพ</li>
            </ul>

            <h3 className="mt-4 font-medium">3.2 การเก็บอัตโนมัติ</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>การเชื่อมต่ออุปกรณ์ทางการแพทย์ผ่าน Bluetooth</li>
              <li>การใช้งานแอปพลิเคชัน</li>
              <li>การเข้าถึงกล้องและไมโครโฟน</li>
              <li>การเข้าถึงพื้นที่จัดเก็บข้อมูล</li>
            </ul>

            <h3 className="mt-4 font-medium">3.3 จากบุคคลที่สาม</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ข้อมูลจากระบบโรงพยาบาล</li>
              <li>ข้อมูลจากระบบประกันสุขภาพ</li>
              <li>ข้อมูลจากผู้ให้บริการเทคโนโลยี</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">4. วัตถุประสงค์ในการใช้ข้อมูล</h2>
            <h3 className="mt-4 font-medium">4.1 การให้บริการหลัก</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ให้บริการการแพทย์ทางไกล</li>
              <li>เชื่อมต่อและประมวลผลข้อมูลจากอุปกรณ์ทางการแพทย์</li>
              <li>อำนวยความสะดวกในการสื่อสารระหว่างผู้ป่วยและแพทย์</li>
              <li>การนัดหมายและจัดการตารางการรักษา</li>
              <li>การติดตามสุขภาพและประเมินผล</li>
            </ul>

            <h3 className="mt-4 font-medium">4.2 การปรับปรุงบริการ</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>วิเคราะห์การใช้งานเพื่อพัฒนาฟีเจอร์ใหม่</li>
              <li>ปรับปรุงประสิทธิภาพและความเสถียรของระบบ</li>
              <li>ป้องกันและแก้ไขข้อผิดพลาด</li>
              <li>การวิจัยและพัฒนาเทคโนโลยีทางการแพทย์</li>
            </ul>

            <h3 className="mt-4 font-medium">4.3 การรักษาความปลอดภัย</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ตรวจสอบและป้องกันการใช้งานที่ไม่ถูกต้อง</li>
              <li>การป้องกันการฉ้อโกงและข้อมูลปลอม</li>
              <li>การสำรองและกู้คืนข้อมูล</li>
            </ul>

            <h3 className="mt-4 font-medium">4.4 การปฏิบัติตามกฎหมาย</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ปฏิบัติตามกฎหมายด้านสาธารณสุข</li>
              <li>รายงานตามที่หน่วยงานราชการกำหนด</li>
              <li>การสนับสนุนการตรวจสอบทางการแพทย์</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">5. ฐานทางกฎหมายในการประมวลผล</h2>
            <h3 className="mt-4 font-medium">5.1 ความยินยอม</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>การลงทะเบียนใช้บริการ</li>
              <li>การยินยอมให้เชื่อมต่ออุปกรณ์ทางการแพทย์</li>
              <li>การอนุญาตให้เข้าถึงกล้อง ไมโครโฟน และตำแหน่ง</li>
            </ul>

            <h3 className="mt-4 font-medium">5.2 การปฏิบัติตามสัญญา</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>การให้บริการตามที่ผู้ใช้ร้องขอ</li>
              <li>การดำเนินการตามข้อตกลงการใช้บริการ</li>
            </ul>

            <h3 className="mt-4 font-medium">5.3 ประโยชน์โดยชอบด้วยกฎหมาย</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>การพัฒนาและปรับปรุงบริการ</li>
              <li>การรักษาความปลอดภัยของระบบ</li>
              <li>การวิเคราะห์เพื่อการแพทย์และวิจัย</li>
            </ul>

            <h3 className="mt-4 font-medium">5.4 การปฏิบัติตามภาระหน้าที่ทางกฎหมาย</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>การรายงานข้อมูลสาธารณสุข</li>
              <li>การให้ความร่วมมือกับหน่วยงานราชการ</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">6. การเปิดเผยและการแบ่งปันข้อมูล</h2>
            <h3 className="mt-4 font-medium">6.1 บุคลากรทางการแพทย์</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>แพทย์และพยาบาลที่ให้การรักษา</li>
              <li>เจ้าหน้าที่สาธารณสุขที่เกี่ยวข้อง</li>
              <li>ผู้เชี่ยวชาญทางการแพทย์สำหรับการปรึกษา</li>
            </ul>

            <h3 className="mt-4 font-medium">6.2 ผู้ให้บริการเทคโนโลยี</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ผู้ให้บริการ Cloud Storage</li>
              <li>ผู้ให้บริการระบบการสื่อสาร (WebRTC, OpenVidu)</li>
              <li>ผู้ให้บริการการวิเคราะห์ข้อมูล</li>
            </ul>

            <h3 className="mt-4 font-medium">6.3 หน่วยงานราชการ</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>กระทรวงสาธารณสุข</li>
              <li>สำนักงานหลักประกันสุขภาพแห่งชาติ</li>
              <li>หน่วยงานที่กฎหมายกำหนดให้รายงาน</li>
            </ul>

            <h3 className="mt-4 font-medium">6.4 กรณีฉุกเฉิน</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>หน่วยงานกู้ภัยและฉุกเฉิน</li>
              <li>โรงพยาบาลที่ใกล้ที่สุดในกรณีเหตุฉุกเฉิน</li>
            </ul>
            <p className="mt-2 text-gray-600"><strong>หมายเหตุ:</strong> เราจะไม่เปิดเผยข้อมูลส่วนบุคคลแก่บุคคลที่สามโดยไม่ได้รับความยินยอม เว้นแต่กรณีที่กฎหมายกำหนด</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">7. การรักษาความปลอดภัยของข้อมูล</h2>
            <h3 className="mt-4 font-medium">7.1 มาตรการทางเทคนิค</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>การเข้ารหัสข้อมูลระหว่างการส่งผ่าน (TLS/SSL)</li>
              <li>การเข้ารหัสข้อมูลในการจัดเก็บ (AES-256)</li>
              <li>การควบคุมการเข้าถึงด้วยรหัสผ่านและการยืนยันตัวตน</li>
              <li>การอัปเดตความปลอดภัยอย่างสม่ำเสมอ</li>
            </ul>

            <h3 className="mt-4 font-medium">7.2 มาตรการทางกายภาพ</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>การควบคุมการเข้าถึงศูนย์ข้อมูล</li>
              <li>การสำรองข้อมูลในสถานที่หลายแห่ง</li>
              <li>การป้องกันภัยธรรมชาติและอุบัติเหตุ</li>
            </ul>

            <h3 className="mt-4 font-medium">7.3 มาตรการทางการบริหาร</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>การอบรมพนักงานเรื่องความเป็นส่วนตัว</li>
              <li>การจำกัดการเข้าถึงข้อมูลตามหน้าที่ความรับผิดชอบ</li>
              <li>การตรวจสอบและประเมินความปลอดภัยอย่างสม่ำเสมอ</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">8. ระยะเวลาการเก็บรักษาข้อมูล</h2>
            <h3 className="mt-4 font-medium">8.1 ข้อมูลการรักษา</h3>
            <p className="mt-2">เก็บไว้ 10 ปี หลังจากการรักษาครั้งสุดท้าย (ตามกฎหมายสาธารณสุข)</p>

            <h3 className="mt-4 font-medium">8.2 ข้อมูลเทคนิคและการใช้งาน</h3>
            <p className="mt-2">เก็บไว้ 2 ปี หรือจนกว่าจะพ้นความจำเป็น</p>

            <h3 className="mt-4 font-medium">8.3 ข้อมูลการสื่อสาร</h3>
            <p className="mt-2">เก็บไว้ 1 ปี หรือตามที่ผู้ใช้ร้องขอให้ลบ</p>

            <h3 className="mt-4 font-medium">8.4 ข้อมูลบัญชีผู้ใช้</h3>
            <p className="mt-2">เก็บไว้จนกว่าผู้ใช้จะขอลบบัญชี หรือไม่ใช้งานเป็นเวลา 3 ปี</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">9. สิทธิของเจ้าของข้อมูล</h2>
            <h3 className="mt-4 font-medium">9.1 สิทธิในการเข้าถึงข้อมูล</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ขอดูข้อมูลส่วนบุคคลที่เราเก็บรักษา</li>
              <li>ขอรับสำเนาข้อมูลในรูปแบบที่อ่านได้</li>
            </ul>

            <h3 className="mt-4 font-medium">9.2 สิทธิในการแก้ไขข้อมูล</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ขอแก้ไขข้อมูลที่ไม่ถูกต้องหรือไม่เป็นปัจจุบัน</li>
              <li>ขอเพิ่มเติมข้อมูลที่ไม่สมบูรณ์</li>
            </ul>

            <h3 className="mt-4 font-medium">9.3 สิทธิในการลบข้อมูล</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ขอลบข้อมูลเมื่อพ้นความจำเป็น</li>
              <li>ขอลบข้อมูลที่ประมวลผลโดยไม่ชอบด้วยกฎหมาย</li>
            </ul>

            <h3 className="mt-4 font-medium">9.4 สิทธิในการจำกัดการประมวลผล</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ขอระงับการประมวลผลข้อมูลในบางกรณี</li>
              <li>ขอจำกัดการใช้ข้อมูลสำหรับวัตถุประสงค์เฉพาะ</li>
            </ul>

            <h3 className="mt-4 font-medium">9.5 สิทธิในการคัดค้านการประมวลผล</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>คัดค้านการประมวลผลที่อาศัยประโยชน์โดยชอบด้วยกฎหมาย</li>
              <li>คัดค้านการประมวลผลเพื่อการตลาดโดยตรง</li>
            </ul>

            <h3 className="mt-4 font-medium">9.6 สิทธิในการโอนย้ายข้อมูล</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ขอรับข้อมูลในรูปแบบที่สามารถอ่านได้ด้วยเครื่องจักร</li>
              <li>ขอให้โอนข้อมูลไปยังผู้ควบคุมข้อมูลอื่น</li>
            </ul>

            <h3 className="mt-4 font-medium">9.7 สิทธิในการถอนความยินยอม</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ถอนความยินยอมได้ตลอดเวลา</li>
              <li>การถอนความยินยอมจะไม่กระทบการประมวลผลที่ได้ทำไปแล้ว</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">10. การใช้คุกกี้และเทคโนโลยีติดตาม</h2>
            <h3 className="mt-4 font-medium">10.1 ประเภทของคุกกี้</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>คุกกี้ที่จำเป็นต่อการทำงาน</li>
              <li>คุกกี้เพื่อการวิเคราะห์การใช้งาน</li>
              <li>คุกกี้เพื่อปรับปรุงประสบการณ์ผู้ใช้</li>
            </ul>

            <h3 className="mt-4 font-medium">10.2 วัตถุประสงค์</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>จดจำการตั้งค่าของผู้ใช้</li>
              <li>วิเคราะห์พฤติกรรมการใช้งาน</li>
              <li>ปรับปรุงประสิทธิภาพของแอป</li>
            </ul>

            <h3 className="mt-4 font-medium">10.3 การจัดการคุกกี้</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ผู้ใช้สามารถจัดการการตั้งค่าคุกกี้ในแอป</li>
              <li>การปิดใช้งานคุกกี้อาจส่งผลต่อการทำงานของแอป</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">11. การเปลี่ยนแปลงนโยบาย</h2>
            <h3 className="mt-4 font-medium">11.1 การแจ้งเตือน</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>เราจะแจ้งให้ทราบผ่านแอปพลิเคชันเมื่อมีการเปลี่ยนแปลง</li>
              <li>การแจ้งเตือนจะทำล่วงหน้าอย่างน้อย 30 วัน</li>
            </ul>

            <h3 className="mt-4 font-medium">11.2 การยอมรับการเปลี่ยนแปลง</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>การใช้งานแอปต่อไปถือเป็นการยอมรับนโยบายใหม่</li>
              <li>หากไม่ยอมรับ สามารถขอลบบัญชีและข้อมูลได้</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">12. การติดต่อและการใช้สิทธิ</h2>
            <h3 className="mt-4 font-medium">12.1 ช่องทางการติดต่อ</h3>
            <div className="mt-2">
              <p><strong>บริษัท E.S.M. Solution Co. Ltd</strong></p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>อีเมล: privacy@esmSolution.co.th</li>
                <li>โทรศัพท์: 02-XXX-XXXX</li>
                <li>ที่อยู่: [ที่อยู่สำนักงาน]</li>
              </ul>
            </div>

            <h3 className="mt-4 font-medium">12.2 เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล (DPO)</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>อีเมล: dpo@esmSolution.co.th</li>
              <li>โทรศัพท์: 02-XXX-XXXX (ต่อ XXX)</li>
            </ul>

            <h3 className="mt-4 font-medium">12.3 การยื่นคำร้อง</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ใช้แบบฟอร์มในแอปพลิเคชัน (เมนู &gt; การตั้งค่า &gt; ความเป็นส่วนตัว)</li>
              <li>ส่งคำร้องผ่านอีเมลพร้อมเอกสารยืนยันตัวตน</li>
              <li>ติดต่อโดยตรงที่สำนักงาน</li>
            </ul>

            <h3 className="mt-4 font-medium">12.4 ระยะเวลาการตอบสนอง</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>เราจะตอบกลับภายใน 30 วัน</li>
              <li>กรณีซับซ้อนอาจขยายเวลาได้ไม่เกิน 60 วัน</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">13. การร้องเรียน</h2>
            <h3 className="mt-4 font-medium">13.1 ภายในบริษัท</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ผ่านช่องทางที่ระบุในข้อ 12</li>
              <li>แบบฟอร์มร้องเรียนในแอปพลิเคชัน</li>
            </ul>

            <h3 className="mt-4 font-medium">13.2 หน่วยงานภายนอก</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>สำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (สคส.)</li>
              <li>เว็บไซต์: www.pdpc.go.th</li>
              <li>โทรศัพท์: 02-XXX-XXXX</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">14. การบังคับใช้</h2>
            <p className="mt-2">
              นโยบายฉบับนี้มีผลบังคับใช้ตั้งแต่วันที่ 21 ตุลาคม 2568 และใช้กับข้อมูลส่วนบุคคลทั้งหมดที่เราเก็บรวบรวมผ่านแอปพลิเคชัน Smart Telemed
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">15. ภาษา</h2>
            <p className="mt-2">
              นโยบายฉบับนี้จัดทำเป็นภาษาไทย หากมีการแปลเป็นภาษาอื่น และเกิดข้อขัดแย้ง ให้ถือตามฉบับภาษาไทย
            </p>
          </section>

          <section className="text-gray-700">
            <hr className="my-6" />
            <p><strong>หมายเหตุสำคัญ:</strong> การใช้งานแอป Smart Telemed ถือเป็นการยอมรับและยินยอมตามนโยบายความเป็นส่วนตัวฉบับนี้ ท่านสามารถถอนความยินยอมได้ตลอดเวลาผ่านการตั้งค่าในแอปพลิเคชัน</p>
            <div className="mt-4 space-y-1 text-sm text-gray-600">
              <p>อัปเดตล่าสุด: 21 ตุลาคม 2568</p>
              <p>เวอร์ชันเอกสาร: 1.0</p>
              <p>ผู้อนุมัติ: ประธานเจ้าหน้าที่บริหาร บริษัท E.S.M. Solution Co. Ltd</p>
            </div>
            <p className="mt-4 italic text-sm">
              เอกสารนี้จัดทำขึ้นเพื่อให้สอดคล้องกับพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 และมาตรฐานสากลด้านการคุ้มครองความเป็นส่วนตัว
            </p>
          </section>
          </>
        )}
        </div>
      </div>
    </section>
  );
}
