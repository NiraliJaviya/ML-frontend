import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, Typography } from "@mui/material";
import { formatNumber } from "../../utils/formatters";

const COLORS = ["#2E7D32", "#D32F2F"];

const DefaultChart = ({ data }) => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Default vs No Default
        </Typography>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(23,32,51,0.08)" />
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#667085" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12, fill: "#667085" }} axisLine={false} tickLine={false} tickFormatter={formatNumber} />
            <Tooltip formatter={(value) => formatNumber(value)} contentStyle={{ borderRadius: 10, border: "1px solid rgba(23,32,51,0.08)" }} />
            <Bar dataKey="value" radius={[8, 8, 0, 0]} maxBarSize={80}>
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default DefaultChart;
