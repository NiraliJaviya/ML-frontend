import {
  Grid,
  InputAdornment,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";

const ToggleField = ({ icon: Icon, label, value, onChange }) => (
  <Grid size={{ xs: 12, sm: 4 }}>
    <Typography variant="subtitle2" sx={{ mb: 1, display: "flex", alignItems: "center", gap: 0.75 }}>
      <Icon fontSize="small" sx={{ color: "secondary.main" }} aria-hidden="true" />
      {label}
    </Typography>
    <ToggleButtonGroup
      exclusive
      fullWidth
      color="primary"
      value={value}
      onChange={(event, newValue) => {
        if (newValue !== null) onChange(newValue);
      }}
      aria-label={label}
    >
      <ToggleButton value={true}>Yes</ToggleButton>
      <ToggleButton value={false}>No</ToggleButton>
    </ToggleButtonGroup>
  </Grid>
);

const FinancialForm = ({ values, errors, onChange }) => {
  const handleChange = (field) => (event) => {
    onChange({ [field]: event.target.value });
  };

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Typography variant="h6" sx={{ mb: 0.5 }}>
          Financial &amp; Credit
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Details about the applicant's financial standing.
        </Typography>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField
          fullWidth
          type="number"
          label="Income"
          value={values.income}
          onChange={handleChange("income")}
          error={Boolean(errors.income)}
          helperText={errors.income || "Applicant's annual income."}
          slotProps={{ input: { startAdornment: <InputAdornment position="start">$</InputAdornment> } }}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField
          fullWidth
          type="number"
          label="Credit Score"
          value={values.creditScore}
          onChange={handleChange("creditScore")}
          error={Boolean(errors.creditScore)}
          helperText={errors.creditScore || "Enter the applicant's credit score."}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField
          fullWidth
          type="number"
          label="Months Employed"
          value={values.monthsEmployed}
          onChange={handleChange("monthsEmployed")}
          error={Boolean(errors.monthsEmployed)}
          helperText={errors.monthsEmployed || "Length of current employment, in months."}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField
          fullWidth
          type="number"
          label="Number of Credit Lines"
          value={values.numCreditLines}
          onChange={handleChange("numCreditLines")}
          error={Boolean(errors.numCreditLines)}
          helperText={errors.numCreditLines || "Total number of open credit lines."}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField
          fullWidth
          type="number"
          label="DTI Ratio"
          value={values.dtiRatio}
          onChange={handleChange("dtiRatio")}
          error={Boolean(errors.dtiRatio)}
          helperText={
            errors.dtiRatio || "Debt-to-Income ratio representing the applicant's debt burden (0–1)."
          }
          slotProps={{ htmlInput: { step: 0.01, min: 0, max: 1 } }}
        />
      </Grid>

      <Grid size={12}>
        <Typography variant="subtitle1" sx={{ mt: 1, mb: 1 }}>
          Additional Information
        </Typography>
      </Grid>

      <ToggleField
        icon={HomeRoundedIcon}
        label="Has Mortgage"
        value={values.hasMortgage}
        onChange={(value) => onChange({ hasMortgage: value })}
      />
      <ToggleField
        icon={GroupsRoundedIcon}
        label="Has Dependents"
        value={values.hasDependents}
        onChange={(value) => onChange({ hasDependents: value })}
      />
      <ToggleField
        icon={HandshakeRoundedIcon}
        label="Has Co-Signer"
        value={values.hasCoSigner}
        onChange={(value) => onChange({ hasCoSigner: value })}
      />
    </Grid>
  );
};

export default FinancialForm;
