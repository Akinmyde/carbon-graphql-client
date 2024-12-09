import { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import Chart from "./components/Chart";
import Insight from "./components/Insight";
import DateFilter from "./components/DateFilter";
import { ConsumptionQueryResponse } from "./types";

const CONSUMPTION_QUERY = gql`
  query Consumptions($startDate: String!, $endDate: String!) {
    consumptions(startDate: $startDate, endDate: $endDate) {
      id
      timestamp
      value
    }
  }
`;

const App = () => {
  const [selectedDate, setSelectedDate] = useState<string[]>([]);

  const [fetchData, { loading, error, data }] =
    useLazyQuery<ConsumptionQueryResponse>(CONSUMPTION_QUERY);

  console.log(data?.consumptions.length);

  const handleSearch = (startDate: string, endDate: string) =>
    fetchData({ variables: { startDate, endDate } });

  return (
    <div className="py-7 max-w-full mx-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">
          Monitor your consumption over time with the interactive chart below.
        </p>
      </header>
      <Insight consumptions={data?.consumptions || []} date={selectedDate} />

      <DateFilter setSelectedDate={setSelectedDate} onFilter={handleSearch} />
      {error && <p>There is an error while fetching</p>}
      {loading ? <p>Loading....</p> : <Chart consumptions={data?.consumptions || []} />}
    </div>
  );
};

export default App;
