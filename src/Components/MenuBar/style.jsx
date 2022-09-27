import styled from "styled-components";

export const MenuBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70px;
  height: calc(100vh - 80px);
  background-color: #353940;
  border-right: 1px solid #78828b;
`;

export const ContainerPages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #78828b;
  height: auto;
  .link_menu_bar {
    background-color: #78828b;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 10px 0;
    transition: all 0.3s;
    position: relative;
    &:hover {
      background-color: #3e3e;
      transition: all 0.3s;
    }
    &:hover::after {
      content: '';
      position: absolute;
      right: -10px;
      width: 5px;
      height: 100%;
      background-image: linear-gradient(to right, transparent 10%, #3e3e);
    }
  }
`;

export const PagesMenuBar = styled.div`
  .icon {
    font-size: 1.6rem;
    color: #e3e6ec;
  }
`;
