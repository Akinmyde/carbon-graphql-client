import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  onFilter: (start: string, end: string) => void;
  setSelectedDate: (
    value: string[] | ((prevVar: string[]) => string[])
  ) => void;
}
const DateFilter = ({ onFilter, setSelectedDate }: Props) => {
  const [endDate, setEndDate] = useState(new Date('2024-07-01'));
  const [startDate, setStartDate] = useState(new Date('2024-07-01'));

  useEffect(() => {
    setSelectedDate([startDate.toDateString(), endDate.toDateString()]);
    onFilter(getDate(startDate), getDate(endDate))
  }, [])

  const getDate = (date: Date): string => date.toISOString().split('T')[0]  

  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <label
          htmlFor="start-date"
          className="block text-sm font-medium text-gray-700"
        >
          Start Date
        </label>
        <DatePicker
          selected={startDate}
          minDate={new Date('2024-07-01')}
          onChange={(date) => setStartDate(date as Date)}
          dateFormat="yyyy-MM-dd"
          className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">
          End Date
        </label>
        <DatePicker
          selected={endDate}
          maxDate={new Date('2024-30-09')}
          onChange={(date) => setEndDate(date as Date)}
          minDate={startDate}
          dateFormat="yyyy-MM-dd"
          className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
        disabled={!startDate || !endDate || startDate > endDate}
        onClick={() => {
          setSelectedDate([startDate.toDateString(), endDate.toDateString()]);
          onFilter(getDate(startDate), getDate(endDate));
        }}
        className="mt-6 bg-indigo-500 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-600"
      >
        Update Chart
      </button>
    </div>
  );
};

export default DateFilter;
