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
import { FilterProps } from "../Filter/Filter";
import { useState } from "react";
import { device } from "../../globalStyle/theme";
import OutsideClickHandler from "react-outside-click-handler";

export interface NavbarProps {
  children: string;
  filter?: FilterProps;
  searchFunc: (value: string) => void;
  signOutFunc: () => void;
}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  const [showSignoutBox, setShowSignoutBox] = useState(false);
  const isMobileDevice = useMediaQuery({
    query: device.mobile,
  });
  const handleAvatarBox = () => {
    setShowSignoutBox(!showSignoutBox);
  };

  return (
    <NavbarContainer>
      <Logo src={logo} />
      <Container>
        {!isMobileDevice && (
          <Search
            filter={props.filter}
            searchFunc={(value) => {
              props.searchFunc(value);
            }}
          />
        )}
        <PersonalArea>
          {isMobileDevice && <Icon onClick={() => {}} src={searchIcon} />}
          <Icon src={settingsIcon}></Icon>
          <Icon src={notifyIcon}></Icon>
          <OutsideClickHandler onOutsideClick={() => setShowSignoutBox(false)}>
            <Avatar onClick={() => handleAvatarBox()}>
              {props.children}
              {showSignoutBox && (
                <SignoutBox onClick={props.signOutFunc}>Sign Out</SignoutBox>
              )}
            </Avatar>
          </OutsideClickHandler>
        </PersonalArea>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;
