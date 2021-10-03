import React, { useState } from 'react'
import Button, { IconButton } from '../../components/Button'
import Input from '../../components/Inputs/Text'
import { Title, Header, FiltersWrapper, Main, SubHeading, CardsWrapper, Divider } from './ContactsStyled'
import blocksIcon from '../../assets/img/organize-blocks.png'
import listIcon from '../../assets/img/organize-list.png'
import ContactCard from '../../components/ContactCard'
import contactsData from '../../assets/data/data.json'
import { removeFromArray } from '../../helpers'

const Contacts = () => {
  const [favoriteContacts, setFavoriteContacts] = useState([])

  const toggleFavorite = (contactShortName) => {
    const newFavoriteContacts = favoriteContacts.includes(contactShortName)
      ? removeFromArray([...favoriteContacts], contactShortName)
      : [...favoriteContacts, contactShortName]

    setFavoriteContacts(newFavoriteContacts)
  }

  const getCards = (isFavorite) => {
    const contactsList = contactsData.filter(contact => {
      const isOnFavoriteList = favoriteContacts.includes(contact.shortName)
      return isFavorite ? isOnFavoriteList : !isOnFavoriteList
    })

    return contactsList.map((contact, i) => {
      const { name, image, template, shortName } = contact
      return (
        <ContactCard
          isFavorite={isFavorite}
          key={i}
          image={image}
          name={name}
          template={template}
          handleFavoriteClick={() => { toggleFavorite(shortName) }}
        />
      )
    })
  }

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
      <Main>
        <SubHeading>Favorities</SubHeading>
        <CardsWrapper>
          {getCards(true)}
        </CardsWrapper>
        <Divider/>
        <CardsWrapper>
          {getCards(false)}
        </CardsWrapper>
      </Main>
    </div>
  )
}

export default Contacts
