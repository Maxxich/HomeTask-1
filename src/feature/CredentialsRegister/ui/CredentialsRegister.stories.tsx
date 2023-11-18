import type { Meta, StoryObj } from '@storybook/react'
import { CredentialsRegister } from './CredentialsRegister'

const meta = {
    title: 'feature/CredentialsRegister',
    component: CredentialsRegister,
    parameters: {
        layout: 'centered',
    },
    render: (args) => <div style={{ width: 272 }}>
        <CredentialsRegister {...args}/>
    </div>,
    tags: ['autodocs'],
} satisfies Meta<typeof CredentialsRegister>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    
}

export const Default: Story = {
    args
}