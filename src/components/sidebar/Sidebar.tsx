import {
  SidebarWrapper,
  Logo,
  Navigation,
  NavigationLink,
  LogoLink,
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
  <NavigationLink>
    <FontAwesomeIcon icon={data.icon} />
    {data.text}
  </NavigationLink>
);

const Sidebar = (): JSX.Element => (
  <SidebarWrapper>
    <LogoLink href="#">
      <Logo src={logo} />
    </LogoLink>
    <Navigation>
      {linksData.map((linkData: linkDataType) => generateNavLinks(linkData))}
    </Navigation>
  </SidebarWrapper>
);

export default Sidebar;
