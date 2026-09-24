import { Box, CircularProgress, Typography } from "@mui/material";

const LoadingState = ({ message = "Loading...", minHeight = 240 }) => {
  return (
    <Box
      role="status"
      aria-live="polite"
      sx={{
        minHeight,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        py: 6,
      }}
    >
      <CircularProgress size={40} thickness={4} color="secondary" />
      <Typography variant="body2" color="text.secondary">
        {message}
      </Typography>
    </Box>
  );
};

export default LoadingState;
