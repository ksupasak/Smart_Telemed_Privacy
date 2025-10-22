import { useLang } from '../i18n/LangContext';

export default function Terms() {
  const { lang } = useLang();
  const isEn = lang === 'en';
  return (
    <section className="section">
      <div className="container-slim max-w-3xl">
        <h1 className="text-3xl font-bold">{isEn ? 'Terms of Service - Smart Telemed' : 'ข้อกำหนดในการให้บริการ - Smart Telemed'}</h1>
        <div className="mt-2 text-gray-600 space-y-1">
          <p><strong>{isEn ? 'E.S.M. Solution Co. Ltd' : 'บริษัท E.S.M. Solution Co. Ltd'}</strong></p>
          <p>{isEn ? 'Last Updated: October 21, 2025' : 'อัปเดตล่าสุด: 21 ตุลาคม 2568'}</p>
          <p>{isEn ? 'Version: 1.0' : 'เวอร์ชัน: 1.0'}</p>
        </div>

        <div className="mt-8 space-y-8 text-gray-700 leading-relaxed">
          {isEn ? (
            <>
              <section>
                <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
                <p className="mt-2">
                  By downloading, installing, registering, or using the Smart Telemed application ("App", "Service"), you agree to accept and comply with these Terms of Service ("Terms") in their entirety.
                </p>
                <p className="mt-2">If you do not accept these Terms, please do not use our Service.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">2. Definitions</h2>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>"Company"</strong> means E.S.M. Solution Co. Ltd</li>
                  <li><strong>"User"</strong> means any person using the Smart Telemed application</li>
                  <li><strong>"Patient"</strong> means a User receiving medical services</li>
                  <li><strong>"Medical Personnel"</strong> means doctors, nurses, and health officials using the App</li>
                  <li><strong>"Community Health Volunteer"</strong> means village health volunteers or community health assistants</li>
                  <li><strong>"Service"</strong> means telemedicine services provided through the Smart Telemed application</li>
                  <li><strong>"Medical Device"</strong> means vital sign measurement devices connected to the App</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">3. Nature of Service</h2>
                <h3 className="mt-4 font-medium">3.1 Core Services</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Remote Medical Consultation</strong>: Via video call and online communication systems</li>
                  <li><strong>Medical Device Connectivity</strong>: For measuring and recording vital signs</li>
                  <li><strong>Health Data Management</strong>: Recording, tracking, and reporting examination results</li>
                  <li><strong>Doctor Appointments</strong>: Booking and managing treatment schedules</li>
                  <li><strong>Community Health Volunteer Support</strong>: Tools for volunteers in patient care</li>
                </ul>

                <h3 className="mt-4 font-medium">3.2 Service Scope</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Service is available in Thailand only</li>
                  <li>Registration and identity verification required before use</li>
                  <li>Must be within the service area of participating public health facilities</li>
                </ul>

                <h3 className="mt-4 font-medium">3.3 Supported Devices</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>iOS and Android devices with Bluetooth 4.0 or higher</li>
                  <li>Certified medical devices supported by the App</li>
                  <li>Stable internet connection</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">4. Registration and Usage</h2>
                <h3 className="mt-4 font-medium">4.1 Registration</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Users must provide accurate, complete, and current information</li>
                  <li>Patient registration requires identity verification via national ID card or government documents</li>
                  <li>Medical personnel must have valid professional licenses</li>
                  <li>Community health volunteers must be certified by relevant authorities</li>
                </ul>

                <h3 className="mt-4 font-medium">4.2 User Responsibilities</h3>
                <p className="mt-2">Users agree to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Provide accurate information and update when changes occur</li>
                  <li>Maintain confidentiality of login credentials</li>
                  <li>Not use others' accounts or allow others to use their account</li>
                  <li>Use the Service only for its intended purposes</li>
                  <li>Comply with applicable laws and regulations</li>
                </ul>

                <h3 className="mt-4 font-medium">4.3 Account Suspension and Termination</h3>
                <p className="mt-2">The Company may suspend or terminate accounts in cases of:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Providing false or inaccurate information</li>
                  <li>Misuse of Service or violation of these Terms</li>
                  <li>Actions that may cause harm to the system or other users</li>
                  <li>Violation of laws or medical ethics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">5. Medical Services and Limitations</h2>
                <h3 className="mt-4 font-medium">5.1 Nature of Medical Services</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Preliminary consultation and symptom monitoring services</li>
                  <li>Health advice and disease prevention guidance</li>
                  <li>Vital sign monitoring and recording via medical devices</li>
                  <li>Urgency assessment and referral</li>
                </ul>

                <h3 className="mt-4 font-medium">5.2 Service Limitations</h3>
                <p className="mt-2">Smart Telemed Service <strong>CANNOT</strong>:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Fully replace direct medical examination by doctors</li>
                  <li>Be used for emergencies requiring immediate treatment</li>
                  <li>Diagnose complex diseases or those requiring special examinations</li>
                  <li>Prescribe controlled substances or narcotics</li>
                  <li>Guarantee specific treatment outcomes</li>
                </ul>

                <h3 className="mt-4 font-medium">5.3 Emergency Cases</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>In emergencies, patients must call 1669 or go to hospital immediately</li>
                  <li>The App has alert systems for severely abnormal vital signs</li>
                  <li>Medical personnel will recommend referral when necessary</li>
                </ul>

                <h3 className="mt-4 font-medium">5.4 Data Accuracy</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Data accuracy depends on measurement devices and correct usage</li>
                  <li>Users must use only certified medical devices</li>
                  <li>App data should support diagnosis, not be the sole basis</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">6. Medical Devices and Connectivity</h2>
                <h3 className="mt-4 font-medium">6.1 Supported Devices</h3>
                <p className="mt-2">The App supports the following medical devices:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Blood Pressure Monitors</strong>: A&amp;D UA-651BLE, Beurer BM57, Yuwell YE680A</li>
                  <li><strong>Pulse Oximeters</strong>: Bluetooth-enabled Pulse Oximeter devices</li>
                  <li><strong>Thermometers</strong>: Beurer FT95 and equivalent devices</li>
                  <li><strong>Weight Scales</strong>: Xiaomi Mi Body Scale, BFS200B</li>
                  <li><strong>Glucometers</strong>: Yuwell Glucometer and supported devices</li>
                </ul>

                <h3 className="mt-4 font-medium">6.2 Device Usage Responsibilities</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Users must follow manufacturer's instructions</li>
                  <li>Maintain devices in good condition</li>
                  <li>Calibrate devices as scheduled</li>
                  <li>Report any device malfunctions</li>
                </ul>

                <h3 className="mt-4 font-medium">6.3 Device Warranty</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Company does not warrant third-party medical devices</li>
                  <li>Warranty follows manufacturer's terms and conditions</li>
                  <li>Company will assist in contacting service centers when necessary</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">7. Data and Privacy</h2>
                <h3 className="mt-4 font-medium">7.1 Privacy Policy Compliance</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>App usage is subject to Smart Telemed Privacy Policy</li>
                  <li>Users should read and understand the Privacy Policy before use</li>
                </ul>

                <h3 className="mt-4 font-medium">7.2 Medical Data Sharing</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Health data will be shared only with relevant medical personnel</li>
                  <li>Data sharing requires patient consent or as required by law</li>
                  <li>Data will be encrypted and protected by international standards</li>
                </ul>

                <h3 className="mt-4 font-medium">7.3 Data Retention</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Medical records will be retained for 10 years per medical law</li>
                  <li>Usage data will be retained for 2 years or until no longer necessary</li>
                  <li>Users may request data deletion where permitted by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">8. Service Fees and Payment</h2>
                <h3 className="mt-4 font-medium">8.1 Service Fees</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Basic App usage is free of charge</li>
                  <li>Doctor consultation services may incur fees as specified</li>
                  <li>Fees will be notified in advance before service use</li>
                </ul>

                <h3 className="mt-4 font-medium">8.2 Payment</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Payment through secure and certified systems</li>
                  <li>Supports credit/debit card and Mobile Banking payment</li>
                  <li>Receipts will be sent via email or in-app</li>
                </ul>

                <h3 className="mt-4 font-medium">8.3 Refunds</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Refunds follow the specified refund policy</li>
                  <li>Appointment cancellations require at least 2 hours advance notice</li>
                  <li>Refunds will be processed within 7-14 business days</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">9. Intellectual Property</h2>
                <h3 className="mt-4 font-medium">9.1 Copyright and Trademarks</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Smart Telemed App and all content are Company property</li>
                  <li>Reproduction, distribution, or modification without authorization is prohibited</li>
                  <li>Trademarks and logos belong to the Company and related third parties</li>
                </ul>

                <h3 className="mt-4 font-medium">9.2 Permitted Use</h3>
                <p className="mt-2">Users are permitted to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Use the App for personal and non-commercial purposes</li>
                  <li>Download and use on personal devices</li>
                  <li>Print documents for personal use only</li>
                </ul>

                <h3 className="mt-4 font-medium">9.3 Intellectual Property Infringement</h3>
                <p className="mt-2">Prohibited actions:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Copying, modifying, or distributing software</li>
                  <li>Reverse engineering</li>
                  <li>Creating derivative or adapted works from the App</li>
                  <li>Commercial use without authorization</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">10. Limitation of Liability</h2>
                <h3 className="mt-4 font-medium">10.1 Liability Limitations</h3>
                <p className="mt-2">The Company shall not be liable for:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Indirect damages, special damages, or consequential damages</li>
                  <li>Loss of data, profits, or revenue</li>
                  <li>Damages from medical device usage</li>
                  <li>Damages from service interruptions</li>
                </ul>

                <h3 className="mt-4 font-medium">10.2 Warranty Limitations</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Service provided "As Is"</li>
                  <li>No guarantee that Service will be error-free or uninterrupted</li>
                  <li>No guarantee of medical device data accuracy</li>
                  <li>No guarantee of treatment outcomes or diagnoses</li>
                </ul>

                <h3 className="mt-4 font-medium">10.3 Maximum Liability Amount</h3>
                <p className="mt-2">Maximum liability limited to the lesser of:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Service fees paid by User in the past 12 months</li>
                  <li>Or 10,000 Baht</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">11. Indemnification</h2>
                <p className="mt-2">Users agree to indemnify and hold the Company harmless from:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Claims, lawsuits, or damages arising from User's use</li>
                  <li>User's violation of these Terms</li>
                  <li>User's violation of third-party rights</li>
                  <li>Illegal or inappropriate use of Service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">12. Termination and Service Discontinuation</h2>
                <h3 className="mt-4 font-medium">12.1 Termination by User</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Users may terminate Service use at any time</li>
                  <li>Termination does not affect existing obligations</li>
                  <li>Data will be deleted per Privacy Policy</li>
                </ul>

                <h3 className="mt-4 font-medium">12.2 Termination by Company</h3>
                <p className="mt-2">Company may terminate Service in cases of:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Serious violation of Terms by User</li>
                  <li>Force majeure events beyond control</li>
                  <li>Business policy changes</li>
                  <li>Compliance with new laws</li>
                </ul>

                <h3 className="mt-4 font-medium">12.3 Effects of Termination</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>App usage rights will terminate immediately</li>
                  <li>Certain Terms will continue to apply</li>
                  <li>Data will be managed per Privacy Policy</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">13. Governing Law and Dispute Resolution</h2>
                <h3 className="mt-4 font-medium">13.1 Governing Law</h3>
                <p className="mt-2">These Terms are governed by and interpreted under Thai law, including:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Personal Data Protection Act B.E. 2562 (2019)</li>
                  <li>Medical Profession Act B.E. 2542 (1999)</li>
                  <li>Computer-Related Crime Act B.E. 2560 (2017)</li>
                </ul>

                <h3 className="mt-4 font-medium">13.2 Dispute Resolution</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Disputes will first attempt resolution through negotiation</li>
                  <li>If unresolved, matter will be submitted to Thai courts with jurisdiction</li>
                  <li>Venue for litigation is Bangkok, Thailand</li>
                </ul>

                <h3 className="mt-4 font-medium">13.3 Severability</h3>
                <p className="mt-2">If any provision is unenforceable, other provisions remain in effect</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">14. Force Majeure</h2>
                <p className="mt-2">Company shall not be liable for failure to perform due to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>National medical emergencies</li>
                  <li>Natural disasters, war, riots</li>
                  <li>Compliance with government or agency orders</li>
                  <li>Internet or network system failures</li>
                  <li>Other events beyond control</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">15. Notifications and Communications</h2>
                <h3 className="mt-4 font-medium">15.1 Notification Channels</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>In-app notifications (Push Notification)</li>
                  <li>Registered email</li>
                  <li>SMS for emergencies</li>
                  <li>Website announcements</li>
                </ul>

                <h3 className="mt-4 font-medium">15.2 Contacting Company</h3>
                <div className="mt-2">
                  <p><strong>E.S.M. Solution Co. Ltd</strong></p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Email: support@esmSolution.co.th</li>
                    <li>Phone: 02-XXX-XXXX</li>
                    <li>LINE Official: @SmartTelemed</li>
                    <li>Address: [Office Address]</li>
                    <li>Business Hours: Monday-Friday 8:00-17:00</li>
                  </ul>
                </div>

                <h3 className="mt-4 font-medium">15.3 Emergency Reporting</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Emergencies: Call 1669 or 191</li>
                  <li>Urgent technical issues: Call 02-XXX-XXXX (24 hours)</li>
                  <li>Security issue reporting: security@esmSolution.co.th</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">16. Changes to Terms</h2>
                <h3 className="mt-4 font-medium">16.1 Right to Modify</h3>
                <p className="mt-2">Company may modify these Terms by:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Notifying users at least 30 days in advance</li>
                  <li>Announcing through main communication channels</li>
                  <li>Providing opportunity for user feedback</li>
                </ul>

                <h3 className="mt-4 font-medium">16.2 Effective Date</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Changes take effect on announced date</li>
                  <li>Continued use constitutes acceptance of changes</li>
                  <li>If unacceptable, Service use may be terminated</li>
                </ul>

                <h3 className="mt-4 font-medium">16.3 Retention of Previous Terms</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Previous versions retained for reference</li>
                  <li>Available in App documentation section</li>
                  <li>Users may request previous versions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">17. Additional Terms for Medical Personnel</h2>
                <h3 className="mt-4 font-medium">17.1 Professional Licenses</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Must have valid, unexpired professional licenses</li>
                  <li>Must notify of any license status changes</li>
                  <li>May not provide services when license is suspended or revoked</li>
                </ul>

                <h3 className="mt-4 font-medium">17.2 Medical Ethics</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Must comply with medical and nursing codes of ethics</li>
                  <li>Strictly maintain patient confidentiality</li>
                  <li>Provide treatment to best of knowledge and ability</li>
                  <li>Refer patients when beyond scope of competence</li>
                </ul>

                <h3 className="mt-4 font-medium">17.3 Medical Liability</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Responsible for diagnoses and treatments provided</li>
                  <li>Must have adequate professional liability insurance</li>
                  <li>Comply with professional standards and laws</li>
                  <li>Document medical records accurately and completely</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">18. Additional Terms for Community Health Volunteers</h2>
                <h3 className="mt-4 font-medium">18.1 Qualifications and Training</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Must complete training and be certified by relevant authorities</li>
                  <li>Must have valid volunteer health certificate</li>
                  <li>Must attend supplementary training as required</li>
                  <li>Operate under medical personnel supervision</li>
                </ul>

                <h3 className="mt-4 font-medium">18.2 Scope of Practice</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Provide basic health advice</li>
                  <li>Assist with basic vital sign measurements</li>
                  <li>Relay information to medical personnel</li>
                  <li>Cannot diagnose diseases or prescribe medications</li>
                </ul>

                <h3 className="mt-4 font-medium">18.3 Reporting and Supervision</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Report work performance as scheduled</li>
                  <li>Receive supervision from medical personnel</li>
                  <li>Report problems or concerns immediately when identified</li>
                  <li>Attend meetings and training as scheduled</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">19. Insurance and Compensation</h2>
                <h3 className="mt-4 font-medium">19.1 Liability Insurance</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Company has public liability insurance</li>
                  <li>Covers damages from service provision</li>
                  <li>Does not cover User or third-party errors</li>
                </ul>

                <h3 className="mt-4 font-medium">19.2 Compensation Fund</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Fund available for damage compensation when necessary</li>
                  <li>Compensation consideration follows specified criteria</li>
                  <li>Affected parties may file claims</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">20. Support and Training</h2>
                <h3 className="mt-4 font-medium">20.1 User Support</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Help Desk provides support during business hours</li>
                  <li>User manual and FAQ in App</li>
                  <li>Tutorial videos for various features</li>
                  <li>Regular updates and news</li>
                </ul>

                <h3 className="mt-4 font-medium">20.2 Training</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Training provided for new users</li>
                  <li>In-depth training for medical personnel</li>
                  <li>Skill enhancement training for community health volunteers</li>
                  <li>Usage capability certification</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold">21. Regulatory Compliance</h2>
                <h3 className="mt-4 font-medium">21.1 Legal Compliance</h3>
                <p className="mt-2">Company and Users must comply with:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Public health and professional practice laws</li>
                  <li>Personal data protection laws</li>
                  <li>Computer and communication laws</li>
                  <li>Regulatory agency regulations</li>
                </ul>

                <h3 className="mt-4 font-medium">21.2 Audit and Assessment</h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Regular compliance audits</li>
                  <li>Service quality assessments</li>
                  <li>User satisfaction monitoring</li>
                  <li>Continuous improvement and development</li>
                </ul>
              </section>

              <hr className="my-6" />
              <section>
                <h2 className="text-xl font-semibold">Acceptance of Terms</h2>
                <p className="mt-2">Use of Smart Telemed App constitutes full acceptance of these Terms of Service.</p>
                <p className="mt-2">If you have questions or need assistance, please contact our support team through the channels specified above.</p>
                <div className="mt-4 space-y-1 text-sm text-gray-600">
                  <p>Last Updated: October 21, 2025</p>
                  <p>Document Version: 1.0</p>
                  <p>Approved by: Chief Executive Officer, E.S.M. Solution Co. Ltd</p>
                </div>
                <p className="mt-4 italic text-sm">This document is prepared to comply with Thai law and international standards for medical service provision</p>
              </section>
            </>
          ) : (
            <>
              {/* Thai version */}
          <section>
            <h2 className="text-xl font-semibold">1. การยอมรับข้อกำหนด</h2>
            <p className="mt-2">
              การดาวน์โหลด ติดตั้ง ลงทะเบียน หรือใช้งานแอปพลิเคชัน Smart Telemed ("แอป", "บริการ") ถือเป็นการยอมรับและตกลงที่จะปฏิบัติตามข้อกำหนดในการให้บริการฉบับนี้ ("ข้อกำหนด") อย่างครบถ้วน
            </p>
            <p className="mt-2">หากท่านไม่ยอมรับข้อกำหนดเหล่านี้ โปรดอย่าใช้งานบริการของเรา</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">2. คำนิยาม</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>"บริษัท"</strong> หมายถึง บริษัท E.S.M. Solution Co. Ltd</li>
              <li><strong>"ผู้ใช้"</strong> หมายถึง บุคคลที่ใช้งานแอปพลิเคชัน Smart Telemed</li>
              <li><strong>"ผู้ป่วย"</strong> หมายถึง ผู้ใช้ที่เป็นผู้รับบริการทางการแพทย์</li>
              <li><strong>"บุคลากรทางการแพทย์"</strong> หมายถึง แพทย์ พยาบาล และเจ้าหน้าที่สาธารณสุขที่ใช้งานแอป</li>
              <li><strong>"อาสาสมัครสาธารณสุข"</strong> หมายถึง อสม. หรือผู้ช่วยในการดูแลสุขภาพชุมชน</li>
              <li><strong>"บริการ"</strong> หมายถึง บริการการแพทย์ทางไกลผ่านแอปพลิเคชัน Smart Telemed</li>
              <li><strong>"อุปกรณ์ทางการแพทย์"</strong> หมายถึง อุปกรณ์วัดสัญญาณชีพที่เชื่อมต่อกับแอป</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">3. ลักษณะของบริการ</h2>
            <h3 className="mt-4 font-medium">3.1 บริการหลัก</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>การปรึกษาแพทย์ทางไกล</strong>: ผ่านระบบวิดีโอคอล และการสื่อสารออนไลน์</li>
              <li><strong>การเชื่อมต่ออุปกรณ์ทางการแพทย์</strong>: เพื่อวัดและบันทึกสัญญาณชีพ</li>
              <li><strong>การจัดการข้อมูลสุขภาพ</strong>: บันทึก ติดตาม และรายงานผลการตรวจ</li>
              <li><strong>การนัดหมายแพทย์</strong>: ระบบจองและจัดการตารางการรักษา</li>
              <li><strong>การสนับสนุนอาสาสมัครสาธารณสุข</strong>: เครื่องมือสำหรับ อสม. ในการดูแลผู้ป่วย</li>
            </ul>

            <h3 className="mt-4 font-medium">3.2 ขอบเขตการให้บริการ</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>บริการใช้ได้ในประเทศไทยเท่านั้น</li>
              <li>ต้องมีการลงทะเบียนและยืนยันตัวตนก่อนใช้บริการ</li>
              <li>ต้องอยู่ในพื้นที่ให้บริการของหน่วยบริการสาธารณสุขที่เข้าร่วมโครงการ</li>
            </ul>

            <h3 className="mt-4 font-medium">3.3 อุปกรณ์ที่รองรับ</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>อุปกรณ์ iOS และ Android ที่มี Bluetooth 4.0 ขึ้นไป</li>
              <li>อุปกรณ์ทางการแพทย์ที่ได้รับการรับรองและรองรับโดยแอป</li>
              <li>การเชื่อมต่ออินเทอร์เน็ตที่เสถียร</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">4. การลงทะเบียนและการใช้งาน</h2>
            <h3 className="mt-4 font-medium">4.1 การลงทะเบียน</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ผู้ใช้ต้องให้ข้อมูลที่ถูกต้อง ครบถ้วน และเป็นปัจจุบัน</li>
              <li>การลงทะเบียนสำหรับผู้ป่วยต้องมีการยืนยันตัวตนผ่านบัตรประชาชนหรือเอกสารทางราชการ</li>
              <li>บุคลากรทางการแพทย์ต้องมีใบประกอบวิชาชีพที่ถูกต้อง</li>
              <li>อาสาสมัครสาธารณสุขต้องผ่านการรับรองจากหน่วยงานที่เกี่ยวข้อง</li>
            </ul>

            <h3 className="mt-4 font-medium">4.2 ความรับผิดชอบของผู้ใช้</h3>
            <p className="mt-2">ผู้ใช้ตกลงที่จะ:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ให้ข้อมูลที่ถูกต้องและอัปเดตข้อมูลเมื่อมีการเปลี่ยนแปลง</li>
              <li>รักษาความลับของข้อมูลการเข้าสู่ระบบ</li>
              <li>ไม่ใช้บัญชีของผู้อื่นหรือให้ผู้อื่นใช้บัญชีของตน</li>
              <li>ใช้บริการตามวัตถุประสงค์ที่กำหนดไว้เท่านั้น</li>
              <li>ปฏิบัติตามกฎหมายและระเบียบที่เกี่ยวข้อง</li>
            </ul>

            <h3 className="mt-4 font-medium">4.3 การระงับและการยกเลิกบัญชี</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>การให้ข้อมูลเท็จหรือไม่ถูกต้อง</li>
              <li>การใช้บริการในทางที่ผิด หรือขัดต่อข้อกำหนดนี้</li>
              <li>การกระทำที่อาจก่อให้เกิดความเสียหายต่อระบบหรือผู้ใช้อื่น</li>
              <li>การฝ่าฝืนกฎหมายหรือจริยธรรมทางการแพทย์</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">5. บริการทางการแพทย์และข้อจำกัด</h2>
            <h3 className="mt-4 font-medium">5.1 ลักษณะของบริการทางการแพทย์</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>บริการการปรึกษาเบื้องต้นและการติดตามอาการ</li>
              <li>การให้คำแนะนำด้านสุขภาพและการป้องกันโรค</li>
              <li>การตรวจสอบและบันทึกสัญญาณชีพผ่านอุปกรณ์ทางการแพทย์</li>
              <li>การประเมินความเร่งด่วนและการส่งต่อ</li>
            </ul>

            <h3 className="mt-4 font-medium">5.2 ข้อจำกัดของบริการ</h3>
            <p className="mt-2">บริการ Smart Telemed <strong>ไม่สามารถ</strong>:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ทดแทนการตรวจรักษาโดยแพทย์โดยตรงได้ทั้งหมด</li>
              <li>ใช้สำหรับกรณีฉุกเฉินที่ต้องการการรักษาทันที</li>
              <li>วินิจฉัยโรคที่ซับซ้อนหรือต้องการการตรวจพิเศษ</li>
              <li>สั่งจ่ายยาควบคุมหรือยาเสพติด</li>
              <li>รับประกันผลการรักษาแบบเฉพาะเจาะจง</li>
            </ul>

            <h3 className="mt-4 font-medium">5.3 กรณีฉุกเฉิน</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>กรณีฉุกเฉิน ผู้ป่วยต้องติดต่อ 1669 หรือไปโรงพยาบาลทันที</li>
              <li>แอปมีระบบแจ้งเตือนกรณีพบค่าสัญญาณชีพผิดปกติอย่างรุนแรง</li>
              <li>บุคลากรทางการแพทย์จะแนะนำการส่งต่อเมื่อจำเป็น</li>
            </ul>

            <h3 className="mt-4 font-medium">5.4 ความถูกต้องของข้อมูล</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ความแม่นยำของข้อมูลขึ้นอยู่กับอุปกรณ์วัดและการใช้งานที่ถูกต้อง</li>
              <li>ผู้ใช้ต้องใช้อุปกรณ์ทางการแพทย์ที่ได้รับการรับรองเท่านั้น</li>
              <li>ข้อมูลที่ได้จากแอปควรใช้ประกอบการวินิจฉัย ไม่ใช่เป็นหลักเดียว</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">6. อุปกรณ์ทางการแพทย์และการเชื่อมต่อ</h2>
            <h3 className="mt-4 font-medium">6.1 อุปกรณ์ที่รองรับ</h3>
            <p className="mt-2">แอปรองรับอุปกรณ์ทางการแพทย์ดังนี้:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>เครื่องวัดความดัน</strong>: A&amp;D UA-651BLE, Beurer BM57, Yuwell YE680A</li>
              <li><strong>เครื่องวัดออกซิเจน</strong>: อุปกรณ์ Pulse Oximeter ที่รองรับ Bluetooth</li>
              <li><strong>เครื่องวัดอุณหภูมิ</strong>: Beurer FT95 และอุปกรณ์ที่เทียบเท่า</li>
              <li><strong>เครื่องชั่งน้ำหนัก</strong>: Xiaomi Mi Body Scale, BFS200B</li>
              <li><strong>เครื่องวัดน้ำตาล</strong>: Yuwell Glucometer และอุปกรณ์ที่รองรับ</li>
            </ul>

            <h3 className="mt-4 font-medium">6.2 ความรับผิดชอบในการใช้อุปกรณ์</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ผู้ใช้ต้องใช้อุปกรณ์ตามคำแนะนำของผู้ผลิต</li>
              <li>ต้องดูแลรักษาอุปกรณ์ให้อยู่ในสภาพดี</li>
              <li>ต้องปรับเทียบอุปกรณ์ตามกำหนดเวลา</li>
              <li>แจ้งหากพบอุปกรณ์ทำงานผิดปกติ</li>
            </ul>

            <h3 className="mt-4 font-medium">6.3 การรับประกันอุปกรณ์</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>บริษัทไม่รับประกันอุปกรณ์ทางการแพทย์ของบุคคลที่สาม</li>
              <li>การรับประกันเป็นไปตามเงื่อนไขของผู้ผลิตอุปกรณ์</li>
              <li>บริษัทจะช่วยเหลือในการติดต่อศูนย์บริการเมื่อจำเป็น</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">7. ข้อมูลและความเป็นส่วนตัว</h2>
            <h3 className="mt-4 font-medium">7.1 การปฏิบัติตามนโยบายความเป็นส่วนตัว</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>การใช้งานแอปอยู่ภายใต้นโยบายความเป็นส่วนตัวของ Smart Telemed</li>
              <li>ผู้ใช้ควรอ่านและทำความเข้าใจนโยบายความเป็นส่วนตัวก่อนใช้งาน</li>
            </ul>

            <h3 className="mt-4 font-medium">7.2 การแชร์ข้อมูลทางการแพทย์</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ข้อมูลสุขภาพจะถูกแชร์เฉพาะกับบุคลากรทางการแพทย์ที่เกี่ยวข้อง</li>
              <li>การแชร์ข้อมูลต้องได้รับความยินยอมจากผู้ป่วยหรือตามกฎหมาย</li>
              <li>ข้อมูลจะถูกเข้ารหัสและปกป้องด้วยมาตรฐานสากล</li>
            </ul>

            <h3 className="mt-4 font-medium">7.3 การเก็บรักษาข้อมูล</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ข้อมูลการรักษาจะเก็บไว้ 10 ปี ตามกฎหมายทางการแพทย์</li>
              <li>ข้อมูลการใช้งานจะเก็บไว้ 2 ปี หรือจนกว่าจะพ้นความจำเป็น</li>
              <li>ผู้ใช้สามารถขอลบข้อมูลได้ในกรณีที่กฎหมายอนุญาต</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">8. ค่าบริการและการชำระเงิน</h2>
            <h3 className="mt-4 font-medium">8.1 ค่าบริการ</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>การใช้งานแอปพื้นฐานไม่มีค่าใช้จ่าย</li>
              <li>บริการปรึกษาแพทย์อาจมีค่าใช้จ่ายตามที่กำหนด</li>
              <li>ค่าบริการจะแจ้งให้ทราบล่วงหน้าก่อนการใช้บริการ</li>
            </ul>

            <h3 className="mt-4 font-medium">8.2 การชำระเงิน</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>การชำระเงินผ่านระบบที่ปลอดภัยและได้รับการรับรอง</li>
              <li>รองรับการชำระผ่านบัตรเครดิต/เดบิต และ Mobile Banking</li>
              <li>ใบเสร็จรับเงินจะจัดส่งทางอีเมลหรือในแอป</li>
            </ul>

            <h3 className="mt-4 font-medium">8.3 การคืนเงิน</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>การคืนเงินเป็นไปตามนโยบายการคืนเงินที่กำหนด</li>
              <li>กรณียกเลิกการนัดหมายต้องแจ้งล่วงหน้าอย่างน้อย 2 ชั่วโมง</li>
              <li>การคืนเงินจะดำเนินการภายใน 7-14 วันทำการ</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">9. ทรัพย์สินทางปัญญา</h2>
            <h3 className="mt-4 font-medium">9.1 ลิขสิทธิ์และเครื่องหมายการค้า</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>แอป Smart Telemed และเนื้อหาทั้งหมดเป็นทรัพย์สินของบริษัท</li>
              <li>ห้ามทำซ้ำ แจกจ่าย หรือดัดแปลงโดยไม่ได้รับอนุญาต</li>
              <li>เครื่องหมายการค้าและโลโก้เป็นของบริษัทและบุคคลที่สามที่เกี่ยวข้อง</li>
            </ul>

            <h3 className="mt-4 font-medium">9.2 การใช้งานที่อนุญาต</h3>
            <p className="mt-2">ผู้ใช้ได้รับอนุญาตให้:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ใช้งานแอปสำหรับวัตถุประสงค์ส่วนตัวและไม่เพื่อการค้า</li>
              <li>ดาวน์โหลดและใช้งานบนอุปกรณ์ส่วนตัว</li>
              <li>พิมพ์เอกสารสำหรับการใช้งานส่วนตัวเท่านั้น</li>
            </ul>

            <h3 className="mt-4 font-medium">9.3 การละเมิดทรัพย์สินทางปัญญา</h3>
            <p className="mt-2">การกระทำที่ห้าม:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>คัดลอก ดัดแปลง หรือแจกจ่ายซอฟต์แวร์</li>
              <li>ทำวิศวกรรมย้อนกลับ (Reverse Engineering)</li>
              <li>สร้างงานดัดแปลงหรืองานที่มาจากแอป</li>
              <li>ใช้เพื่อการค้าโดยไม่ได้รับอนุญาต</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">10. ข้อจำกัดความรับผิดชอบ</h2>
            <h3 className="mt-4 font-medium">10.1 การจำกัดความรับผิดชอบ</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ความเสียหายทางอ้อม ความเสียหายพิเศษ หรือความเสียหายที่เป็นผลสืบเนื่อง</li>
              <li>การสูญเสียข้อมูล กำไร หรือรายได้</li>
              <li>ความเสียหายที่เกิดจากการใช้งานอุปกรณ์ทางการแพทย์</li>
              <li>ความเสียหายจากการหยุดชะงักของบริการ</li>
            </ul>

            <h3 className="mt-4 font-medium">10.2 ข้อจำกัดการรับประกัน</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>บริการให้บริการ "ตามสภาพที่เป็น" (As Is)</li>
              <li>ไม่รับประกันว่าบริการจะไม่มีข้อผิดพลาดหรือไม่หยุดชะงัก</li>
              <li>ไม่รับประกันความแม่นยำของข้อมูลจากอุปกรณ์ทางการแพทย์</li>
              <li>ไม่รับประกันผลการรักษาหรือการวินิจฉัย</li>
            </ul>

            <h3 className="mt-4 font-medium">10.3 วงเงินความรับผิดชอบสูงสุด</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ค่าบริการที่ผู้ใช้ชำระในช่วง 12 เดือนที่ผ่านมา</li>
              <li>หรือ 10,000 บาท แล้วแต่จำนวนใดจะน้อยกว่า</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">11. การชดใช้ค่าเสียหาย (Indemnification)</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>การเรียกร้อง คดีความ หรือความเสียหายที่เกิดจากการใช้งานของผู้ใช้</li>
              <li>การละเมิดข้อกำหนดนี้โดยผู้ใช้</li>
              <li>การละเมิดสิทธิ์ของบุคคลที่สามโดยผู้ใช้</li>
              <li>การใช้บริการในทางที่ผิดกฎหมายหรือไม่เหมาะสม</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">12. การยกเลิกและการสิ้นสุดการให้บริการ</h2>
            <h3 className="mt-4 font-medium">12.1 การยกเลิกโดยผู้ใช้</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ผู้ใช้สามารถยกเลิกการใช้บริการได้ตลอดเวลา</li>
              <li>การยกเลิกไม่ส่งผลต่อภาระผูกพันที่เกิดขึ้นแล้ว</li>
              <li>ข้อมูลจะถูกลบตามนโยบายความเป็นส่วนตัว</li>
            </ul>

            <h3 className="mt-4 font-medium">12.2 การยกเลิกโดยบริษัท</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ผู้ใช้ฝ่าฝืนข้อกำหนดอย่างร้ายแรง</li>
              <li>เหตุสุดวิสัยที่ไม่สามารถควบคุมได้</li>
              <li>การเปลี่ยนแปลงนโยบายธุรกิจ</li>
              <li>การปฏิบัติตามกฎหมายใหม่</li>
            </ul>

            <h3 className="mt-4 font-medium">12.3 ผลของการยกเลิก</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>สิทธิ์การใช้งานแอปจะยกเลิกทันที</li>
              <li>ข้อกำหนดบางข้อจะยังคงมีผลต่อไป</li>
              <li>ข้อมูลจะจัดการตามนโยบายความเป็นส่วนตัว</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">13. กฎหมายที่ใช้บังคับและการระงับข้อพิพาท</h2>
            <h3 className="mt-4 font-medium">13.1 กฎหมายที่ใช้บังคับ</h3>
            <p className="mt-2">ข้อกำหนดนี้อยู่ภายใต้และตีความตามกฎหมายไทย รวมถึง:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562</li>
              <li>พระราชบัญญัติการประกอบโรคศิลปะ พ.ศ. 2542</li>
              <li>พระราชบัญญัติคอมพิวเตอร์ พ.ศ. 2560</li>
            </ul>

            <h3 className="mt-4 font-medium">13.2 การระงับข้อพิพาท</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ข้อพิพาทจะพยายามระงับโดยการเจรจาก่อน</li>
              <li>หากไม่สามารถตกลงได้ จะนำเรื่องไปยังศาลไทยที่มีเขตอำนาจ</li>
              <li>สถานที่พิจารณาคดีที่กรุงเทพมหานคร</li>
            </ul>

            <h3 className="mt-4 font-medium">13.3 การแบ่งแยกข้อกำหนด</h3>
            <p className="mt-2">หากข้อกำหนดข้อใดไม่สามารถบังคับใช้ได้ ข้อกำหนดอื่นจะยังคงมีผลบังคับใช้</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">14. เหตุสุดวิสัย (Force Majeure)</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ภาวะฉุกเฉินทางการแพทย์ระดับชาติ</li>
              <li>ภัยธรรมชาติ สงคราม การจลาจล</li>
              <li>การปฏิบัติตามคำสั่งของรัฐบาลหรือหน่วยงานราชการ</li>
              <li>ความล้มเหลวของระบบอินเทอร์เน็ตหรือเครือข่าย</li>
              <li>เหตุการณ์อื่นที่อยู่นอกเหนือการควบคุม</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">15. การแจ้งเตือนและการสื่อสาร</h2>
            <h3 className="mt-4 font-medium">15.1 ช่องทางการแจ้งเตือน</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>การแจ้งเตือนในแอป (Push Notification)</li>
              <li>อีเมลที่ลงทะเบียน</li>
              <li>SMS ในกรณีฉุกเฉิน</li>
              <li>การประกาศในเว็บไซต์</li>
            </ul>

            <h3 className="mt-4 font-medium">15.2 การติดต่อบริษัท</h3>
            <div className="mt-2">
              <p><strong>บริษัท E.S.M. Solution Co. Ltd</strong></p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>อีเมล: support@esmSolution.co.th</li>
                <li>โทรศัพท์: 02-XXX-XXXX</li>
                <li>LINE Official: @SmartTelemed</li>
                <li>ที่อยู่: [ที่อยู่สำนักงาน]</li>
                <li>เวลาทำการ: จันทร์-ศุกร์ 8:00-17:00 น.</li>
              </ul>
            </div>

            <h3 className="mt-4 font-medium">15.3 การแจ้งเหตุฉุกเฉิน</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>กรณีฉุกเฉิน: โทร 1669 หรือ 191</li>
              <li>ปัญหาเทคนิคเร่งด่วน: โทร 02-XXX-XXXX (24 ชั่วโมง)</li>
              <li>การรายงานปัญหาความปลอดภัย: security@esmSolution.co.th</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">16. การเปลี่ยนแปลงข้อกำหนด</h2>
            <h3 className="mt-4 font-medium">16.1 สิทธิ์ในการแก้ไข</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>แจ้งให้ผู้ใช้ทราบล่วงหน้าอย่างน้อย 30 วัน</li>
              <li>ประกาศผ่านช่องทางการสื่อสารหลัก</li>
              <li>เปิดโอกาสให้ผู้ใช้แสดงความเห็น</li>
            </ul>

            <h3 className="mt-4 font-medium">16.2 การมีผลบังคับใช้</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>การเปลี่ยนแปลงจะมีผลตามวันที่ประกาศ</li>
              <li>การใช้งานต่อถือเป็นการยอมรับการเปลี่ยนแปลง</li>
              <li>หากไม่ยอมรับ สามารถยกเลิกการใช้บริการได้</li>
            </ul>

            <h3 className="mt-4 font-medium">16.3 การเก็บรักษาข้อกำหนดเดิม</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ข้อกำหนดเดิมจะเก็บไว้เพื่อการอ้างอิง</li>
              <li>มีให้ดูได้ในส่วนเอกสารของแอป</li>
              <li>ผู้ใช้สามารถขอดูเวอร์ชันเดิมได้</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">17. ข้อกำหนดเพิ่มเติมสำหรับบุคลากรทางการแพทย์</h2>
            <h3 className="mt-4 font-medium">17.1 ใบประกอบวิชาชีพ</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ต้องมีใบประกอบวิชาชีพที่ถูกต้องและยังไม่หมดอายุ</li>
              <li>ต้องแจ้งหากมีการเปลี่ยนแปลงสถานะใบประกอบวิชาชีพ</li>
              <li>ห้ามให้บริการเมื่อใบประกอบวิชาชีพถูกระงับหรือเพิกถอน</li>
            </ul>

            <h3 className="mt-4 font-medium">17.2 จริยธรรมทางการแพทย์</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ต้องปฏิบัติตามจรรยาบรรณแพทย์และพยาบาล</li>
              <li>รักษาความลับของผู้ป่วยอย่างเข้มงวด</li>
              <li>ให้การรักษาด้วยความรู้ความสามารถอย่างเต็มที่</li>
              <li>ส่งต่อผู้ป่วยเมื่อเกินขอบเขตความสามารถ</li>
            </ul>

            <h3 className="mt-4 font-medium">17.3 ความรับผิดชอบทางการแพทย์</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>รับผิดชอบต่อการวินิจฉัยและการรักษาที่ให้</li>
              <li>มีประกันการประกอบวิชาชีพที่เพียงพอ</li>
              <li>ปฏิบัติตามมาตรฐานวิชาชีพและกฎหมาย</li>
              <li>บันทึกข้อมูลการรักษาอย่างถูกต้องและครบถ้วน</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">18. ข้อกำหนดเพิ่มเติมสำหรับอาสาสมัครสาธารณสุข</h2>
            <h3 className="mt-4 font-medium">18.1 คุณสมบัติและการอบรม</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ต้องผ่านการอบรมและได้รับการรับรองจากหน่วยงานที่เกี่ยวข้อง</li>
              <li>มีใบรับรอง อสม. ที่ยังไม่หมดอายุ</li>
              <li>ต้องเข้ารับการอบรมเสริมตามที่กำหนด</li>
              <li>ปฏิบัติงานภายใต้การนิเทศของบุคลากรทางการแพทย์</li>
            </ul>

            <h3 className="mt-4 font-medium">18.2 ขอบเขตการปฏิบัติงาน</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ให้คำแนะนำเบื้องต้นด้านสุขภาพ</li>
              <li>ช่วยในการวัดสัญญาณชีพพื้นฐาน</li>
              <li>ส่งต่อข้อมูลให้บุคลากรทางการแพทย์</li>
              <li>ไม่สามารถวินิจฉัยโรคหรือสั่งจ่ายยาได้</li>
            </ul>

            <h3 className="mt-4 font-medium">18.3 การรายงานและการนิเทศ</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>รายงานผลการปฏิบัติงานตามรอบที่กำหนด</li>
              <li>รับการนิเทศจากบุคลากรทางการแพทย์</li>
              <li>แจ้งปัญหาหรือข้อสงสัยทันทีที่พบ</li>
              <li>เข้าร่วมการประชุมและการอบรมตามกำหนด</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">19. การรับประกันและการชดเชย</h2>
            <h3 className="mt-4 font-medium">19.1 การประกันความรับผิดชอบ</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>บริษัทมีการประกันความรับผิดชอบต่อสาธารณะ</li>
              <li>ครอบคลุมความเสียหายจากการให้บริการ</li>
              <li>ไม่ครอบคลุมความผิดพลาดของผู้ใช้หรือบุคคลที่สาม</li>
            </ul>

            <h3 className="mt-4 font-medium">19.2 กองทุนชดเชย</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>มีกองทุนสำหรับชดเชยความเสียหายในกรณีที่จำเป็น</li>
              <li>การพิจารณาชดเชยเป็นไปตามหลักเกณฑ์ที่กำหนด</li>
              <li>ผู้ประสบภัยสามารถยื่นคำร้องขอได้</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">20. การสนับสนุนและการฝึกอบรม</h2>
            <h3 className="mt-4 font-medium">20.1 การสนับสนุนผู้ใช้</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>มี Help Desk ให้การสนับสนุนผู้ใช้ในเวลาทำการ</li>
              <li>คู่มือการใช้งานและ FAQ ในแอป</li>
              <li>วิดีโอสอนการใช้งานสำหรับฟีเจอร์ต่างๆ</li>
              <li>การอัปเดตและแจ้งข่าวสารสม่ำเสมอ</li>
            </ul>

            <h3 className="mt-4 font-medium">20.2 การฝึกอบรม</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>จัดอบรมการใช้งานสำหรับผู้ใช้ใหม่</li>
              <li>อบรมเชิงลึกสำหรับบุคลากรทางการแพทย์</li>
              <li>อบรมเสริมทักษะสำหรับอาสาสมัครสาธารณสุข</li>
              <li>การรับรองความสามารถในการใช้งาน</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">21. การปฏิบัติตามข้อบังคับ</h2>
            <h3 className="mt-4 font-medium">21.1 การปฏิบัติตามกฎหมาย</h3>
            <p className="mt-2">บริษัทและผู้ใช้ต้องปฏิบัติตาม:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>กฎหมายสาธารณสุขและการประกอบวิชาชีพ</li>
              <li>กฎหมายคุ้มครองข้อมูลส่วนบุคคล</li>
              <li>กฎหมายคอมพิวเตอร์และการสื่อสาร</li>
              <li>ข้อบังคับของหน่วยงานกำกับดูแล</li>
            </ul>

            <h3 className="mt-4 font-medium">21.2 การตรวจสอบและการประเมิน</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>มีการตรวจสอบการปฏิบัติตามข้อกำหนดอย่างสม่ำเสมอ</li>
              <li>การประเมินคุณภาพการให้บริการ</li>
              <li>การติดตามความพึงพอใจของผู้ใช้</li>
              <li>การปรับปรุงและพัฒนาอย่างต่อเนื่อง</li>
            </ul>
          </section>

          <hr className="my-6" />
          <section>
            <h2 className="text-xl font-semibold">การยอมรับข้อกำหนด</h2>
            <p className="mt-2">การใช้งานแอป Smart Telemed ถือเป็นการยอมรับข้อกำหนดในการให้บริการฉบับนี้อย่างครบถ้วน</p>
            <p className="mt-2">หากมีข้อสงสัยหรือต้องการความช่วยเหลือ โปรดติดต่อทีมสนับสนูนของเราตามช่องทางที่ระบุไว้</p>
            <div className="mt-4 space-y-1 text-sm text-gray-600">
              <p>อัปเดตล่าสุด: 21 ตุลาคม 2568</p>
              <p>เวอร์ชันเอกสาร: 1.0</p>
              <p>ผู้อนุมัติ: ประธานเจ้าหน้าที่บริหาร บริษัท E.S.M. Solution Co. Ltd</p>
            </div>
            <p className="mt-4 italic text-sm">เอกสารนี้จัดทำขึ้นเพื่อให้สอดคล้องกับกฎหมายไทยและมาตรฐานสากลด้านการให้บริการทางการแพทย์</p>
          </section>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
