# Repository Guide

## ภาษาและรูปแบบการทำงาน

- ใช้ภาษาไทยสำหรับข้อความที่ผู้ใช้เห็น และคงชื่อเทคนิค/API ตามต้นฉบับ
- ใช้ React function components กับ TypeScript; ระบุ type เมื่อช่วยให้สัญญาของ component ชัดขึ้น
- จัดหน้าและสไตล์ด้วย Tailwind CSS v4 utility classes เป็นหลัก
- เขียนโค้ดให้เรียบง่าย แยก component เมื่อมีเหตุผลด้านการนำกลับใช้หรือความอ่านง่าย

## Frontend และ accessibility

- ใช้ HTML ที่มีความหมาย, label ที่ชัดเจน และคีย์บอร์ดใช้งานได้
- คง focus indicator, contrast ที่อ่านได้ และ responsive layout
- รองรับ `prefers-reduced-motion` เมื่อเพิ่ม animation หรือ transition
- ตรวจภาษาเอกสารและข้อความ UI ให้ตรงกับภาษาที่แสดง

## คำสั่งพัฒนา

- `npm run dev` เปิด development server
- `npm run build` ตรวจ TypeScript และ build production
- `npm run preview` ตรวจดู build ในเครื่อง

อย่าเพิ่ม secrets, API tokens หรือ credentials ลงใน repository; ไฟล์ `.env` ถูก ignore แล้ว
