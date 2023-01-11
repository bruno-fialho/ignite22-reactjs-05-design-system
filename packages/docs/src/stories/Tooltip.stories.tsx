import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps, Button } from '@ignite-ui-bruno/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    description: '21 de Outubro - Indisponível',
    children: <Button>Button</Button>,
    defaultOpen: true,
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
