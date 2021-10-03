import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  align-items: center;
`

export const IconWrapper = styled.div`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  margin-right: 10px;
`

export const Icon = styled.img`
  width: 45%;
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

export const InfoCard = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  height: 180px;
  background-color: #fff;
  grid-column: span ${({ gridSpan }) => gridSpan || '3'};
  padding: 30px 35px;
  color: ${({ theme }) => theme.fontColorSecondary};
`

export const Main = styled.main`
  display: flex;
`

export const CardsWrapper = styled.div`
  flex-grow: 7;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 20px;
`

export const UpdateAccountWrapper = styled.div`
  flex-grow: 3;
  background-color: blue;
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

export const InfoAmountWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

export const AmountWrapper = styled.div`
  margin-left: 10px;
`

export const AmountSpan = styled.span`
  font-size: 27px;
  font-weight: 600;
  color: ${({ theme }) => theme.fontColor};
  display: block;
`
