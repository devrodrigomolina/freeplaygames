import React from 'react'
import { InputContainer } from './style'
import { BiSearch } from 'react-icons/bi'

const Input = () => {
  return (
    <InputContainer>
      <BiSearch className='icon' />
      <input type='text' placeholder='Digite algo para pesquisar'/>
    </InputContainer>
  )
}

export default Input