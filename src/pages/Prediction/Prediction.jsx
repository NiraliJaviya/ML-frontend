import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import PageContainer from "../../components/Common/PageContainer";
import SectionHeader from "../../components/Common/SectionHeader";
import PredictionStepper from "../../components/Prediction/PredictionStepper";

const Prediction = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate("/result");
  };

  return (
    <PageContainer maxWidth="md">
      <SectionHeader
        eyebrow="Loan Prediction"
        title="Start a New Assessment"
        subtitle="Walk through applicant, loan, and financial details to generate a risk estimate."
      />
      <PredictionStepper onComplete={handleComplete} />
      {/* <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 3, textAlign: "center" }}>
        Predictions are generated using mock data until the FastAPI backend is connected.
      </Typography> */}
    </PageContainer>
  );
};

export default Prediction;
