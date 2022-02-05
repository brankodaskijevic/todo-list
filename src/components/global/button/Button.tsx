import { styled } from '@stitches/react'

const Button = styled('button', {
  backgroundColor: 'Gainsboro',
  borderRadius: '9999px',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '14px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'LightGray'
  },
  variants: {
    color: {
      violet: { backgroundColor: 'blueviolet' },
      gray: { backgroundColor: 'gainsboro' },
    }
  }
})

export default Button
