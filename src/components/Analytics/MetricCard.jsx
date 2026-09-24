import { Box, Card, CardContent, Typography } from "@mui/material";

const MetricCard = ({ icon: Icon, label, value, accentColor = "secondary.main" }) => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(65,90,119,0.10)",
            flexShrink: 0,
          }}
        >
          <Icon sx={{ color: accentColor, fontSize: 24 }} aria-hidden="true" />
        </Box>
        <Box sx={{ minWidth: 0 }}>
          <Typography variant="h5" sx={{ fontSize: "1.35rem", lineHeight: 1.2 }} noWrap>
            {value}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {label}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
