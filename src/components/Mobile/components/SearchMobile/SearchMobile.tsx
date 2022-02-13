import { useRef, useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { Input } from "../../../Search/style";
import backIcon from "../../../../assets/icons/back.svg";
import useInput from "../../../../hooks/useInput";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import { isNotEmpty } from "../../../../utils/utils";
import { SearchForm, Icon } from "./style";
import SearchDropdown from "../../../SearchDropdown/SearchDropdown";
import deleteIcon from "../../../../assets/icons/exit.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { filtersActions } from "../../../../store/slicers/filtersSlice";

export interface SearchMobileProps {
  isPaneOpen: boolean;
  onClose: (value: boolean) => void;
}
const SearchMobile = (props: SearchMobileProps) => {
  const filtersState = useSelector((state: RootState) => state.filters);
  const [recentItems, setRecentItems] = useLocalStorage<string[]>("items", []);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [searchValue, setSearchValue] = useState(filtersState.searchInput);
  const dispatch = useDispatch();

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
    searchInputRef.current?.blur();
    props.onClose(false);
    dispatch(filtersActions.setSearchInput(searchValue));
  };
  const filterRecentItems = recentItems.filter(
    (search) => search.includes(searchValue) && searchValue !== search
  );
  const reset = () => {
    setSearchValue("");
    dispatch(filtersActions.setSearchInput(searchValue));
  };
  const onChooseRecentItem = (item: string) => {
    setSearchValue(item);
  };
  const valueChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };
  const onDeleteRecentItem = (item: string) => {
    const newArray = recentItems.filter((element) => element !== item);
    setRecentItems(newArray);
  };
  const onClearRecentItems = () => {
    setRecentItems([]);
  };

  return (
    <SlidingPane
      isOpen={props.isPaneOpen}
      closeIcon={<Icon src={backIcon} />}
      width={"100%"}
      title={
        <SearchForm>
          <Input
            ref={searchInputRef}
            type="text"
            id="search"
            value={searchValue}
            onChange={valueChangeHandler}
            placeholder="Search"
            autoComplete="off"
            onKeyDown={keyDownHandler}
          ></Input>
          {searchValue && (
            <img
              style={{ width: "17px", height: "17px" }}
              onClick={() => setSearchValue("")}
              src={deleteIcon}
            />
          )}
        </SearchForm>
      }
      onRequestClose={() => {
        reset();
        props.onClose(false);
      }}
    >
      <SearchDropdown
        items={filterRecentItems}
        onChooseItem={onChooseRecentItem}
        onDeleteItem={onDeleteRecentItem}
        onClearItems={onClearRecentItems}
      />
    </SlidingPane>
  );
};

export default SearchMobile;
