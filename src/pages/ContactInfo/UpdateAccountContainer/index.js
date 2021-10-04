import React from 'react'
import { BalloonImage, StatusWrapper, Wrapper } from './UpdateAccountStyled'
import balloonImg from '../../../assets/img/balloon.png'
import Button from '../../../components/Button'
import { AmountSpan } from '../ContactInfoStyled'

const UpdateAccount = () => {
  return (
    <Wrapper>
      <BalloonImage src={balloonImg}/>
      <StatusWrapper>
        <span>Status account</span>
        <AmountSpan>Free</AmountSpan>
      </StatusWrapper>
      <Button>Update account</Button>
    </Wrapper>
  )
}

export default UpdateAccount
