import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps, Button } from '@ignite-ui-bruno/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    description: 'This is the Tooltip element',
    children: <Button>Hover me!</Button>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
