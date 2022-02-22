import {
  SidebarWrapper,
  Logo,
  Navigation,
  NavigationLink,
  LogoLink,
  BurgerMenu,
  BurgerMenuWrapper,
} from "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faList,
  faShoppingBasket,
  faUser,
  faComment,
  faCog,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../static/Logo.png";
import { useState } from "react";

type linkDataType = { text: string; icon: IconDefinition };

const linksData: Array<linkDataType> = [
  { text: "Dashboard", icon: faHome },
  { text: "Orders", icon: faList },
  { text: "Products", icon: faShoppingBasket },
  { text: "Customers", icon: faUser },
  { text: "Messages", icon: faComment },
  { text: "Settings", icon: faCog },
];

const generateNavLinks = (data: linkDataType): JSX.Element => (
  <NavigationLink key={data.text}>
    <FontAwesomeIcon icon={data.icon} />
    {data.text}
  </NavigationLink>
);

const Sidebar = (): JSX.Element => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <SidebarWrapper isActive={menuActive}>
      <BurgerMenuWrapper
        isActive={menuActive}
        onClick={() => setMenuActive(!menuActive)}
      >
        <BurgerMenu isActive={menuActive} />
      </BurgerMenuWrapper>
      <LogoLink href="#">
        <Logo src={logo} />
      </LogoLink>
      <Navigation>
        {linksData.map((linkData: linkDataType) => generateNavLinks(linkData))}
      </Navigation>
    </SidebarWrapper>
  );
};

export default Sidebar;
