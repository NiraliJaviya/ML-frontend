import { Chip } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import { riskLevelMeta } from "../../utils/formatters";

const iconMap = {
  Low: CheckCircleRoundedIcon,
  Moderate: WarningRoundedIcon,
  High: ErrorRoundedIcon,
};

const RiskChip = ({ level, size = "medium", variant = "filled" }) => {
  const meta = riskLevelMeta[level] || riskLevelMeta.Low;
  const Icon = iconMap[level] || CheckCircleRoundedIcon;

  return (
    <Chip
      icon={<Icon fontSize="small" aria-hidden="true" />}
      label={meta.label}
      color={meta.color}
      size={size}
      variant={variant}
      aria-label={`Risk level: ${meta.label}`}
      sx={{
        fontWeight: 700,
        ...(variant === "filled" && { color: "#FFFFFF" }),
      }}
    />
  );
};

export default RiskChip;
