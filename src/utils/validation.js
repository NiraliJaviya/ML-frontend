// Validation rules for the loan prediction wizard.
// Each validate* function returns an error string, or "" when the value is valid.

export const required = (value) => {
  if (value === null || value === undefined || value === "") return "This field is required.";
  return "";
};

export const validateAge = (value) => {
  if (value === "" || value === null || value === undefined) return "Age is required.";
  const num = Number(value);
  if (Number.isNaN(num)) return "Age must be a number.";
  if (num < 20 || num > 100) return "Age must be between 20 and 100.";
  return "";
};

export const validatePositive = (value, label = "This value") => {
  if (value === "" || value === null || value === undefined) return `${label} is required.`;
  const num = Number(value);
  if (Number.isNaN(num)) return `${label} must be a number.`;
  if (num <= 0) return `${label} must be greater than 0.`;
  return "";
};

export const validateNonNegative = (value, label = "This value") => {
  if (value === "" || value === null || value === undefined) return `${label} is required.`;
  const num = Number(value);
  if (Number.isNaN(num)) return `${label} must be a number.`;
  if (num < 0) return `${label} cannot be negative.`;
  return "";
};

export const validateCreditScore = (value) => {
  if (value === "" || value === null || value === undefined) return "Credit score is required.";
  const num = Number(value);
  if (Number.isNaN(num)) return "Credit score must be a number.";
  if (num < 300 || num > 850) return "Credit score must be between 300 and 850.";
  return "";
};

export const validateInterestRate = (value) => {
  if (value === "" || value === null || value === undefined) return "Interest rate is required.";
  const num = Number(value);
  if (Number.isNaN(num)) return "Interest rate must be a number.";
  if (num <= 0 || num > 60) return "Interest rate must be between 0 and 60%.";
  return "";
};

export const validateLoanTerm = (value) => {
  if (value === "" || value === null || value === undefined) return "Loan term is required.";
  const num = Number(value);
  if (Number.isNaN(num)) return "Loan term must be a number.";
  if (num <= 0) return "Loan term must be greater than 0 months.";
  return "";
};

export const validateDTIRatio = (value) => {
  if (value === "" || value === null || value === undefined) return "DTI ratio is required.";
  const num = Number(value);
  if (Number.isNaN(num)) return "DTI ratio must be a number.";
  if (num < 0 || num > 1) return "DTI ratio must be between 0 and 1.";
  return "";
};

export const validateMonthsEmployed = (value) => {
  if (value === "" || value === null || value === undefined) return "Months employed is required.";
  const num = Number(value);
  if (Number.isNaN(num)) return "Months employed must be a number.";
  if (num < 0) return "Months employed cannot be negative.";
  return "";
};

export const validateCreditLines = (value) => {
  if (value === "" || value === null || value === undefined) return "Number of credit lines is required.";
  const num = Number(value);
  if (Number.isNaN(num)) return "Number of credit lines must be a number.";
  if (num < 0) return "Number of credit lines cannot be negative.";
  return "";
};

// Validates a whole step's field map against a map of validator functions.
// fieldValidators: { fieldName: (value) => errorString }
// Returns { isValid, errors }
export const validateStep = (values, fieldValidators) => {
  const errors = {};
  Object.entries(fieldValidators).forEach(([field, validator]) => {
    const error = validator(values[field]);
    if (error) errors[field] = error;
  });
  return { isValid: Object.keys(errors).length === 0, errors };
};
