import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
});


// ======================================================
// PREDICT LOAN
// ======================================================

export const predictLoan = async (formData) => {
  const requestData = {
    Age: Number(formData.age),
    Income: Number(formData.income),
    LoanAmount: Number(formData.loanAmount),
    CreditScore: Number(formData.creditScore),
    MonthsEmployed: Number(formData.monthsEmployed),
    NumCreditLines: Number(formData.numCreditLines),
    InterestRate: Number(formData.interestRate),
    LoanTerm: Number(formData.loanTerm),
    DTIRatio: Number(formData.dtiRatio),

    Education: formData.education,
    EmploymentType: formData.employmentType,
    MaritalStatus: formData.maritalStatus,

    HasMortgage: Boolean(formData.hasMortgage),
    HasDependents: Boolean(formData.hasDependents),

    LoanPurpose: formData.loanPurpose,

    HasCoSigner: Boolean(formData.hasCoSigner),
  };

  console.log("Sending data to FastAPI:", requestData);

  const response = await apiClient.post(
    "/predict",
    requestData
  );

  return response.data;
};


// ======================================================
// GET PREDICTION HISTORY
// ======================================================

export const getPredictionHistory = async () => {
  const response = await apiClient.get("/history");

  return response.data;
};


// ======================================================
// GET ANALYTICS
// ======================================================

export const getAnalytics = async () => {
  const response = await apiClient.get("/analytics");

  return response.data;
};


// ======================================================
// DEFAULT EXPORT
// ======================================================

export default {
  predictLoan,
  getPredictionHistory,
  getAnalytics,
};