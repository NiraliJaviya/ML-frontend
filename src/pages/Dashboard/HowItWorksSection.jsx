import { Box, Grid, Typography } from "@mui/material";
import PageContainer from "../../components/Common/PageContainer";
import SectionHeader from "../../components/Common/SectionHeader";

const steps = [
  { number: "01", title: "Enter Applicant Details", description: "Provide borrower demographics and background information." },
  { number: "02", title: "Analyze Financial Profile", description: "Add income, credit, and debt information for the applicant." },
  { number: "03", title: "Run ML Prediction", description: "The trained model estimates a default probability score." },
  { number: "04", title: "View Risk Assessment", description: "Review a clear, human-readable risk breakdown and factors." },
];

const HowItWorksSection = () => {
  return (
    <PageContainer sx={{ backgroundColor: "background.paper" }}>
      <SectionHeader
        eyebrow="Process"
        title="How It Works"
        subtitle="A simple four-step flow takes an application from raw data to a risk assessment."
        align="center"
        maxWidth={600}
      />

      <Box sx={{ position: "relative" }}>
        <Box
          aria-hidden="true"
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            top: 22,
            left: "12.5%",
            right: "12.5%",
            height: 2,
            backgroundColor: "divider",
          }}
        />
        <Grid container spacing={{ xs: 4, md: 3 }}>
          {steps.map((step) => (
            <Grid key={step.number} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{ position: "relative", textAlign: { xs: "left", md: "center" } }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "primary.main",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    mx: { xs: 0, md: "auto" },
                    mb: 2,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {step.number}
                </Box>
                <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default HowItWorksSection;
