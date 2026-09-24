import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import PageContainer from "../../components/Common/PageContainer";
import SectionHeader from "../../components/Common/SectionHeader";

const categories = [
  {
    icon: CheckCircleRoundedIcon,
    label: "Low Risk",
    range: "0 – 30%",
    color: "success.main",
    bg: "success.light",
  },
  {
    icon: WarningRoundedIcon,
    label: "Moderate Risk",
    range: "30 – 60%",
    color: "warning.main",
    bg: "warning.light",
  },
  {
    icon: ErrorRoundedIcon,
    label: "High Risk",
    range: "60 – 100%",
    color: "error.main",
    bg: "error.light",
  },
];

const RiskCategoriesSection = () => {
  return (
    <PageContainer>
      <SectionHeader
        eyebrow="Risk Bands"
        title="Risk Categories"
        subtitle="These bands are presentation categories used to communicate results in this project, and can be adjusted after the final model evaluation."
        align="center"
        maxWidth={640}
      />

      <Grid container spacing={3}>
        {categories.map((category) => (
          <Grid key={category.label} size={{ xs: 12, sm: 4 }}>
            <Card sx={{ height: "100%", textAlign: "center", p: 2 }}>
              <CardContent>
                <Stack alignItems="center" spacing={1.5}>
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{ width: 56, height: 56, borderRadius: "50%", backgroundColor: category.bg }}
                  >
                    <category.icon sx={{ color: category.color, fontSize: 28 }} aria-hidden="true" />
                  </Stack>
                  <Typography variant="h6">{category.label}</Typography>
                  <Typography variant="h5" sx={{ color: category.color }}>
                    {category.range}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="caption" color="text.secondary" sx={{ display: "block", textAlign: "center", mt: 3 }}>
        These thresholds are not scientifically validated cutoffs — they are a presentation convention for this
        application and may change based on the final evaluation strategy.
      </Typography>
    </PageContainer>
  );
};

export default RiskCategoriesSection;
