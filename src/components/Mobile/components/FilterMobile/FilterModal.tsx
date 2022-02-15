import {
  Body,
  Container,
  FilterContainer,
  Footer,
  Row,
  RowDisabled,
  Select,
  TitleFilter,
} from "./style";
import backIcon from "../../../../assets/icons/back.svg";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { RootState } from "../../../../store";
import { filtersActions } from "../../../../store/slicers/filtersSlice";
import Button from "../../../Button/Button";
import {
  ENDPOINTS,
  FILTERS,
  SIZE_TYPE,
  VARIANT,
} from "../../../../utils/types";
import DateFilter from "../../../Datefilter/DateFilter";
import { convertDateToDatePicker } from "../../../../utils/utils";

export interface FilterModalProps {
  name: string;
  value: string;
  options: { name: string; value: string }[];
  onCloseModal: () => void;
  disabled: Boolean;
}

const FilterModal = (props: FilterModalProps) => {
  const filtersState: { [key: string]: string } = useSelector(
    (state: RootState) => state.filters
  );
  const [isPaneOpen, setPaneOpen] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const [selected, setSelected] = useState(filtersState[props.value]);

  const dispatch = useDispatch();

  useEffect(() => {
    filtersState[props.value] && setIsSelect(true);
    if (
      (filtersState.dateTo || filtersState.dateFrom) &&
      props.name === FILTERS.dates
    ) {
      setIsSelect(true);
    }
  }, [filtersState[props.value]]);

  useEffect(() => {
    switch (props.value) {
      case FILTERS.endpoint:
        dispatch(filtersActions.changeEndpoint(selected));
        break;
      case FILTERS.country:
        dispatch(filtersActions.setCountry(selected));
        break;
      case FILTERS.category:
        dispatch(filtersActions.setCategory(selected));
        break;
      case FILTERS.sourceTopheadlines:
        dispatch(filtersActions.setSourceTopheadlines(selected));
        break;
      case FILTERS.sourceEverything:
        dispatch(filtersActions.setSourceEverything(selected));
        break;
      case FILTERS.language:
        dispatch(filtersActions.setLanguage(selected));
        break;
    }
  }, [selected]);

  const handleCloseModal = () => {
    setPaneOpen(false);
    props.onCloseModal();
  };
  const handleSelectFilter = (option: { name: string; value: string }) => {
    if (
      option.value === selected &&
      option.value !== ENDPOINTS.topheadlines &&
      option.value !== ENDPOINTS.everything
    ) {
      setSelected("");
      setIsSelect(false);
    } else {
      setSelected(option.value);
    }
  };

  return (
    <FilterContainer disabled={props.disabled} selected={false}>
      {!props.disabled && props.name !== FILTERS.dates ? (
        <Row
          onClick={() => {
            setPaneOpen(true);
          }}
        >
          <p>{props.name}</p>
          <Select select={isSelect}>
            {filtersState[props.value]
              ? props.options.find(
                  ({ value }) => value === filtersState[props.value]
                )?.name
              : "All"}
          </Select>
        </Row>
      ) : props.name === FILTERS.dates ? (
        <Row>
          <p>{props.name}</p>
          <Select select={isSelect}>
            {filtersState.dateFrom && filtersState.dateTo
              ? `${convertDateToDatePicker(
                  filtersState.dateFrom
                )} - ${convertDateToDatePicker(filtersState.dateTo)}`
              : filtersState.dateFrom
              ? convertDateToDatePicker(filtersState.dateFrom)
              : "All"}
          </Select>
        </Row>
      ) : (
        <RowDisabled>
          <p>{props.name}</p>
          <Select select={isSelect}>
            {filtersState[props.value]
              ? props.options.find(
                  ({ value }) => value === filtersState[props.value]
                )?.name
              : "All"}
          </Select>
        </RowDisabled>
      )}
      {props.name === FILTERS.dates && (
        <DateFilter
          name={FILTERS.dates}
          portal
          onChangeValue={(
            startDate: string | undefined,
            endDate: string | undefined
          ) => {
            setIsSelect(true);
            dispatch(filtersActions.setDateFrom(startDate));
            dispatch(filtersActions.setDateTo(endDate));
          }}
        ></DateFilter>
      )}
      {!props.disabled && props.name !== FILTERS.dates && (
        <SlidingPane
          closeIcon={<img src={backIcon} />}
          isOpen={isPaneOpen}
          width={"80%"}
          title={<TitleFilter>{props.name}</TitleFilter>}
          onRequestClose={() => {
            setPaneOpen(false);
          }}
        >
          <Container>
            <Body>
              {props.options &&
                props.options.map((option: any, i) => {
                  return (
                    <FilterContainer
                      disabled={false}
                      key={i}
                      onClick={() => handleSelectFilter(option)}
                      selected={selected === option.value}
                    >
                      <Row>
                        <p>{option.name}</p>
                      </Row>
                    </FilterContainer>
                  );
                })}
            </Body>
            <Footer>
              <Button
                size={SIZE_TYPE.small}
                variant={VARIANT.primary}
                onClick={handleCloseModal}
              >
                VIEW RESULTS
              </Button>
            </Footer>
          </Container>
        </SlidingPane>
      )}
    </FilterContainer>
  );
};

export default FilterModal;
