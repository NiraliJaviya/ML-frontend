import { Box, CircularProgress, Typography } from "@mui/material";
import { getRiskLevel, riskLevelMeta, formatPercent } from "../../utils/formatters";

const colorMap = {
  Low: "#4CAF50",
  Moderate: "#ED6C02",
  High: "#D32F2F",
};

const RiskGauge = ({ probability, size = 200, variant = "light" }) => {
  const percent = Math.round(probability * 100);
  const level = getRiskLevel(probability);
  const meta = riskLevelMeta[level];
  const trackColor = variant === "dark" ? "rgba(255,255,255,0.14)" : "rgba(23,32,51,0.08)";
  const textColor = variant === "dark" ? "#FFFFFF" : "text.primary";
  const subTextColor = variant === "dark" ? "rgba(255,255,255,0.6)" : "text.secondary";

  return (
    <Box
      sx={{ position: "relative", display: "inline-flex" }}
      role="img"
      aria-label={`Estimated default probability ${formatPercent(probability)}, ${meta.label}`}
    >
      <CircularProgress
        variant="determinate"
        value={100}
        size={size}
        thickness={4}
        sx={{ color: trackColor, position: "absolute" }}
      />
      <CircularProgress
        variant="determinate"
        value={percent}
        size={size}
        thickness={4}
        sx={{ color: colorMap[level], transition: "all 0.8s ease" }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontWeight: 800, fontSize: size * 0.16, color: textColor, lineHeight: 1 }}>
          {formatPercent(probability)}
        </Typography>
        <Typography variant="caption" sx={{ color: subTextColor, mt: 0.5 }}>
          Default risk
        </Typography>
      </Box>
    </Box>
  );
};

export default RiskGauge;
