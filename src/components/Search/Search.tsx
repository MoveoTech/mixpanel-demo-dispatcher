import React, { useRef } from "react";
import useInput from "../../hooks/useInput";
import "./style";
import searchIcon from "../../assets/icons/search.svg";
import { FilterContainer, Icon, Input, SearchForm } from "./style";
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
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const searchFormRef = useRef(null);
  const [recentItems, setRecentItems] = useLocalStorage<string[]>("items", []);

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      submitHandler(event);
    }
  };
  const submitHandler = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!recentItems.includes(searchValue) && isNotEmpty(searchValue)) {
      setRecentItems((recentItems) => [...recentItems, searchValue]);
    }
    setIsTouched(false);
    searchInputRef.current?.blur();
    props.searchFunc(searchValue);
  };

  const setOnFocus = () => {
    if (recentItems.length) {
      setIsTouched(true);
    }
  };
  const filterRecentItems = recentItems.filter(
    (search) => search.includes(searchValue) && searchValue !== search
  );

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
  };
  useOnClickOutside(searchFormRef, () => setIsTouched(false));

  return (
    <SearchForm hasFocus={isTouched} ref={searchFormRef}>
      <Icon onClick={submitHandler} type="image" src={searchIcon} />
      <Input
        ref={searchInputRef}
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
          items={filterRecentItems}
          onChooseItem={onChooseRecentItem}
          onDeleteItem={onDeleteRecentItem}
          onClearItems={onClearRecentItems}
        />
      )}
      {props.filter && (
        <FilterContainer>
          <Filter
            border={false}
            options={props.filter.options}
            name={props.filter.name}
            onChangeValue={(value: string) => {
              props.filter?.onChangeValue(value);
            }}
          />
        </FilterContainer>
      )}
    </SearchForm>
  );
};
export default Search;
