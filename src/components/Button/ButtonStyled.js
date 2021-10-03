import styled from 'styled-components'

export const CustomButton = styled.button`
  background-color: ${({ theme, color }) => color || theme.primaryColor};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: #fff;
  padding: 12px 18px;
  font-size: 15px;
`

export const IconButtonStyled = styled.button`
  border: none;
  outline: none;
  width: 35px;
  height: 35px;
  background: url(${({ icon }) => icon}) no-repeat center center;
  background-size: 100%;
`
