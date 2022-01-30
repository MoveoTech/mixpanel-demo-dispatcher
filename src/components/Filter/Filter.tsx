import { useEffect, useRef, useState } from "react";
import { Content, Dropdown, Header } from "./style";
import dropdownIcon from "../../assets/icons/dropdown.svg";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import FilterItem from "./FilterItem";

interface Option {
  name: string;
  value: string;
}
export interface FilterProps {
  options?: Option[];
  name: string;
  border?: boolean;
  disabled?: boolean;
  onChangeValue: (value: string) => void;
}

const Filter = (props: FilterProps) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(props.name);
  const ref = useRef(null);

  useEffect(() => {
    setSelected(props.name);
  }, [props.options]);

  const handleClickOutside = () => {
    setIsActive(false);
  };

  const handleChange = (option: Option) => {
    if (option.name === selected) {
      setSelected(props.name);
      props.onChangeValue("");
    } else {
      setSelected(option.name);
      setIsActive(false);
      props.onChangeValue(option.value);
    }
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <Dropdown {...props} ref={ref}>
      <Header {...props} onClick={() => setIsActive(!isActive)}>
        {selected}
        <img style={{ paddingLeft: "10px" }} alt="" src={dropdownIcon} />
      </Header>
      {isActive && !props.disabled && (
        <Content>
          {props.options?.map((option, index) => (
            <FilterItem
              key={index}
              name={option.name}
              selected={selected === option.name}
              onFunc={() => handleChange(option)}
            />
          ))}
        </Content>
      )}
    </Dropdown>
  );
};
export default Filter;
