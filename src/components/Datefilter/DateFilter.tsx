import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dateIcon from "../../assets/icons/date.svg";
import { convertDateFromUi, convertDateToDatePicker } from "../../utils/utils";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { ContainerDatePicker, DateIcon, Dropdown, Header } from "../Filter/style";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { dateType } from "../../utils/types";

export interface DateFilterProps {
  name: string;
  portal?: boolean;
  onChangeValue: (
    startDate: string | undefined,
    EndDate: string | undefined
  ) => void;
}

const DateFilter = (props: DateFilterProps) => {
  const filtersState: { [key: string]: string } = useSelector(
    (state: RootState) => state.filters
  );
  const [startDate, setStartDate] = useState<dateType>(
    filtersState.dateFrom ? new Date(filtersState.dateFrom) : null
  );
  const [endDate, setEndDate] = useState<dateType>(
    filtersState.dateTo ? new Date(filtersState.dateTo) : null
  );
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const handleClickOutside = () => {
    setIsActive(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  function handleDateChange(date: dateType[]) {
    setStartDate(date[0]);
    setEndDate(date[1]);
    const start = date[0] ? convertDateFromUi(date[0].toString()) : "";
    const end = date[1] ? convertDateFromUi(date[1].toString()) : "";
    props.onChangeValue(start, end);
  }
  return !props.portal ? (
    <Dropdown  disabled={false} ref={ref}>
      <Header disabled={false} onClick={() => setIsActive(!isActive)}>
        {filtersState.dateFrom && filtersState.dateTo
          ? `${convertDateToDatePicker(
              filtersState.dateFrom
            )} - ${convertDateToDatePicker(filtersState.dateTo)}`
          : filtersState.dateFrom
          ? convertDateToDatePicker(filtersState.dateFrom)
          : props.name}
        <DateIcon alt="dateIcon" src={dateIcon} />
      </Header>
      {isActive && (
        <ContainerDatePicker>
          <DatePicker
            selectsRange
            onChange={(e) => handleDateChange(e)}
            startDate={startDate}
            endDate={endDate}
            inline
          />
        </ContainerDatePicker>
      )}
    </Dropdown>
  ) : (
    props.portal && (
      <DatePicker
        selectsRange
        onChange={(e) => handleDateChange(e)}
        startDate={startDate}
        endDate={endDate}
        withPortal={true}
      />
    )
  );
};
export default DateFilter;
