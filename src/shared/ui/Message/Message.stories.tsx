import type { Meta, StoryObj } from '@storybook/react'
import { Message } from './Message'

const meta = {
    title: 'shared/Message',
    component: Message,
    parameters: {
        layout: 'centered',
    },
    render: (args) => <div style={{ width: 400 }}>
        <Message {...args}/>
    </div>,
    tags: ['autodocs'],
} satisfies Meta<typeof Message>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    children: 'Error',
}

export const FitContent: Story = {
    args
}

export const Fullwidth: Story = {
    args: {
        ...args,
        width: 'fullwidth'
    }
}

export const Danger: Story = {
    args: {
        ...args,
        variant: 'danger'
    }
}