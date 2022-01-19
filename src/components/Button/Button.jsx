import React from 'react'
import styled from 'styled-components'

function Button(props) {
  const { variant = 'primary', children, ...rest } = props
  return (
    <DefaultButton className={`button ${variant}`} {...rest}>
      {children}
    </DefaultButton>
  )
}

export default Button

const DefaultButton = styled.button`
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  &.primary {
    background-color: #008cba;
  }
  &.secondary {
    background-color: #e7e7e7;
    color: black;
  }
  &.success {
    background-color: #4caf50;
  }
  &.danger {
    background-color: #f44336;
  }
`
