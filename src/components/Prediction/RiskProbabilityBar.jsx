import { Box, Typography } from "@mui/material";

const RiskProbabilityBar = ({ probability }) => {
  const percent = Math.min(100, Math.max(0, probability * 100));

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          height: 12,
          borderRadius: 6,
          background: "linear-gradient(90deg, #2E7D32 0%, #ED6C02 50%, #D32F2F 100%)",
          mb: 1,
        }}
        role="img"
        aria-label={`Risk probability gauge at ${percent.toFixed(1)} percent`}
      >
        <Box
          sx={{
            position: "absolute",
            top: -5,
            left: `calc(${percent}% - 11px)`,
            width: 22,
            height: 22,
            borderRadius: "50%",
            backgroundColor: "#FFFFFF",
            border: "3px solid",
            borderColor: "primary.main",
            boxShadow: "0 2px 8px rgba(13,27,42,0.3)",
            transition: "left 0.8s ease",
          }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="caption" color="text.secondary">
          0%
        </Typography>
        <Typography variant="caption" color="text.secondary">
          100%
        </Typography>
      </Box>
    </Box>
  );
};

export default RiskProbabilityBar;
