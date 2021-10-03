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
  UpdateAccountWrapper,
  InfoCard,
  InfoSpan,
  InfoWrapper,
  InfoAmountWrapper,
  AmountSpan,
  AmountWrapper
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
          <InfoCard>
            <InfoWrapper>
              <span>Region and idiom</span>
              <InfoSpan>{culture}</InfoSpan>
            </InfoWrapper>
            <InfoWrapper>
              <span>Timezone</span>
              <InfoSpan>(UTC - 03:00) Brasília</InfoSpan>
            </InfoWrapper>
          </InfoCard>

          <InfoCard gridSpan='7'>
            <InfoAmountWrapper>
              <RoundedIcon
                icon={userIcon}
                color='#2cc3d5'
              />
              <AmountWrapper>
                <AmountSpan>{analytics.user.actived}</AmountSpan>
                <span>Active Users</span>
              </AmountWrapper>
            </InfoAmountWrapper>
          </InfoCard>

          <InfoCard gridSpan='6'>
            <InfoAmountWrapper>
                <RoundedIcon
                  icon={receivedIcon}
                  color='#4dcb7b'
                />
                <AmountWrapper>
                  <AmountSpan>{analytics.message.received}</AmountSpan>
                  <span>Messages received</span>
                </AmountWrapper>
              </InfoAmountWrapper>
            </InfoCard>

          <InfoCard gridSpan='4'>
            <InfoAmountWrapper>
              <RoundedIcon
                icon={sentIcon}
                color='#517bf2'
              />
              <AmountWrapper>
                <AmountSpan>{analytics.message.sent}</AmountSpan>
                <span>Messages sent</span>
              </AmountWrapper>
            </InfoAmountWrapper>
          </InfoCard>
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
