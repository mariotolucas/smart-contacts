import React from 'react'
import PropTypes from 'prop-types'
import contactsData from '../../assets/data/data.json'
import blipIcon from '../../assets/img/blip.png'
import userIcon from '../../assets/img/user.png'
import sentIcon from '../../assets/img/sent.png'
import receivedIcon from '../../assets/img/received.png'
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
  InfoSpan,
  InfoWrapper
} from './ContactInfoStyled'
import UpdateAccount from './UpdateAccountContainer'
import InfoCard from '../../components/InfoCard'
import { Wrapper } from '../../components/InfoCard/InfoCardStyled'

export const RoundedIcon = ({ icon, color }) => {
  return (
    <IconWrapper color={color}>
      <Icon src={icon}/>
    </IconWrapper>
  )
}

RoundedIcon.propTypes = {
  icon: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired
}

const ContactInfo = (props) => {
  const { shortName } = props.match.params
  const contactData = contactsData.find(contact => contact.shortName === shortName)

  const { name, created, culture, analytics } = contactData
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
          <Wrapper>
            <InfoWrapper>
              <span>Region and idiom</span>
              <InfoSpan>{culture}</InfoSpan>
            </InfoWrapper>
            <InfoWrapper>
              <span>Timezone</span>
              <InfoSpan>(UTC - 03:00) Brasília</InfoSpan>
            </InfoWrapper>
          </Wrapper>
          <InfoCard
            gridSpan={7}
            icon={userIcon}
            color='#2cc3d5'
            value={analytics.user.actived}
            text='Active Users'
          />

          <InfoCard
            gridSpan={6}
            icon={receivedIcon}
            color='#4dcb7b'
            value={analytics.message.received}
            text='Messages received'
          />

          <InfoCard
            gridSpan={4}
            icon={sentIcon}
            color='#517bf2'
            value={analytics.message.sent}
            text='Messages sent'
          />
        </CardsWrapper>
        <UpdateAccount>

        </UpdateAccount>
      </Main>
      <Divider/>
    </>
  )
}

ContactInfo.propTypes = {
  match: PropTypes.object
}

export default ContactInfo
