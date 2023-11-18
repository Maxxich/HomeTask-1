import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import IconGitHub from '../../assets/svg/GitHub.svg'

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    render: (args) => <div style={{ width: 200 }}>
        <Button {...args}/>
    </div>,
    argTypes: { onClick: { action: 'clicked' } },
    tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    children: 'Click me!',
}

export const Colored: Story = {
    args
}

export const Dark: Story = {
    args: {
        ...args,
        variant: 'dark'
    }
}

export const DarkWithAddon: Story = {
    args: {
        ...args,
        variant: 'dark',
        addonLeft: <IconGitHub/>
    }
}

export const ColoredDisabled: Story = {
    args: {
        ...args,
        disabled: true
    }
}

export const DarkDisabled: Story = {
    args: {
        ...args,
        variant: 'dark',
        disabled: true
    }
}

export const DarkWithAddonDisabled: Story = {
    args: {
        ...args,
        variant: 'dark',
        addonLeft: <IconGitHub/>,
        disabled: true
    }
}