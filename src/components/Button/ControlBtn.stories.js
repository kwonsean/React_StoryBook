import React from 'react'
import Button from './Button'

export default {
  title: 'test/Control Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'success', 'danger'],
      control: { type: 'inline-radio' },
    },
  },
}

const Template = (args) => <Button {...args} />

// export const ButtonType = Template.bind({})
// ButtonType.args = {
//   variant: 'primary',
//   children: 'HI',
// }

export const ButtonType = {
  args: {
    variant: 'primary',
    children: 'HI',
  },
}
