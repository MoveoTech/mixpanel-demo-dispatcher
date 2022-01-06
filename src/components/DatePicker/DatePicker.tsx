import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateFilter = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  function handleDateChange(date: any) {
    if (!startDate && !endDate) {
      setStartDate(date);
    } else if (startDate && !endDate) {
      setEndDate(date);
    }

    if (startDate && endDate) {
      setStartDate(date);
      setEndDate(null);
    }
  }

  return (
    <div>
      <DatePicker
        onChange={(date) => handleDateChange(date)}
        selectsStart={true}
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        inline={true}
      />
    </div>
  );
};
export default DateFilter;
