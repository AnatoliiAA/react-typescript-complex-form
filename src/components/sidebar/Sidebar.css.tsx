import styled from "@emotion/styled/";

type SidebarProps = {
  isActive: boolean;
};

export const SidebarWrapper = styled.div<SidebarProps>`
  position: absolute;
  width: 250px;
  height: 100%;
  background-color: white;
  z-index: 10;
  transform: ${(props) =>
    props.isActive ? "translateX(0)" : "translateX(-250px)"};
  transition: transform 0.3s ease-in-out;
  box-shadow: ${(props) =>
    props.isActive ? "10px 0 20px -10px #007aff" : "none"};
  @media only screen and (min-width: 768px) {
    position: static;
    transform: translateX(0);
    box-shadow: none;
  }
`;

export const BurgerMenuWrapper = styled.div<SidebarProps>`
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 18px 20px 0 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: ${(props) =>
    props.isActive ? "translateX(0)" : "translateX(250px)"};
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const BurgerMenu = styled.div<SidebarProps>`
  position: relative;
  width: 40px;
  height: ${(props) => (props.isActive ? "0" : "4px")};
  border-radius: 2px;
  background-color: #6b7483;
  transition: all 0.3s ease-in-out;
  &::before {
    position: absolute;
    content: "";
    display: inline-block;
    width: 40px;
    height: 4px;
    border-radius: 2px;
    background-color: #6b7483;
    top: ${(props) => (props.isActive ? "0" : "-12px")};
    left: 0;
    transition: all 0.3s ease-in-out;
    transform: ${(props) => (props.isActive ? "rotate(-45deg)" : "rotate(0)")};
  }
  &::after {
    position: absolute;
    content: "";
    display: inline-block;
    width: 40px;
    height: 4px;
    border-radius: 2px;
    background-color: #6b7483;
    top: ${(props) => (props.isActive ? "0" : "12px")};
    left: 0;
    transition: all 0.3s ease-in-out;
    transform: ${(props) => (props.isActive ? "rotate(45deg)" : "rotate(0)")};
  }
`;

export const LogoLink = styled.a`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 10px 0 10px 0;
`;

export const Logo = styled.img``;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavigationLink = styled.a`
  display: flex;
  align-items: center;
  width: 80%;
  height: 40px;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #007aff;
    box-shadow: 0px 6px 10px -5px #007aff;
  }
  & > svg {
    margin: 0px 10px;
  }
`;
