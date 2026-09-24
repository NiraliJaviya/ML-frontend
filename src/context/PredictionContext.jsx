/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { predictLoan } from "../services/api";

const PredictionContext = createContext(undefined);

const initialFormData = {
  // Applicant
  age: "",
  education: "",
  employmentType: "",
  maritalStatus: "",
  // Loan details
  loanAmount: "",
  interestRate: "",
  loanTerm: "",
  loanPurpose: "",
  // Financial & credit
  income: "",
  creditScore: "",
  monthsEmployed: "",
  numCreditLines: "",
  dtiRatio: "",
  // Additional
  hasMortgage: false,
  hasDependents: false,
  hasCoSigner: false,
};

export const PredictionProvider = ({ children }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [lastResult, setLastResult] = useState(null);
  const [lastSubmittedApplication, setLastSubmittedApplication] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState(null);

  const updateFormData = useCallback((updates) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  }, []);

  const resetFormData = useCallback(() => {
    setFormData(initialFormData);
    setLastResult(null);
    setLastSubmittedApplication(null);
    setStatus("idle");
    setError(null);
  }, []);

  const submitPrediction = useCallback(async () => {
    setStatus("loading");
    setError(null);
    try {
      const result = await predictLoan(formData);
      setLastResult(result);
      setLastSubmittedApplication(formData);
      setStatus("success");
      return result;
    } catch (err) {
      setError(err?.message || "Unable to complete prediction. Please try again.");
      setStatus("error");
      throw err;
    }
  }, [formData]);

  const value = useMemo(
    () => ({
      formData,
      updateFormData,
      resetFormData,
      submitPrediction,
      lastResult,
      lastSubmittedApplication,
      status,
      error,
    }),
    [formData, updateFormData, resetFormData, submitPrediction, lastResult, lastSubmittedApplication, status, error]
  );

  return <PredictionContext.Provider value={value}>{children}</PredictionContext.Provider>;
};

export const usePrediction = () => {
  const context = useContext(PredictionContext);
  if (context === undefined) {
    throw new Error("usePrediction must be used within a PredictionProvider");
  }
  return context;
};
