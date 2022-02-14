import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { Dropdown, Header } from "./style";
import dateIcon from "../../assets/icons/date.svg";
import { convertDateFromUi } from "../../utils/utils";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { Dropdown, Header } from "../Filter/style";

export interface DateFilterProps {
  name: string;
  onChangeValue: (
    startDate: string | undefined,
    EndDate: string | undefined
  ) => void;
}
type dateType = null | Date;

const DateFilter = (props: DateFilterProps) => {
  const [startDate, setStartDate] = useState<dateType>();
  const [endDate, setEndDate] = useState<dateType>();
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

  return (
    <Dropdown border={false} ref={ref}>
      <Header disabled={false} onClick={() => setIsActive(!isActive)}>
        {props.name}
        <img alt="dateIcon" src={dateIcon} />
      </Header>
      {isActive && (
        <DatePicker
          selectsRange
          onChange={(e) => handleDateChange(e)}
          selectsStart={true}
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          inline
        />
      )}
    </Dropdown>
  );
};
export default DateFilter;
