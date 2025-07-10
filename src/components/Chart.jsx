'use client';

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const productSales = [
  { name: 'Jan', product1: 4000, product2: 2400 },
  { name: 'Feb', product1: 3000, product2: 2210 },
  { name: 'Mar', product1: 2000, product2: 2290 },
  { name: 'Apr', product1: 2780, product2: 2000 },
  { name: 'May', product1: 1890, product2: 2181 },
  { name: 'Jun', product1: 2390, product2: 2500 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-3 bg-dark text-white rounded shadow-sm">
        <p className="mb-1 fw-bold">{label}</p>
        <p className="mb-0">Product 1: ${payload[0].value}</p>
        <p className="mb-0">Product 2: ${payload[1].value}</p>
      </div>
    );
  }
  return null;
};

const AreaChartComponent = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={productSales} margin={{ right: 30 }}>
  <defs>
    <linearGradient id="gradientProduct1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#FF70EC" stopOpacity={0.7} />
      <stop offset="100%" stopColor="#fff" stopOpacity={0.1} />
    </linearGradient>

    <linearGradient id="gradientProduct2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#A388FF" stopOpacity={0.7} />
      <stop offset="100%" stopColor="#fff" stopOpacity={0.1} />
    </linearGradient>
  </defs>

  <XAxis
    dataKey="name"
    tick={{
      fontSize: 14,
      fontFamily: "Poppins",
      fill: "#333"
    }}
  />
  <YAxis
    tick={{
      fontSize: 14,
      fontFamily: "Inter",
      fill: "#333"
    }}
  />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip content={<CustomTooltip />} />
  <Legend />

  <Area
    type="monotone"
    dataKey="product1"
    stroke="#F01AA5"
    fill="url(#gradientProduct1)"
    stackId="1"
  />
  <Area
    type="monotone"
    dataKey="product2"
    stroke="#029BF7"
    fill="url(#gradientProduct2)"
    stackId="1"
  />
</AreaChart>

      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartComponent;
