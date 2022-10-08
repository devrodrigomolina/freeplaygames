import React, { useContext } from 'react'
import { InputContainer } from './style'
import { BiSearch } from 'react-icons/bi'
import { GamesContext } from '../../context/GamesContext'

const Input = () => {
  
  const { search, setSearch } = useContext(GamesContext)

  return (
    <InputContainer>
      <BiSearch className='icon' />
      <input type='text' value={search} onChange={({ target }) => setSearch(target.value)} placeholder='Digite algo para pesquisar'/>
    </InputContainer>
  )
}

export default Input