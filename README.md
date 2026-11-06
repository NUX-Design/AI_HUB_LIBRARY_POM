# AI Hub Library

โครงโปรเจกต์เว็บด้วย React, TypeScript, Vite และ Tailwind CSS v4 มีหน้า demo สำหรับดูตัวอย่าง utility classes และ responsive layout

## ความต้องการ

- Node.js 20.19+ หรือ 22.12+
- npm

## เริ่มใช้งาน

```bash
npm install
npm run dev
```

เปิด URL ที่ Vite แสดงใน Terminal (ปกติคือ `http://localhost:5173`)

## คำสั่งที่ใช้บ่อย

```bash
npm run dev      # เปิด development server
npm run build    # ตรวจ TypeScript และสร้างไฟล์สำหรับ production ใน dist/
npm run preview  # เปิดดู build ที่สร้างแล้วในเครื่อง
```

## Storybook

```bash
npm run storybook       # เปิด Storybook ที่ http://localhost:6006
npm run build-storybook # สร้าง static build ใน storybook-static/
npm run test:storybook  # รัน play tests บน Chromium ผ่าน Vitest
```

เปิด Storybook อยู่เพื่อใช้ MCP endpoint ที่ `http://localhost:6006/mcp` และ docs toolset ใช้ component manifest ที่เปิดไว้ใน `.storybook/main.ts`

## โครงสร้างหลัก

- `src/App.tsx` — หน้า demo และตัวอย่าง Tailwind utility classes
- `src/index.css` — import Tailwind v4 และตั้งค่า base styles
- `src/design-tokens.css` — CSS custom properties ที่อ้างอิงจาก `DESIGN.md`
- `src/components/ui/button/` — `button.tsx`, `button.md` และ `button.json` ของ Button component
- `src/components/ui/button/button.stories.tsx` — Button stories และ interaction tests
- `.storybook/` — Storybook, MCP และ preview configuration
- `vite.config.ts` — ตั้งค่า React และ Tailwind Vite plugins
- `DESIGN.md` — design tokens เริ่มต้น
- `AGENTS.md` — กฎการทำงานใน repository
- `MEMORY.md` — context และ workflow สำหรับการดูแลโปรเจกต์

## ตัวแปรแวดล้อม

ไฟล์ `.env` และไฟล์ secret ถูกละเว้นจาก Git ให้เก็บเฉพาะชื่อตัวแปรตัวอย่างที่ไม่มีค่าลับไว้ใน `.env.example` และห้าม commit credentials หรือ tokens จริง
