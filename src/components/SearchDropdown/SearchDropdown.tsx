import { useMediaQuery } from "react-responsive";
import exitIcon from "../../assets/icons/exit.svg";
import { device, theme } from "../../globalStyle/theme";
import {
  Header,
  Item,
  Dropdown,
  ExIcon,
  ItemContainer,
  Container,
  ClearBtn,
  DropdownMobile,
  ContainerMobile,
  Title,
  BorderBottom,
} from "./style";

export interface SearchDropdownProps {
  items: string[];
  onChooseItem: (item: string) => void;
  onDeleteItem: (item: string) => void;
  onClearItems: () => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = (
  props: SearchDropdownProps
) => {
  const isMobileDevice = useMediaQuery({
    query: device.mobile,
  });

  return isMobileDevice ? (
    <DropdownMobile>
      <Header>
        <Title>recent searches</Title>
        <ClearBtn
          style={{ backgroundColor: theme.colors.secondary_grey, padding: "5px" }}
          onClick={props.onClearItems}
        >
          clear
        </ClearBtn>
      </Header>
      <ContainerMobile>
        {props.items.map((item, index) => (
          <div key={index}>
            <ItemContainer style={{ padding: "15px" }} key={index}>
              <Item
                onClick={() => {
                  props.onChooseItem(item);
                }}
              >
                {item}
              </Item>
              <ExIcon
                onClick={(e) => props.onDeleteItem(item)}
                src={exitIcon}
              />
            </ItemContainer>
            <BorderBottom />
          </div>
        ))}
      </ContainerMobile>
    </DropdownMobile>
  ) : (
    <Dropdown>
      <Header>
        <p>recent searches</p>
        <ClearBtn onClick={props.onClearItems}>clear</ClearBtn>
      </Header>
      <Container>
        {props.items.map((item, index) => (
          <ItemContainer key={index}>
            <Item
              onClick={() => {
                props.onChooseItem(item);
              }}
            >
              {item}
            </Item>
            <ExIcon onClick={(e) => props.onDeleteItem(item)} src={exitIcon} />
          </ItemContainer>
        ))}
      </Container>
    </Dropdown>
  );
};

export default SearchDropdown;
