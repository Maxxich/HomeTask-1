import type { Meta, StoryObj } from '@storybook/react'
import { GoogleLogin } from './GoogleLogin'

const meta = {
    title: 'feature/GoogleLogin',
    component: GoogleLogin,
    parameters: {
        layout: 'centered',
    },
    render: (args) => <div style={{ width: 272 }}>
        <GoogleLogin {...args}/>
    </div>,
    tags: ['autodocs'],
} satisfies Meta<typeof GoogleLogin>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    
}

export const Default: Story = {
    args
}