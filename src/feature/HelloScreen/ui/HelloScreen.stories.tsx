import type { Meta, StoryObj } from '@storybook/react'
import { HelloScreen } from './HelloScreen'

const meta = {
    title: 'feature/HelloScreen',
    component: HelloScreen,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof HelloScreen>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    
}

export const Default: Story = {
    args
}