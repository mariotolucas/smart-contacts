import React, { useState } from 'react'
import Button, { IconButton } from '../../components/Button'
import Input from '../../components/Inputs/Text'
import { Title, Header, FiltersWrapper, Main, SubHeading, CardsWrapper, Divider } from './ContactsStyled'
import blocksIcon from '../../assets/img/organize-blocks.png'
import listIcon from '../../assets/img/organize-list.png'
import ContactCard from '../../components/ContactCard'
import contactsData from '../../assets/data/data.json'
import { removeFromArray } from '../../helpers'

const ORDER_BY = {
  NAME: 'NAME',
  DATE: 'DATE'
}

const Contacts = () => {
  const [favoriteContacts, setFavoriteContacts] = useState([])
  const [filter, setFilter] = useState('')
  const [orderBy, setOrderBy] = useState(null)

  const toggleFavorite = (contactShortName) => {
    const newFavoriteContacts = favoriteContacts.includes(contactShortName)
      ? removeFromArray([...favoriteContacts], contactShortName)
      : [...favoriteContacts, contactShortName]

    /* In a regular scenario the ID should be used,
      but in this case it was used the shortname
    */
    setFavoriteContacts(newFavoriteContacts)
  }

  const getCards = (isFavorite) => {
    const contactsToDisplay = getContactsToDisplay()

    const contactsList = contactsToDisplay.filter(contact => {
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

  const getContactsFiltered = () => {
    return contactsData.filter(contact => {
      const contactNameParsed = contact.name.trim().toLowerCase()
      const filterParsed = filter.trim().toLowerCase()
      return contactNameParsed.includes(filterParsed)
    })
  }

  const orderByName = (contacts) => {
    return contacts.sort((a, b) => a.name.localeCompare(b.name))
  }

  const orderByDate = (contacts) => {
    return contacts.sort(function (a, b) {
      const dateA = new Date(a.created)
      const dateB = new Date(b.created)
      return dateA - dateB
    })
  }

  const getContactsToDisplay = () => {
    const contactsFilterted = getContactsFiltered()
    let contactsToDisplay
    switch (orderBy) {
      case ORDER_BY.NAME:
        contactsToDisplay = orderByName(contactsFilterted)
        break

      case ORDER_BY.DATE:
        contactsToDisplay = orderByDate(contactsFilterted)
        break

      default:
        contactsToDisplay = contactsFilterted
        break
    }

    return contactsToDisplay
  }

  return (
    <div>
      <Header>
        <Title>My chatbots</Title>
        <FiltersWrapper>
          <Input
            placeholder='Search'
            value={filter}
            onChange={(e) => { setFilter(e.target.value) }}
          />
          <Button onClick={() => { setOrderBy(ORDER_BY.NAME) }}>
            Order by name
          </Button>
          <Button onClick={() => { setOrderBy(ORDER_BY.DATE) }}>
            Order by creation
          </Button>
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
