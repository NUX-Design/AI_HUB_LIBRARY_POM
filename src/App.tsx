import { Button } from './components/ui/button/button'

const features = [
  { number: '01', title: 'รวดเร็วตั้งแต่เริ่ม', detail: 'Vite ช่วยให้เริ่มพัฒนาและเห็นผลจากการแก้โค้ดได้ทันที' },
  { number: '02', title: 'จัดสไตล์ด้วย utility', detail: 'ประกอบหน้าตาด้วย utility classes ที่ปรับต่อเป็นระบบได้' },
  { number: '03', title: 'พร้อมต่อยอด', detail: 'React และ TypeScript ช่วยให้แยก component และดูแลโค้ดได้ง่าย' },
]

function App() {
  return (
    <main className="min-h-screen bg-[var(--color-background-canvas)] px-[var(--spacing-inline)] py-[var(--spacing-card)] text-[color:var(--color-text-primary)] sm:px-[var(--spacing-reference-button-padding-x)] sm:py-[var(--spacing-page-gutter)]">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between gap-[var(--spacing-small)]">
          <a href="#home" className="flex items-center gap-[var(--spacing-small)] rounded-[var(--radius-pill)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-border-control)]">
            <span className="grid size-[var(--spacing-40)] place-items-center rounded-[var(--radius-card)] bg-[var(--color-accent-brand)] text-[length:var(--typography-subheading-size)] [font-weight:var(--typography-weight-bold)] text-[color:var(--color-background-canvas)]">A</span>
            <span className="[font-weight:var(--typography-weight-semibold)] tracking-[var(--typography-nav-heading-letter-spacing)]">Starter Kit</span>
          </a>
          <span className="rounded-[var(--radius-pill)] border border-[color:var(--color-border-accent-green-300)] bg-[var(--color-surface-brand-tint)] px-[var(--spacing-small)] py-[var(--spacing-4)] text-[length:var(--typography-label-12-size)] [font-weight:var(--typography-weight-semibold)] text-[color:var(--color-text-accent-green-800)]">พร้อมเริ่มพัฒนา</span>
        </header>

        <section id="home" className="mt-[var(--spacing-group)] rounded-[var(--radius-panel)] border border-[color:var(--color-border-default)] bg-[var(--color-surface-panel)] px-[var(--spacing-card)] py-[var(--spacing-section-compact)] sm:mt-[var(--spacing-section-compact)] sm:px-[var(--spacing-section-compact)] sm:py-[var(--spacing-section)]">
          <div className="max-w-2xl">
            <p className="mb-[var(--spacing-content)] inline-flex items-center gap-[var(--spacing-tight)] rounded-[var(--radius-pill)] border border-[color:var(--color-border-default)] bg-[var(--color-surface-raised)] px-[var(--spacing-small)] py-[var(--spacing-8)] text-[length:var(--typography-chapter-eyebrow-size)] [font-weight:var(--typography-weight-semibold)] tracking-[var(--typography-chapter-eyebrow-letter-spacing)] text-[color:var(--color-text-accent-green-300)]">
              <span aria-hidden="true" className="size-[var(--spacing-8)] rounded-[var(--radius-pill)] bg-[var(--color-accent-brand)]" /> React · TypeScript · Vite · Tailwind CSS v4
            </p>
            <h1 className="text-[length:var(--typography-feature-heading-size)] [font-weight:var(--typography-weight-bold)] tracking-[var(--typography-heading-letter-spacing)] text-[color:var(--color-text-primary)] sm:text-[length:var(--typography-heading-size)]">เริ่มสร้างไอเดีย<br className="hidden sm:block" /> ให้เป็นจริง</h1>
            <p className="mt-[var(--spacing-content)] max-w-xl text-[length:var(--typography-body-size)] text-[color:var(--color-text-secondary)] sm:text-[length:var(--typography-section-description-size)]">
              โครงโปรเจกต์พร้อมใช้งาน พร้อมตัวอย่าง Tailwind utility classes ที่ปรับต่อเป็นหน้าผลิตภัณฑ์ของคุณได้
            </p>
            <div className="mt-[var(--spacing-group)] flex flex-col gap-[var(--spacing-small)] sm:flex-row">
              <a href="#features" className="inline-flex items-center justify-center rounded-[var(--radius-button)] bg-[var(--color-accent-brand)] px-[var(--spacing-reference-button-padding-x)] py-[var(--spacing-reference-button-padding-y)] [font-weight:var(--typography-weight-semibold)] text-[color:var(--color-background-canvas)] hover:bg-[var(--color-green-300)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-border-control)]">ดูตัวอย่าง utility</a>
              <a href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-[var(--radius-button)] border border-[color:var(--color-border-default)] px-[var(--spacing-reference-button-padding-x)] py-[var(--spacing-reference-button-padding-y)] [font-weight:var(--typography-weight-semibold)] text-[color:var(--color-text-primary)] hover:bg-[var(--color-surface-raised)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-border-control)]">อ่านเอกสาร Tailwind <span aria-hidden="true" className="ml-[var(--spacing-tight)]">↗</span></a>
            </div>
          </div>
        </section>

        <section id="features" aria-labelledby="features-title" className="py-[var(--spacing-section-compact)] sm:py-[var(--spacing-section)]">
          <div className="mb-[var(--spacing-group)] flex flex-col gap-[var(--spacing-tight)] sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[length:var(--typography-chapter-eyebrow-size)] [font-weight:var(--typography-weight-semibold)] tracking-[var(--typography-chapter-eyebrow-letter-spacing)] text-[color:var(--color-accent-link)]">สิ่งที่ได้</p>
              <h2 id="features-title" className="mt-[var(--spacing-8)] text-[length:var(--typography-reference-subheading-size)] [font-weight:var(--typography-weight-bold)] tracking-[var(--typography-heading-small-letter-spacing)]">พื้นฐานที่พร้อมต่อยอด</h2>
            </div>
            <p className="max-w-md text-[length:var(--typography-body-size)] text-[color:var(--color-text-secondary)]">ตัวอย่างด้านล่างใช้ utility สำหรับ layout, spacing, สี, typography, responsive และ interaction</p>
          </div>
          <div className="grid gap-[var(--spacing-inline)] md:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.number} className="rounded-[var(--radius-card)] border border-[color:var(--color-border-default)] bg-[var(--color-surface-panel)] p-[var(--spacing-card)]">
                <span className="text-[length:var(--typography-label-14-size)] [font-weight:var(--typography-weight-bold)] tabular-nums text-[color:var(--color-text-accent-green-500)]">{feature.number}</span>
                <h3 className="mt-[var(--spacing-inline)] text-[length:var(--typography-card-heading-size)] [font-weight:var(--typography-weight-semibold)]">{feature.title}</h3>
                <p className="mt-[var(--spacing-tight)] text-[length:var(--typography-body-size)] text-[color:var(--color-text-secondary)]">{feature.detail}</p>
              </article>
            ))}
          </div>
          <div className="mt-[var(--spacing-group)] rounded-[var(--radius-panel)] border border-[color:var(--color-border-default)] bg-[var(--color-surface-raised)] p-[var(--spacing-card)]">
            <h3 className="text-[length:var(--typography-subheading-size)] [font-weight:var(--typography-weight-semibold)]">Button component</h3>
            <div className="mt-[var(--spacing-inline)] flex flex-wrap gap-[var(--spacing-small)]">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-[var(--spacing-tight)] border-t border-[color:var(--color-border-default)] py-[var(--spacing-card)] text-[length:var(--typography-reference-caption-size)] text-[color:var(--color-text-secondary)] sm:flex-row sm:items-center sm:justify-between">
          <span>Starter Kit · React + TypeScript + Vite</span>
          <span>ออกแบบให้ใช้งานได้ทั้งจอเล็กและจอใหญ่</span>
        </footer>
      </div>
    </main>
  )
}

export default App
