import type { ComponentProps, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'amount' | 'default' | 'outline' | 'ghost'

type ButtonProps = Omit<ComponentProps<'button'>, 'children' | 'disabled'> & {
  /** รูปแบบปุ่มตาม Button component ใน MCP */
  variant?: ButtonVariant | null
  /** ข้อความหรือเนื้อหาที่แสดงในปุ่ม */
  label?: ReactNode
  /** ปิดการใช้งานและแสดงสถานะ disabled */
  isDisabled?: boolean
  /** รองรับการส่งเนื้อหาผ่าน JSX children */
  children?: ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--color-accent-brand)] text-[color:var(--color-background-canvas)] hover:bg-[var(--color-green-300)]',
  secondary: 'border border-[color:var(--color-border-default)] bg-[var(--color-surface-raised)] text-[color:var(--color-text-primary)] hover:bg-[var(--color-surface-panel)]',
  amount: 'bg-[var(--color-accent-brand)] text-[color:var(--color-background-canvas)] hover:bg-[var(--color-green-300)]',
  default: 'bg-[var(--color-accent-brand)] text-[color:var(--color-background-canvas)] hover:bg-[var(--color-green-300)]',
  outline: 'border border-[color:var(--color-border-control)] bg-transparent text-[color:var(--color-text-primary)] hover:bg-[var(--color-surface-raised)]',
  ghost: 'bg-transparent text-[color:var(--color-accent-link)] hover:bg-[var(--color-surface-raised)]',
}

export function Button({
  variant = 'default',
  label,
  isDisabled = false,
  children,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  const content = label ?? children
  const classes = [
    'inline-flex h-[36px] items-center justify-center rounded-[var(--radius-button)] px-[var(--spacing-small)] text-[length:var(--typography-label-14-size)] [font-weight:var(--typography-weight-semibold)] tracking-[var(--typography-button-letter-spacing)]',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-border-control)]',
    'disabled:pointer-events-none disabled:border-[color:var(--color-border-default)] disabled:bg-[var(--color-surface-panel)] disabled:text-[color:var(--color-text-disabled)]',
    variantClasses[variant ?? 'default'],
    className,
  ].filter(Boolean).join(' ')

  return (
    <button className={classes} type={type} disabled={isDisabled} {...props}>
      {content}
    </button>
  )
}
