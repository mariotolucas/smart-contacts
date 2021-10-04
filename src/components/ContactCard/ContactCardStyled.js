import styled, { css } from 'styled-components'

export const Card = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: #fff;
  box-shadow:  ${({ theme }) => theme.boxShadow};
  display: inline-block;
  position: relative;
  cursor: pointer;

  /*
    Adds a pseudo element to grant the card will always have the same proportion
    without have to set the height
  */
  :before {
    content: "";
    display: block;
    padding-top: 105%;
  }

  > div {
    padding: 12px 14px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`

export const FavoriteIcon = styled.img`
  width: 25px;
  display: block;
`

export const DataWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 30px;
`

export const PhotoWrapper = styled.div`
  border-radius: 50%;
  width: 5vw;
  height: 5vw;
  overflow: hidden;
  margin-bottom: 5px;

  @media (max-width: 600px) {
    width: 25vw;
    height: 25vw;
  }
`

export const Photo = styled.img`
  width: 100%;
`

const baseSpan = css`
   text-transform: capitalize;
   margin-top: 5px;
   display: block;
`

export const Name = styled.span`
  color: ${({ theme }) => theme.fontColor};
  font-weight: 600;
  font-size: 1.2vw;
  ${baseSpan}

  @media (max-width: 600px) {
    font-size: 22px;
  }
`

export const Template = styled.span`
  color: ${({ theme }) => theme.fontColorSecondary};
  font-size: .9vw;
  ${baseSpan}

  @media (max-width: 600px) {
    font-size: 16px;
  }
`
