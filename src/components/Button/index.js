import React from 'react'
import PropTypes from 'prop-types'
import { CustomButton, IconButtonStyled } from './ButtonStyled'

export const IconButton = ({ onClick, ariaLabel, icon }) => {
  return (
    <IconButtonStyled
      icon={icon}
      ariaLabel={ariaLabel}
      onClick={onClick}/>
  )
}

IconButton.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string
}

const Button = ({ children, color, onClick }) => {
  return (
    <CustomButton
      color={color}
      onClick={onClick}>
      {children}
    </CustomButton>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string
}

export default Button
