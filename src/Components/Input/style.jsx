import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 650px;
  height: 50px;
  .icon {
    position: absolute;
    left: 0;
    color: white;
    z-index: 10;
    font-size: 1.4rem;
    background-color: transparent;
    margin-left: 10px;
  }
  input {
    width: 100%;
    height: 100%;
 
    background-color: #131619;
    padding-left: 40px; color: #ECF6FF;
    outline: none;
    border: none;
    border-radius: 10px;
  }
`