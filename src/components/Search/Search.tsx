import React, { useRef } from "react";
import useInput from "../../hooks/useInput";
import "./style";
import searchIcon from "../../assets/icons/search.svg";
import { Icon, Input, SearchInput } from "./style";
import Filter, { FilterProps } from "../Filter/Filter";
import SearchDropdown from "../SearchDropdown/SearchDropdown";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import useLocalStorage from "../../hooks/useLocalStorage";
import { isNotEmpty } from "../../utils/utils";

export interface SearchProps {
  searchFunc: (value: string) => void;
  filter?: FilterProps;
}

const Search: React.FC<SearchProps> = (props: SearchProps) => {
  const {
    value: searchValue,
    setEnteredValue,
    valueChangeHandler: searchChangeHandler,
    isTouched,
    setIsTouched,
  } = useInput("");

  const ref = useRef(null);
  const [recentItems, setRecentItems] = useLocalStorage<string[]>("items", []);

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      submitHandler(event);
    }
  };
  const submitHandler = (e: React.FormEvent<HTMLInputElement>) => {
    if (!recentItems.includes(searchValue) && isNotEmpty(searchValue)) {
      setRecentItems((recentItems) => [...recentItems, searchValue]);
    }
    setIsTouched(false);
    props.searchFunc(searchValue);
  };
  const handleClickOutside = () => {
    setIsTouched(false);
  };

  const setOnFocus = () => {
    if (recentItems.length) {
      setIsTouched(true);
    }
  };
  const onChooseRecentItem = (item: string) => {
    setEnteredValue(item);
    setIsTouched(false);
  };
  const onDeleteRecentItem = (item: string) => {
    const newArray = recentItems.filter((element) => element !== item);
    setRecentItems(newArray);
    if (!newArray.length) {
      setIsTouched(false);
    }
  };
  const onClearRecentItems = () => {
    setRecentItems([]);
    setIsTouched(false);
  };
  useOnClickOutside(ref, handleClickOutside);

  return (
    <SearchInput ref={ref}>
      <Icon onClick={submitHandler} type="image" src={searchIcon} />
      <Input
        type="text"
        id="search"
        value={searchValue}
        onChange={searchChangeHandler}
        onFocus={setOnFocus}
        placeholder="Search"
        autoComplete="off"
        onKeyDown={keyDownHandler}
      ></Input>
      {isTouched && (
        <SearchDropdown
          items={recentItems}
          onChooseItem={onChooseRecentItem}
          onDeleteItem={onDeleteRecentItem}
          onClearItems={onClearRecentItems}
        />
      )}
      {props.filter && (
        <Filter
          border={false}
          options={props.filter.options}
          name={props.filter.name}
          onChangeValue={(value: string) => {
            props.filter?.onChangeValue(value);
          }}
        />
      )}
    </SearchInput>
  );
};
export default Search;
