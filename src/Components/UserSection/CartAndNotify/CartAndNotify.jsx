import React from 'react'
import { UserSection, UserCart, IconNotifyContainer } from './style'
import { IoMdNotifications } from 'react-icons/io'
import { FaShoppingCart } from 'react-icons/fa'

const User = () => {
  return (
    <UserSection>
      <UserCart>
        <FaShoppingCart className='icon'/>
        <p>R$ 100,00</p>
      </UserCart>

      <IconNotifyContainer>
        <IoMdNotifications className='icon'/>
      </IconNotifyContainer>
    </UserSection>
  )
}

export default User