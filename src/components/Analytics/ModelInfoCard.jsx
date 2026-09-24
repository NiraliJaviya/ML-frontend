import { Card, CardContent, Chip, Grid, Stack, Typography } from "@mui/material";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";

const metrics = [
  {
    label: "Accuracy",
    key: "accuracy",
  },
  {
    label: "Precision",
    key: "precision",
  },
  {
    label: "Recall",
    key: "recall",
  },
  {
    label: "F1 Score",
    key: "f1Score",
  },
  {
    label: "ROC-AUC",
    key: "rocAuc",
  },
];

const formatMetric = (value) => {
  if (value === null || value === undefined) {
    return "Evaluation pending";
  }

  return `${(value * 100).toFixed(2)}%`;
};

const ModelInfoCard = ({ model }) => {
  return (
    <Card>
      <CardContent sx={{ p: { xs: 3, md: 4 } }}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1.5}
          sx={{ mb: 3 }}
        >
          <PsychologyRoundedIcon
            sx={{ color: "secondary.main" }}
            aria-hidden="true"
          />

          <Typography variant="subtitle1">
            Current Model
          </Typography>
        </Stack>

        <Typography
          variant="h4"
          sx={{ fontSize: "1.5rem", mb: 1 }}
        >
          {model?.name || "Logistic Regression"}
        </Typography>

        <Chip
          label={model?.status || "Evaluated"}
          size="small"
          color="secondary"
          variant="outlined"
          sx={{ mb: 3 }}
        />

        <Grid container spacing={2}>
          {metrics.map((metric) => (
            <Grid
              key={metric.key}
              size={{
                xs: 6,
                sm: 4,
                md: 12 / metrics.length,
              }}
            >
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: "block" }}
              >
                {metric.label}
              </Typography>

              <Typography
                variant="subtitle2"
                sx={{
                  mt: 0.5,
                  fontWeight: 600,
                }}
              >
                {formatMetric(model?.[metric.key])}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ModelInfoCard;