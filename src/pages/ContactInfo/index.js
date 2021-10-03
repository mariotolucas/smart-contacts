import React from 'react'
import PropTypes from 'prop-types'
import contactsData from '../../assets/data/data.json'
import blipIcon from '../../assets/img/blip.png'
import { getDateString } from '../../helpers'
import { Divider } from '../Contacts/ContactsStyled'
import {
  Icon,
  IconWrapper,
  Header,
  Name,
  Id,
  DataWrapper,
  CreationDate,
  Main,
  CardsWrapper,
  UpdateAccountWrapper,
  InfoCard,
  SpanInfo,
  InfoWrapper
} from './ContactInfoStyled'

const RoundedIcon = ({ icon, color }) => {
  return (
    <IconWrapper color={color}>
      <Icon src={icon}/>
    </IconWrapper>
  )
}

RoundedIcon.propTypes = {
  icon: PropTypes.object,
  color: PropTypes.string
}

const ContactInfo = (props) => {
  const { shortName } = props.match.params
  const contactData = contactsData.find(contact => contact.shortName === shortName)

  const { name, created, culture } = contactData
  const date = getDateString(created)
  return (
    <>
      <Header>
        <RoundedIcon
          icon={blipIcon}
          color='#dee8ec'
        />
        <DataWrapper>
          <Name> {name}  </Name>
          <Id>Id: {shortName}</Id>
        </DataWrapper>
        <CreationDate>{date ? 'Created At ' + date : 'Invalid Date'}</CreationDate>
      </Header>
      <Divider/>
      <Main>
        <CardsWrapper>
          <InfoCard>
            <InfoWrapper>
              <span>Region and idiom</span>
              <SpanInfo>{culture}</SpanInfo>
            </InfoWrapper>
            <span>Timezone</span>
            <SpanInfo>(UTC - 03:00) Brasília</SpanInfo>
          </InfoCard>
          <InfoCard gridSpan='7'></InfoCard>
          <InfoCard gridSpan='6'></InfoCard>
          <InfoCard gridSpan='4'></InfoCard>
        </CardsWrapper>
        <UpdateAccountWrapper></UpdateAccountWrapper>
      </Main>
    </>
  )
}

ContactInfo.propTypes = {
  match: PropTypes.object
}

export default ContactInfo
