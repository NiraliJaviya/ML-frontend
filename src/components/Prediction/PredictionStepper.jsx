import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Step,
  StepLabel,
  Stepper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import ApplicantForm from "./ApplicantForm";
import LoanDetailsForm from "./LoanDetailsForm";
import FinancialForm from "./FinancialForm";
import ReviewApplication from "./ReviewApplication";
import { usePrediction } from "../../context/PredictionContext";
import { validateStep, validateAge, required, validatePositive, validateInterestRate, validateLoanTerm, validateCreditScore, validateMonthsEmployed, validateCreditLines, validateDTIRatio } from "../../utils/validation";

const steps = ["Applicant", "Loan Details", "Financial & Credit", "Review"];

const stepValidators = [
  {
    age: validateAge,
    education: required,
    employmentType: required,
    maritalStatus: required,
  },
  {
    loanAmount: (v) => validatePositive(v, "Loan amount"),
    interestRate: validateInterestRate,
    loanTerm: validateLoanTerm,
    loanPurpose: required,
  },
  {
    income: (v) => validatePositive(v, "Income"),
    creditScore: validateCreditScore,
    monthsEmployed: validateMonthsEmployed,
    numCreditLines: validateCreditLines,
    dtiRatio: validateDTIRatio,
  },
];

const PredictionStepper = ({ onComplete }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { formData, updateFormData, submitPrediction, status, error } = usePrediction();

  const [activeStep, setActiveStep] = useState(0);
  const [stepErrors, setStepErrors] = useState({});
  const [submitError, setSubmitError] = useState(null);

  const isLastStep = activeStep === steps.length - 1;

  const handleNext = () => {
    if (activeStep < stepValidators.length) {
      const { isValid, errors } = validateStep(formData, stepValidators[activeStep]);
      setStepErrors(errors);
      if (!isValid) return;
    }
    setStepErrors({});
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setStepErrors({});
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const handleEditStep = (stepIndex) => {
    setStepErrors({});
    setActiveStep(stepIndex);
  };

  const handleSubmit = async () => {
    setSubmitError(null);
    try {
      const result = await submitPrediction();
      onComplete(result);
    } catch {
      setSubmitError("Unable to complete prediction. Please try again.");
    }
  };

  return (
    <Card>
      <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
        <Stepper activeStep={activeStep} alternativeLabel={!isMobile} orientation={isMobile ? "vertical" : "horizontal"} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box sx={{ minHeight: 320 }}>
          {activeStep === 0 && (
            <ApplicantForm values={formData} errors={stepErrors} onChange={updateFormData} />
          )}
          {activeStep === 1 && (
            <LoanDetailsForm values={formData} errors={stepErrors} onChange={updateFormData} />
          )}
          {activeStep === 2 && (
            <FinancialForm values={formData} errors={stepErrors} onChange={updateFormData} />
          )}
          {activeStep === 3 && (
            <ReviewApplication values={formData} onEditStep={handleEditStep} />
          )}
        </Box>

        {(submitError || error) && (
          <Alert severity="error" sx={{ mt: 3 }}>
            {submitError || error}
          </Alert>
        )}

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4, gap: 2 }}>
          <Button
            onClick={handleBack}
            disabled={activeStep === 0 || status === "loading"}
            startIcon={<ArrowBackRoundedIcon />}
            variant="outlined"
          >
            Back
          </Button>

          {isLastStep ? (
            <Button
              onClick={handleSubmit}
              variant="contained"
              size="large"
              disabled={status === "loading"}
              startIcon={<BoltRoundedIcon />}
            >
              {status === "loading" ? "Analyzing application..." : "Predict Default Risk"}
            </Button>
          ) : (
            <Button onClick={handleNext} variant="contained" endIcon={<ArrowForwardRoundedIcon />}>
              Continue
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default PredictionStepper;
