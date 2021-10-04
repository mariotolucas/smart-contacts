import React, { useState } from 'react'
import Button, { IconButton } from '../../components/Button'
import Input from '../../components/Inputs/Text'
import { Title, Header, FiltersWrapper, Main, SubHeading, CardsWrapper, Divider, ViewTypeWrapper, AddingButton } from './ContactsStyled'
import blocksIcon from '../../assets/img/organize-blocks.png'
import listIcon from '../../assets/img/organize-list.png'
import ContactCard from '../../components/ContactCard'
import contactsData from '../../assets/data/data.json'
import { getDateString, removeFromArray } from '../../helpers'
import ContactListItem from '../../components/ContactListItem'
import { useHistory } from 'react-router-dom'

const ORDER_BY = {
  NAME: 'NAME',
  DATE: 'DATE'
}

const Contacts = () => {
  const history = useHistory()
  const [favoriteContacts, setFavoriteContacts] = useState([])
  const [filter, setFilter] = useState('')
  const [orderBy, setOrderBy] = useState(null)
  const [isCardView, setIsCardView] = useState(true)

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
    const Component = isCardView ? ContactCard : ContactListItem

    const contactsToDisplay = getContactsToDisplay()

    const contactsList = contactsToDisplay.filter(contact => {
      const isOnFavoriteList = favoriteContacts.includes(contact.shortName)
      return isFavorite ? isOnFavoriteList : !isOnFavoriteList
    })

    return contactsList.map((contact, i) => {
      const { name, image, template, shortName, created } = contact

      const date = getDateString(created)
      return (
        <Component
          isFavorite={isFavorite}
          key={i}
          image={image}
          name={name}
          template={template}
          date={date}
          handleFavoriteClick={(e) => { handleFavoriteClick(e, shortName) }}
          onClick={() => { sendToContactPage(shortName) }}
        />
      )
    })
  }

  const handleFavoriteClick = (event, shortName) => {
    // it is necessary to stop propagation to not send to contact details page
    event.stopPropagation()
    toggleFavorite(shortName)
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

  const sendToContactPage = (contactShortName) => {
    history.push('/contacts/' + contactShortName)
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
          <ViewTypeWrapper>
            <IconButton
              icon={blocksIcon} ariaLabel='Organize using cards.'
              onClick={() => { setIsCardView(true) }}
            />
            <IconButton
              icon={listIcon}
              ariaLabel='Organize using list.'
              onClick={() => { setIsCardView(false) }}
            />
          </ViewTypeWrapper>
        </FiltersWrapper>
      </Header>
      <Main>
        <SubHeading>Favorities</SubHeading>
        <CardsWrapper isCardView={isCardView}>
          {getCards(true)}
        </CardsWrapper>
        <Divider/>
        <CardsWrapper isCardView={isCardView}>
          {getCards(false)}
        </CardsWrapper>
      </Main>

      <AddingButton>+</AddingButton>
    </div>
  )
}

export default Contacts
