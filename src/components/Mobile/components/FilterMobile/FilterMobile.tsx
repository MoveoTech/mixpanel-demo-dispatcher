import {
  Body,
  Container,
  ContainerFilter,
  FilterIcon,
  Footer,
  Title,
} from "./style";
import filterIcon from "../../../../assets/icons/filter.svg";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import FilterModal from "./FilterModal";
import {
  countryOptions,
  languageOptions,
  categoryOptions,
  sortByOptions,
  filterNavbarOptions,
} from "../../../../pages/MockData";
import { ENDPOINTS, Option, SIZE_TYPE, VARIANT } from "../../../../utils/types";
import Button from "../../../Button/Button";

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
    { name: "Sort By", value: "sortBy", options: sortByOptions },
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
  }, [filtersState.endpoint, props.sourcesEverything,props.sourcesTopheadlines]);

  const checkDisabled = (filterValue: string) => {
    return (filtersState.country || filtersState.category) &&
      filterValue === "sourceTopheadlines"
      ? true
      : filtersState.sourceTopheadlines &&
        (filterValue === "category" || filterValue === "country")
      ? true
      : false;
  };
  return (
    <ContainerFilter>
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
  );
};
export default FilterMobile;
