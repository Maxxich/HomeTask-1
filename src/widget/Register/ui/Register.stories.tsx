import type { Meta, StoryObj } from '@storybook/react'
import { Register } from './Register'

const meta = {
    title: 'widget/Register',
    component: Register,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Register>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    
}

export const Default: Story = {
    args
}