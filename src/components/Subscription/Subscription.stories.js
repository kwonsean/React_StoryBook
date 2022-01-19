import React from 'react'
import { Primary } from '../Button/Button.stories'
import { Medium } from '../Input/Input.stories'

export default {
  title: 'form/Subscription',
}

// 만들어둔 컴포넌트 조합 가능 (stories에서 가져온다)
// props 신경 안써두 됨 + 변경시 자동 적용 됨
export const PrimarySubscription = () => {
  return (
    <>
      <Medium />
      <Primary />
    </>
  )
}
