import { Card, CardContent, Chip, Grid, Stack, Typography } from "@mui/material";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import DatasetRoundedIcon from "@mui/icons-material/DatasetRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import PageContainer from "../../components/Common/PageContainer";
import SectionHeader from "../../components/Common/SectionHeader";
import MLPipeline from "./MLPipeline";

const techStack = [
  "Python",
  "Pandas",
  "NumPy",
  "scikit-learn",
  "Jupyter Notebook",
  "FastAPI",
  "React",
  "Material UI",
];

const datasetFeatures = [
  "Age",
  "Income",
  "LoanAmount",
  "CreditScore",
  "MonthsEmployed",
  "NumCreditLines",
  "InterestRate",
  "LoanTerm",
  "DTIRatio",
  "Education",
  "EmploymentType",
  "MaritalStatus",
  "HasMortgage",
  "HasDependents",
  "LoanPurpose",
  "HasCoSigner",
];

const About = () => {
  return (
    <PageContainer maxWidth="lg">
      <SectionHeader
        eyebrow="About the Project"
        title="About LoanGuard"
        subtitle="An academic machine learning project applying supervised learning to loan default prediction."
      />

      <Grid container spacing={3} sx={{ mb: 5 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: "100%" }}>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography variant="h6" sx={{ mb: 1.5 }}>
                Problem Statement
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lenders need a reliable way to estimate the likelihood that a borrower will default
                on a loan before it is approved. LoanGuard explores how borrower demographics,
                financial history, and loan terms relate to default outcomes, and applies a
                supervised classification model to estimate that risk for new applications.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: "100%" }}>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography variant="h6" sx={{ mb: 1.5 }}>
                How the System Works
              </Typography>
              <Typography variant="body2" color="text.secondary">
                An applicant's profile is collected through a guided form, sent to a trained
                classification model, and returned as a default probability. The frontend translates
                that probability into a readable risk category and highlights the features most
                associated with the estimate.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card sx={{ mb: 5 }}>
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3 }}>
            <PsychologyRoundedIcon sx={{ color: "secondary.main" }} aria-hidden="true" />
            <Typography variant="h6">Machine Learning Pipeline</Typography>
          </Stack>
          <MLPipeline />
        </CardContent>
      </Card>

      <Grid container spacing={3} sx={{ mb: 5 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: "100%" }}>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2.5 }}>
                <DatasetRoundedIcon sx={{ color: "secondary.main" }} aria-hidden="true" />
                <Typography variant="h6">Dataset Overview</Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                The current dataset contains 255,347 records with a binary target: whether the
                applicant defaulted on the loan (1) or not (0).
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {datasetFeatures.map((feature) => (
                  <Chip key={feature} label={feature} size="small" variant="outlined" />
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ height: "100%" }}>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2.5 }}>
                <CodeRoundedIcon sx={{ color: "secondary.main" }} aria-hidden="true" />
                <Typography variant="h6">Technology Stack</Typography>
              </Stack>
              <Grid container spacing={1.5}>
                {techStack.map((tech) => (
                  <Grid key={tech} size={6}>
                    <Chip
                      label={tech}
                      sx={{
                        width: "100%",
                        justifyContent: "flex-start",
                        backgroundColor: "rgba(65,90,119,0.08)",
                        fontWeight: 600,
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default About;
