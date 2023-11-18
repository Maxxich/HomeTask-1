import type { Meta, StoryObj } from '@storybook/react'
import { QRLogin } from './QRLogin'

const meta = {
    title: 'feature/QRLogin',
    component: QRLogin,
    parameters: {
        layout: 'centered',
    },
    render: (args) => <div style={{ width: 272 }}>
        <QRLogin {...args}/>
    </div>,
    tags: ['autodocs'],
} satisfies Meta<typeof QRLogin>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    
}

export const Default: Story = {
    args
}