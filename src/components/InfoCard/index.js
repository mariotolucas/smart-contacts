import React from 'react'
import PropTypes from 'prop-types'
import { AmountWrapper, InfoAmountWrapper, Wrapper } from './InfoCardStyled'
import { AmountSpan } from '../../pages/ContactInfo/ContactInfoStyled'
import RoundedIcon from '../RoundedIcon'

const InfoCard = ({ gridSpan, color, icon, text, value }) => {
  return (
    <Wrapper gridSpan={gridSpan}>
      <InfoAmountWrapper>
        <RoundedIcon
          icon={icon}
          color={color}
        />
        <AmountWrapper>
          <AmountSpan>{value}</AmountSpan>
          <span>{text}</span>
        </AmountWrapper>
      </InfoAmountWrapper>
    </Wrapper>
  )
}

InfoCard.propTypes = {
  icon: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  gridSpan: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default InfoCard
