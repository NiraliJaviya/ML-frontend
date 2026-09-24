import { Box, Button, Typography } from "@mui/material";
import InboxRoundedIcon from "@mui/icons-material/InboxRounded";

const EmptyState = ({
  icon: Icon = InboxRoundedIcon,
  title = "Nothing here yet",
  message = "No data available.",
  actionLabel,
  onAction,
}) => {
  return (
    <Box
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
          backgroundColor: "rgba(65,90,119,0.08)",
          mb: 1,
        }}
      >
        <Icon sx={{ fontSize: 30, color: "secondary.main" }} aria-hidden="true" />
      </Box>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 360 }}>
        {message}
      </Typography>
      {actionLabel && onAction && (
        <Button variant="contained" onClick={onAction} sx={{ mt: 1.5 }}>
          {actionLabel}
        </Button>
      )}
    </Box>
  );
};

export default EmptyState;
