import { ComponentProps } from 'react'

import {
  TooltipContent,
  TooltipArrow,
  TooltipProvider,
  TooltipRoot,
  TooltipPortal,
  TooltipTrigger,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipProvider> {
  description: string
  defaultOpen?: boolean
}

export function Tooltip(props: TooltipProps) {
  const {
    children,
    description,
    delayDuration,
    skipDelayDuration,
    disableHoverableContent,
    defaultOpen = false,
  } = props

  return (
    <TooltipProvider
      delayDuration={delayDuration}
      skipDelayDuration={skipDelayDuration}
      disableHoverableContent={disableHoverableContent}
    >
      <TooltipRoot defaultOpen={defaultOpen}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent sideOffset={5}>
            {description}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
