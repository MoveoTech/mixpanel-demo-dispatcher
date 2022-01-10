import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Dropdown, Header } from "../Filter/style";
import dateIcon from '../../assets/icons/date.svg';
import { useOnClickOutside } from "usehooks-ts";

export interface DateFilterProps {
  name: string
  onChangeValue: (startDate: Date | null, EndDate:Date | null) => void;
}

const DateFilter = (props: DateFilterProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const handleClickOutside = () => {
    setIsActive(false);
  };

  useOnClickOutside(ref, handleClickOutside);
  
  function handleDateChange(date: any) {
      setStartDate(date[0]);
      setEndDate(date[1]);
      props.onChangeValue(startDate,endDate);
  }

  return (
    <Dropdown ref={ref}>
      <Header onClick={() => setIsActive(!isActive)}>
        {props.name}
        <img src={dateIcon} />
      </Header>
      {isActive && <DatePicker
       selectsRange 
       onChange={handleDateChange}
        selectsStart={true}
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        inline
        
      />}
    </Dropdown>
  );
};
export default DateFilter;
