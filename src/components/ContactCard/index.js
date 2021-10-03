import React from 'react'
import PropTypes from 'prop-types'
import starIconActive from '../../assets/img/star.png'
import startIcon from '../../assets/img/favorite.png'
import {
  Card,
  FavoriteIcon,
  Photo,
  PhotoWrapper,
  DataWraper,
  Name,
  Template
} from './ContactCardStyled'

/*
  At the mockup, under the name is written "build", but it is not clear wich data it represents.
  Due the few time available, it was considered that this data should be the "template"
*/
const ContactCard = ({ name, image, template, isFavorite }) => {
  return (
    <Card>
      <div>
        <FavoriteIcon src={isFavorite ? starIconActive : startIcon}/>
        <DataWraper>
          <PhotoWrapper>
            <Photo src={image}/>
          </PhotoWrapper>
          <Name>{name}</Name>
          <Template>{template}</Template>
        </DataWraper>
      </div>
    </Card>
  )
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  template: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool
}

export default ContactCard