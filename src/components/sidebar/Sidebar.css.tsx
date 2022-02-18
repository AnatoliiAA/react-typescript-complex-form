import styled from "@emotion/styled/";

export const SidebarWrapper = styled.div`
  width: 250px;
  height: 100%;
  background-color: white;
`;

export const LogoLink = styled.a`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
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

