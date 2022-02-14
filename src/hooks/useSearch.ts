import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { filtersActions } from "../store/slicers/filtersSlice";
import { isNotEmpty } from "../utils/utils";
import useLocalStorage from "./useLocalStorage";

const useInput = (value: string) => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState(value);
  const [isTouched, setIsTouched] = useState(false);
  const [recentItems, setRecentItems] = useLocalStorage<string[]>("items", []);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const valueChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  const filterRecentItems = recentItems.filter(
    (search) => search.includes(searchValue) && searchValue !== search
  );

  const submitHandler = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!recentItems.includes(searchValue) && isNotEmpty(searchValue)) {
      setRecentItems((recentItems) => [...recentItems, searchValue]);
    }
    searchInputRef.current?.blur();
    dispatch(filtersActions.setSearchInput(searchValue));
  };
  const reset = () => {
    setSearchValue("");
    setIsTouched(false);
    dispatch(filtersActions.setSearchInput(searchValue));
  };

  const onChooseRecentItem = (item: string) => {
    setSearchValue(item);
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

  return {
    searchValue,
    isTouched,
    valueChangeHandler,
    setIsTouched,
    setSearchValue,
    reset,
    submitHandler,
    searchInputRef,
    filterRecentItems,
    onChooseRecentItem,
    onDeleteRecentItem,
    onClearRecentItems
  };
};

export default useInput;
