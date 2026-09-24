import {
  Box,
  Card,
  CardContent,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";

const FeatureContribution = ({ factors }) => {
  if (!factors?.modelFeatures?.length) return null;

  const maxImportance = Math.max(
    ...factors.modelFeatures.map((factor) => factor.importance)
  );

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 0.5 }}>
        Model Feature Importance
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        These are the features with the highest global importance in the
        trained Random Forest model. They describe overall model behavior,
        not individual causal effects for this application.
      </Typography>

      <Card>
        <CardContent>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ mb: 2.5 }}
          >
            <PsychologyRoundedIcon color="primary" aria-hidden="true" />

            <Typography variant="subtitle1">
              Top model features
            </Typography>
          </Stack>

          <Stack spacing={2.5}>
            {factors.modelFeatures.map((factor) => (
              <Box key={factor.feature}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ mb: 0.75 }}
                >
                  <Typography variant="body2">
                    {factor.feature}
                  </Typography>

                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    {(factor.importance * 100).toFixed(2)}%
                  </Typography>
                </Stack>

                <LinearProgress
                  variant="determinate"
                  value={(factor.importance / maxImportance) * 100}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: "rgba(23,32,51,0.06)",
                    "& .MuiLinearProgress-bar": {
                      borderRadius: 3,
                    },
                  }}
                />
              </Box>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FeatureContribution;