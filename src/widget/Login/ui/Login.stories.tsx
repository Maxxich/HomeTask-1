import type { Meta, StoryObj } from '@storybook/react'
import { Login } from './Login'

const meta = {
    title: 'widget/Login',
    component: Login,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Login>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    
}

export const Default: Story = {
    args
}