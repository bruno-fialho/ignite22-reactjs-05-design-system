import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@ignite-ui-bruno/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
    label: 'Agendamento realizado',
    swipeDirection: 'down',
    duration: 99999999,
  },
  argTypes: {
    swipeDirection: {
      options: ['down', 'left', 'right', 'up'],
      control: {
        type: 'inline-radio',
      },
    },
    label: {
      control: {
        type: null,
      },
    },
    duration: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
