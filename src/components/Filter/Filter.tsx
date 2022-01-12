import { useOnClickOutside } from "usehooks-ts";
import { useRef, useState } from "react";
import { Content, Dropdown, Header, Item } from "./style";
import dropdownIcon from "../../assets/icons/dropdown.svg";

interface Option {
  name: string;
  value: string;
}
export interface FilterProps {
  options?: Option[];
  name: string;
  // disabled: (value: boolean) => {};
  onChangeValue: (value: string) => void;
}

const Filter = (props: FilterProps) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(props.name);
  const ref = useRef(null);

  const handleClickOutside = () => {
    setIsActive(false);
  };

  const handleChange = (option: Option) => {
    setSelected(option.name);
    setIsActive(false);
    props.onChangeValue(option.value);
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
          {props.options?.map((option, index) => (
            <Item
              key={index}
              onClick={(e) => {
                handleChange(option);
              }}
            >
              {option.name}
            </Item>
          ))}
        </Content>
      )}
    </Dropdown>
  );
};
export default Filter;
