import React from 'react'
import styled from 'styled-components'

// Center 컴포넌트가 decorator역할을 한다.
// 이 컴포넌트를 stories 파일로 가져가 사용할 컴포넌트를 감싸서 사용한다 or default에 decorators를 지정한다
function Center(props) {
  return <StyledDiv className='center'>{props.children}</StyledDiv>
}

export default Center

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`
