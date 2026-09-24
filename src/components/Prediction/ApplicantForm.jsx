import { Grid, MenuItem, TextField, Typography } from "@mui/material";

const educationOptions = ["High School", "Bachelor's", "Master's", "PhD"];
const employmentOptions = ["Full-time", "Part-time", "Self-employed", "Unemployed"];
const maritalOptions = ["Married", "Single", "Divorced"];

const ApplicantForm = ({ values, errors, onChange }) => {
  const handleChange = (field) => (event) => {
    onChange({ [field]: event.target.value });
  };

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Typography variant="h6" sx={{ mb: 0.5 }}>
          Applicant Information
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Tell us a little about the borrower.
        </Typography>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField
          fullWidth
          type="number"
          label="Age"
          value={values.age}
          onChange={handleChange("age")}
          error={Boolean(errors.age)}
          helperText={errors.age || "Applicant must be between 20 and 100 years old."}
          slotProps={{ htmlInput: { min: 20, max: 100 } }}
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField
          select
          fullWidth
          label="Education"
          value={values.education}
          onChange={handleChange("education")}
          error={Boolean(errors.education)}
          helperText={errors.education || "Highest level of education completed."}
        >
          {educationOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField
          select
          fullWidth
          label="Employment Type"
          value={values.employmentType}
          onChange={handleChange("employmentType")}
          error={Boolean(errors.employmentType)}
          helperText={errors.employmentType || "Applicant's current employment status."}
        >
          {employmentOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid size={{ xs: 12, sm: 6 }}>
        <TextField
          select
          fullWidth
          label="Marital Status"
          value={values.maritalStatus}
          onChange={handleChange("maritalStatus")}
          error={Boolean(errors.maritalStatus)}
          helperText={errors.maritalStatus || "Applicant's marital status."}
        >
          {maritalOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
};

export default ApplicantForm;
