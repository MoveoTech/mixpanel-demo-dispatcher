import React, { useState } from "react";
import useInput from "../../hooks/useInput";
import "./style";
import searchIcon from "../../assets/icons/search.svg";
import { FilterSearch, Icon, Input, SearchInput } from "./style";
import { FilterProps } from "../Filter/Filter";
import SearchDropdown from "../SearchDropdown/SearchDropdown";

export interface SearchProps {
  searchFunc: () => void;
  filter?: FilterProps;
}

const isNotEmpty = (value: string) => value.trim() !== "";

const Search: React.FC<SearchProps> = (props: SearchProps) => {
  const {
    value: searchValue,
    setEnteredValue,
    isValid: searchIsValid,
    valueChangeHandler: searchChangeHandler,
    reset: resetSearch,
    isTouched,
    setIsTouched,
  } = useInput(isNotEmpty);

  const [recentItems, setRecentItems] = useState<string[]>([]);

  let inputIsValid = false;

  if (searchIsValid) {
    inputIsValid = true;
  }

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      submitHandler(event);
    }
  };
  const submitHandler = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!inputIsValid) {
      return;
    }
    if (!recentItems.includes(searchValue)) {
      setRecentItems((recentItems) => [...recentItems, searchValue]);
    }
    setIsTouched(false);
    props.searchFunc();
    resetSearch();
  };

  const setOnFocus = () => {
    if (recentItems.length) {
      setIsTouched(true);
    }
  };
  const setOnBlur = () => {
    setIsTouched(false);
  };
  const onChooseRecentItem = (item: string) => {
    setEnteredValue(item);
    setIsTouched(false);
  };
  const onDeleteRecentItem = (item: string) => {
    const newArray = recentItems.filter((element) => element != item);
    setRecentItems(newArray);
    if (!newArray.length) {
      setIsTouched(false);
    }
  };
  const onClearRecentItems = () => {
    setRecentItems([]);
    setIsTouched(false);
  };

  return (
    <SearchInput>
      <Icon
        onClick={submitHandler}
        type="image"
        src={searchIcon}
        disabled={!inputIsValid}
      />
      <Input
        type="text"
        id="search"
        value={searchValue}
        onChange={searchChangeHandler}
        onFocus={setOnFocus}
        // onBlur={setOnBlur}
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
        <FilterSearch
          options={props.filter.options}
          name={props.filter.name}
          onChangeValue={() => {}}
        />
      )}
    </SearchInput>
  );
};
export default Search;
