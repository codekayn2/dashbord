import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./chart.scss";

const data = [
  {
    name: "СІЧЕНЬ",
    SB: 4000,
    TA: 2400,
    amt: 2400,
  },
  {
    name: "ЛЮТИЙ",
    SB: 3000,
    TA: 1398,
    amt: 2210,
  },
  {
    name: "БЕРЕЗЕНЬ",
    SB: 2000,
    TA: 9800,
    amt: 2290,
  },
  {
    name: "КВІТЕНЬ",
    SB: 2780,
    TA: 3908,
    amt: 2000,
  },
  {
    name: "ТРАВЕНЬ",
    SB: 1890,
    TA: 4800,
    amt: 2181,
  },
  {
    name: "ЧЕРВЕНЬ",
    SB: 2390,
    TA: 3800,
    amt: 2500,
  },
  {
    name: "ЛИПЕНЬ",
    SB: 3490,
    TA: 4300,
    amt: 2100,
  },
];
const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Останні 6 місяців (дохід)</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <XAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="SB" fill="#8884d8" />
          <Bar dataKey="TA" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
