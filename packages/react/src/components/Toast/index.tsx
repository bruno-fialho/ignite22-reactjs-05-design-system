import { ComponentProps } from 'react'
import { X } from 'phosphor-react'

import {
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastProvider> {
  title: string
  description: string
}

export function Toast(props: ToastProps) {
  const {
    title,
    description,
    duration,
    label,
    swipeDirection,
    swipeThreshold,
  } = props

  return (
    <ToastProvider
      duration={duration}
      label={label}
      swipeDirection={swipeDirection}
      swipeThreshold={swipeThreshold}
    >
      <ToastRoot>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastClose aria-label="Close">
          <X size={20} />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
