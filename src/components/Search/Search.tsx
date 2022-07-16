import React, { useRef } from "react";
import useInput from "../../hooks/useSearch";
import "./style";
import searchIcon from "../../assets/icons/search.svg";
import {
  DeleteIcon,
  FilterContainer,
  Icon,
  IconHover,
  Input,
  InputContainer,
  SearchForm,
} from "./style";
import Filter, { FilterProps } from "../Filter/Filter";
import SearchDropdown from "../SearchDropdown/SearchDropdown";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import deleteIcon from "../../assets/icons/exit.svg";

export interface SearchProps {
  searchFunc: (value: string) => void;
  filter?: FilterProps;
}

const Search: React.FC<SearchProps> = (props: SearchProps) => {
  const {
    searchValue,
    isTouched,
    setSearchValue,
    setIsTouched,
    submitHandler,
    searchInputRef,
    filterRecentItems,
    onChooseRecentItem,
    onDeleteRecentItem,
    onClearRecentItems,
  } = useInput("");
  const searchFormRef = useRef(null);

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      submitHandler(event);
      setIsTouched(false);
    }
  };

  // const updateQuery = () => {
  //   submitHandler();
  // };

  // const delayedQuery = useCallback(debounce(updateQuery, 500), [searchValue]);

  // useEffect(() => {
  //   delayedQuery();
  //   return delayedQuery.cancel;
  // }, [searchValue, delayedQuery]);

  const valueChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  useOnClickOutside(searchFormRef, () => setIsTouched(false));

  return (
    <SearchForm hasFocus={isTouched} ref={searchFormRef}>
      <Icon onClick={submitHandler} type="image" src={searchIcon} />
      <InputContainer>
        <Input
          ref={searchInputRef}
          type="text"
          id="search"
          value={searchValue}
          onChange={valueChangeHandler}
          onFocus={() => setIsTouched(true)}
          placeholder="Search"
          autoComplete="off"
          onKeyDown={keyDownHandler}
        ></Input>
        {searchValue && (
          <IconHover>
            <DeleteIcon
              alt="deleteIcon"
              onClick={() => setSearchValue("")}
              src={deleteIcon}
            />
         </IconHover>
        )}
      </InputContainer>
      {isTouched && filterRecentItems.length ? (
        <SearchDropdown
          items={filterRecentItems}
          onChooseItem={onChooseRecentItem}
          onDeleteItem={onDeleteRecentItem}
          onClearItems={onClearRecentItems}
        />
      ) : null}
      {props.filter && (
        <FilterContainer>
          <Filter
            filterSearch
            options={props.filter.options}
            name={props.filter.name}
            value={props.filter.value}
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
