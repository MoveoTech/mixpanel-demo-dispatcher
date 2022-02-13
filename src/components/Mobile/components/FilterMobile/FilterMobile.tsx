import {
  Body,
  ContainerFilter,
  FilterIcon,
  Row,
  SortByFilter,
  Title,
} from "./style";
import filterIcon from "../../../../assets/icons/filter.svg";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import FilterModal from "./FilterModal";

export interface FilterModalProps {
  sources: { name: string; value: string }[];
}

const FilterMobile = (props: FilterModalProps) => {
  const [isPaneOpen, setPaneOpen] = useState(false);
  const filtersState = useSelector((state: RootState) => state.filters);
  return (
    <ContainerFilter>
      <SortByFilter></SortByFilter>
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
          <Body>
            <Row>
              <p>Search in</p>
              <p>{filtersState.endpoint}</p>
            </Row>
            <FilterModal sources={props.sources} />
          </Body>
        }
      </SlidingPane>
    </ContainerFilter>
  );
};
export default FilterMobile;
