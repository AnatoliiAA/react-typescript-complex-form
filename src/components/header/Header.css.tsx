import styled from "@emotion/styled/";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 40px);
  height: 70px;
  margin: 10px 20px;
`;

export const UserPanel = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
`;

export const Notification = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 5px;
  font-size: 16px;
  border: none;
  background-color: white;
  transition: box-shadow .05s ease-in;
  cursor: pointer;
  &:active {
    box-shadow: 0px 6px 10px -5px #007aff;
  }
  &::after {
    position: absolute;
    display: block;
    content: "";
    width: 6px;
    height: 6px;
    background-color: red;
    border-radius: 4px;
    left: 28px;
    top: 18px;
  }
`;

export const SmallProfile = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 250px;
  height: 50px;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
`;

export const ProfilePicture = styled.img`
  width: 40px;
  height: 40px;
`;

export const ProfileText = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 120px;
  height: 40px;
`;

export const UserName = styled.span``;

export const UserProfession = styled.span``;
