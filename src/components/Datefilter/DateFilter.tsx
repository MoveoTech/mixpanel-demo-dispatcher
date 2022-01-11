import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Dropdown, Header } from "../Filter/style";
import dateIcon from "../../assets/icons/date.svg";
import { useOnClickOutside } from "usehooks-ts";
import { convertDateFromUi } from "../../utils/utils";

export interface DateFilterProps {
  name: string;
  onChangeValue: (startDate: any, EndDate: any) => void;
}

const DateFilter = (props: DateFilterProps) => {
  const [startDate, setStartDate] = useState<any>('');
  const [endDate, setEndDate] = useState<any>('');
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const handleClickOutside = () => {
    setIsActive(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  function handleDateChange(date: any) {
    setStartDate(date[0]);
    setEndDate(date[1]);
    let start, end;
    if(date[0]){
      start = convertDateFromUi((date[0]).toString());
    } else {
      start ='';
    }
    if(date[1]){
      end = convertDateFromUi((date[1]).toString());
    }else {
      end='';
    }
    props.onChangeValue(start, end);
  }

  return (
    <Dropdown ref={ref}>
      <Header onClick={() => setIsActive(!isActive)}>
        {props.name}
        <img src={dateIcon} />
      </Header>
      {isActive && (
        <DatePicker
          selectsRange
          onChange={handleDateChange}
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
