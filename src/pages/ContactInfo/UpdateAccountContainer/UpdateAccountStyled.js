import styled from 'styled-components'

export const Wrapper = styled.div`
  flex-grow: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.fontColorSecondary};
`

export const StatusWrapper = styled.div`
  margin: 25px 0 40px;
  text-align: center;
`

export const BalloonImage = styled.img`
  width: 70%;
  max-width: 250px;
`
