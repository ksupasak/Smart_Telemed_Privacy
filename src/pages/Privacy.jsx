export default function Privacy() {
  return (
    <section className="section">
      <div className="container-slim max-w-3xl">
        <h1 className="text-3xl font-bold">นโยบายความเป็นส่วนตัว - Smart Telemed V4</h1>
        <div className="mt-2 text-gray-600 space-y-1">
          <p><strong>บริษัท E.S.M. Solution Co. Ltd</strong></p>
          <p>อัปเดตล่าสุด: 21 ตุลาคม 2568</p>
          <p>เวอร์ชัน: 1.0</p>
        </div>

        <div className="mt-8 space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold">1. บทนำ</h2>
            <p className="mt-2">
              บริษัท E.S.M. Solution Co. Ltd ("บริษัท", "เรา", "พวกเรา") เป็นผู้ควบคุมข้อมูลส่วนบุคคลสำหรับแอปพลิเคชัน Smart Telemed V4 ("แอป", "บริการ")
              บริษัทตระหนักถึงความสำคัญของการคุ้มครองข้อมูลส่วนบุคคลและยึดมั่นในหลักการคุ้มครองความเป็นส่วนตัวตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)
            </p>
            <p className="mt-2">
              แอป Smart Telemed V4 เป็นระบบการแพทย์ทางไกลที่ให้บริการการดูแลสุขภาพผ่านเทคโนโลยีดิจิทัล เชื่อมต่ออุปกรณ์ทางการแพทย์ และอำนวยความสะดวกในการติดต่อระหว่างผู้ป่วยและบุคลากรทางการแพทย์
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
              นโยบายฉบับนี้มีผลบังคับใช้ตั้งแต่วันที่ 21 ตุลาคม 2568 และใช้กับข้อมูลส่วนบุคคลทั้งหมดที่เราเก็บรวบรวมผ่านแอปพลิเคชัน Smart Telemed V4
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
            <p><strong>หมายเหตุสำคัญ:</strong> การใช้งานแอป Smart Telemed V4 ถือเป็นการยอมรับและยินยอมตามนโยบายความเป็นส่วนตัวฉบับนี้ ท่านสามารถถอนความยินยอมได้ตลอดเวลาผ่านการตั้งค่าในแอปพลิเคชัน</p>
            <div className="mt-4 space-y-1 text-sm text-gray-600">
              <p>อัปเดตล่าสุด: 21 ตุลาคม 2568</p>
              <p>เวอร์ชันเอกสาร: 1.0</p>
              <p>ผู้อนุมัติ: [ชื่อผู้บริหาร], ประธานเจ้าหน้าที่บริหาร บริษัท E.S.M. Solution Co. Ltd</p>
            </div>
            <p className="mt-4 italic text-sm">
              เอกสารนี้จัดทำขึ้นเพื่อให้สอดคล้องกับพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 และมาตรฐานสากลด้านการคุ้มครองความเป็นส่วนตัว
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
