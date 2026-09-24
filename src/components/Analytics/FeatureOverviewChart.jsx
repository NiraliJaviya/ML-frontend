import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, Typography } from "@mui/material";

const FeatureOverviewChart = ({ data }) => {
  const chartData = [...data].sort((a, b) => b.importance - a.importance);

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Feature Overview
        </Typography>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 8, right: 24, left: 8, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="rgba(23,32,51,0.08)" />
            <XAxis
              type="number"
              tickFormatter={(v) => `${Math.round(v * 100)}%`}
              tick={{ fontSize: 11, fill: "#667085" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              type="category"
              dataKey="feature"
              width={110}
              tick={{ fontSize: 12, fill: "#172033" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              formatter={(value) => `${Math.round(value * 100)}%`}
              contentStyle={{ borderRadius: 10, border: "1px solid rgba(23,32,51,0.08)" }}
            />
            <Bar dataKey="importance" fill="#0D1B2A" radius={[0, 6, 6, 0]} maxBarSize={18} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default FeatureOverviewChart;
