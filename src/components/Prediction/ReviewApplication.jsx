import { Button, Card, CardContent, Divider, Grid, Stack, Typography } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { formatCurrency, formatPercentFromPercentValue } from "../../utils/formatters";

const SummaryField = ({ label, value }) => (
  <Grid size={{ xs: 6, sm: 4 }}>
    <Typography variant="caption" color="text.secondary" sx={{ display: "block" }}>
      {label}
    </Typography>
    <Typography variant="subtitle1">{value || "—"}</Typography>
  </Grid>
);

const SummarySection = ({ title, onEdit, children }) => (
  <Card sx={{ mb: 3 }}>
    <CardContent>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
        <Typography variant="subtitle1">{title}</Typography>
        <Button size="small" startIcon={<EditRoundedIcon fontSize="small" />} onClick={onEdit}>
          Edit
        </Button>
      </Stack>
      <Divider sx={{ mb: 2 }} />
      <Grid container spacing={2}>
        {children}
      </Grid>
    </CardContent>
  </Card>
);

const ReviewApplication = ({ values, onEditStep }) => {
  return (
    <div>
      <Typography variant="h6" sx={{ mb: 0.5 }}>
        Review Application
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Confirm the details below before running the prediction.
      </Typography>

      <SummarySection title="Applicant Information" onEdit={() => onEditStep(0)}>
        <SummaryField label="Age" value={values.age} />
        <SummaryField label="Education" value={values.education} />
        <SummaryField label="Employment Type" value={values.employmentType} />
        <SummaryField label="Marital Status" value={values.maritalStatus} />
      </SummarySection>

      <SummarySection title="Loan Information" onEdit={() => onEditStep(1)}>
        <SummaryField label="Loan Amount" value={formatCurrency(values.loanAmount)} />
        <SummaryField
          label="Interest Rate"
          value={values.interestRate ? formatPercentFromPercentValue(values.interestRate) : ""}
        />
        <SummaryField label="Loan Term" value={values.loanTerm ? `${values.loanTerm} months` : ""} />
        <SummaryField label="Loan Purpose" value={values.loanPurpose} />
      </SummarySection>

      <SummarySection title="Financial Information" onEdit={() => onEditStep(2)}>
        <SummaryField label="Income" value={formatCurrency(values.income)} />
        <SummaryField label="Credit Score" value={values.creditScore} />
        <SummaryField label="Months Employed" value={values.monthsEmployed} />
        <SummaryField label="Number of Credit Lines" value={values.numCreditLines} />
        <SummaryField label="DTI Ratio" value={values.dtiRatio} />
      </SummarySection>

      <SummarySection title="Additional Information" onEdit={() => onEditStep(2)}>
        <SummaryField label="Has Mortgage" value={values.hasMortgage ? "Yes" : "No"} />
        <SummaryField label="Has Dependents" value={values.hasDependents ? "Yes" : "No"} />
        <SummaryField label="Has Co-Signer" value={values.hasCoSigner ? "Yes" : "No"} />
      </SummarySection>
    </div>
  );
};

export default ReviewApplication;
