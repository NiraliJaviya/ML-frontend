import { Box, Button, Typography } from "@mui/material";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";

const ErrorState = ({
  title = "Something went wrong",
  message = "Unable to complete this request. Please try again.",
  actionLabel = "Try again",
  onAction,
}) => {
  return (
    <Box
      role="alert"
      sx={{
        textAlign: "center",
        py: 7,
        px: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5,
      }}
    >
      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "error.light",
          mb: 1,
        }}
      >
        <ErrorOutlineRoundedIcon sx={{ fontSize: 30, color: "error.main" }} aria-hidden="true" />
      </Box>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 360 }}>
        {message}
      </Typography>
      {onAction && (
        <Button variant="contained" color="error" onClick={onAction} sx={{ mt: 1.5 }}>
          {actionLabel}
        </Button>
      )}
    </Box>
  );
};

export default ErrorState;
