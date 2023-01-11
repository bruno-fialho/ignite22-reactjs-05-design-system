import * as Toast from '@radix-ui/react-toast'
import { styled } from '../../styles'

export const ToastProvider = styled(Toast.Provider, {})

export const ToastRoot = styled(Toast.Root, {
  boxSizing: 'border-box',
  width: '22.5rem',
  height: 'auto',
  padding: '$3 $5',
  backgroundColor: '$gray800',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '$1',

  position: 'relative',
})

export const ToastTitle = styled(Toast.Title, {
  fontSize: '$xl',
  fontWeight: '$bold',
  fontFamily: '$default',
  lineHeight: '$base',
  color: '$white',
})

export const ToastDescription = styled(Toast.Description, {
  fontSize: '$sm',
  fontWeight: '$regular',
  fontFamily: '$default',
  lineHeight: '$base',
  color: '$gray200',
})

export const ToastClose = styled(Toast.Close, {
  color: '$gray200',
  backgroundColor: 'transparent',
  border: 'none',

  position: 'absolute',
  top: '$4',
  right: '$4',

  cursor: 'pointer',
})

export const ToastViewport = styled(Toast.Viewport, {})
