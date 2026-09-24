import { Box, Button, Card, Chip, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import RiskGauge from "../../components/Prediction/RiskGauge";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0D1B2A 0%, #1B263B 55%, #415A77 100%)",
        color: "#FFFFFF",
      }}
    >
      {/* subtle decorative shapes */}
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: -120,
          right: -80,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(127,224,192,0.18) 0%, rgba(127,224,192,0) 70%)",
        }}
      />
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          bottom: -140,
          left: -100,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(119,141,169,0.20) 0%, rgba(119,141,169,0) 70%)",
        }}
      />

      <Box sx={{ maxWidth: "xl", mx: "auto", px: { xs: 3, md: 6 }, py: { xs: 8, md: 12 }, position: "relative" }}>
        <Grid container spacing={{ xs: 6, md: 4 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Chip
              icon={<BoltRoundedIcon sx={{ color: "#7FE0C0 !important" }} />}
              label="Machine Learning Risk Engine"
              sx={{
                backgroundColor: "rgba(255,255,255,0.10)",
                color: "#FFFFFF",
                mb: 3,
                fontWeight: 600,
              }}
            />
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3.25rem" }, lineHeight: 1.15, mb: 3 }}
            >
              Predict Loan Default Risk with AI
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "rgba(255,255,255,0.78)", fontSize: "1.1rem", maxWidth: 520, mb: 4 }}
            >
              Analyze borrower and loan information and estimate the probability of loan default
              using machine learning.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                component={Link}
                to="/predict"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  backgroundColor: "#FFFFFF",
                  color: "primary.main",
                  "&:hover": { backgroundColor: "#EDEFF3" },
                }}
              >
                Start Assessment
              </Button>
              <Button
                component={Link}
                to="/analytics"
                variant="outlined"
                size="large"
                startIcon={<InsightsRoundedIcon />}
                sx={{
                  color: "#FFFFFF",
                  borderColor: "rgba(255,255,255,0.4)",
                  "&:hover": { borderColor: "#FFFFFF", backgroundColor: "rgba(255,255,255,0.06)" },
                }}
              >
                Explore Analytics
              </Button>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                p: { xs: 3, md: 4 },
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.14)",
                backdropFilter: "blur(6px)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
              }}
            >
              <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
                <Typography variant="overline" sx={{ color: "rgba(255,255,255,0.6)" }}>
                  AI Risk Score
                </Typography>
                <Chip
                  size="small"
                  label="Sample data"
                  sx={{ backgroundColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.75)" }}
                />
              </Stack>

              <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                <RiskGauge probability={0.2884} variant="dark" size={190} />
              </Box>

              <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" sx={{ mb: 3 }}>
                <CheckCircleRoundedIcon sx={{ color: "#7FE0C0", fontSize: 20 }} />
                <Typography variant="subtitle1" sx={{ color: "#FFFFFF" }}>
                  Low Risk
                </Typography>
              </Stack>

              <Typography
                variant="caption"
                sx={{ color: "rgba(255,255,255,0.5)", display: "block", textAlign: "center" }}
              >
                Demo prediction shown for illustration — connect the FastAPI backend for live results.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroSection;
