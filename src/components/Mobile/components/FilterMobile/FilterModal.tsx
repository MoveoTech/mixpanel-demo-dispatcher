import { FiltersList, Row } from "./style";
import backIcon from "../../../../assets/icons/back.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { RootState } from "../../../../store";
import {
  countryOptions,
  languageOptions,
  categoryOptions,
  sortByOptions,
  filterNavbarOptions,
} from "../../../../pages/MockData";
import { filtersActions } from "../../../../store/slicers/filtersSlice";
import { ENDPOINTS } from "../../../../utils/types";
import { FilterModalProps } from "./FilterMobile";

const filtersTopHeadlines = [
  { name: "Country", value: "country" },
  { name: "Category", value: "category" },
  { name: "Sources", value: "source" },
];

const FilterModal = (props: FilterModalProps) => {
  const [isPaneOpen, setPaneOpen] = useState(false);
  const dispatch = useDispatch();
  const filtersState: { [key: string]: string } = useSelector(
    (state: RootState) => state.filters
  );
  return (
    <FiltersList>
      {filtersState.endpoint === ENDPOINTS.topheadlines ? (
        filtersTopHeadlines.map((filter, index) => {
          const options =
            filter.value === "country"
              ? countryOptions
              : filter.value === "category"
              ? categoryOptions
              : filter.value === "language"
              ? languageOptions
              : filter.value === "source" && props.sources;
          return (
            <>
              <Row
                onClick={() => {
                  setPaneOpen(true);
                }}
              >
                <p>{filter.name}</p>
                <p>{filtersState[filter.value]}</p>
              </Row>
              <SlidingPane
                closeIcon={<img src={backIcon} />}
                isOpen={isPaneOpen}
                width={"80%"}
                title={<p>{filter.name}</p>}
                onRequestClose={() => {
                  setPaneOpen(false);
                }}
              >
                {options &&
                  options.map((option: any) => {
                    return (
                      <p
                      // onClick={() =>
                      //   dispatch(filtersActions.setCountry(option.name))
                      // }
                      >
                        {option.name}
                      </p>
                    );
                  })}
              </SlidingPane>
            </>
          );
        })
      ) : (
        <></>
      )}
    </FiltersList>
  );
};

export default FilterModal;
