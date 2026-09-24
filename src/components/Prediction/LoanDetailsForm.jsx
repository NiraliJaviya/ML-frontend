import { Grid, InputAdornment, MenuItem, TextField, Typography } from "@mui/material";

const purposeOptions = ["Auto", "Business", "Education", "Home", "Other"];

const LoanDetailsForm = ({ values, errors, onChange }) => {
  const handleChange = (field) => (event) => {
    onChange({ [field]: event.target.value });
  };

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Typography variant="h6" sx={{ mb: 0.5 }}>
          Loan Details
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Information about the loan being requested.
        </Typography>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField
          fullWidth
          type="number"
          label="Loan Amount"
          value={values.loanAmount}
          onChange={handleChange("loanAmount")}
          error={Boolean(errors.loanAmount)}
          helperText={errors.loanAmount || "Total amount requested by the applicant."}
          slotProps={{ input: { startAdornment: <InputAdornment position="start">$</InputAdornment> } }}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField
          fullWidth
          type="number"
          label="Interest Rate"
          value={values.interestRate}
          onChange={handleChange("interestRate")}
          error={Boolean(errors.interestRate)}
          helperText={errors.interestRate || "Annual interest rate offered on the loan."}
          slotProps={{ input: { endAdornment: <InputAdornment position="end">%</InputAdornment> } }}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField
          fullWidth
          type="number"
          label="Loan Term"
          value={values.loanTerm}
          onChange={handleChange("loanTerm")}
          error={Boolean(errors.loanTerm)}
          helperText={errors.loanTerm || "Repayment period."}
          slotProps={{ input: { endAdornment: <InputAdornment position="end">months</InputAdornment> } }}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField
          select
          fullWidth
          label="Loan Purpose"
          value={values.loanPurpose}
          onChange={handleChange("loanPurpose")}
          error={Boolean(errors.loanPurpose)}
          helperText={errors.loanPurpose || "Primary reason for the loan."}
        >
          {purposeOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
};

export default LoanDetailsForm;
