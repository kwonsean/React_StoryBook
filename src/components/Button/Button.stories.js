import React from 'react'
import Button from './Button'
import Center from '../Center/Center'

export default {
  title: 'Form/Button', // 사이드 메뉴 이름
  // 첫번째 /은 그룹핑, 두번째 / 는 폴더명이 된다.
  component: Button, // 연결할 컴포넌트 명 (import해야함)
  args: {
    children: 'Button', // 기본 args값 지정 가능
  },
  decorators: [(story) => <Center>{story()}</Center>], // 한번에 decorator로 story들을 묶을 수 있다.
}

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>

Primary.storyName = 'Primary Button' // 각 class별 이름 지정 가능

const Template = (args) => <Button {...args} />

export const AllButton = Template.bind({})
AllButton.agrs = {
  variant: {
    options: ['primary', 'secondary', 'success', 'danger'],
    control: { type: 'select' },
  },
}

export const PrimaryA = Template.bind({})
PrimaryA.args = {
  variant: 'primary',
  // children: 'Primary Args',
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
  ...PrimaryA.args, // 이전에 선언한 내용을 받아서 사용 가능하다
  children: 'Long Primary Args',
}

export const SecondayA = Template.bind({})
SecondayA.args = {
  variant: 'secondary',
  children: 'Secondary Args', // 여기서 따로 작성하면 덮어 씌워진다.
}

export const Log = () => {
  return (
    <Button variant='danger' onClick={() => console.log('DANGER!')}>
      Open the conosle!
    </Button>
  )
}
