import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Consumption } from "../types";

interface Props {
  consumptions: Consumption[];
}

const Chart = ({ consumptions }: Props) => {
  const formattedData = consumptions.map(item => ({
    datetime: new Date(item.timestamp).toUTCString(),
    value: item.value,
  }));

  return (
    <div className="w-full h-96">
      <ResponsiveContainer>
        <LineChart
          className="w-screen"
          data={formattedData}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="datetime" />
          <YAxis dataKey={'value'} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
