import React from 'react'
import Input from './Input'

export default {
  title: 'Form/Input',
  component: Input,
  argTypes: {
    variant: { control: 'text' },
    placeholder: { control: 'text' },
    onClick: { action: 'clicked' },
  },
}

const Template = (args) => <Input {...args} />

export const Large = Template.bind({})
Large.args = {
  variant: 'large',
  placeholder: 'Large',
}
export const Medium = Template.bind({})
Medium.args = { variant: 'medium', placeholder: 'Medium' }
export const Small = () => <Input variant='small' placeholder='Small'></Input>
