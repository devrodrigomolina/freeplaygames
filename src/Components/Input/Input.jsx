import React, { useState } from 'react'
import { InputContainer } from './style'
import { BiSearch } from 'react-icons/bi'

const Input = () => {
  const [search, setSearch] = useState('')

  return (
    <InputContainer>
      <BiSearch className='icon' />
      <input type='text' value={search} onChange={({ target }) => setSearch(target.value)} placeholder='Digite algo para pesquisar'/>
    </InputContainer>
  )
}

export default Input