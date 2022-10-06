import React from 'react'
import { FiLoader } from 'react-icons/fi'
import { ContainerLoader } from './styles'

const Loading = () => {
  return (
    <ContainerLoader>
      <FiLoader className='iconLoading' />
    </ContainerLoader>
  )
  
}

export default Loading