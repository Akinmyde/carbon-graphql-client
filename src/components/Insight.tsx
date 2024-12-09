import { useMemo } from "react";
import { Consumption } from "../types";

interface Props {
  date: string[];
  consumptions: Consumption[];
}

const Insight = ({ date, consumptions }: Props) => {
  const [startDate, endDate] = date;

  const totalConsumption = useMemo(() => {
    return consumptions
      .reduce((sum, consumption) => sum + consumption.value, 0)
      .toFixed(2);
  }, [consumptions]);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-medium text-gray-700">Total Count</h2>
        <p className="mt-2 text-2xl font-bold text-indigo-600">
          {consumptions.length}
        </p>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-medium text-gray-700">Total Consumption</h2>
        <p className="mt-2 text-2xl font-bold text-indigo-600">
          {totalConsumption} Carbons
        </p>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-medium text-gray-700">
          Average Consumption
        </h2>
        <p className="mt-2 text-2xl font-bold text-indigo-600">
          {(Number(totalConsumption) / consumptions.length || 0).toFixed(2)} Carbons
        </p>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-medium text-gray-700">Date Range</h2>
        <p className="mt-2 text-indigo-600">
          {startDate || "Start"} - {endDate || "End"}
        </p>
      </div>
    </div>
  );
};

export default Insight;
