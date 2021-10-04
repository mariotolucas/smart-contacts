import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: 50px;
  margin-bottom: 20px;
  display: flex;
  align-items:center;
`

export const FavoriteIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 15px;
  cursor: pointer;
`

export const ListCard = styled.div`
  background-color: #fff;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding: 10px 25px;
  cursor: pointer;
`

export const DataWrapper = styled.div`
  display: flex;
  @media (max-width: 600px) {
    display: block;
    > span {
      display: block;
    }
  }
`

export const PhotoWrapper = styled.div`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  overflow: hidden;
  margin-right: 15px;
`

export const Photo = styled.img`
  width: 100%;
`

export const Name = styled.span`
  color: ${({ theme }) => theme.fontColor};
  font-weight: 600;
  font-size: 18px;
`

export const Date = styled.span`
  color: ${({ theme }) => theme.fontColorSecondary};
  font-size: 17px;
  margin-left: auto;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`
