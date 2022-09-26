import React from 'react'
import { InputContainer } from './style'
import { BiSearch } from 'react-icons/bi'

const Input = () => {
  return (
    <InputContainer>
      <BiSearch />
      <input type='text' />
    </InputContainer>
  )
}

export default Input