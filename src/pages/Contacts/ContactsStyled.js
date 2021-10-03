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
