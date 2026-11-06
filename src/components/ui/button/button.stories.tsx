import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn } from 'storybook/test'
import { Button } from './button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs', 'ai-generated'],
  args: {
    label: 'Button',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'amount', 'default', 'outline', 'ghost'],
    },
    isDisabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'บันทึก',
    onClick: fn(),
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'บันทึก' }))
    await expect(Primary.args?.onClick).toHaveBeenCalledOnce()
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'ยกเลิก',
  },
}

export const Amount: Story = {
  args: {
    variant: 'amount',
    label: 'เพิ่มจำนวน',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'ดูรายละเอียด',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'ข้าม',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    label: 'ยังบันทึกไม่ได้',
    isDisabled: true,
  },
}

export const CssCheck: Story = {
  args: {
    variant: 'primary',
    label: 'ตรวจสี brand token',
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'ตรวจสี brand token' })
    await expect(getComputedStyle(button).backgroundColor).toBe('rgb(10, 228, 72)')
  },
}
