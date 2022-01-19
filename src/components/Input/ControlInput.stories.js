import React from 'react'
import Input from './Input'

export default {
  title: 'test/Control Input',
  component: Input,
  argTypes: {
    variant: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    placeholder: { type: 'number' },
  },
}

export const InputType = {
  args: {
    variant: 'medium',
    placeholder: 'HI',
  },
  docs: {
    description: {
      component: 'Some component _markdown_',
    },
  },
}
