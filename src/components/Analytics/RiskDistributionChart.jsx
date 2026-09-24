import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent, Typography } from "@mui/material";

const COLORS = {
  "Low Risk": "#2E7D32",
  "Moderate Risk": "#ED6C02",
  "High Risk": "#D32F2F",
};

const RiskDistributionChart = ({ data }) => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Risk Distribution
        </Typography>
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={65}
              outerRadius={95}
              paddingAngle={3}
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={COLORS[entry.name] || "#778DA9"} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} contentStyle={{ borderRadius: 10, border: "1px solid rgba(23,32,51,0.08)" }} />
            <Legend verticalAlign="bottom" iconType="circle" wrapperStyle={{ fontSize: 12 }} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RiskDistributionChart;
