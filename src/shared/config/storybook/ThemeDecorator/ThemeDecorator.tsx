import { Decorator } from '@storybook/react'
import ThemeProvider, { Theme } from '@/global/providers/ThemeProvider/ThemeProvider'


export const ThemeDecorator = (theme: Theme = Theme.VIOLET) => {
    
    const decorator: Decorator = (story) => (
        <ThemeProvider>
            {story()}
        </ThemeProvider>
    )

    return decorator
}
