import { themes } from '@storybook/theming';
import type { Preview } from "@storybook/react"
import { StyleDecorator } from '../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '../src/global/providers/ThemeProvider/ThemeProvider'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
    layout: 'centered',
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.VIOLET)
  ]
};

export default preview;
