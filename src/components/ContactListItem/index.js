import React from 'react'
import PropTypes from 'prop-types'
import starIconActive from '../../assets/img/star.png'
import startIcon from '../../assets/img/favorite.png'
import {
  DataWrapper,
  Date,
  FavoriteIcon,
  ListCard,
  Name,
  Photo,
  PhotoWrapper,
  Wrapper
} from './ConstactItemStyled'

const ContactListItem = (props) => {
  const {
    isFavorite,
    image,
    name,
    date,
    handleFavoriteClick,
    onClick
  } = props

  return (
    <Wrapper onClick={onClick}>
      <FavoriteIcon
        src={isFavorite ? starIconActive : startIcon}
        onClick={handleFavoriteClick}
      />
      <ListCard>
        <PhotoWrapper>
          <Photo src={image}/>
        </PhotoWrapper>
        <DataWrapper>
          <Name>{name}</Name>
          <Date> {date ? 'Created at ' + date : 'Invalid Date'}</Date>
        </DataWrapper>
      </ListCard>
    </Wrapper>
  )
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool,
  handleFavoriteClick: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired
}

export default ContactListItem
