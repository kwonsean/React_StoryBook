import React from 'react'
import styled from 'styled-components'

function Input(props) {
  const { variant = 'medium', ...rest } = props

  return <StyledInput className={`input ${variant}`} {...rest}></StyledInput>
}

export default Input

const StyledInput = styled.input`
  width: 150px;
  font-size: 20px;
  margin-right: 20px;
  &.large {
    width: 200px;
    font-size: 24px;
  }
  &.medium {
    width: 150px;
    font-size: 20px;
  }
  &.small {
    width: 100px;
    font-size: 16px;
  }
`
