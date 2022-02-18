import React from "react";
import Searchbar from "../searchbar/Searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  HeaderWrapper,
  Notification,
  ProfilePicture,
  ProfileText,
  SmallProfile,
  UserName,
  UserPanel,
  UserProfession,
} from "./Header.css";

const Header = (): JSX.Element => (
  <HeaderWrapper>
    <Searchbar />
    <UserPanel>
      <Notification>
        <FontAwesomeIcon icon={faBell} />
      </Notification>
      <SmallProfile>
        <ProfilePicture />
        <ProfileText>
          <UserName>John Doe</UserName>
          <UserProfession>Programmer</UserProfession>
        </ProfileText>
        <FontAwesomeIcon icon={faChevronDown} />
      </SmallProfile>
    </UserPanel>
  </HeaderWrapper>
);

export default Header;
