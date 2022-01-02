import { useOnClickOutside } from "usehooks-ts";
import { useRef, useState } from "react";
import { Content, Dropdown, Header, Item } from "./style";
import dropdownIcon from "../../assets/icons/dropdown.svg";

export interface FilterProps {
  options: string[];
  name: string;
  onChangeValue: (value: string) => void;
}

const Filter: React.FC<FilterProps> = (props: FilterProps) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(props.name);
  const ref = useRef(null);

  const handleClickOutside = () => {
    setIsActive(false);
  };

  const handleChange = (value: string) => {
    setSelected(value);
    setIsActive(false);
    props.onChangeValue(selected);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <Dropdown ref={ref}>
      <Header onClick={() => setIsActive(!isActive)}>
        {selected}
        <img src={dropdownIcon} />
      </Header>
      {isActive && (
        <Content>
          {props.options.map((option, index) => (
            <Item
              key={index}
              onClick={(e) => {
                handleChange(option);
              }}
            >
              {option}
            </Item>
          ))}
        </Content>
      )}
    </Dropdown>
  );
};
export default Filter;
