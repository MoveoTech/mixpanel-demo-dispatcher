import exitIcon from "../../assets/icons/exit.svg"; 
import {
  Header,
  Item,
  Dropdown,
  ExIcon,
  ItemContainer,
  Container,
} from "./style";

export interface SearchDropdownProps {
  items: string[];
  onChooseItem: (item: string) => void;
  onDeleteItem: (item: string) => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = (
  props: SearchDropdownProps
) => {
  return (
    <Dropdown>
      <Header>
        <p>recent searches</p>
        <p>clear</p>
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
