import { type Meta, type StoryObj } from '@storybook/react'

import { Button } from 'shared/ui/button'

type Story = StoryObj<typeof Button>

const meta: Meta<typeof Button> = {
  title: 'Components/Forms/Button',
  tags: ['autodocs'],
  component: Button,
}

export default meta

export const Usage: Story = {
  render: () => <Button />,
}
