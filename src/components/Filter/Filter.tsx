import { useEffect, useRef, useState } from "react";
import { Content, Dropdown, DropdownIcon, Header } from "./style";
import dropdownIcon from "../../assets/icons/dropdown.svg";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import FilterItem from "./FilterItem";
import { Option } from "../../utils/types";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

export interface FilterProps {
  options: Option[];
  value: string;
  name: string | undefined;
  disabled?: boolean;
  filterSearch?: boolean;
  onChangeValue: (value: string) => void;
}

const Filter = (props: FilterProps) => {
  const filtersState: { [key: string]: string } = useSelector(
    (state: RootState) => state.filters
  );
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState<String | undefined>("");
  const ref = useRef(null);

  useEffect(() => {
    if (filtersState[props.value] && props.options.length > 0) {
      setSelected(
        props.options.find(({ value }) => value === filtersState[props.value])
          ?.name
      );
    } else {
      setSelected(props.name);
    }
  }, [props.options]);

  const handleClickOutside = () => {
    setIsActive(false);
  };

  const handleChange = (option: Option) => {
    if (option.name === selected || option.name === "All") {
      option.name === "All" &&  setIsActive(false);
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
    <Dropdown
      filterSearch={props.filterSearch ? true : false}
      ref={ref}
      disabled={props.disabled ? true : false}
    >
      <Header
        disabled={props.disabled ? true : false}
        onClick={() => setIsActive(!isActive)}
      >
        {selected}
        <DropdownIcon alt="" src={dropdownIcon} />
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
