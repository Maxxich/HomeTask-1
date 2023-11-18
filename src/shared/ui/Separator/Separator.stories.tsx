
import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from './Separator'

const meta = {
    title: 'shared/Separator',
    component: Separator,
    parameters: {
        layout: 'centered',
    },
    render: (args) => <div style={{ width: 200 }}>
        <Separator {...args}/>
    </div>,
    tags: ['autodocs'],
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    
}

export const Default: Story = {
    args
}