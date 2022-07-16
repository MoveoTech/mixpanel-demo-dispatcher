import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { DeleteIcon, IconHover, Input } from "../../../Search/style";
import backIcon from "../../../../assets/icons/back.svg";
import useInput from "../../../../hooks/useSearch";
import { SearchForm, Icon } from "./style";
import SearchDropdown from "../../../SearchDropdown/SearchDropdown";
import deleteIcon from "../../../../assets/icons/exit.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

export interface SearchMobileProps {
  isPaneOpen: boolean;
  onClose: (value: boolean) => void;
}
const SearchMobile = (props: SearchMobileProps) => {
  const filtersState = useSelector((state: RootState) => state.filters);
  const {
    searchValue,
    setSearchValue,
    valueChangeHandler,
    submitHandler,
    reset,
    searchInputRef,
    filterRecentItems,
    onChooseRecentItem,
    onDeleteRecentItem,
    onClearRecentItems,
  } = useInput(filtersState.searchInput);

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      submitHandler(event);
      props.onClose(false);
    }
  };

  return (
    <SlidingPane
      isOpen={props.isPaneOpen}
      closeIcon={<Icon src={backIcon} />}
      width="100%"
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
            <IconHover style={{marginRight: '20px'}}>
              <DeleteIcon
                alt="deleteIcon"
                onClick={() => setSearchValue("")}
                src={deleteIcon}
              />
            </IconHover>
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
