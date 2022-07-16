
import {
  Avatar,
  Container,
  Logo,
  NavbarContainer,
  PersonalArea,
  Icon,
  SignoutBox,
  SearchContainer,
  IconSearch,
  Row,
  SearchInput,
} from "./style";
import logo from "../../assets/icons/app-logo.svg";
import searchIcon from "../../assets/icons/search.svg";
import backIcon from "../../assets/icons/back.svg";
import { useMediaQuery } from "react-responsive";
import Search from "../Search/Search";
import { FilterProps } from "../Filter/Filter";
import { useState } from "react";
import { device } from "../../globalStyle/theme";
import OutsideClickHandler from "react-outside-click-handler";
import SearchMobile from "../Mobile/components/SearchMobile/SearchMobile";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { filtersActions } from "../../store/slicers/filtersSlice";

export interface NavbarProps {
  children: string;
  filter?: FilterProps;
  searchFunc: (value: string) => void;
  signOutFunc: () => void;
}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  const [showSignoutBox, setShowSignoutBox] = useState(false);
  const filtersState = useSelector((state: RootState) => state.filters);
  const dispatch = useDispatch();
  const [isPaneOpen, setPaneOpen] = useState(false);
  const isMobileDevice = useMediaQuery({
    query: device.mobile,
  });
  const handleAvatarBox = () => {
    setShowSignoutBox(!showSignoutBox);
  };

  return isMobileDevice && filtersState.searchInput ? (
    <SearchContainer>
      <Row>
        <IconSearch
          onClick={() => {
            dispatch(filtersActions.setSearchInput(""));
          }}
          src={backIcon}
        />
        <SearchInput>"{filtersState.searchInput}"</SearchInput>
      </Row>
      <IconSearch onClick={() => setPaneOpen(true)} src={searchIcon} />
      <SearchMobile
        isPaneOpen={isPaneOpen}
        onClose={(value: boolean) => setPaneOpen(value)}
      />
    </SearchContainer>
  ) : (
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
          {isMobileDevice && (
            <Icon onClick={() => setPaneOpen(true)} src={searchIcon} />
          )}
          <SearchMobile
            isPaneOpen={isPaneOpen}
            onClose={(value: boolean) => setPaneOpen(value)}
          />
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
