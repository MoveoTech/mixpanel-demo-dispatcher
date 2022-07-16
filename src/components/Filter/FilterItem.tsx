import { Item } from "./style";

export interface FilterItemProps {
  name: string;
  selected: Boolean;
  onFunc: () => void;
}

const FilterItem = (props: FilterItemProps) => {
  return (
    <Item {...props} onClick={props.onFunc}>
      {props.name}
    </Item>
  );
};
export default FilterItem;
