import {
  Body,
  Container,
  ContainerFilter,
  DropdownMobile,
  FilterIcon,
  Footer,
  HeaderMobile,
  Title,
} from "./style";
import filterIcon from "../../../../assets/icons/filter.svg";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import FilterModal from "./FilterModal";
import dropdownIcon from "../../../../assets/icons/dropdown.svg";
import {
  countryOptions,
  languageOptions,
  categoryOptions,
  sortByOptions,
  filterNavbarOptions,
} from "../../../../pages/MockData";
import { ENDPOINTS, Option, SIZE_TYPE, VARIANT } from "../../../../utils/types";
import Button from "../../../Button/Button";
import { Content, DropdownIcon } from "../../../Filter/style";
import FilterItem from "../../../Filter/FilterItem";
import { filtersActions } from "../../../../store/slicers/filtersSlice";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import { TextMsg } from "../../../../pages/Homepage/style";

export interface FilterMobileProps {
  sourcesTopheadlines: Option[];
  sourcesEverything: Option[];
}
const FilterMobile = (props: FilterMobileProps) => {
  const [isPaneOpen, setPaneOpen] = useState(false);
  const filtersState = useSelector((state: RootState) => state.filters);
  const [filters, setFilters] = useState<
    { name: string; value: string; options: Option[] }[]
  >([]);
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState<String | undefined>("");
  const ref = useRef(null);

  const filtersTopHeadlines = [
    { name: "Search In", value: "endpoint", options: filterNavbarOptions },
    { name: "Country", value: "country", options: countryOptions },
    { name: "Category", value: "category", options: categoryOptions },
    {
      name: "Source",
      value: "sourceTopheadlines",
      options: props.sourcesTopheadlines,
    },
  ];

  const filtersEverything = [
    { name: "Search In", value: "endpoint", options: filterNavbarOptions },
    {
      name: "Source",
      value: "sourceEverything",
      options: props.sourcesEverything,
    },
    { name: "Language", value: "language", options: languageOptions },
    { name: "Dates", value: "", options: [] },
  ];
  useEffect(() => {
    filtersState.endpoint === ENDPOINTS.topheadlines
      ? setFilters(filtersTopHeadlines)
      : setFilters(filtersEverything);
  }, [
    filtersState.endpoint,
    props.sourcesEverything,
    props.sourcesTopheadlines,
  ]);

  useEffect(() => {
    if (filtersState.sortBy) {
      setSelected(
        sortByOptions.find(({ value }) => value === filtersState.sortBy)?.name
      );
    } else {
      setSelected("Sort By");
    }
  }, [sortByOptions]);

  const checkDisabled = (filterValue: string) => {
    return (filtersState.country || filtersState.category) &&
      filterValue === "sourceTopheadlines"
      ? true
      : filtersState.sourceTopheadlines &&
        (filterValue === "category" || filterValue === "country")
      ? true
      : false;
  };
  const handleChangeSortBy = (option: Option) => {
    if (option.name === selected) {
      setSelected(option.name);
      dispatch(filtersActions.setSortBy(""));
    } else {
      setSelected(option.name);
      setIsActive(false);
      dispatch(filtersActions.setSortBy(option.value));
    }
  };
  const handleClickOutside = () => {
    setIsActive(false);
  };
  useOnClickOutside(ref, handleClickOutside);
  return (
    <div>
      <ContainerFilter>
        {filtersState.endpoint !== ENDPOINTS.topheadlines ? (
          <DropdownMobile disabled={false} ref={ref}>
            <HeaderMobile
              disabled={false}
              onClick={() => setIsActive(!isActive)}
            >
              {selected}
              <DropdownIcon alt="dropdownIcon" src={dropdownIcon} />
            </HeaderMobile>
            {isActive && (
              <Content>
                {sortByOptions.map((option, index) => (
                  <FilterItem
                    key={index}
                    name={option.name}
                    selected={selected === option.name}
                    onFunc={() => handleChangeSortBy(option)}
                  />
                ))}
              </Content>
            )}
          </DropdownMobile>
        ) : (
          <div></div>
        )}
        <FilterIcon onClick={() => setPaneOpen(true)} src={filterIcon} />
        <SlidingPane
          closeIcon={<Title>Filter</Title>}
          isOpen={isPaneOpen}
          width={"80%"}
          title={<p></p>}
          onRequestClose={() => {
            setPaneOpen(false);
          }}
        >
          {
            <Container>
              <Body>
                <div>
                  {filters.map((filter, index) => {
                    return (
                      <FilterModal
                        key={index}
                        value={filter.value}
                        name={filter.name}
                        options={filter.options}
                        onCloseModal={() => setPaneOpen(false)}
                        disabled={checkDisabled(filter.value)}
                      />
                    );
                  })}
                  {filtersState.category || filtersState.country ? (
                    <TextMsg style={{paddingLeft:'19px'}}>
                      Be aware that you cant mix with source filter
                    </TextMsg>
                  ) : (
                    filtersState.sourceTopheadlines && (
                      <TextMsg style={{paddingLeft:'19px'}}>
                        Be aware that you cant mix with category or country
                        filter{" "}
                      </TextMsg>
                    )
                  )}
                </div>
              </Body>
              <Footer>
                <Button
                  size={SIZE_TYPE.small}
                  variant={VARIANT.primary}
                  onClick={() => setPaneOpen(false)}
                >
                  VIEW RESULTS
                </Button>
              </Footer>
            </Container>
          }
        </SlidingPane>
      </ContainerFilter>
    </div>
  );
};
export default FilterMobile;
