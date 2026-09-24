import { Box, Paper, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";

const pipelineSteps = [
  "Dataset",
  "Data Understanding",
  "EDA",
  "Preprocessing",
  "Encoding",
  "Scaling",
  "Train/Test Split",
  "Model Training",
  "Prediction",
  "Model Evaluation",
];

const MLPipeline = () => {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        flexWrap="wrap"
        alignItems={{ xs: "stretch", md: "center" }}
        rowGap={2}
        columnGap={1}
      >
        {pipelineSteps.map((step, index) => (
          <Stack
            key={step}
            direction={{ xs: "row", md: "row" }}
            alignItems="center"
            spacing={1}
            sx={{ width: { xs: "100%", md: "auto" } }}
          >
            <Paper
              variant="outlined"
              sx={{
                px: 2,
                py: 1.25,
                borderRadius: "12px",
                borderColor: "divider",
                backgroundColor: "background.paper",
                flex: { xs: 1, md: "none" },
                textAlign: "center",
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {step}
              </Typography>
            </Paper>
            {index < pipelineSteps.length - 1 && (
              <Box sx={{ display: "flex", alignItems: "center", color: "secondary.main" }}>
                <ArrowForwardRoundedIcon sx={{ display: { xs: "none", md: "block" } }} fontSize="small" />
                <ArrowDownwardRoundedIcon sx={{ display: { xs: "block", md: "none" } }} fontSize="small" />
              </Box>
            )}
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default MLPipeline;
