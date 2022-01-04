import exitIcon from "../../assets/icons/exit.svg"; 
import {
  Header,
  Item,
  Dropdown,
  ExIcon,
  ItemContainer,
  Container,
  ClearBtn,
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
  return (
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
