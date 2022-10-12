import React, { useContext, useEffect, useState } from 'react'
import { GamesContext } from '../../../context/GamesContext'
import useFetch from '../../Hooks/useFetch'
import IconsPlataform from '../../IconsPlataform/IconsPlataform'
import { ContainerCardsReleases, ReleasesCards, ContainerIconsReleases, SelectQtdCards } from './styles'
import { games } from '../../../api/api'
import Input from '../../Input/Input'

const CardsReleases = () => {
  const { data, setSort } = useContext(GamesContext)
  const { openDetailGame } = useFetch(`/game?id=`, games)
  const [qtdShow, setQtdShow] = useState(25)

  const limitGamesShow = data.slice(0,qtdShow)

  useEffect(() => {
    setSort('sort-by=release-date')
  }, [])
  
  return (
    <ContainerCardsReleases>
      <SelectQtdCards>
        <p>Mostrar: </p>
        <select value={qtdShow} onChange={({ target }) => setQtdShow(target.value)}>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
        </select>
      </SelectQtdCards>
      {limitGamesShow.map(releases =>  (
        <ReleasesCards onClick={() => openDetailGame(releases.id)}>
            <img src={releases.thumbnail} alt="" />
            <ContainerIconsReleases>
              <IconsPlataform genre={releases.genre} plataform={releases.platform} />
            </ContainerIconsReleases>
        </ReleasesCards>
      ))}
    </ContainerCardsReleases>
  )
}

export default CardsReleases