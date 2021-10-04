import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    display: block;
  }
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

  @media (max-width: 600px) {
    flex-direction: column;
    margin-top: 20px;
    align-items: center;

    > input, button {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`

export const ViewTypeWrapper = styled.div`
  display: flex;
`

export const Main = styled.main`
  margin-top: 40px;
`

export const SubHeading = styled.h2`
  color: ${({ theme }) => theme.fontColorSecondary};
  font-size: 27px;
`

export const CardsWrapper = styled.div`
  display: ${({ isCardView }) => isCardView ? 'grid' : 'block'};
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const Divider = styled.hr`
  border-top: 2px solid #d2dfe6;
  margin: 40px 0;

  @media (max-width: 600px) {
    margin: 10px 0 30px;
  }
`
