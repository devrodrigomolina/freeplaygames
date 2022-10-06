import React from 'react'
import { ContainerIcons, IconGenre, IconPlataform } from './styles'
const IconsPlataform = ({ genre, plataform }) => {
  return (
    <ContainerIcons>
      <IconGenre>{genre}</IconGenre>
      <IconPlataform>{plataform}</IconPlataform>
  </ContainerIcons>
  )
}

export default IconsPlataform