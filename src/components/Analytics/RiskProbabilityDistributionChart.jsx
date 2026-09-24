import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, Typography } from "@mui/material";
import { formatNumber } from "../../utils/formatters";

const RiskProbabilityDistributionChart = ({ data }) => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Risk Probability Distribution
        </Typography>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="riskProbabilityFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#415A77" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#415A77" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(23,32,51,0.08)" />
            <XAxis
              dataKey="bucket"
              tick={{ fontSize: 11, fill: "#667085" }}
              axisLine={false}
              tickLine={false}
              interval={1}
            />
            <YAxis tick={{ fontSize: 12, fill: "#667085" }} axisLine={false} tickLine={false} tickFormatter={formatNumber} />
            <Tooltip
              formatter={(value) => formatNumber(value)}
              contentStyle={{ borderRadius: 10, border: "1px solid rgba(23,32,51,0.08)" }}
            />
            <Area
              type="monotone"
              dataKey="count"
              stroke="#415A77"
              strokeWidth={2}
              fill="url(#riskProbabilityFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RiskProbabilityDistributionChart;
