import type { Meta, StoryObj } from '@storybook/react'
import { GitHubLogin } from './GitHubLogin'

const meta = {
    title: 'feature/GitHubLogin',
    component: GitHubLogin,
    parameters: {
        layout: 'centered',
    },
    render: (args) => <div style={{ width: 272 }}>
        <GitHubLogin {...args}/>
    </div>,
    tags: ['autodocs'],
} satisfies Meta<typeof GitHubLogin>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    
}

export const Default: Story = {
    args
}