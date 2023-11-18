import type { Meta, StoryObj } from '@storybook/react'
import Icon from '@/shared/assets/svg/GitHubNotFilled.svg'
import { Input } from './Input'

const meta = {
    title: 'shared/Input',
    component: Input,
    argTypes: { onClick: { action: 'clicked' } },
    render: (args) => <div style={{ width: 300 }}>
        <Input {...args}/>
    </div>,
    tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    label: 'Name',
    placeholder: 'Type your name...',
}

export const Default: Story = {
    args
}

export const Error: Story = {
    args: {
        ...args,
        isError: true
    }
}


export const WithAddonLeft: Story = {
    args: {
        ...args,
        addonLeft: <Icon/>,
    }
}

export const WithAddonLeftAndError: Story = {
    args: {
        ...args,
        addonLeft: <Icon/>,
        isError: true
    }
}


export const Password: Story = {
    args: {
        ...args,
        label: 'Password',
        placeholder: 'Type password...',
        type: 'password'
    }
}

export const PasswordWithError: Story = {
    args: {
        ...args,
        label: 'Password',
        placeholder: 'Type password...',
        type: 'password',
        isError: true
    }
}