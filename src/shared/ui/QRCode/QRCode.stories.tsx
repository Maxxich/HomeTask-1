import type { Meta, StoryObj } from '@storybook/react'
import QR from '@/shared/assets/svg/QR.svg'
import { QRCode } from './QRCode'

const meta = {
    title: 'shared/QRCode',
    component: QRCode,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof QRCode>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    QRCodeElement: <QR/>
}

export const Default: Story = {
    args
}