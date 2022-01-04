import "./style";
import {
  Avatar,
  Container,
  Logo,
  NavbarContainer,
  PersonalArea,
  Icon,
  SignoutBox,
} from "./style";
import logo from "../../assets/icons/logo.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import notifyIcon from "../../assets/icons/notifications.svg";
import searchIcon from "../../assets/icons/search.svg";
import { useMediaQuery } from "react-responsive";
import Search from "../Search/Search";
import { device } from "../../globalStyle";
import { FilterProps } from "../Filter/Filter";
import { useState } from "react";

export interface NavbarProps {
  children: string;
  filter?: FilterProps;
}
function isParent(refNode: any, otherNode: any) {
  var parent = otherNode.parentNode;
  do {
    if (refNode == parent) {
      return true;
    } else {
      parent = parent.parentNode;
    }
  } while (parent);
  return false;
}
const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  const [showSignoutBox, setShowSignoutBox] = useState(false);
  const isMobileDevice = useMediaQuery({
    query: device.mobile,
  });
  const onMouseEnterHandler = (ev: React.MouseEvent<HTMLDivElement>) => {
    setShowSignoutBox(true);
  };
  const onMouseOutHandler = (ev: React.MouseEvent<HTMLDivElement>) => {
    setShowSignoutBox(false);
  };
  return (
    <NavbarContainer>
      <Logo src={logo} />
      <Container>
        {!isMobileDevice && (
          <Search filter={props.filter} searchFunc={async () => {}} />
        )}
        <PersonalArea>
          {isMobileDevice && <Icon onClick={() => {}} src={searchIcon} />}
          <Icon src={settingsIcon}></Icon>
          <Icon src={notifyIcon}></Icon>
          <Avatar
            onMouseEnter={(e) => onMouseEnterHandler(e)}
            onMouseLeave={(e) => onMouseOutHandler(e)}
          >
            {props.children}
            {showSignoutBox && <SignoutBox>Sign Out</SignoutBox>}
          </Avatar>
        </PersonalArea>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
