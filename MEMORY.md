# Project Context

- โปรเจกต์นี้เป็น starter สำหรับ React + TypeScript + Vite + Tailwind CSS v4
- Tailwind ทำงานผ่าน `@tailwindcss/vite` ใน `vite.config.ts`
- CSS entry คือ `src/index.css` และ `src/main.tsx` เป็นผู้ import ไฟล์นี้
- หน้า demo หลักอยู่ที่ `src/App.tsx`; ใช้ utility classes โดยตรงเพื่อให้แก้และทดลองได้ง่าย
- ดูแนวทางสีและ typography เริ่มต้นใน `DESIGN.md`

## Workflow

1. ติดตั้ง dependencies ด้วย `npm install`
2. พัฒนาด้วย `npm run dev`
3. ก่อนส่งมอบให้รัน `npm run build` และแก้ข้อผิดพลาดที่พบ
4. เก็บค่าลับเฉพาะใน environment ของเครื่องหรือระบบ deploy; ห้าม commit `.env` หรือ credentials

## ข้อควรจำ

- ใช้ Node.js 20.19+ หรือ 22.12+ กับ Vite รุ่นที่ติดตั้ง
- Tailwind CSS v4 ใช้ `@import "tailwindcss";` และ Vite plugin โดยไม่ต้องสร้าง `tailwind.config.js` สำหรับค่าเริ่มต้น
- อัปเดตเอกสารนี้เมื่อมีการเปลี่ยนสถาปัตยกรรมหรือคำสั่ง workflow สำคัญ
