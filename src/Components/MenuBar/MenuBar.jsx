import React from 'react'
import { MenuBarContainer, ContainerPages, PagesMenuBar } from './style'
import { FaHome, FaGamepad } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
const MenuBar = () => {
  return (
    <MenuBarContainer>
      <ContainerPages>
        <NavLink exact='true' className='link_menu_bar' to='/'>
          <PagesMenuBar>
            <FaHome className='icon' />
          </PagesMenuBar>
        </NavLink>
        <NavLink className='link_menu_bar' to='asdas'>
          <PagesMenuBar>
            <FaGamepad className='icon' />
          </PagesMenuBar>
        </NavLink>
        <NavLink className='link_menu_bar' to='asddwqw'>
          <PagesMenuBar>
            <FaGamepad className='icon' />
          </PagesMenuBar>
        </NavLink>
      </ContainerPages>
    </MenuBarContainer>
  )
}

export default MenuBar