import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipProvider = styled(Tooltip.Provider, {})
export const TooltipRoot = styled(Tooltip.Root, {})
export const TooltipTrigger = styled(Tooltip.Trigger, {})
export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  padding: '$3 $4',
  color: '$gray100',
  backgroundColor: '$gray900',
  borderRadius: '$sm',

  fontFamily: '$tooltip',
  fontSize: '$sm',
  fontWeight: '$medium',
  lineHeight: '$short',
  letterSpacing: '-0.09px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$2',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  width: '$4',
  height: '$2',
  color: '$gray900',
})
