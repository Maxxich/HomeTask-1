import type { Meta, StoryObj } from '@storybook/react'
import { TypedText } from './TypedText'

const meta = {
    title: 'shared/TypedText',
    component: TypedText,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TypedText>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    texts: [
        'Добро пожаловать!   ',
        'Хорошего дня!   '
    ]
}

export const Default: Story = {
    args
}