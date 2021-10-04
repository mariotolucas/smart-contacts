import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  align-items: center;

  flex-wrap: wrap;
`

export const Name = styled.h2`
  color: ${({ theme }) => theme.fontColor};
  margin: 0;
`
export const Id = styled.span`
  color: ${({ theme }) => theme.fontColorSecondary};
  display: block;
  font-size: 14px;
`

export const DataWrapper = styled.div`
  display: inline-block;
`

export const CreationDate = styled.span`
  margin-left: auto;
  color: ${({ theme }) => theme.fontColorSecondary};
`

export const Main = styled.main`
  display: flex;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`

export const CardsWrapper = styled.div`
  flex-grow: 7;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 20px;

  @media (max-width: 600px) {
    display: block;

    > div {
      margin-bottom: 20px;
    }
  }
`

export const InfoSpan = styled.span`
  color: ${({ theme }) => theme.fontColor};
  font-size: 14px;
  display: block;
  font-weight: 600;
  margin-top: 5px;
`

export const InfoWrapper = styled.div`
  margin-bottom: 20px;
`

export const AmountSpan = styled.span`
  font-size: 27px;
  font-weight: 600;
  color: ${({ theme }) => theme.fontColor};
  display: block;
`
