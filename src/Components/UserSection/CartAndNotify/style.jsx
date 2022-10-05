import styled from "styled-components";

export const UserSection = styled.div`
  width: 230px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`

export const UserCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 120px;
  height: 35%;
  background-color: #F1A11A;
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
