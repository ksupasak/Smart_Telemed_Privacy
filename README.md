# Smart Telemed (Vite + React + Tailwind)

โปรเจ็กต์นี้สร้างหน้า Landing ตามภาพตัวอย่าง โดยแยก Component เป็นส่วน ๆ และใช้ TailwindCSS สำหรับจัดสไตล์

## โครงสร้างไฟล์
```
smart-telemed-vite-tailwind/
├─ public/
│  └─ images/        # รูปที่ใช้ในแต่ละ Section
├─ src/
│  ├─ components/    # React components แยกส่วนชัดเจน
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css      # Tailwind entry + utility
├─ index.html
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.js
└─ package.json
```

## เริ่มต้นใช้งาน
1. ติดตั้งแพ็กเกจ
```bash
npm install
```
2. รันโหมดพัฒนา
```bash
npm run dev
```
3. เปิดเบราว์เซอร์ไปที่ URL ที่ Vite แจ้ง (เช่น http://localhost:5173)

> หมายเหตุ: ใน `public/images` มีรูปจากสกรีนช็อตให้ใช้งาน (hero.png, kit.png, desktop.png) สามารถเปลี่ยนเป็นรูปสินค้าจริงได้ตามต้องการ

## ปรับแต่งโทนสี
แก้ไขไฟล์ `tailwind.config.js` ที่คีย์ `theme.extend.colors.brand` เพื่อเปลี่ยนโทนสีหลักของแบรนด์
