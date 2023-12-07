import type { Preview } from '@storybook/react'
import 'tailwindcss/tailwind.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Intro',
          'Components',
          ['Forms', 'Data Display', 'Feedback', 'Overlay'],
        ],
      },
    },
    layout: 'centered',
  },
}

export default preview
