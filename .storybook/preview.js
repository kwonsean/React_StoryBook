// 글로벌로 decorators를 지정할 수 도 있다. 2~5 코드 모두 작성
import React from 'react'
import { addDecorator } from '@storybook/react'
import Center from '../src/components/Center/Center'
addDecorator((story) => <Center>{story()}</Center>)
// 이런 형식으로 다른 스타일 라이브러리를 이용하여 decorator를 사용할 수 있다.

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  // 메뉴 abc순으로 정렬
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
