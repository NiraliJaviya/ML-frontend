import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

import PageContainer from "../../components/Common/PageContainer";
import EmptyState from "../../components/Common/EmptyState";
import RiskChip from "../../components/Common/RiskChip";
import RiskGauge from "../../components/Prediction/RiskGauge";
import RiskProbabilityBar from "../../components/Prediction/RiskProbabilityBar";
import FeatureContribution from "../../components/Prediction/FeatureContribution";

import { usePrediction } from "../../context/PredictionContext";
import { formatCurrency, formatPercent } from "../../utils/formatters";


const Result = () => {

  const navigate = useNavigate();

  const {
    lastResult,
    lastSubmittedApplication,
    resetFormData,
  } = usePrediction();


  // Scroll to top when result page opens
  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  }, []);


  // ----------------------------------------------------------
  // Check whether prediction data exists
  // ----------------------------------------------------------

  if (!lastResult || !lastSubmittedApplication) {

    return (
      <PageContainer maxWidth="sm">

        <EmptyState
          title="No prediction to show yet"
          message="Run a new assessment to see a loan default risk result here."
          actionLabel="Start Assessment"
          onAction={() => navigate("/predict")}
        />

      </PageContainer>
    );
  }


  // ----------------------------------------------------------
  // Get data returned by FastAPI
  // ----------------------------------------------------------

  const {
    default_probability: probability,
    risk_level: riskLevel,
    model,
    prediction,
  } = lastResult;


  // ----------------------------------------------------------
  // Run another prediction
  // ----------------------------------------------------------

  const handleRunAnother = () => {

    resetFormData();

    navigate("/predict");

  };


  return (

    <PageContainer maxWidth="md">

      {/* =====================================================
          PREDICTION RESULT
      ====================================================== */}

      <Card sx={{ mb: 4, overflow: "visible" }}>

        <CardContent sx={{ p: { xs: 3, md: 5 } }}>

          {/* Header */}

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            sx={{ mb: 3 }}
          >

            <Box>

              <Typography
                variant="overline"
                color="secondary.main"
              >
                Prediction Result
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontSize: {
                    xs: "1.5rem",
                    md: "1.85rem",
                  },
                }}
              >
                Loan Default Risk
              </Typography>

            </Box>


            {/* REAL MODEL CHIP */}

            <Chip
              label="Live model prediction"
              size="small"
              variant="outlined"
            />

          </Stack>


          {/* =================================================
              RISK GAUGE + DESCRIPTION
          ================================================== */}

          <Grid
            container
            spacing={4}
            alignItems="center"
          >

            {/* Gauge */}

            <Grid
              size={{ xs: 12, sm: 5 }}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >

              <RiskGauge
                probability={probability}
                size={200}
              />

            </Grid>


            {/* Risk information */}

            <Grid
              size={{ xs: 12, sm: 7 }}
            >

              <RiskChip
                level={riskLevel}
                size="medium"
              />


              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  fontSize: "1.05rem",
                }}
              >

                The model estimates a{" "}

                <strong>
                  {formatPercent(probability)}
                </strong>{" "}

                probability of default for this application.

              </Typography>


              {/* Probability bar */}

              <Box sx={{ mt: 3 }}>

                <RiskProbabilityBar
                  probability={probability}
                />

              </Box>

            </Grid>

          </Grid>


          <Divider sx={{ my: 4 }} />


          {/* =================================================
              SUMMARY
          ================================================== */}

          <Grid
            container
            spacing={3}
          >

            {/* Prediction */}

            <Grid
              size={{ xs: 12, sm: 4 }}
            >

              <Typography
                variant="caption"
                color="text.secondary"
              >
                Prediction
              </Typography>


              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ mt: 0.5 }}
              >

                {prediction === 1 ? (

                  <CancelRoundedIcon
                    color="error"
                    fontSize="small"
                  />

                ) : (

                  <CheckCircleRoundedIcon
                    color="success"
                    fontSize="small"
                  />

                )}


                <Typography variant="subtitle1">

                  {prediction === 1
                    ? "Default"
                    : "No Default"}

                </Typography>

              </Stack>

            </Grid>


            {/* Probability */}

            <Grid
              size={{ xs: 12, sm: 4 }}
            >

              <Typography
                variant="caption"
                color="text.secondary"
              >
                Default Probability
              </Typography>


              <Typography
                variant="subtitle1"
                sx={{ mt: 0.5 }}
              >

                {formatPercent(probability)}

              </Typography>

            </Grid>


            {/* Model */}

            <Grid
              size={{ xs: 12, sm: 4 }}
            >

              <Typography
                variant="caption"
                color="text.secondary"
              >
                Model
              </Typography>


              <Typography
                variant="subtitle1"
                sx={{ mt: 0.5 }}
              >

                {model}

              </Typography>

            </Grid>

          </Grid>


          {/* Backend information */}

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              display: "block",
              mt: 3,
            }}
          >

            This prediction was generated by the trained Tuned Random
            Forest model through the FastAPI backend.

          </Typography>

        </CardContent>

      </Card>


      {/* =====================================================
          FEATURE CONTRIBUTION
          ===================================================== */}

      {lastResult.factors && (

        <Box sx={{ mb: 4 }}>

          <FeatureContribution
            factors={lastResult.factors}
          />

        </Box>

      )}


      {/* =====================================================
          APPLICATION SUMMARY
      ===================================================== */}

      <Card sx={{ mb: 4 }}>

        <CardContent
          sx={{
            p: {
              xs: 3,
              md: 4,
            },
          }}
        >

          <Typography
            variant="h6"
            sx={{ mb: 2.5 }}
          >
            Application Summary
          </Typography>


          <Grid
            container
            spacing={2.5}
          >

            {/* Credit Score */}

            <Grid
              size={{ xs: 6, sm: 3 }}
            >

              <Typography
                variant="caption"
                color="text.secondary"
              >
                Credit Score
              </Typography>


              <Typography variant="subtitle1">

                {lastSubmittedApplication.creditScore}

              </Typography>

            </Grid>


            {/* Loan Amount */}

            <Grid
              size={{ xs: 6, sm: 3 }}
            >

              <Typography
                variant="caption"
                color="text.secondary"
              >
                Loan Amount
              </Typography>


              <Typography variant="subtitle1">

                {formatCurrency(
                  lastSubmittedApplication.loanAmount
                )}

              </Typography>

            </Grid>


            {/* Income */}

            <Grid
              size={{ xs: 6, sm: 3 }}
            >

              <Typography
                variant="caption"
                color="text.secondary"
              >
                Income
              </Typography>


              <Typography variant="subtitle1">

                {formatCurrency(
                  lastSubmittedApplication.income
                )}

              </Typography>

            </Grid>


            {/* Interest Rate */}

            <Grid
              size={{ xs: 6, sm: 3 }}
            >

              <Typography
                variant="caption"
                color="text.secondary"
              >
                Interest Rate
              </Typography>


              <Typography variant="subtitle1">

                {lastSubmittedApplication.interestRate}%

              </Typography>

            </Grid>

          </Grid>

        </CardContent>

      </Card>


      {/* =====================================================
          RUN ANOTHER ASSESSMENT
          ===================================================== */}

      <Box sx={{ textAlign: "center" }}>

        <Button
          variant="contained"
          size="large"
          startIcon={<ReplayRoundedIcon />}
          onClick={handleRunAnother}
        >
          Run Another Assessment
        </Button>

      </Box>

    </PageContainer>
  );
};


export default Result;