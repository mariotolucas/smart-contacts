import React from 'react'
import Button, { IconButton } from '../../components/Button'
import Input from '../../components/Inputs/Text'
import { Title, Header, FiltersWrapper } from './ContactsStyled'
import blocksIcon from '../../assets/img/organize-blocks.png'
import listIcon from '../../assets/img/organize-list.png'

const Contacts = () => {
  return (
    <div>
      <Header>
        <Title>My chatbots</Title>
        <FiltersWrapper>
          <Input placeholder='Search'/>
          <Button>Order by name</Button>
          <Button>Order by creation</Button>
          <IconButton icon={blocksIcon} ariaLabel='Organize using cars.'/>
          <IconButton icon={listIcon} ariaLabel='Organize using list.'/>
        </FiltersWrapper>
      </Header>
    </div>
  )
}

export default Contacts
