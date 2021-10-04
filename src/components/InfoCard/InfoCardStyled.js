import styled from 'styled-components'

export const Wrapper = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  height: 180px;
  background-color: #fff;
  grid-column: span ${({ gridSpan }) => gridSpan || '3'};
  padding: 30px 35px;
  color: ${({ theme }) => theme.fontColorSecondary};
`

export const InfoAmountWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

export const AmountWrapper = styled.div`
  margin-left: 10px;
`
