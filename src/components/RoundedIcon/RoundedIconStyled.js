import styled from 'styled-components'

export const Wrapper = styled.div`
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
