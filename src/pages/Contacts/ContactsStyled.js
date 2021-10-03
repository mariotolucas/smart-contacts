import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.fontColor};
  display: contents;
  font-size: 28px;
`

export const FiltersWrapper = styled.div`
  display: flex;
  align-items: center;

  > input, button:not(:last-child) {
    margin-right: 10px;
  }
`

export const Main = styled.main`
  margin-top: 40px;
`

export const SubHeading = styled.h2`
  color: ${({ theme }) => theme.fontColorSecondary};
  font-size: 27px;
`

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2fr);
  grid-gap: 20px;
`

export const Divider = styled.hr`
  border-top: 2px solid #d2dfe6;
  margin: 40px 0;
`
