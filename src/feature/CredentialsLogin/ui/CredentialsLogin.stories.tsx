import type { Meta, StoryObj } from '@storybook/react'
import { CredentialsLogin } from './CredentialsLogin'

const meta = {
    title: 'feature/CredentialsLogin',
    component: CredentialsLogin,
    parameters: {
        layout: 'centered',
    },
    render: (args) => <div style={{ width: 272 }}>
        <CredentialsLogin {...args}/>
    </div>,
    tags: ['autodocs'],
} satisfies Meta<typeof CredentialsLogin>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    
}

export const Default: Story = {
    args
}