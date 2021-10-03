import styled from 'styled-components'

export const CustomInput = styled.input`
  border-radius: ${({ theme }) => theme.borderRadius};
  border: solid 1px #dae5ea;
  padding: 12px;
  width: 40%;
  color: ${({ theme }) => theme.fontColorSecondary};
  outline: none;
  font-size: 15px;
  width: 20vw;

  ::placeholder {
    color: #8ca0b3;
  }
`
