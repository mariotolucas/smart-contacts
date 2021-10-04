import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Wrapper } from './RoundedIconStyled'

export const RoundedIcon = ({ icon, color }) => {
  return (
    <Wrapper color={color}>
      <Icon src={icon}/>
    </Wrapper>
  )
}

RoundedIcon.propTypes = {
  icon: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired
}
export default RoundedIcon
