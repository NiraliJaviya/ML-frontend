import { Box, Card, CardContent, Typography } from "@mui/material";

const StatCard = ({ icon: Icon, value, label, accentColor = "secondary.main" }) => {
  return (
    <Card
      sx={{
        height: "100%",
        p: 1,
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 16px 32px rgba(13,27,42,0.12)",
        },
      }}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        <Box
          sx={{
            width: 46,
            height: 46,
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(65,90,119,0.10)",
          }}
        >
          <Icon sx={{ color: accentColor, fontSize: 24 }} aria-hidden="true" />
        </Box>
        <Typography variant="h4" sx={{ fontSize: { xs: "1.5rem", md: "1.85rem" } }}>
          {value}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard;
