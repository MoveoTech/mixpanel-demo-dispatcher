import { useEffect, useRef, useState } from "react";
import { Content, Dropdown, Header } from "./style";
import dropdownIcon from "../../assets/icons/dropdown.svg";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import FilterItem from "./FilterItem";
import { Option } from "../../utils/types";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

export interface FilterProps {
  options: Option[];
  value: string;
  name: string;
  border?: boolean;
  disabled?: boolean;
  onChangeValue: (value: string) => void;
}

const Filter = (props: FilterProps) => {
  const filtersState: { [key: string]: string } = useSelector(
    (state: RootState) => state.filters
  );
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(
    filtersState[props.value]
      ? props.options.find(({ value }) => value === filtersState[props.value])
          ?.name
      : props.name
  );
  const ref = useRef(null);

  useEffect(() => {
    setSelected(
      filtersState[props.value]
      ? props.options.find(({ value }) => value === filtersState[props.value])
          ?.name
      : props.name
    );
    console.log(selected)
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
    <Dropdown border={props.border ? true : false} ref={ref}>
      <Header
        disabled={props.disabled ? true : false}
        onClick={() => setIsActive(!isActive)}
      >
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
