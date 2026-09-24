// Shared formatting helpers used across the app.

export const formatCurrency = (value) => {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Number(value));
};

export const formatNumber = (value) => {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "—";
  return new Intl.NumberFormat("en-US").format(Number(value));
};

export const formatPercent = (value, digits = 2) => {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "—";
  return `${(Number(value) * 100).toFixed(digits)}%`;
};

export const formatPercentFromPercentValue = (value, digits = 2) => {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "—";
  return `${Number(value).toFixed(digits)}%`;
};

export const formatDate = (isoString) => {
  if (!isoString) return "—";
  const date = new Date(isoString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);
};

export const formatDateTime = (isoString) => {
  if (!isoString) return "—";
  const date = new Date(isoString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

// Maps a default probability (0-1) to a risk band used across the app.
export const getRiskLevel = (probability) => {
  const pct = probability * 100;
  if (pct < 30) return "Low";
  if (pct < 60) return "Moderate";
  return "High";
};

export const riskLevelMeta = {
  Low: {
    color: "success",
    symbol: "✓",
    label: "Low Risk",
    description: "0–30% estimated default probability",
  },
  Moderate: {
    color: "warning",
    symbol: "!",
    label: "Moderate Risk",
    description: "30–60% estimated default probability",
  },
  High: {
    color: "error",
    symbol: "⚠",
    label: "High Risk",
    description: "60–100% estimated default probability",
  },
};
