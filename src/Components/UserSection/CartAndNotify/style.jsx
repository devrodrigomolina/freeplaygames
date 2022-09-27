import styled from "styled-components";

export const UserSection = styled.div`
  width: 230px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  border-left: 1px solid #78828B;
  border-right: 1px solid #78828B;
`

export const UserCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 120px;
  height: 55%;
  background-color: #78828B;
  border-radius: 8px;
  cursor: pointer;
  .icon {
    color: #3E3E;
    font-size: 1.5rem;
  }
  p {
    font-size: .8rem;
    font-weight: bold;
    color: white;
  }
`

export const IconNotifyContainer = styled(UserCart)`
  width: 60px;
`
