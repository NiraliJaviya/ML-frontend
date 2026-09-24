import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import PageContainer from "../../components/Common/PageContainer";

const features = [
  "Age",
  "Income",
  "Loan Amount",
  "Credit Score",
  "Interest Rate",
  "Loan Term",
  "DTI Ratio",
  "Employment Type",
  "Education",
  "Loan Purpose",
];

const ModelSection = () => {
  return (
    <PageContainer sx={{ backgroundColor: "background.paper" }}>
      <Grid container spacing={5} alignItems="center">
        <Grid size={{ xs: 12, md: 5 }}>
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{
              width: 64,
              height: 64,
              borderRadius: "16px",
              background: "linear-gradient(135deg, #0D1B2A 0%, #415A77 100%)",
              mb: 3,
            }}
          >
            <PsychologyRoundedIcon sx={{ color: "#FFFFFF", fontSize: 32 }} aria-hidden="true" />
          </Stack>
          <Typography variant="h3" sx={{ fontSize: { xs: "1.6rem", md: "2rem" }, mb: 2 }}>
            Powered by Machine Learning
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1.05rem" }}>
            LoanGuard uses borrower, financial, credit, employment and loan information to estimate
            default probability.
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.25 }}>
            {features.map((feature) => (
              <Chip
                key={feature}
                label={feature}
                sx={{
                  backgroundColor: "rgba(65,90,119,0.08)",
                  color: "text.primary",
                  fontWeight: 600,
                  px: 0.5,
                  py: 2.4,
                  fontSize: "0.9rem",
                }}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default ModelSection;
