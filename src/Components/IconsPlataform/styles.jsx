import styled from "styled-components";

export const ContainerIcons = styled.div`
  display: flex;
  justify-content: space-around;
`
export const IconGenre = styled.div`
  width: 110px;
  height: 30px;
  border: 1px solid #ffffff4b;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffffba;
  border-radius: 10px;
  font-size: 12px;
  text-transform: uppercase;
  bottom: 13px;
  left: 16px;
  background-color: #131619;
`
export const IconPlataform = styled(IconGenre)`
  right: 16px;
`