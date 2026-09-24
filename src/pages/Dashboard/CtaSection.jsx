import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PageContainer from "../../components/Common/PageContainer";

const CtaSection = () => {
  return (
    <PageContainer>
      <Box
        sx={{
          textAlign: "center",
          py: { xs: 6, md: 8 },
          px: { xs: 3, md: 6 },
          borderRadius: "24px",
          background: "linear-gradient(135deg, #0D1B2A 0%, #1B263B 100%)",
          color: "#FFFFFF",
        }}
      >
        <Typography variant="h3" sx={{ fontSize: { xs: "1.6rem", md: "2.1rem" }, mb: 2 }}>
          Ready to assess a loan application?
        </Typography>
        <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.75)", mb: 4, maxWidth: 480, mx: "auto" }}>
          Run a full borrower profile through the LoanGuard prediction engine in minutes.
        </Typography>
        <Button
          component={Link}
          to="/predict"
          variant="contained"
          size="large"
          endIcon={<ArrowForwardRoundedIcon />}
          sx={{ backgroundColor: "#FFFFFF", color: "primary.main", "&:hover": { backgroundColor: "#EDEFF3" } }}
        >
          Start Prediction
        </Button>
      </Box>
    </PageContainer>
  );
};

export default CtaSection;
