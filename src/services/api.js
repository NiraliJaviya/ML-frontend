import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;  

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

const USE_MOCK_DATA = false;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


// const RISK_FACTORS = {
//   higherRisk: [
//     { feature: "Interest Rate", weight: 0.34 },
//     { feature: "Loan Amount", weight: 0.27 },
//     { feature: "Employment Type: Unemployed", weight: 0.21 },
//     { feature: "DTI Ratio", weight: 0.18 },
//   ],
//   lowerRisk: [
//     { feature: "Credit Score", weight: 0.31 },
//     { feature: "Months Employed", weight: 0.24 },
//     { feature: "Income", weight: 0.22 },
//     { feature: "Age", weight: 0.14 },
//   ],
// };


const computeMockProbability = (formData) => {
  const creditScore = Number(formData?.creditScore) || 650;
  const interestRate = Number(formData?.interestRate) || 10;
  const dtiRatio = Number(formData?.dtiRatio) || 0.3;
  const income = Number(formData?.income) || 40000;
  const employmentType = formData?.employmentType || "Full-time";

  let score = 0.5;
  score += (interestRate - 10) * 0.02;
  score += (dtiRatio - 0.3) * 0.6;
  score -= (creditScore - 650) * 0.0009;
  score -= Math.min(income, 120000) / 120000 * 0.15;
  if (employmentType === "Unemployed") score += 0.18;
  if (employmentType === "Part-time") score += 0.05;

  const clamped = Math.min(0.97, Math.max(0.02, score));
  return Number(clamped.toFixed(4));
};

const mockHistory = [
  {
    id: "APP-001",
    date: "2026-07-28T09:12:00Z",
    loanAmount: 247916,
    creditScore: 624,
    defaultProbability: 0.2884,
    prediction: 0,
    riskLevel: "Low",
  },
  {
    id: "APP-002",
    date: "2026-07-30T14:45:00Z",
    loanAmount: 412500,
    creditScore: 561,
    defaultProbability: 0.6721,
    prediction: 1,
    riskLevel: "High",
  },
  {
    id: "APP-003",
    date: "2026-08-01T11:03:00Z",
    loanAmount: 158000,
    creditScore: 705,
    defaultProbability: 0.1432,
    prediction: 0,
    riskLevel: "Low",
  },
  {
    id: "APP-004",
    date: "2026-08-03T16:22:00Z",
    loanAmount: 320000,
    creditScore: 640,
    defaultProbability: 0.4517,
    prediction: 0,
    riskLevel: "Moderate",
  },
  {
    id: "APP-005",
    date: "2026-08-05T08:50:00Z",
    loanAmount: 89500,
    creditScore: 780,
    defaultProbability: 0.0721,
    prediction: 0,
    riskLevel: "Low",
  },
  {
    id: "APP-006",
    date: "2026-08-06T13:10:00Z",
    loanAmount: 275000,
    creditScore: 588,
    defaultProbability: 0.5893,
    prediction: 0,
    riskLevel: "Moderate",
  },
  {
    id: "APP-007",
    date: "2026-08-07T10:34:00Z",
    loanAmount: 501200,
    creditScore: 512,
    defaultProbability: 0.7845,
    prediction: 1,
    riskLevel: "High",
  },
];

const mockAnalytics = {
  totals: {
    totalApplications: 255347,
    defaultPredictions: 43159,
    noDefaultPredictions: 212188,
    averageRiskProbability: 0.169,
  },
  defaultVsNoDefault: [
    { name: "No Default", value: 212188 },
    { name: "Default", value: 43159 },
  ],
  riskDistribution: [
    { name: "Low Risk", value: 61 },
    { name: "Moderate Risk", value: 27 },
    { name: "High Risk", value: 12 },
  ],
  riskProbabilityDistribution: [
    { bucket: "0-10%", count: 58210 },
    { bucket: "10-20%", count: 61870 },
    { bucket: "20-30%", count: 47210 },
    { bucket: "30-40%", count: 32040 },
    { bucket: "40-50%", count: 21380 },
    { bucket: "50-60%", count: 14870 },
    { bucket: "60-70%", count: 9920 },
    { bucket: "70-80%", count: 5960 },
    { bucket: "80-90%", count: 2740 },
    { bucket: "90-100%", count: 1147 },
  ],
  featureOverview: [
    { feature: "Interest Rate", importance: 0.19 },
    { feature: "Credit Score", importance: 0.17 },
    { feature: "DTI Ratio", importance: 0.15 },
    { feature: "Income", importance: 0.13 },
    { feature: "Loan Amount", importance: 0.12 },
    { feature: "Months Employed", importance: 0.1 },
    { feature: "Age", importance: 0.08 },
    { feature: "Employment Type", importance: 0.06 },
  ],
  model: {
    name: "Logistic Regression",
    status: "Baseline Model",
    accuracy: null,
    precision: null,
    recall: null,
    f1Score: null,
    rocAuc: null,
  },
};


export const predictLoan = async (formData) => {
  if (USE_MOCK_DATA) {
    await delay(1400);

    const probability = computeMockProbability(formData);

    const riskLevel =
      probability < 0.3
        ? "Low"
        : probability < 0.6
          ? "Moderate"
          : "High";

    return {
      prediction: probability >= 0.5 ? 1 : 0,
      default_probability: probability,
      risk_level: riskLevel,
      model: "Logistic Regression",
      factors: {
        modelFeatures: [],
      },
    };
  }

  // Convert React form data to the format expected by FastAPI
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

    HasMortgage: formData.hasMortgage,
    HasDependents: formData.hasDependents,

    LoanPurpose: formData.loanPurpose,

    HasCoSigner: formData.hasCoSigner,
  };

  console.log("Sending data to FastAPI:", requestData);

  const response = await apiClient.post("/predict", requestData);

  return response.data;
};


export const getPredictionHistory = async () => {
  if (USE_MOCK_DATA) {
    await delay(600);
    return mockHistory;
  }

  const response = await apiClient.get("/history");
  return response.data;
};

export const getAnalytics = async () => {
  if (USE_MOCK_DATA) {
    await delay(700);
    return mockAnalytics;
  }

  const response = await apiClient.get("/analytics");
  return response.data;
};

export default {
  predictLoan,
  getPredictionHistory,
  getAnalytics,
};
