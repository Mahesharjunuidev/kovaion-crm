'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const salesData = [
  {
    name: 'Jan',
    revenue: 4000,
    profit: 2400,
  },
  {
    name: 'Feb',
    revenue: 3000,
    profit: 1398,
  },
  {
    name: 'Mar',
    revenue: 9800,
    profit: 2000,
  },
  {
    name: 'Apr',
    revenue: 3908,
    profit: 2780,
  },
  {
    name: 'May',
    revenue: 4800,
    profit: 1890,
  },
  {
    name: 'Jun',
    revenue: 3800,
    profit: 2390,
  },
];

const BarChartComponent = () => {
  return (
        <div style={{ width: '100%', height: 300 }}>
    <ResponsiveContainer width="100%" height="100%">
     <BarChart
  width={500}
  height={300}
  data={salesData}
  margin={{ right: 30 }}
>
  <defs>
    <linearGradient id="gradientRevenue" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#FF70EC" stopOpacity={1} />
      <stop offset="100%" stopColor="#fff" stopOpacity={1} />
    </linearGradient>
    <linearGradient id="gradientProfit" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#5E39DD" stopOpacity={1} />
      <stop offset="100%" stopColor="#fff" stopOpacity={1} />
    </linearGradient>
  </defs>

  <CartesianGrid strokeDasharray="3 3" />
  <XAxis
    dataKey="name"
    tick={{ fontSize: 14, fontFamily: "Poppins", fill: "#333" }}
  />
  <YAxis
    tick={{ fontSize: 14, fontFamily: "Inter", fill: "#333" }}
  />
  <Tooltip content={<CustomTooltip />} />
  <Legend />

  <Bar
    dataKey="revenue"
    fill="url(#gradientRevenue)"
    radius={[10, 10, 0, 0]} // top-left, top-right, bottom-right, bottom-left
  />
  <Bar
    dataKey="profit"
    fill="url(#gradientProfit)"
    radius={[10, 10, 0, 0]}
  />
</BarChart>

    </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-white">
        <p className="text-medium text-lg ">{label}</p>
        <p className="text-sm text-blue-400">
          Revenue:
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Profit:
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
};