import { Box, Typography } from "@mui/material";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

const Logo = ({ size = "medium", light = false }) => {
  const dims = size === "small" ? 32 : size === "large" ? 48 : 38;
  const fontSize = size === "small" ? "1rem" : size === "large" ? "1.5rem" : "1.15rem";

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
      <Box
        sx={{
          width: dims,
          height: dims,
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "linear-gradient(135deg, #0D1B2A 0%, #415A77 100%)",
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        <ShieldRoundedIcon sx={{ color: "#FFFFFF", fontSize: dims * 0.62 }} />
        <TrendingUpRoundedIcon
          sx={{
            color: "#7FE0C0",
            fontSize: dims * 0.4,
            position: "absolute",
            bottom: -2,
            right: -2,
            backgroundColor: "#0D1B2A",
            borderRadius: "50%",
            padding: "2px",
          }}
        />
      </Box>
      <Typography
        variant="h6"
        component="span"
        sx={{
          fontWeight: 800,
          fontSize,
          letterSpacing: "-0.01em",
          color: light ? "#FFFFFF" : "text.primary",
          lineHeight: 1,
        }}
      >
        LoanGuard
      </Typography>
    </Box>
  );
};

export default Logo;
