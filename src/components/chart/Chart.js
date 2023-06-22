import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./chart.css"

export default function Chart() {
  const data = [
    {
      name: "Jan",
      expensis: 7880,
      return: 6888,
      total: 12400,
    },
    {
      name: "Feb",
      expensis: 7900,
      return: 8400,
      total: 17400,
    },
    {
      name: "March",
      expensis: 11000,
      return: 9400,
      total: 11400,
    },
    {
      name: "April",
      expensis: 5522,
      return: 4400,
      total: 13400,
    },
    {
      name: "May",
      expensis: 2222,
      return: 3400,
      total: 14400,
    },
    {
      name: "June",
      expensis: 8000,
      return: 6400,
      total: 12330,
    },
    {
      name: "July",
      expensis: 7522,
      return: 9400,
      total: 12400,
    },
  ];
  return (
    <div className="chartContainer">
    <AreaChart
      width={830}
      height={350}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorRv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="expensis"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
      <Area
        type="monotone"
        dataKey="return"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorRv)"
      />
      <Area
        type="monotone"
        dataKey="total"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
    </AreaChart>
    </div>
  );
}
